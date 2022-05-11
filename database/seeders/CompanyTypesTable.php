<?php

use Illuminate\Database\Seeder;
use App\CompanyType;

class CompanyTypesTable extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            'Высшие учебные заведения', 'Среднее профессиональное учебные заведения', 'Общеобразовательные организации',
            'Дополнительное образование', 'Дополнительное дошкольное  образование', 'Индивидуальные предприниматели', 'Репетиторы'
        ];


        foreach ($names as $name) {
            CompanyType::create(['name' => $name]);
        }
    }
}
