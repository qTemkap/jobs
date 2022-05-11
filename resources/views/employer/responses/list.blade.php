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

    <section class="page profile-company">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Ведущий специалист бухгалтерии
                    </h2>
                </div>
                <div class="col-xl-3">
                    <app-company-logo class="hidden-lg"></app-company-logo>
                    @include('employer.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <div class="main-wrapper">
                        <app-company-feedback data="{{$data}}"></app-company-feedback>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
