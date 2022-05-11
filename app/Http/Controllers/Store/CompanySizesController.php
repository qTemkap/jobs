<?php

namespace App\Http\Controllers\Store;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\CompanySize;
use Illuminate\Support\Facades\Cache;

class CompanySizesController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('sompany_sizes')) {
            $companySizes = Cache::get('sompany_sizes');
        } else {
            $companySizes = Cache::remember('sompany_sizes', self::$storageTimeInMinutes, function() {
                return CompanySize::getAllAsKeyValue();
            });
        }

        return response()->json([
            'status' => 'success',
            'data' => $companySizes
        ], 200);
    }
}
