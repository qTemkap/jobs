<?php

namespace App\Http\Controllers\Auth;

use App\UsersRoles;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Services\SocialAccountService;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class SocialNetworksController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider($provider, $role)
    {
        session(['socialite_callback_role' => $role]);

        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from network.
     *
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback(SocialAccountService $service, $provider)
    {
        $role = session('socialite_callback_role');

        if($role === UsersRoles::USER_ROLE_JOB_SEEKER){

            $fillResult = $service->fillDataOrReturnDataPart(Socialite::driver($provider)->user(), $provider, $role);

            if($fillResult === true){
                $user = $service->createOrGetUser();
                if(!is_null($user)){
                    $this->guard()->login($user, true);

                    return redirect()->to($user->getRouteToProfileDependingRole());
                }
            } elseif(is_array($fillResult)) {
                return redirect()->route('register')->with([
                    'data' => json_encode($fillResult)
                ]);
            }

        } elseif($role === UsersRoles::USER_ROLE_EMPLOYER){
            return redirect()->route('register');
        }

        return redirect()->route('register');
    }
}
