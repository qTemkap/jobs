<?php

use Illuminate\Database\Seeder;
use App\EmploymentType;

class EmploymentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            'Полная занятость',
            'Неполная занятость',
            'Удаленная работа',

        ];


        foreach ($names as $name) {
            EmploymentType::create(['name' => $name]);
        }
    }
}
