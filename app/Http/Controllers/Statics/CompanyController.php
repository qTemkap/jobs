<?php

namespace App\Http\Controllers\Statics;

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

class CompanyController extends Controller
{
    /**
     * Show the application conditions page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        // Top companies
        $topCompanies = DB::table('companies')
            ->select(['companies.id', 'vacancies.company_id',  DB::raw('COUNT(*) as count')])
            ->join('vacancies', 'companies.id', '=', 'vacancies.company_id')
            ->groupBy('vacancies.company_id')
            ->having('count', '>', 0)
            ->orderBy('count', 'DESC')
            ->limit(8)
            ->get()
            ->toArray();

        $topCompanies = array_pluck($topCompanies, 'id');
        $topCompanies = Company::whereIn('id', $topCompanies)
            ->get();

        $result_ru = [];
        $result_en = [];

        $en = array_map(function ($value){
            return '^' . $value;
        }, Company::EN);
        $en = implode('|', $en);
        $company_en = Company::with(['vacancies'])
            ->whereRaw('upper(companies.name) REGEXP (?)',[$en])
            ->get();

        foreach ($company_en as $value) {
            $word = strtoupper(mb_substr($value['name'], 0, 1));
            $result['logo'] = $value->logo(ImageModel::TYPE_COMPANY_LOGO_THUMB);
            $result = array_merge($result, $value->toArray());
            $result_en[$word][] = $result;
        }

        $ru = array_map(function ($value){
            return '^' . $value;
        }, Company::RU);
        $ru = implode('|', $ru);
//        $company_ru = Company::join('vacancies', 'companies.id', '=', 'vacancies.company_id')
//            ->whereRaw('upper(companies.name) REGEXP (?)',["$ru"])->with(['vacancies'])->get();

        $company_ru = Company::with(['vacancies'])
            ->whereRaw('upper(companies.name) REGEXP (?)',[$ru])
            ->get();

        foreach ($company_ru as $value) {
            $word = strtoupper(mb_substr($value['name'], 0, 1));
            $result['logo'] = $value->logo(ImageModel::TYPE_COMPANY_LOGO_THUMB);
            $result = array_merge($result, $value->toArray());
            $result_ru[$word][] = $result;
        }

        return view('statics.company')->with([
            'en' => $result_en,
            'ru' => $result_ru,
            'topCompanies' => $topCompanies
        ]);
    }
}
