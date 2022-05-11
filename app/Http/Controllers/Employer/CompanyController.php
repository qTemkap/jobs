<?php

namespace App\Http\Controllers\Employer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Company;

class CompanyController extends Controller
{
    /**
     * Display the specified resource.
     *
     */
    public function show()
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $data = $company->prepareForShow();

        return view('employer.companies.show')->with(['data' => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $data = $company->prepareForEdit();
//
//        echo '<pre>';
//        echo json_encode($data);
//        die();

        return view('employer.companies.edit')->with(['data' => json_encode($data)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $this->validate($request, Company::rulesForCommon());

        $company->fill($request->all());

        if($company->save()){
            return response()->json([
                'status' => 'success',
            ], 200);
        } else {
            return response()->json([
                'message' => 'failed to save data',
            ], 501);
        }
    }

    public function updateInformation(Request $request)
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $this->validate($request, Company::rulesForInformation());

        $company->fill($request->all());

        if($company->save()){
            return response()->json([
                'status' => 'success',
            ], 200);
        } else {
            return response()->json([
                'message' => 'failed to save data',
            ], 501);
        }
    }

    public function updateAbout(Request $request)
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $this->validate($request, array_merge(Company::rulesForAbout(),[
            'city_id' => ['required', 'distinct', 'integer', 'exists:cities,id'],
        ]));

        $company->fill($request->all());

        DB::beginTransaction();
        if($company->save()){

            $company->cities()->sync([$request->input('city_id')]);

            DB::commit();

            return response()->json([
                'status' => 'success',
            ], 200);
        } else {
            DB::rollback();

            return response()->json([
                'message' => 'failed to save data',
            ], 501);
        }
    }

    public function updateContacts(Request $request)
    {
        $company = Auth::user()->employer->company()->firstOrFail();

        $this->validate($request, Company::rulesForContacts());

        $company->fill($request->all());

        if($company->save()){
            return response()->json([
                'status' => 'success',
            ], 200);
        } else {
            return response()->json([
                'message' => 'failed to save data',
            ], 501);
        }
    }
}
