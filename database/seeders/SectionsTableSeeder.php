<?php

use Illuminate\Database\Seeder;
use App\Section;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            'Научные сотрудники',
            'Руководящий и административный персонал',
            'Преподаватели / Репетиторы',
            'Переводчики',
            'Воспитатели / Няни',
            'Библиотечное дело'
        ];


        foreach ($names as $name) {
            Section::create(['name' => $name]);
        }
    }
}
