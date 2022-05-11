<?php

use App\City;
use App\Company;
use App\Vacancy;
use App\EmploymentType;
use App\Category;
use Illuminate\Database\Seeder;

class VacanciesTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        Company::All()->each(function ($company){
            for ($i = 0; $i <= random_int(1,5); $i++) {
                factory(Vacancy::class)->create([
                    'company_id' => $company->id,
                ]);
            }
        });

        Vacancy::All()->each(function ($vacancy){

            $cities = City::all()->random(1);
            $employment_types = EmploymentType::all()->random(random_int(1,3));
            $categories = Category::all()->random(random_int(1,5));

            foreach ($cities as $city){
                $vacancy->cities()->attach($city->id);
            }

            foreach ($employment_types as $employment_type){
                $vacancy->employment_types()->attach($employment_type->id);
            }

            foreach ($categories as $category) {
                $vacancy->categories()->attach($category->id);
            }
        });
    }
}
