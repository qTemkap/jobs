@extends('layouts.profile')

@section('content')
    <div class="page-search">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <app-search default-select="резюме"></app-search>
                </div>
            </div>
        </div>
    </div>

    <section class="page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Мои вакансии
                    </h2>
                </div>
                <div class="col-xl-3">
                    <app-company-logo class="hidden-lg"></app-company-logo>
                    @include('employer.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <div class="main-wrapper">
                        <app-vacancy-list logo="{{$logo}}" data="{{$data}}"></app-vacancy-list>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
