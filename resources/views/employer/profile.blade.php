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

    <section class="profile page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Личные данные
                    </h2>
                </div>
                
                <div class="col-xl-3">
                    <app-company-logo></app-company-logo>
                    @include('employer.profile_sidebar')
                </div>
               
                <div class="col-xl-9">
                    <div class="main-wrapper">
                        <app-profile-employer data="{{ $data }}"></app-profile-employer>
                    </div>
                </div>
            </div>
        </div>
    </section>


@endsection
