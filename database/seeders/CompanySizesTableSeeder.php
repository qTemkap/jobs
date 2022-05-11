<?php

use Illuminate\Database\Seeder;
use App\CompanySize;

class CompanySizesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $names = [
            '1-10', '10-20', '20-50', '50-100', '100 и больше'
        ];


        foreach ($names as $name) {
            CompanySize::create(['name' => $name]);
        }
    }
}
