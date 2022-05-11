<?php

namespace App\Http\Controllers\JobSeeker;

use App\JobSeeker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Validation\Rule;
use Image;

class ProfileController extends Controller
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data, $id
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateModel(array $data, $id)
    {
        $rules = array_merge(JobSeeker::rules(), [
            'phone' => [Rule::unique('job_seekers')->ignore($id), 'string', 'max:12'],
        ]);
        return Validator::make($data, $rules);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateNewPassword(array $data)
    {
        return Validator::make($data, [
            'current_password' => ['required', 'current_password'],
            'new_password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
    }


    public function changePassword(Request $request)
    {
        $this->validateNewPassword($request->all())->validate();

        $user = Auth::user();
        $user->password = Hash::make($request->input('new_password'));

        if($user->save()){

            return response()->json([
                'status' => 'success',
                'data' => [
                    'message' => 'Пароль успешно изменен!',
                ]

            ], 200)->withHeaders([
                'X-success' => 'User registered',
            ]);

        } else {
            return response()->json([
                'message' => 'Impossible user role',
                'errors' => [
                    'role' => 'Failed to assign the selected role.'
                ],
            ], 501)->withHeaders([
                'X-error' => 'Failed to assign the selected role.',
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $profile = Auth::user()->jobSeekerProfile;

        $this->validateModel($request->all(), $profile->id)->validate();

        $profile->fill($request->all());

        if($profile->save()){
            return response()->json([
                'status' => 'success',
                'data' => [
                    'message' => 'Данные сохранены!',
                ]

            ], 200)->withHeaders([
                'X-redirect' => 'User updated',
            ]);
        } else {
            return response()->json([
                'message' => 'Impossible user role',
                'errors' => [
                    'role' => 'Failed to assign the selected role.'
                ],
            ], 501)->withHeaders([
                'X-error' => 'Failed to assign the selected role.',
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $user = Auth::user();
        $profile = $user->jobSeekerProfile;
        if(is_null($profile))
        {
            $profile = JobSeeker::firstOrCreate([
                'user_id' => $user->id,
                'name' => $user->email,
                'surname' => $user->email
            ]);
        }

        $data = [
            'id' => $profile->id,
            'email' => $user->email,
            'name' => $profile->name,
            'gender' => $profile->gender,
            'surname' => $profile->surname,
            'patronymic' => $profile->patronymic,
            'date_of_birth' => $profile->date_of_birth,
            'city' => $profile->city,
            'phone' => $profile->phone,
            'address' => $profile->address,
            'show_data' => $profile->show_data,
            'avatar' => $profile->avatar(),
        ];

        return view('jobseeker.profile')->with(['data' => json_encode($data)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update()
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
