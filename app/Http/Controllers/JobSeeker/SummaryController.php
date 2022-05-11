<?php

namespace App\Http\Controllers\JobSeeker;

use App\Certificate;
use App\Education;
use App\Experience;
use App\ImageModel;
use App\JobSeeker;
use App\OfferVacancy;
use App\Traits\AttachFile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Summary;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Image;
use Spatie\MediaLibrary\Models\Media;

class SummaryController extends Controller
{
    use AttachFile;

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data, $id
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validateRequest(array $data)
    {
        $rules = array_merge(Summary::rules(), [
            'city' => ['required', 'array', 'max:20'],
            'city.*' => ['required', 'distinct', 'integer', 'exists:cities,id'],

            'employment_types' => ['required', 'array', 'max:20'],
            'employment_types.*' => ['required', 'distinct', 'integer', 'exists:employment_types,id'],

            'categories' => ['required', 'array', 'max:20'],
            'categories.*' => ['required', 'distinct', 'integer', 'exists:categories,id'],

            'educations' => ['nullable', 'array', 'max:6'],

            'educations.*.education_level_id' => ['required', 'integer', 'exists:education_levels,id'],
            'educations.*.institution' => ['required', 'string', 'max:255'],
            'educations.*.specialty' => ['required', 'string', 'max:255'],
            'educations.*.faculty' => ['required', 'string', 'max:255'],
            'educations.*.city' => ['required', 'string', 'max:255'],
            'educations.*.i_study' => ['required', 'boolean'],

            'educations.*.study_month_with' => ['required', 'integer', 'between:1,12'],
            'educations.*.study_year_with' => ['required', 'integer', 'between:1901,'.date('Y')],

            'educations.*.study_month_to.between' => ['nullable', 'integer',  'between:1,12'],
            'educations.*.study_year_to.between' => ['nullable', 'integer',  'between:1901,'.date('Y')],

            //ADDED IN WORK EXPERIENCE BRANCH
            //TODO refactor experience rules
            'experience' => ['nullable', 'array', 'max:6'],

//            'experience.*.education_level_id' => ['required', 'integer', 'exists:education_levels,id'],
            'experience.*.institution' => ['required', 'string', 'max:255'],
            'experience.*.specialty' => ['required', 'string', 'max:255'],
            'experience.*.city' => ['required', 'string', 'max:255'],
            'experience.*.i_worked' => ['required', 'boolean'],

            'experience.*.worked_month_with' => ['required', 'integer', 'between:1,12'],
            'experience.*.worked_year_with' => ['required', 'integer', 'between:1901,'.date('Y')],

            'experience.*.worked_month_to.between' => ['nullable', 'integer',  'between:1,12'],
            'experience.*.worked_year_to.between' => ['nullable', 'integer',  'between:1901,'.date('Y')],
            //ADDED IN WORK EXPERIENCE BRANCH

            //ADDED IN WORK certificates BRANCH
            'certificates' => ['nullable', 'array', 'max:6'],

            'certificates.*.description' => ['required', 'string', 'max:3000'],
            //ADDED IN WORK certificates BRANCH
        ]);

        $messages = array(
            'educations.*.study_year_with' => 'Должно быль месяцем',
            'educations.*.study_month_to' => 'Должно быль месяцем',

            'experience.*.worked_year_with' => 'Должно быль месяцем',
            'experience.*.worked_month_to' => 'Должно быль месяцем',
        );

        return Validator::make($data, $rules, $messages);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function list()
    {
        $summaries = Auth::user()->summaries;

        $data = [];

        foreach ($summaries as $summary){
            array_push($data, [
                'id' => $summary->id,
                'show' => route('summery.show', ['id' => $summary->id]),
                'edit' => route('summery.edit', ['id' => $summary->id]),
                'delete' => route('summery.delete', ['id' => $summary->id]),
                'position' => $summary->position,
                'created_at' => $summary->getCreatedDate(),
                'published' => $summary->published,
                'hit_counter' => $summary->hit_counter,
                'view_count' => $summary->view_count,
                'count_of_responses' => $summary->offerVacancy->count(),
                'responses' => route('summery.offer', ['id' => $summary->id]),
            ]);
        }
//        return response()->json($data, 200);
        return view('jobseeker.summaries.list')->with(['data' => json_encode($data)]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $data = ['link_to_offer_category' => route('job_seeker.offer_category', [], false)];

        return view('jobseeker.summaries.create')->with(['data' => json_encode($data)]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $profile_id = $user->jobSeekerProfile->id;

        $request->merge([
           'user_id' => $user->id,
           'job_seeker_id' => $profile_id,
        ]);

        $this->validateRequest($request->all())->validate();

        $cities = $request->input('city');

        $summary = new Summary();
        $summary->user_id = $user->id;
        $summary->job_seeker_id = $profile_id;
        $summary->fill($request->all());

        DB::beginTransaction();
        if($summary->save()){

            //EACH ALL education and save to BD
            foreach ($request->input('educations') ?? [] as $item){

                $education = new Education();
                $education->setAttribute('user_id', $user->id);
                $education->setAttribute('job_seeker_id', $profile_id);
                $education->setAttribute('summary_id', $summary->id);

                $education->fill($item);

                $education->setStudyWith($item['study_year_with'], $item['study_month_with']);
                $education->setStudyTo(
                    $this->prepareWorkedToNumber($item['study_year_to']),
                    $this->prepareWorkedToNumber($item['study_month_to'])
                );

                $isValid = $education->isValidOrReturnErrors();
                if($isValid){
                    $education->save();
                }
            }

            //EACH ALL experience and save to BD
            foreach ($request->input('experiences') ?? [] as $item){

                $experience = new Experience();
                $experience->setAttribute('user_id', $user->id);
                $experience->setAttribute('job_seeker_id', $profile_id);
                $experience->setAttribute('summary_id', $summary->id);

                $experience->fill($item);
                $experience->setAttribute('city', $item['cities']);

                $experience->setWorkedWith($item['worked_year_with'], $item['worked_month_with']);
                $experience->setWorkedTo(
                    $this->prepareWorkedToNumber($item['worked_year_to']),
                    $this->prepareWorkedToNumber($item['worked_month_to'])
                );

                $isValid = $experience->isValidOrReturnErrors();
                if($isValid){
                    $experience->save();
                }
            }

            //EACH ALL certificates and save to BD
            foreach ($request->all()['certificates'] ?? [] as $item){
                $certificate = new Certificate();
                $certificate->setAttribute('user_id', $user->id);
                $certificate->setAttribute('job_seeker_id', $profile_id);
                $certificate->setAttribute('summary_id', $summary->id);
                $certificate->fill($item);
                $isValid = $certificate->isValidOrReturnErrors();
                if($isValid){
                    $certificate->save();
                }

                if (!empty($item['file']) && $item['file'] != 'undefined') {
                    $this->attachFile($certificate, $request, $item['file'], ImageModel::TYPE_CERTIFICATE);
                }
            }


            foreach($cities as $city_id){
                DB::table('summary_city')->insert(
                    ['summary_id' => $summary->id, 'city_id' => $city_id]
                );
            }
        //    $summary->cities()->sync($request->input('сity'));
           $summary->employment_types()->sync($request->input('employment_types'));
           $summary->categories()->sync($request->input('categories'));

            DB::commit();

            return response()->json([
                'status' => 'redirect',
                'data' => [
                    'path' => route('summery.show', ['id' => $summary->id]),
                ]
            ], 200);

        } else {
            DB::rollback();

            return response()->json([
                'message' => 'Impossible user role',
                'errors' => [
                    'role' => 'Failed to assign the selected role.'
                ],
            ], 501);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $user = Auth::user();
        $jobSeeker = $user->jobSeekerProfile;
        $summary = $user->summaries()->where('id','=', $id)->firstOrFail();
        $educations = $summary->educations;
        $experiences = $summary->experiences;
        $certificates = $summary->certificates;

        $summaryData = $summary->prepareForPreview();

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

        //foreach all educations and rewrite item to array by key
        foreach ($educations as $key => $education){
            $educations[$key] = $education->prepareForShow();
        }

        //foreach all experiences and rewrite item to array by key
        foreach ($experiences as $key => $experience){
            $experiences[$key] = $experience->prepareForShow();
        }

        //foreach all $certificates and rewrite item to array by key
        foreach ($certificates as $key => $certificate){
            $certificates[$key] = $certificate->prepareForShow();
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
        ];

        return view('jobseeker.summaries.show')->with([
            'meta_image' => asset('/images/summary/share_resume.jpg'),
            'meta_url' => config('app.url') . route('search.resume.show', ['id' => $id], false), //to avoid conflicts with http
            'meta_title' => 'Резюме ' .$summary->position,
            'meta_description' => $summary->short_desc,
            'data' => json_encode($data)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $summary = Auth::user()->summaries()->where('id','=', $id)->firstOrFail();
        $educations = $summary->educations;
        $experiences = $summary->experiences;
        $certificates = $summary->certificates;

        $data = $summary->prepareForEdit();

        $data['educations'] = [];

        if(!is_null($educations)) {
            foreach ($educations as $key => $education) {
                array_push($data['educations'], $education->prepareForEdit());
            }
        }

        $data['experiences'] = [];

        if(!is_null($experiences)) {
            foreach ($experiences as $key => $experience) {
                array_push($data['experiences'], $experience->prepareForEdit());
            }
        }

        $data['certificates'] = [];

        if(!is_null($certificates)) {
            foreach ($certificates as $key => $certificate) {
                array_push($data['certificates'], $certificate->prepareForEdit());
            }
        }

//        return response()->json($data, 200);

        return view('jobseeker.summaries.edit')->with(['data' => json_encode($data)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $summary = Auth::user()->summaries()->where('id','=', $id)->firstOrFail();

        $user = Auth::user();
        $profile_id = $user->jobSeekerProfile->id;

        $request->merge([
            'user_id' => $user->id,
            'job_seeker_id' => $profile_id,
        ]);

        $this->validateRequest($request->all())->validate();

        $summary->user_id = $user->id;
        $summary->job_seeker_id = $profile_id;
        $summary->fill($request->all());

        DB::beginTransaction();
        if($summary->save()){

            //DELETE ALL educations BEFORE UPDATE summary educations list
            DB::table('educations')->where('summary_id', '=', $summary->id)->delete();

            foreach ($request->input('educations') ?? [] as $item){

                $education = new Education();
                $education->setAttribute('user_id', $user->id);
                $education->setAttribute('job_seeker_id', $profile_id);
                $education->setAttribute('summary_id', $summary->id);

                $education->fill($item);

                $education->setStudyWith($item['study_year_with'], $item['study_month_with']);
                $education->setStudyTo(
                    $this->prepareWorkedToNumber($item['study_year_to']),
                    $this->prepareWorkedToNumber($item['study_month_to'])
                );

                $isValid = $education->isValidOrReturnErrors();
                if($isValid){
                    $education->save();
                }
            }

            //DELETE ALL experiences BEFORE UPDATE summary experiences list
            DB::table('experiences')->where('summary_id', '=', $summary->id)->delete();

            foreach ($request->input('experiences') ?? [] as $item){

                $experience = new Experience();
                $experience->setAttribute('user_id', $user->id);
                $experience->setAttribute('job_seeker_id', $profile_id);
                $experience->setAttribute('summary_id', $summary->id);

                $experience->fill($item);
                $experience->setAttribute('city', $item['cities']);

                $experience->setWorkedWith($item['worked_year_with'], $item['worked_month_with']);
                $experience->setWorkedTo(
                    $this->prepareWorkedToNumber($item['worked_year_to']),
                    $this->prepareWorkedToNumber($item['worked_month_to'])
                );

                $isValid = $experience->isValidOrReturnErrors();
                if($isValid){
                    $experience->save();
                }
            }

            $oldCertificates = Certificate::where('summary_id', '=', $summary->id)->get();

            //DELETE ALL experiences BEFORE UPDATE summary experiences list
            DB::table('certificates')->where('summary_id', '=', $summary->id)->delete();

            //EACH ALL certificates and save to BD
            foreach ($request->all()['certificates'] ?? [] as $item){
                $certificate = new Certificate();
                $certificate->setAttribute('user_id', $user->id);
                $certificate->setAttribute('job_seeker_id', $profile_id);
                $certificate->setAttribute('summary_id', $summary->id);
                $certificate->fill($item);
                $isValid = $certificate->isValidOrReturnErrors();
                if($isValid){
                    $certificate->save();
                }
                if(!empty($item['fileId']) && $item['file'] == 'undefined') {
                    foreach ($oldCertificates as $cer) {
                        if ($cer->description == $certificate->description) {
//                            $file = Media::where([
//                                ['model_type', '=', Certificate::class],
//                                ['model_id', '=', $cer->id],
//                                ['type', '=', ImageModel::TYPE_CERTIFICATE],
//                            ])->first();
//                            $file->model_id = $certificate->id;
//                            $file->save();
                        }
                    }
                }

                if (!empty($item['file']) && $item['file'] != 'undefined') {
                    $this->attachFile($certificate, $request, $item['file'], ImageModel::TYPE_CERTIFICATE);
                }
            }

            $summary->cities()->sync($request->input('city'));
            $summary->employment_types()->sync($request->input('employment_types'));
            $summary->categories()->sync($request->input('categories'));

            DB::commit();

            return response()->json([
                'status' => 'redirect',
                'data' => [
                    'path' => route('summery.show', ['id' => $summary->id]),
                ]
            ], 200);

        } else {
            DB::rollback();

            return response()->json([
                'message' => 'Impossible user role',
                'errors' => [
                    'role' => 'Failed to assign the selected role.'
                ],
            ], 501);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $summary = Auth::user()->summaries()->where('id','=', $id)->firstOrFail();

        DB::beginTransaction();

        $citiesIsDetach = $summary->cities()->detach();
        $employmentTypesIsDetach = $summary->employment_types()->detach();
        $categoriesIsDetach = $summary->categories()->detach();

        DB::table('educations')->where('summary_id', '=', $summary->id)->delete();

        DB::table('experiences')->where('summary_id', '=', $summary->id)->delete();

        DB::table('certificates')->where('summary_id', '=', $summary->id)->delete();

        if($citiesIsDetach && $employmentTypesIsDetach && $categoriesIsDetach){
           if($summary->delete()){

               DB::commit();

               return response()->json(['status' => 'deleted'], 200);

           } else {
               DB::rollback();
               return response()->json(['status' => 'error'], 501);
           }
        } else {
            DB::rollback();
            return response()->json(['status' => 'error'], 501);
        }
    }

    public function offer(Request $request, Summary $id)
    {
        $offerVacancy = OfferVacancy::with(
            [
                'summary' => function ($q) {
                    $q->with('jobSeeker');
                }
            ]

        )   ->where('summary_id', '=', $id->id)
            ->paginate();

        $data = [
            'pagination' => [
                'currentPage' => $offerVacancy->currentPage(),
                'lastPage' => $offerVacancy->lastPage(),
                'perPage' => $offerVacancy->perPage(),
                'total' => $offerVacancy->total(),
                'count' => $offerVacancy->count(),
            ],
            'data' => []
        ];

        foreach ($offerVacancy as $respond){
            if (empty($respond->vacancy)) {
                continue;
            }
            $city = $respond->vacancy->first();
            array_push($data['data'], [
                'respond_id' => $respond->id,
                'vacancy_id' => $respond->vacancy_id,
                'summary_id' => $respond->summary_id,
                'name' => $respond->vacancy->position,
                'contact_name' => $respond->vacancy->contact_name,
                'show' => route('search.job.show', ['id' => $respond->vacancy_id]),
                'rating' => $respond->rating,
                'salary' => $respond->summary->salary,
                'city' => $city->name,
                'created_date' => $respond->getCreatedDate(),
            ]);
        }

        if($request->ajax() && $request->get('ajax')){
            return response()->json($data, 200);
        } else {
            return view('jobseeker.responses.list')->with([
                'summary' => $id,
                'data' => json_encode($data)
            ]);
        }
    }

    public function changeRating(Request $request)
    {
        $offerVacancy = OfferVacancy::where('id','=', $request->input('respond_id'))->first();
        $offerVacancy->rating = $request->input('rating');
        $offerVacancy->save();
    }

    public function deleteScan($id)
    {
        $file = Media::where([
            ['model_type', '=', Certificate::class],
            ['id', '=', $id],
            ['collection_name', '=', ImageModel::TYPE_CERTIFICATE],
        ])->first();

        $file->delete();

        return response()->json(['status' => 'success'], 200);
    }

    private function prepareWorkedToNumber($number = null): ?int
    {
        return ($number === null || $number === 'null') ? null : (int)$number;
    }
}
