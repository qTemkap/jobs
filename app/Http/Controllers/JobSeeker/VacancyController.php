<?php

namespace App\Http\Controllers\JobSeeker;

use App\Certificate;
use App\Education;
use App\Experience;
use App\Favorite;
use App\JobSeeker;
use App\Vacancy;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Summary;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function favorite()
    {
        $vacancies = Favorite::where(['user_id' => Auth::user()->id])
            ->orderBy('created_at', 'DESC')
            ->get();
        $data = [];

        foreach ($vacancies as $vacancy){
            if (empty($vacancy->vacancy->id)){
                continue;
            }
            $vac = Vacancy::with('company')
                ->where(['id' => $vacancy->vacancy->id])
                ->first();

            $temp = $vac->prepareForShowInSearch();
            $temp['save'] = $vacancy->getCreatedDate();
            $temp['company'] = $vac->company->name;
            $temp['address'] = $vac->company->address;
            $temp['logo'] = $vac->company->logo();
            $temp['favoriteId'] = $vacancy->id;
            array_push($data, $temp);
        }

        return view('jobseeker.vacancies.favorite')->with(['data' => json_encode($data)]);
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function favoriteAdd(Request $request)
    {
        $favorite = new Favorite();
        $favorite->user_id = Auth::user()->id;
        $favorite->vacancy_id = $request->post('vacancy_id');
        $favorite->save();

        return response()->json(['status' => 'success'], 200);
    }

    public function destroy($id)
    {
        $vacancies = Favorite::where([
            'user_id' => Auth::user()->id,
            'id' => $id
        ])
            ->firstOrFail();
        $vacancies->delete();
        return response()->json(['status' => 'deleted'], 200);
    }

}
