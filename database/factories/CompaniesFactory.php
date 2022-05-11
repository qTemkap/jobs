<?php

use App\Company;
use App\CompanyType;
use App\CompanySize;

use Faker\Generator as Faker;

function generateRandomStringForCompany($length = 11) {
    return substr(str_shuffle(str_repeat($x='0123456789', ceil($length/strlen($x)) )),1,$length);
}

$factory->define(Company::class, function (Faker $faker) {

    $company_type = CompanyType::inRandomOrder()->first();
    $company_size = CompanySize::inRandomOrder()->first();

    $phone =  generateRandomStringForCompany();

    $email = $faker->email;

    $phones = [];

    for ($i = 0; $i <= random_int(1,3); $i++) {
        array_push($phones, generateRandomStringForCompany());
    }

    return [
        'name' => $faker->company,
        'company_type_id' => $company_type->id,
        'company_sizes_id' => $company_size->id,
        'information' => $faker->paragraph(3),
        'address' => $faker->streetAddress,
        'email' => $email,
        'web_site' => $faker->url,
        'contact_name' => $faker->name,
        'contact_phone' => $phone,
        'contact_email' => $email,
        'phones' => $phones,
    ];
});
