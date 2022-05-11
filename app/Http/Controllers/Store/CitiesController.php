<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\City;
use Illuminate\Support\Facades\Cache;

class CitiesController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('cities')) {
            $cities = Cache::get('cities');
        } else {
            $cities = Cache::remember('cities', self::$storageTimeInMinutes, function() {
                return City::getAllAsKeyValue();
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $cities
        ], 200);
    }
}
