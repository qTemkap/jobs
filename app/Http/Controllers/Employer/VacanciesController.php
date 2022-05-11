<?php

namespace App\Http\Controllers\Employer;

use App\ImageModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Vacancy;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class VacanciesController extends Controller
{
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data, $id
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validateOfCreatedModel(array $data)
    {
        $rules = array_merge(Vacancy::rules(), [
            'cities' => ['required', 'array', 'max:20'],
            'cities.*' => ['required', 'distinct', 'integer', 'exists:cities,id'],

            'employment_types' => ['required', 'array', 'max:20'],
            'employment_types.*' => ['required', 'distinct', 'integer', 'exists:employment_types,id'],

            'categories' => ['required', 'array', 'max:20'],
            'categories.*' => ['required', 'distinct', 'integer', 'exists:categories,id'],
        ]);
        return Validator::make($data, $rules);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list()
    {
        $user = Auth::user();
        $company = $user->employer->company()->firstOrFail();

        $vacancies = Auth::user()->employer->company->vacancies()->with('respondVacancy')->get();

        $data = [];

        foreach ($vacancies as $vacancy){
            array_push($data, array_merge(
                $vacancy->prepareForList(),
                [
                    'count_of_responses' =>  $vacancy->respondVacancy->count()
                ]
            ));
        }

//        return response()->json($data, 200);
        return view('employer.vacancies.list')->with([
            'logo' => $company->logo(),
            'data' => json_encode($data)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $company = Auth::user()->employer->company->firstOrFail();

        $data = $company->prepareForCreateVacancy();

        return view('employer.vacancies.create')->with(['data' => json_encode($data)]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $employer = $user->employer()->firstOrFail();
        $company =  $employer->company()->firstOrFail();

        $request->merge([
            'company_id' => $company->id,
        ]);

        $this->validateOfCreatedModel($request->all())->validate();

        $vacancy = new Vacancy();
        $vacancy->company_id = $company->id;
        $vacancy->fill($request->all());

        DB::beginTransaction();
        if($vacancy->save()){

            $vacancy->cities()->sync($request->input('cities'));
            $vacancy->employment_types()->sync($request->input('employment_types'));
            $vacancy->categories()->sync($request->input('categories'));

            DB::commit();

            return response()->json([
                'status' => 'redirect',
                'data' => [
                    'path' => route('vacancy.list'),
                ]
            ], 200);

        } else {
            DB::rollback();

            return response()->json([
                'message' => 'Could not save',
            ], 501);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = Auth::user();
        $employer = $user->employer()->firstOrFail();
        $company = $employer->company()->firstOrFail();
        $vacancy = $company->vacancies()->where('id','=', $id)->firstOrFail();

        $data = $vacancy->prepareForShow();
        $company = $company->prepareForShowVacancy();

        $data = [
            'data' => $data,
            'company' => $company,
        ];

        return view('employer.vacancies.show')->with([
            'meta_image' => asset('/images/vacancy/share_vacancy.jpg'),
            'meta_url' => config('app.url') . route('search.job.show', ['id' => $id], false), //to avoid conflicts with http
            'meta_title' => 'Вакансия '.$vacancy->position,
            'meta_description' => $vacancy->short_desc,
            'data' => json_encode($data)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        $employer = $user->employer()->firstOrFail();
        $company = $employer->company()->firstOrFail();
        $vacancy = $company->vacancies()->where('id','=', $id)->firstOrFail();

        $data = $vacancy->prepareForEdit();

        return view('employer.vacancies.edit')->with([
            'logo' => $company->logo(),
            'data' => json_encode($data),
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $employer = $user->employer()->firstOrFail();
        $company = $employer->company()->firstOrFail();
        $vacancy = $company->vacancies()->where('id','=', $id)->firstOrFail();

        $request->merge([
            'company_id' => $company->id,
        ]);

        $this->validateOfCreatedModel($request->all())->validate();

        $vacancy->company_id = $company->id;
        $vacancy->fill($request->all());

        DB::beginTransaction();
        if($vacancy->save()){

            $vacancy->cities()->sync($request->input('cities'));
            $vacancy->employment_types()->sync($request->input('employment_types'));
            $vacancy->categories()->sync($request->input('categories'));

            DB::commit();

            return response()->json([
                'status' => 'redirect',
                'data' => [
                    'path' => route('vacancy.list'),
                ]
            ], 200);

        } else {
            DB::rollback();

            return response()->json([
                'message' => 'Could not save',
            ], 501);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vacancy = Auth::user()->employer->company->vacancies()->where('id','=', $id)->firstOrFail();

        DB::beginTransaction();

        $citiesIsDetach = $vacancy->cities()->detach();
        $employmentTypesIsDetach = $vacancy->employment_types()->detach();
        $categoriesIsDetach = $vacancy->categories()->detach();

        if($citiesIsDetach && $employmentTypesIsDetach && $categoriesIsDetach){
            if($vacancy->delete()){
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
}
