<?php

namespace App\Http\Controllers\JobSearch;

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
            'vacancy_id' => ['required', 'integer', 'exists:vacancies,id'],
        ];
        return Validator::make($data, $rules);
    }

    protected function validateGettingAlResumes(array $data)
    {
        $rules = [
            'vacancy_id' => ['required', 'integer', 'exists:resumes,id'],
        ];
        return Validator::make($data, $rules);
    }

   public function get(Request $request){

       $this->validateGettingAllSummaries($request->all())->validate();

       $summaries = Auth::user()->summaries()
                                ->with('respondVacancy')
                                ->published()
                                ->get();


       $data = [];

       foreach ($summaries as $summary){

           $responseAlreadyExist = false;

           if(!$summary->respondVacancy->isEmpty() ){
               $responseAlreadyExist = in_array(
                   $request->input('vacancy_id'),
                   array_column(
                       $summary->respondVacancy->toArray(),
                       'vacancy_id'
                   )
               );

           }

           array_push($data, [
               'id' => $summary->id,
               'show' => route('summery.show', ['id' => $summary->id]),
               'position' => $summary->position,
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

       $summary = Auth::user()->summaries()->where('id','=', $request->input('summary_id'))->firstOrFail();

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
}
