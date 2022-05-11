<?php

namespace App\Http\Controllers\Statics;

use App\City;
use App\Company;
use App\ImageModel;
use App\Question;
use App\Vacancy;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Question as QuestionRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\Question as MailModel;

class CityController extends Controller
{
    /**
     * Show the application conditions page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        // Top companies
        $companies = Company::select(['companies.id', 'companies.name', 'cities.id as city_id', 'cities.name as city_name'])
            ->join('company_city', 'company_city.company_id', '=', 'companies.id')
            ->join('cities', 'cities.id', '=', 'company_city.city_id')
            ->whereIn('city_id', array_flip(City::TOP))
            ->get();

        $top = [];
        foreach ($companies as $value) {
            $val = count($value->vacancies);
            if (isset($top[$value->city_id])) {
                $val = $top[$value->city_id] + count($value->vacancies);
            }
            $top[$value->city_id] = $val;
        }

        $result_ru = [];

        $cities = City::get();
        foreach ($cities as $value) {
            $word = strtoupper(mb_substr($value->name, 0, 1));
            $company = Company::join('company_city', 'company_city.company_id', '=', 'companies.id')
                ->where(['company_city.city_id' => $value->id])
                ->get();
            $count = 0;
            foreach ($company as $val) {
                $count = $val->vacancies->count();
                if (isset($result_ru[$word][$value->id])) {
                    $count = $result_ru[$word][$value->id] + $count;
                }
            }
            $result_ru[$word][$value->id] = $count;
        }

        return view('statics.city')->with([
            'ru' => $result_ru,
            'top' => $top,
            'cities' => City::get()->keyBy('id')->toArray()
        ]);
    }
}
