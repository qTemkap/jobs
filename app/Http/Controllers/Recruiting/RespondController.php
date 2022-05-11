<?php

namespace App\Http\Controllers\Recruiting;

use App\OfferVacancy;
use App\Summary;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\RespondVacancy;
use Illuminate\Support\Facades\Validator;

class RespondController extends Controller
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateGettingAllSummaries(array $data)
    {
        $rules = [
            'summary_id' => ['required', 'integer', 'exists:summaries,id'],
        ];
        return Validator::make($data, $rules);
    }

    public function get(Request $request){

        $this->validateGettingAllSummaries($request->all())->validate();

        $vacancies = Auth::user()->employer->company->vacancies()
            ->published()
            ->with('respondVacancy')
            ->get();

        $data = [];

        foreach ($vacancies as $vacancy){

            $responseAlreadyExist = false;

            if(!$vacancy->respondVacancy->isEmpty() ){
                $responseAlreadyExist = in_array(
                    $request->input('summary_id'),
                    array_column(
                        $vacancy->respondVacancy->toArray(),
                        'summary_id'
                    )
                );

            }

            array_push($data, [
                'id' => $vacancy->id,
                'show' => route('vacancy.show', ['id' => $vacancy->id]),
                'position' => $vacancy->position,
                'response_already_exist' => $responseAlreadyExist
            ]);
        }

        return response()->json($data, 200);
    }

    public function offer(Request $request)
    {
        $this->validateGettingAllSummaries($request->all())->validate();

        $vacancies = Auth::user()->employer->company->vacancies()
            ->published()
            ->with('offerVacancy')
            ->get();

        $data = [];

        foreach ($vacancies as $vacancy){

            $responseAlreadyExist = false;

            if(!$vacancy->respondVacancy->isEmpty() ){
                $responseAlreadyExist = in_array(
                    $request->input('summary_id'),
                    array_column(
                        $vacancy->offerVacancy->toArray(),
                        'summary_id'
                    )
                );

            }

            array_push($data, [
                'id' => $vacancy->id,
                'show' => route('vacancy.show', ['id' => $vacancy->id]),
                'position' => $vacancy->position,
                'response_already_exist' => $responseAlreadyExist
            ]);
        }

        return response()->json($data, 200);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateRespond(array $data)
    {
        $rules = array_merge(RespondVacancy::rules(),[]);
        return Validator::make($data, $rules);
    }

    public function store(Request $request){

        $this->validateRespond($request->all())->validate();

        $summary =Summary::where('id','=', $request->input('summary_id'))->firstOrFail();

        $vacancy = Auth::user()->employer->company->vacancies()
            ->where('id','=', $request->input('vacancy_id'))
            ->firstOrFail();
        /*
        * Check whether the user has left a response to this vacancy.
        * If not, then create a response, else yes, then overwrite
        */
        $respondVacancy = RespondVacancy::firstOrNew([
            'vacancy_id' => $request->input('vacancy_id'),
            'job_seeker_id' => $summary->job_seeker_id,
        ]);

        $respondVacancy->setAttribute('job_seeker_id', $summary->job_seeker_id);
        $respondVacancy->setAttribute('summary_id', $request->input('summary_id'));
        $respondVacancy->setAttribute('vacancy_id', $request->input('vacancy_id'));

        if($respondVacancy->save()){
            return response()->json([], 200);
        } else {
            return response()->json([], 501);
        }
    }

    public function offerStore(Request $request){

        $this->validateRespond($request->all())->validate();

        $summary =Summary::where('id','=', $request->input('summary_id'))->firstOrFail();

        $vacancy = Auth::user()->employer->company->vacancies()
            ->where('id','=', $request->input('vacancy_id'))
            ->firstOrFail();
        /*
        * Check whether the user has left a response to this vacancy.
        * If not, then create a response, else yes, then overwrite
        */
        $respondVacancy = OfferVacancy::firstOrNew([
            'vacancy_id' => $request->input('vacancy_id'),
            'job_seeker_id' => $summary->job_seeker_id,
        ]);

        $respondVacancy->setAttribute('job_seeker_id', $summary->job_seeker_id);
        $respondVacancy->setAttribute('summary_id', $request->input('summary_id'));
        $respondVacancy->setAttribute('vacancy_id', $request->input('vacancy_id'));

        if($respondVacancy->save()){
            return response()->json([], 200);
        } else {
            return response()->json([], 501);
        }
    }
}
