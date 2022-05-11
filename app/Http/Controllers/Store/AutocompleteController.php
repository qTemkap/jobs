<?php

namespace App\Http\Controllers\Store;

use App\Http\Controllers\Controller;
use App\Vacancy;
use App\Summary;
use Illuminate\Support\Facades\Cache;

class AutocompleteController extends Controller
{
    const QUANTITY_VALUES_FOR_SELECTING = 3000;

    protected static $storageTimeInMinutes = 5;

    public function getAll(){

        if (Cache::has(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE)) {
            $vacancies = Cache::get(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE);
        } else {
            $vacancies = Cache::remember(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE, self::$storageTimeInMinutes, function() {

                return Vacancy::select(['position'])
                    ->published()
                    ->orderBy('updated_at', 'desc')
                    ->limit(self::QUANTITY_VALUES_FOR_SELECTING)
                    ->pluck('position')
                    ->toArray();
            });
        }

        if (Cache::has(Summary::KEY_FOR_CACHING_AUTOCOMPLETE)) {
            $summaries = Cache::get(Summary::KEY_FOR_CACHING_AUTOCOMPLETE);
        } else {
            $summaries = Cache::remember(Summary::KEY_FOR_CACHING_AUTOCOMPLETE, self::$storageTimeInMinutes, function() {

                return Summary::select(['position'])
                    ->published()
                    ->orderBy('updated_at', 'desc')
                    ->limit(self::QUANTITY_VALUES_FOR_SELECTING)
                    ->pluck('position')
                    ->toArray();
            });
        }

        return response()->json([
            'vacancies' => array_unique($vacancies),
            'summaries' => array_unique($summaries)
        ], 200);

//        return response()->json([
//            'vacancies' => $vacancies,
//            'summaries' => $summaries
//        ], 200);
    }

    public function getVacancies(){
        if (Cache::has(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE)) {
            $vacancies = Cache::get(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE);
        } else {
            $vacancies = Cache::remember(Vacancy::KEY_FOR_CACHING_AUTOCOMPLETE, self::$storageTimeInMinutes, function() {

                return Vacancy::select(['position'])
                    ->published()
                    ->orderBy('updated_at', 'desc')
                    ->limit(self::QUANTITY_VALUES_FOR_SELECTING)
                    ->pluck('position')
                    ->toArray();
            });
        }

        return response()->json(array_unique($vacancies), 200);
    }

    public function getSummaries(){
        if (Cache::has(Summary::KEY_FOR_CACHING_AUTOCOMPLETE)) {
            $summaries = Cache::get(Summary::KEY_FOR_CACHING_AUTOCOMPLETE);
        } else {
            $summaries = Cache::remember(Summary::KEY_FOR_CACHING_AUTOCOMPLETE, self::$storageTimeInMinutes, function() {

                return Summary::select(['position'])
                    ->published()
                    ->orderBy('updated_at', 'desc')
                    ->limit(self::QUANTITY_VALUES_FOR_SELECTING)
                    ->pluck('position')
                    ->toArray();
            });
        }

        return response()->json(array_unique($summaries), 200);
    }
}
