<?php

use Illuminate\Database\Seeder;
use App\UsersRoles;
use Spatie\Permission\Models\Role;

class UserRolesSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $allUserRoles = UsersRoles::$possibleUserRoles;

        foreach ($allUserRoles as $role){
            Role::create(['name' => $role]);
        }
    }
}
