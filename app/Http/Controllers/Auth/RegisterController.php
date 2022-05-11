<?php

namespace App\Http\Controllers\Auth;

use App\JobSeeker;
use App\Employer;
use Illuminate\Http\Request;
use App\User;
use App\UsersRoles;
use App\City;
use App\Company;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\DB;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application registration form.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm(Request $request)
    {
        $cities = City::getAllAsKeyValue();

        $cities = json_encode($cities);

        $type = $request->get('type');
        if ($type != 1) {
            $type = 0;
        }

        return view('auth.register')->with([
            'cities' => $cities,
            'type' => $type
        ]);
    }

    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateRole(array $data)
    {
        return Validator::make($data, [
            'role' => ['required', 'string', 'max:10']
        ]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateJobSeeker(array $data)
    {
        $rules = array_merge(User::rules(), JobSeeker::rules());
        return Validator::make($data, $rules);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateEmployer(array $data)
    {
        $rules = array_merge(User::rules(), Employer::rules(), [
            'company_name' => ['required', 'string', 'max:255'],
            'company_type' => ['required', 'integer', 'exists:company_types,id'],
        ]);
        return Validator::make($data, $rules);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $this->validateRole($request->all())->validate();
        $role = $request->input('role');

        if(UsersRoles::isPossibleRoleForUser($role)){

            if($role === UsersRoles::USER_ROLE_JOB_SEEKER){

                $this->validateJobSeeker($request->all())->validate();

            } elseif ($role === UsersRoles::USER_ROLE_EMPLOYER){

                $this->validateEmployer($request->all())->validate();

            }

            $user = new User();
            $data = $request->all();
            $user->fill($data);
            $user->password = Hash::make($user->password);

            DB::beginTransaction();

            if($user->save()){
                //save user role
                if($user->assignRole($role)){

                    //Save the type of profile, depending on the role
                    if($role === UsersRoles::USER_ROLE_JOB_SEEKER){

                        $jobSeeker = new JobSeeker();
                        $jobSeeker->user_id = $user->id;
                        $jobSeeker->name = $request->input('name');
                        $jobSeeker->surname = $request->input('surname');

                        if(!$jobSeeker->save()){
                            DB::rollback();

                            return response()->json([
                                'message' => 'Could not save user profile',
                                'errors' => [
                                    'user' => 'Could not save user profile'
                                ],
                            ], 501)->withHeaders([
                                'X-error' => 'Could not save user profile',
                            ]);
                        }

                    } elseif ($role === UsersRoles::USER_ROLE_EMPLOYER){

                        $company = new Company();
                        $company->user_id = $user->id;
                        $company->name = $request->input('company_name');
                        $company->company_type_id = $request->input('company_type');
                        $company->contact_email = $user->email;
                        $company->contact_phone = $request->input('phone');

                        $company->setContactName(
                            $request->input('name'),
                            $request->input('surname')
                        );

                        if($company->save()){

                            $employer = new Employer();
                            $employer->user_id = $user->id;
                            $employer->company_id = $company->id;
                            $employer->name = $request->input('name');
                            $employer->surname = $request->input('surname');
                            $employer->city_id = $request->input('city');
                            $employer->phone = $request->input('phone');

                            if($employer->save()){
                                $company->cities()->sync([$request->input('city')]);
                                $company->save();
                            } else {
                                DB::rollback();

                                return response()->json([
                                    'message' => 'Could not save employer',
                                    'errors' => [
                                        'user' => 'Could not save employer'
                                    ],
                                ], 501)->withHeaders([
                                    'X-error' => 'Could not save employer',
                                ]);
                            }

                        } else {
                            DB::rollback();

                            return response()->json([
                                'message' => 'Could not save company',
                                'errors' => [
                                    'user' => 'Could not save company'
                                ],
                            ], 501)->withHeaders([
                                'X-error' => 'Could not save company',
                            ]);
                        }

                    }

                    //If all conditions are met, commit the transaction and give the answer with a redirect
//                    event(new Registered($user));
                    $this->guard()->login($user);

                    DB::commit();

                    $user->sendEmailVerificationNotification();
                    return response()->json([
                        'status' => 'redirect',
                        'data' => [
                            'path' => route('verification.notice'),
                            'email' => $request->input('email'),
                        ]

                    ], 200)->withHeaders([
                        'X-redirect' => 'User registered',
                    ]);
                } else {
                    DB::rollback();

                    return response()->json([
                        'message' => 'Impossible user role',
                        'errors' => [
                            'role' => 'Failed to assign the selected role.'
                        ],
                    ], 501)->withHeaders([
                        'X-error' => 'Failed to assign the selected role.',
                    ]);
                }
            } else {
                DB::rollback();

                return response()->json([
                    'message' => 'Could not save user',
                    'errors' => [
                        'user' => 'Could not save user'
                    ],
                ], 501)->withHeaders([
                    'X-error' => 'Could not save user',
                ]);
            }
        } else {
            return response()->json([
                'message' => 'Impossible user role',
                'errors' => [
                    'user' => 'Impossible user role'
                ],
            ], 422)->withHeaders([
                'X-error' => 'Impossible user role',
            ]);
        }
    }
}
