<?php

use App\Summary;
use Faker\Generator as Faker;

$factory->define(Summary::class, function (Faker $faker) {

    $salaryComment = random_int(0,1);

    if($salaryComment === 1){
        $salaryComment = $faker->words(3, true);
    } else {
        $salaryComment = null;
    }

    return [
        'position' => $faker->jobTitle,
        'salary' => (random_int(5, 100) * 1000),
        'salary_comment' => $salaryComment,
        'information' => '<p>'.$faker->paragraph(4).'</p>',
        'published' => random_int(0, 1),
        'show_data' => random_int(0, 1),
    ];
});
