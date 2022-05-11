<?php

namespace App\Services;

use App\LinkedSocialAccount;
use App\User;
use App\JobSeeker;
use Laravel\Socialite\Contracts\User as ProviderUser;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\UsersRoles;

class SocialAccountService
{
    protected $role = UsersRoles::USER_ROLE_JOB_SEEKER;

    protected $providerName;

    protected $emailFromProvider;
    protected $providerId;
    protected $firstNameFromProvider;
    protected $lastNameFromProvider;

    protected function vkontakte(ProviderUser $providerUser): bool
    {
        $this->providerId = $providerUser->getId();

        if(empty($this->providerId)){
            return false;
        }

        $this->emailFromProvider = $providerUser->getEmail();

        if(empty($this->emailFromProvider)){

            if(property_exists ($providerUser, 'accessTokenResponseBody') && isset($providerUser->accessTokenResponseBody['email']) && !empty($providerUser->accessTokenResponseBody['email'])) {
                $this->emailFromProvider = $providerUser->accessTokenResponseBody['email'];
            } else {
                return false;
            }
        }

        if(isset($providerUser->user['first_name']) && !empty($providerUser->user['first_name'])){
            $this->firstNameFromProvider = $providerUser->user['first_name'];
        } else {
            $explodeName = explode(' ', $providerUser->getName());

            if(isset($explodeName[0]) && !empty($explodeName[0])){
                $this->firstNameFromProvider = $explodeName[0];
            } else {
                $this->firstNameFromProvider = $providerUser->getName();

                if(empty($this->firstNameFromProvider)){
                    return false;
                }
            }
        }

        if(isset($providerUser->user['last_name']) && !empty($providerUser->user['last_name'])){
            $this->lastNameFromProvider = $providerUser->user['last_name'];
        } else {
            $explodeName = explode(' ', $providerUser->getName());

            if(isset($explodeName[1]) && !empty($explodeName[1])){
                $this->lastNameFromProvider = $explodeName[1];
            } else {
                $this->lastNameFromProvider = ' ';
            }
        }

        return true;
    }

    protected function facebook(ProviderUser $providerUser): bool
    {
        $this->providerId = $providerUser->getId();
        $this->emailFromProvider = $providerUser->getEmail();
        $this->firstNameFromProvider = $providerUser->getName();

        return true;
    }

    protected function google(ProviderUser $providerUser): bool
    {
        $this->providerId = $providerUser->getId();

        if(empty($this->providerId)){
            return false;
        }

        $this->emailFromProvider = $providerUser->getEmail();

        if(empty($this->emailFromProvider)){
            return false;
        }


        if(isset($providerUser->user['given_name']) && !empty($providerUser->user['given_name'])){
            $this->firstNameFromProvider = $providerUser->user['given_name'];
        } else {
            $explodeName = explode(' ', $providerUser->getName());

            if(isset($explodeName[0]) && !empty($explodeName[0])){
                $this->firstNameFromProvider = $explodeName[0];
            } else {
                $this->firstNameFromProvider = $providerUser->getName();

                if(empty($this->firstNameFromProvider)){
                    return false;
                }
            }
        }

        if(isset($providerUser->user['family_name']) && !empty($providerUser->user['family_name'])){
            $this->lastNameFromProvider = $providerUser->user['family_name'];
        } else {
            $explodeName = explode(' ', $providerUser->getName());

            if(isset($explodeName[1]) && !empty($explodeName[1])){
                $this->lastNameFromProvider = $explodeName[1];
            } else {
                $this->lastNameFromProvider = ' ';
            }
        }

        return true;
    }

    public function fillDataOrReturnDataPart(ProviderUser $providerUser, string $provider, $role)
    {
        if(method_exists($this, $provider)){
            $dataSuccessfullyCompleted  = $this->$provider($providerUser);
        } else {
            return false;
        }

        if(!$dataSuccessfullyCompleted){
            return [
                'name' => $this->firstNameFromProvider,
                'surname' => $this->lastNameFromProvider,
                'email' => $this->emailFromProvider,
            ];
        }

        $this->providerName = $provider;

        $this->role = (!empty($role)) ? $role : $this->role;

        return true;
    }


    public function createOrGetUser()
    {
        $linkedSocialAccount = LinkedSocialAccount::with('user')
            ->where([
                'provider_user_id' => $this->providerId,
                'provider' => $this->providerName,
            ])
            ->has('user')
            ->first();

        if (!is_null($linkedSocialAccount)) {

            return $linkedSocialAccount->user;

        } else {

            DB::beginTransaction();

            $existingUser = User::where([
                'email' => $this->emailFromProvider,
            ])->first();

            if(!is_null($existingUser)){
                $linkedSocialAccount = new LinkedSocialAccount();
                $linkedSocialAccount->setAttribute('provider_user_id', $this->providerId);
                $linkedSocialAccount->setAttribute('provider', $this->providerName);
                $linkedSocialAccount->setAttribute('user_id', $existingUser->id);

                if ($linkedSocialAccount->save()) {
                    DB::commit();
                    return $existingUser;
                } else {
                    DB::rollback();
                    return null;
                }
            }

            $user = new User();
            $user->setAttribute('email', $this->emailFromProvider);
            $user->setAttribute('email_verified_at', now());
            $user->password = Hash::make($this->firstNameFromProvider);

            if ($user->save()) {
                //save user role
                if ($user->assignRole($this->role)) {

                    $linkedSocialAccount = new LinkedSocialAccount();
                    $linkedSocialAccount->provider_user_id = $this->providerId;
                    $linkedSocialAccount->provider = $this->providerName;
                    $linkedSocialAccount->user_id = $user->id;

                    $jobSeeker = new JobSeeker();
                    $jobSeeker->user_id = $user->id;
                    $jobSeeker->name = $this->firstNameFromProvider;
                    $jobSeeker->surname = $this->lastNameFromProvider ?? $this->firstNameFromProvider;

                    if ($jobSeeker->save() && $linkedSocialAccount->save()) {
                        DB::commit();
                        return $user;
                    }
                }
            }

            DB::rollback();
            return null;
        }
    }
}
