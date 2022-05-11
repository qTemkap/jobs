@extends('layouts.profile')

@section('content')
    <div class="page-search">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <app-search default-select="вакансии"></app-search>
                </div>
            </div>
        </div>
    </div>

    <section class="page profile grey-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Мои резюме
                    </h2>
                </div>
                <div class="col-xl-3">
                    @include('jobseeker.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <div class="main-wrapper">
                        <app-resume-list data="{{ $data }}" ></app-resume-list>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
