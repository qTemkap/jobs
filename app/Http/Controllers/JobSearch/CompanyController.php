<?php

namespace App\Http\Controllers\JobSearch;


use App\Http\Controllers\Controller;
use App\Company;
use App\Jobs\UpdateVacancyHitCounter;
use App\Vacancy;
use App\Http\Requests\SearchRequest;
use App\CompanyVacanciesFilter;

class CompanyController extends Controller
{
    public function show($id){

        $company = Company::where('id','=', $id)->with([
            'vacancies' =>  function ($q){
                $q->with(
                    [
                        'cities' => function($q){
                            $q->select(['id', 'name', 'population'])->orderByDesc('population');
                        }
                    ],
                    [
                        'categories' => function($q){
                            $q->select(['id', 'name']);
                        }
                    ]
                );
            }
        ])->firstOrFail();

        $data = [
           'company' => $company->prepareForShow(),
           'cities' => [],
           'categories' => [],
        ];

        foreach ($company->vacancies as $vacancy){

            $cities = $vacancy->cities;
            $categories = $vacancy->categories;

            foreach ($cities as $city){
                array_push($data['cities'], $city->toArray());
            }

            foreach ($categories as $category){
                array_push($data['categories'], $category->toArray());
            }
        }


        $data['cities'] = array_map("unserialize", array_unique(array_map("serialize",  $data['cities'] )));
        $data['categories'] = array_map("unserialize", array_unique(array_map("serialize",  $data['categories'] )));

        return view('jobsearch.company.show')->with(['data' => json_encode($data)]);
    }

    public function vacancies(SearchRequest $request, CompanyVacanciesFilter $filters, $company_id){

        $vacancies = Vacancy::filter($filters)
            ->where('company_id', '=', $company_id)
            ->published()
            ->get();

        $data = [];

        foreach ($vacancies as $key => $vacancy){
            $data[$key] =  $vacancy->prepareForShowInCompanyPage();

            dispatch(new UpdateVacancyHitCounter($vacancy));
        }

        return response()->json($data, 200);
    }
}
