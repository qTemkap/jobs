<?php

use App\Vacancy;

use Faker\Generator as Faker;

$factory->define(Vacancy::class, function (Faker $faker) {
    $salaryComment = random_int(0,1);

    if($salaryComment === 1){
        $salaryComment = $faker->words(3, true);
    } else {
        $salaryComment = null;
    }

    $phone =  generateRandomStringForCompany();

    $email = $faker->email;

    return [
        'position' => $faker->jobTitle,
        'contact_name' => $faker->name,
        'contact_phone' => $phone,
        'contact_email' => $email,
        'salary' => (random_int(5, 100) * 1000),
        'salary_comment' => $salaryComment,
        'description' => '<p>'.$faker->paragraph(4).'</p>',
        'published' => random_int(0, 1),
    ];
});
