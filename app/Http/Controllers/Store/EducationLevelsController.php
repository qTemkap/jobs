<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EducationLevel;
use Illuminate\Support\Facades\Cache;

class EducationLevelsController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('companyType')) {
            $educationLevels = Cache::get('education_levels');
        } else {
            $educationLevels = Cache::remember('education_levels', self::$storageTimeInMinutes, function() {
                return EducationLevel::getAllAsKeyValue();
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $educationLevels
        ], 200);
    }
}
