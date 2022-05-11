<?php

namespace App\Console\Commands;

use App\UsersRoles;
use Illuminate\Console\Command;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\User;

class CreateRoles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'roles:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создание основных ролей приложения';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $allUserRoles = UsersRoles::$possibleUserRoles;

        foreach ($allUserRoles as $role){
            Role::create(['name' => $role]);
        }
    }
}
