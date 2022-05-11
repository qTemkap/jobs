<?php

use Illuminate\Database\Seeder;
use App\User;
use App\JobSeeker;
use App\Summary;
use App\City;
use App\EmploymentType;
use App\Category;
use App\Education;

class JobSeekerTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
       factory(User::class, 10)->create()->each(function ($user){
           factory(JobSeeker::class)->create([
               'user_id' => $user->id
           ]);
       });

//       App\JobSeeker::All()->each(function ($jobSeeker){
//           for ($i = 0; $i <= random_int(1,5); $i++) {
//               factory(Summary::class)->create([
//                   'user_id' => $jobSeeker->user_id,
//                   'job_seeker_id' => $jobSeeker->id,
//               ]);
//           }
//       });
//
//        App\Summary::All()->each(function ($summary){
//
//            $cities = City::all()->random(random_int(1,4));
//            $employment_types = EmploymentType::all()->random(random_int(1,3));
//            $categories = Category::all()->random(random_int(1,5));
//
//            foreach ($cities as $city){
//                $summary->cities()->attach($city->id);
//            }
//
//            foreach ($employment_types as $employment_type){
//                $summary->employment_types()->attach($employment_type->id);
//            }
//
//            foreach ($categories as $category){
//                $summary->categories()->attach($category->id);
//            }
//
//            factory(Education::class, random_int(1,4))->create([
//                'user_id' => $summary->user_id,
//                'job_seeker_id' => $summary->job_seeker_id,
//                'summary_id' => $summary->id,
//            ]);
//        });
    }
}
