<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CompanyType;
use Illuminate\Support\Facades\Cache;

class CompanyTypesController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('companyType')) {
            $companyTypes = Cache::get('company_types');
        } else {
            $companyTypes = Cache::remember('company_types', self::$storageTimeInMinutes, function() {
                return CompanyType::getAllAsKeyValue();
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $companyTypes
        ], 200);
    }
}
