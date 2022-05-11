<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UsersRoles extends Model
{
    const USER_ROLE_ADMIN_BASE = 'admin_base';
    const USER_ROLE_EMPLOYER = 'employer';
    const USER_ROLE_JOB_SEEKER = 'job_seeker';

    public static $possibleAdminRoles = [
        self::USER_ROLE_ADMIN_BASE => self::USER_ROLE_ADMIN_BASE,
    ];

    public static $possibleUserRoles = [
        self::USER_ROLE_EMPLOYER => self::USER_ROLE_EMPLOYER,
        self::USER_ROLE_JOB_SEEKER => self::USER_ROLE_JOB_SEEKER,
    ];


    /**
     * Checks whether the role is possible for assignment to the user
     *
     * @param  string  $role
     * @return bool
     */
    static function isPossibleRoleForUser(string $role): bool {
        return array_key_exists($role, self::$possibleUserRoles);
    }
}
