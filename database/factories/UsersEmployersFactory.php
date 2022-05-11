<?php

use App\UsersRoles;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

//function generateRandomEmail($length = 11) {
//    return substr(str_shuffle(str_repeat($x='0123456789', ceil($length/strlen($x)) )),1,$length);
//}
//
//$factory->define(App\User::class, function (Faker $faker) {
//    return [
//        'email' => generateRandomEmail(6). md5(microtime()).'@mail.ru',
//        'email_verified_at' => now(),
//        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
//        'remember_token' => str_random(10),
//    ];
//});
//
//$factory->afterCreating(App\User::class, function ($user) {
//    $user->assignRole(UsersRoles::USER_ROLE_EMPLOYER);
//
//    factory(\App\Company::class)->create([
//        'user_id' => $user->id,
//    ]);
//});
//
//$factory->afterCreating(App\Company::class, function ($company) {
//    factory(\App\Employer::class)->create([
//        'user_id' => $company->user_id,
//        'company_id' => $company->id
//    ]);
//});
