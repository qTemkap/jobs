<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Employer;
use App\Summary;
use App\City;
use App\EmploymentType;
use App\Category;
use App\Education;

class EmployersTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create();
    }
}
