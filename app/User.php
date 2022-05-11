<?php

namespace App;

use App\UsersRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Facades\Cache;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable, HasRoles;

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * This user is a job seeker or not
     *
     * @return boolean
     */
    public function isJobSeeker(){
        return $this->hasRole(UsersRoles::USER_ROLE_JOB_SEEKER);
    }

    public function jobSeekerProfile()
    {
        return $this->hasOne(JobSeeker::class, 'user_id', 'id');
    }


    public function employer()
    {
        return $this->hasOne(Employer::class, 'user_id', 'id');
    }

    public function company()
    {
        return $this->hasOne(Company::class, 'user_id', 'id');
    }

    public function summaries(){
        return $this->hasMany(\App\Summary::class, 'user_id', 'id');
    }

    public function favorite(){
        return $this->hasManyThrough(\App\Summary::class, \App\Favorite::class, 'user_id', 'id', 'id');
    }

    public function linkedSocialAccounts()
    {
        return $this->hasMany(\App\LinkedSocialAccount::class, 'user_id', 'id');
    }

    /**
     * get name to add avatars thumbnail to cache
     *
     * @return string
     */
    public function getKeyForCachingAvatarThumb(){
        return implode( '_', [
            'avatar_thumb',
            $this->attributes['id']
        ] );
    }

    public function getAvatarThumbDependingRole(){
        if($this->hasRole(UsersRoles::USER_ROLE_JOB_SEEKER)){

            return $this->jobSeekerProfile->avatar(ImageModel::TYPE_JOB_SEEKER_AVATAR_THUMB);

        } elseif ($this->hasRole(UsersRoles::USER_ROLE_EMPLOYER)){

            return $this->employer->avatar(ImageModel::TYPE_EMPLOYER_AVATAR_THUMB);

        }
    }

    public function getRouteToProfileDependingRole(){
        if($this->hasRole(UsersRoles::USER_ROLE_JOB_SEEKER)){

            return route('profile');

        } elseif ($this->hasRole(UsersRoles::USER_ROLE_EMPLOYER)){

            return route('vacancy.list');

        } else {

            return route('main');

        }
    }

    public function getRouteAfterVerify(){
        if($this->hasRole(UsersRoles::USER_ROLE_JOB_SEEKER)){

            return route('profile');

        } elseif ($this->hasRole(UsersRoles::USER_ROLE_EMPLOYER)){

            return route('employer.profile');
        } else {

            return route('main');

        }
    }

    public function forgotUserAvatarThumbFromCache(){
        Cache::forget($this->getKeyForCachingAvatarThumb());
    }

    public function getAvatarThumb(){
        // get unique key for user avatar thumbnail
        $cacheKey = $this->getKeyForCachingAvatarThumb();

        if(Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        } else {
            /*If the key does not exist,
            we are looking for a thumbnail of the avatar
            for the user and write it to the cache*/
            $avatarThumb = $this->getAvatarThumbDependingRole();
            Cache::forever($cacheKey, $avatarThumb);
            return $avatarThumb;
        }
    }
}
