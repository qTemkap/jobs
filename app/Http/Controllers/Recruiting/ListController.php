<?php

namespace App\Http\Controllers\Recruiting;

use App\Http\Requests\SearchRequest;
use App\Jobs\UpdateSummaryViewCounter;
use App\Jobs\UpdateSummaryHitCounter;
use App\Summary;
use App\JobSeeker;
use App\SummaryFilter;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UsersRoles;

class ListController extends Controller
{
    public function index(){
        $data = [];

        return view('recruiting.list')->with(['data' => json_encode($data)]);
    }

    public function search(SearchRequest $request, SummaryFilter $filters){

        $summaries = Summary::with('jobSeeker', 'employment_types', 'categories')
                            ->filter($filters)
                            ->search($request->input('query'))
                            ->defaultOrder($request->input('default_order'))
                            ->published()
                            ->paginate((int) $request->input('page_size'));

        $data = [
            'pagination' => [
                'currentPage' => $summaries->currentPage(),
                'lastPage' => $summaries->lastPage(),
                'perPage' => $summaries->perPage(),
                'total' => $summaries->total(),
                'count' => $summaries->count(),
            ],
            'data' => [],
        ];

        foreach ($summaries as $key => $summary){

            $jobSeeker = $summary->jobSeeker;

            $hidePersonalData = ($jobSeeker->show_data === JobSeeker::NOT_DISPLAY_PERSONAL_DATA_IN_RESUME || $summary->show_data === Summary::HIDE_PERSONAL_DATA);

            $summaryData = $summary->prepareForShowInSearch();

            $summaryData['name'] = $jobSeeker->getFullName();
            $summaryData['age'] = ($hidePersonalData) ? null : $jobSeeker->getAge();
            $summaryData['city'] = ($hidePersonalData) ? null : $jobSeeker->getCityName();
            $summaryData['avatar'] = $jobSeeker->avatar();

            $data['data'][$key] = $summaryData;

            dispatch(new UpdateSummaryHitCounter($summary));
        }

        return response()->json($data, 200);
    }



    public function show($id){

        $summary = Summary::where('id','=', $id)->with('jobSeeker', 'employment_types', 'experiences', 'certificates')->firstOrFail();

        dispatch(new UpdateSummaryViewCounter($summary));

        $user = $summary->user;
        $jobSeeker = $summary->jobSeeker;
        $educations = $summary->educations;
        $experiences = $summary->experiences;
        $certificates = $summary->certificates;

        $summaryData = $summary->prepareForShowInSearch();

        $hidePersonalData = ($jobSeeker->show_data === JobSeeker::NOT_DISPLAY_PERSONAL_DATA_IN_RESUME || $summary->hide_data === Summary::HIDE_PERSONAL_DATA);

        if(!$hidePersonalData){
            $personalData = [
                'email' => $user->email,
                'phone' => (!is_null($jobSeeker->phone)) ? $jobSeeker->phone : '-',
                'city' => $jobSeeker->getCityName(),
                'age' => $jobSeeker->getAge(),
                'address' => (!is_null($jobSeeker->address)) ? $jobSeeker->address : '-',
            ];
        } else {
            $personalData = [
                'email' => '',
                'phone' => '',
                'city' => '',
                'age' => '',
                'address' => '',
            ];
        }

        foreach ($educations as $key => $education){
            $educations[$key] = $education->prepareForShow();
        }

        $data['experiences'] = [];

        if(!is_null($experiences)) {
            foreach ($experiences as $key => $experience) {
                $experiences[$key] = $experience->prepareForShow();
            }
        }

        $data['certificates'] = [];

        if(!is_null($certificates)) {
            foreach ($certificates as $key => $certificate) {
                $certificates[$key] = $certificate->prepareForShow();
            }
        }

        $data = [
            'summary' => $summaryData,
            'educations' => $educations,
            'experiences' => $experiences,
            'certificates' => $certificates,
            'personalData' => $personalData,
            'full_name' => $jobSeeker->getFullName(),
            'avatar' => $jobSeeker->avatar(),
            'hidePersonalData' => $hidePersonalData,
            'may_respond_vacancy' => false,
        ];

        if(Auth::check() && Auth::user()->hasRole(UsersRoles::USER_ROLE_EMPLOYER)){
            $data['may_respond_vacancy'] = true;
        }

        return view('recruiting.show')->with([
//            'meta_image' => config('app.url').$jobSeeker->avatar(),
            'meta_image' => asset('/images/summary/share_resume.jpg'),
            'meta_title' => 'Резюме ' .$summary->position,
            'meta_description' => $summary->short_desc,
            'data'       => json_encode($data)
        ]);
    }

    public function printOut($id){

        $summary = Summary::where('id','=', $id)->with('jobSeeker', 'employment_types', 'experiences', 'certificates')->firstOrFail();

        dispatch(new UpdateSummaryViewCounter($summary));

        $user = $summary->user;
        $jobSeeker = $summary->jobSeeker;
        $educations = $summary->educations;
        $experiences = $summary->experiences;
        $certificates = $summary->certificates;

        $summaryData = $summary->prepareForShowInSearch();

        $hidePersonalData = ($jobSeeker->show_data === JobSeeker::NOT_DISPLAY_PERSONAL_DATA_IN_RESUME || $summary->hide_data === Summary::HIDE_PERSONAL_DATA);

        if(!$hidePersonalData){
            $personalData = [
                'email' => $user->email,
                'phone' => (!is_null($jobSeeker->phone)) ? $jobSeeker->phone : '-',
                'city' => $jobSeeker->getCityName(),
                'age' => $jobSeeker->getAge(),
                'address' => (!is_null($jobSeeker->address)) ? $jobSeeker->address : '-',
            ];
        } else {
            $personalData = [
                'email' => '',
                'phone' => '',
                'city' => '',
                'age' => '',
                'address' => '',
            ];
        }

        foreach ($educations as $key => $education){
            $educations[$key] = $education->prepareForPrint();
        }

        $data['experiences'] = [];

        if(!is_null($experiences)) {
            foreach ($experiences as $key => $experience) {
                $experiences[$key] = $experience->prepareForPrint();
            }
        }

        $data['certificates'] = [];

        if(!is_null($certificates)) {
            foreach ($certificates as $key => $certificate) {
                $certificates[$key] = $certificate->prepareForPrint();
            }
        }

        $avatar = $jobSeeker->avatar();

        if(!is_null($avatar)){
            $avatar = config('app.url').$avatar;
        } else {
            $avatar = null;
        }

        $data = [
            'summary' => $summaryData,
            'educations' => $educations,
            'experiences' => $experiences,
            'certificates' => $certificates,
            'personalData' => $personalData,
            'full_name' => $jobSeeker->getFullName(),
            'avatar' => $avatar,
            'hidePersonalData' => $hidePersonalData,
            'may_respond_vacancy' => false,
        ];

        $html = view('recruiting.print')->with($data)->render();

        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($html);
        return $pdf->stream();

    }
}

