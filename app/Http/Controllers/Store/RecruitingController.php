<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;
use App\City;
use App\Category;
use App\EmploymentType;
use App\EducationLevel;

class RecruitingController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getFilters(){

        if (Cache::has('filters_for_recruiting')) {
            $filtersForRecruiting = Cache::get('filters_for_recruiting');
        } else {

            $filtersForRecruiting = Cache::remember('filters_for_recruiting', self::$storageTimeInMinutes, function() {

                $cities = City::getAllAsKeyValue();
                $employmentTypes = EmploymentType::getAllAsKeyValue();
                $categories = Category::getAllAsKeyValue();
                $educationLevels = EducationLevel::getAllAsKeyValue();

                return [
                    'cities' => $cities,
                    'employment_types' => $employmentTypes,
                    'categories' => $categories,
                    'education_levels' => $educationLevels,
                ];
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $filtersForRecruiting
        ], 200);
    }
}
