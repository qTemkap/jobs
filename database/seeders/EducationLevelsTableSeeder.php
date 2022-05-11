<?php

use Illuminate\Database\Seeder;
use App\EducationLevel;

class EducationLevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            'дошкольное образование', 'начальное общее образование', 'основное общее образование',
            'среднее общее образование', 'среднее профессиональное образование',
            'высшее образование - бакалавриат', 'высшее образование - специалитет, магистратура',
            'высшее образование - подготовка кадров высшей квалификации'
        ];


        foreach ($names as $name) {
            EducationLevel::create(['name' => $name]);
        }
    }
}
