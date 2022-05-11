<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('UserRolesSeeder');
        $this->call('EmploymentTypesTableSeeder');
        $this->call('SectionsTableSeeder');
        $this->call('CategoriesTableSeeder');
        $this->call('CitiesTableSeeder');
        $this->call('EducationLevelsTableSeeder');
        $this->call('CompanyTypesTable');
        $this->call('CompanySizesTableSeeder');
    }
}
