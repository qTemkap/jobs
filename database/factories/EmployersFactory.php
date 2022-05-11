<?php

use App\Employer;
use Carbon\Carbon;
use App\City;

use Faker\Generator as Faker;

function generateRandomStringForEmployer($length = 11) {
    return substr(str_shuffle(str_repeat($x='0123456789', ceil($length/strlen($x)) )),1,$length);
}

$factory->define(Employer::class, function (Faker $faker) {
    $dateOfBirth = Carbon::create(random_int(1960, 2001), random_int(1, 12), 01);

    $city = City::inRandomOrder()->first();

    $phone =  generateRandomStringForEmployer();

    $patronymic = random_int(1,4);

    if($patronymic === 1){
        $patronymic = $faker->firstName;
    } else {
        $patronymic =null;
    }

    return [
        'name' => $faker->firstName,
        'surname' => $faker->lastName,
        'patronymic' => $patronymic,
        'date_of_birth' => $dateOfBirth,
        'city_id' => $city->id,
        'address' => $faker->streetAddress,
        'phone' => $phone,
        'show_data' => random_int(0,1),
    ];
});
