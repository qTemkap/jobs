<?php

namespace App\Http\Controllers\JobSearch;

use App\Favorite;
use App\Http\Requests\SearchRequest;
use App\Jobs\UpdateSummaryViewCounter;
use App\Jobs\UpdateVacancyHitCounter;
use App\Jobs\UpdateVacancyViewCounter;
use App\Vacancy;
use App\VacancyFilter;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\UsersRoles;
use Illuminate\Support\Facades\Validator;

class ListController extends Controller
{

    public function index(){

        return view('jobsearch.list');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateSearchQuery(SearchRequest $request)
    {
        return Validator::make($request->all(), [
            'query' => ['nullable', 'string', 'min:3', 'max:140'],
        ]);
    }

    public function search(SearchRequest $request, VacancyFilter $filters){

        $validator = $this->validateSearchQuery($request);

        if ($validator->fails()) {
            return redirect()->to($request->fullUrlWithQuery(['query' => '']));
        }

        $vacancies = Vacancy::with('company')
            ->filter($filters)
            ->search($request->input('query'))
            ->defaultOrder($request->input('default_order'))
            ->published()
            ->paginate((int) $request->input('page_size'));

        $data = [
            'pagination' => [
                'currentPage' => $vacancies->currentPage(),
                'lastPage' => $vacancies->lastPage(),
                'perPage' => $vacancies->perPage(),
                'total' => $vacancies->total(),
                'count' => $vacancies->count(),
            ],
            'data' => [],
        ];

        if (Auth::check()) {
            $user = Auth::user()->id;
        }

        foreach ($vacancies as $key => $vacancy){
            $vacancyData = $vacancy->prepareForShowInSearch();
            $vacancyData['favorite'] = 0;

            if (isset($user)) {
                try {
                    $favorite = Favorite::where([
                        'user_id' => $user,
                        'vacancy_id' => $vacancy->id
                    ])
                        ->firstOrFail();

                    $vacancyData['favorite'] = 1;
                } catch (\Exception $e) {
                    $vacancyData['favorite'] = 0;
                }
            }

            $vacancyData['company'] = $vacancy->company->name;
            $vacancyData['address'] = $vacancy->company->address;
            $vacancyData['logo'] = $vacancy->company->logo();

            $data['data'][$key] = $vacancyData;

            dispatch(new UpdateVacancyHitCounter($vacancy));
        }

        return response()->json($data, 200);
    }

    public function show($id){

        $vacancy = Vacancy::where('id','=', $id)->with('company')->firstOrFail();

        dispatch(new UpdateVacancyViewCounter($vacancy));

        $data = [
            'vacancy' => $vacancy->prepareForShowInSearch(),
            'company' => $vacancy->company->prepareForShowInVacanciesSearch(),
            'may_respond_vacancy' => false,
            'favorite' => 0
        ];

        if(Auth::check() && Auth::user()->hasRole(UsersRoles::USER_ROLE_JOB_SEEKER)){
            $data['may_respond_vacancy'] = true;

            try {
                $favorite = Favorite::where([
                    'user_id' => Auth::user()->id,
                    'vacancy_id' => $vacancy->id
                ])
                    ->firstOrFail();

                $data['favorite'] = 1;
            } catch (\Exception $e) {
                $data['favorite'] = 0;
            }
        }

        return view('jobsearch.show')->with([
//            'meta_image' => config('app.url').$vacancy->company->logo(),
            'meta_image' => asset('/images/vacancy/share_vacancy.jpg'),
            'meta_title' => 'Вакансия '.$vacancy->position,
            'meta_description' => $vacancy->short_desc,
            'data' => json_encode($data)
        ]);
    }

    public function printOut($id){

        $vacancy = Vacancy::where('id','=', $id)->with('company')->firstOrFail();

        dispatch(new UpdateVacancyViewCounter($vacancy));

        $logo = $vacancy->company->logo();

        if(!is_null($logo)){
            $logo = config('app.url').$logo;
        } else {
            $logo = null;
        }

        $data = [
            'vacancy' => $vacancy->prepareForShowInSearch(),
            'company' => $vacancy->company->prepareForShowInVacanciesSearch(),
            'logo'    => $logo,
        ];

        $html = view('jobsearch.print')->with($data)->render();

        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($html);
        return $pdf->stream();

    }
}

