<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\Category;
use App\Section;
use Illuminate\Support\Facades\Cache;

class CategoriesController extends Controller
{
    protected static $storageTimeInMinutes = 1440;

    public function getAll(){
        if (Cache::has('categories')) {
            $categories = Cache::get('categories');
        } else {
            $categories = Cache::remember('categories', self::$storageTimeInMinutes, function() {
                return Category::getAllAsKeyValue();
            });

//            $data = [];
//
//            foreach (Section::all() as $section){
//                array_push($data,  [
//                    'section' => [
//                        'id' => $section->id,
//                        'name' => $section->name,
//                    ],
//                    'categories' => $section->categories()->select(['id', 'name'])->get()->toArray(),
//                ]);
//            }
//
//            echo '<pre>';
//            print_r($data);
//            exit();
        }

        return response()->json([
            'status' => 'success',
            'data' => $categories

        ], 200);
    }
}
