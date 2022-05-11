<?php

namespace App\Http\Controllers\Employer;

use App\Http\Controllers\Controller;
use App\RespondVacancy;
use App\JobSeeker;
use App\Summary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ResponsesController extends Controller
{
    public function list(Request $request, $id){

        $company = Auth::user()->company;
        $companyId = $company->id;

        $respondVacancy = RespondVacancy::with(
            [
                'vacancy' => function ($q) use($id, $companyId) {
                    $q->where('company_id', '=', $companyId);
                }
            ],
            [
                'summary' => function ($q) {
                    $q->with('jobSeeker');
                }
            ]

        )   ->where('vacancy_id', '=', $id)
            ->orderBy('new')
            ->paginate();

        $data = [
            'logo' => $company->logo(),
            'pagination' => [
                'currentPage' => $respondVacancy->currentPage(),
                'lastPage' => $respondVacancy->lastPage(),
                'perPage' => $respondVacancy->perPage(),
                'total' => $respondVacancy->total(),
                'count' => $respondVacancy->count(),
            ],
            'data' => []
        ];

        foreach ($respondVacancy as $respond){

                $hidePersonalData = (
                    (isset ($respond->summary->jobSeeker)
                        && $respond->summary->jobSeeker->show_data === JobSeeker::NOT_DISPLAY_PERSONAL_DATA_IN_RESUME
                    )
                    ||
                    $respond->summary->hide_data === Summary::HIDE_PERSONAL_DATA
                );

                array_push($data['data'], [
                    'respond_id' => $respond->id,
                    'vacancy_id' => $respond->vacancy_id,
                    'show' => route('vacancy.responses.view', ['respondId' => $respond->id]),
                    'rating' => $respond->rating,
                    'new' => $respond->new,
                    'name' =>  $respond->summary->jobSeeker->getFullName(),
                    'salary' => $respond->summary->salary,
                    'position' => $respond->summary->position,
                    'city' => ($hidePersonalData) ? null : $respond->summary->jobSeeker->getCityName(),
                    'created_date' => $respond->getCreatedDate(),
                ]);
        }

        if($request->ajax()){
            return response()->json($data, 200);
        } else {
            return view('employer.responses.list')->with([
                'data' => json_encode($data)
            ]);
        }
    }

    public function view($respondId){

        $company = Auth::user()->company;
        $companyId = $company->id;

        $respondVacancy = RespondVacancy::with(['vacancy' => function ($q) use($respondId, $companyId) {
            $q->where('company_id', '=', $companyId);
        }])->where('id', '=', $respondId)->with('summary')->firstOrFail();

        $respondVacancy->new = RespondVacancy::SEEN;
        $respondVacancy->saveOrFail();

        return redirect()->route('search.resume.show', ['id' => $respondVacancy->summary->id]);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateChangingRating(array $data)
    {
        $rules = [
            'respond_id' => ['required', 'integer', 'exists:respond_vacancy,id'],
            'rating' => ['required', 'integer', 'between:1,5'],
        ];
        return Validator::make($data, $rules);
    }

    public function changeRating(Request $request){

        $this->validateChangingRating($request->all())->validate();

        $company = Auth::user()->company;
        $companyId = $company->id;
        $respondId = $request->input('respond_id');

        $respondVacancy = RespondVacancy::with(['vacancy' => function ($q) use($respondId, $companyId) {
            $q->where('company_id', '=', $companyId);
        }])->where('id', '=', $respondId)->with('summary')->firstOrFail();

        $respondVacancy->rating = $request->input('rating');

        if($respondVacancy->save()){
            return response()->json([
                'status' => 'success'
            ], 200);
        } else {
            return response()->json([
                'status' => 'saving error'
            ], 501);
        }
    }
}
