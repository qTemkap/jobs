<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\EmploymentType;
use Illuminate\Support\Facades\Cache;

class EmploymentTypesController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('companyType')) {
            $employmentType = Cache::get('employment_types');
        } else {
            $employmentType = Cache::remember('employment_types', self::$storageTimeInMinutes, function() {
                return EmploymentType::getAllAsKeyValue();
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $employmentType
        ], 200);
    }
}
