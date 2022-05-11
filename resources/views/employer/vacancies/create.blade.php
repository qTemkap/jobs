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

    <section class="page create-resume">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <a href="{{ route('vacancy.list') }}" class="prev-link d-i-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10" width="6px" height="10px"><path fill-rule="evenodd" fill="rgb(43, 83, 198)" d="M5.995,9.312 L5.329,9.994 L1.117,5.681 L0.671,6.139 L0.005,5.457 L0.452,5.000 L0.005,4.542 L0.671,3.860 L1.118,4.318 L5.329,0.005 L5.995,0.686 L1.783,4.999 L5.995,9.312 Z"></path></svg>
                        Мои вакансии
                    </a>

                    <h2 class="page-title">
                        Создать вакансию
                    </h2>
                </div>
                <div class="col-xl-3">
                    <app-company-logo></app-company-logo>
                    @include('employer.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <div class="main-wrapper">
                        <app-create-vacancy data="{{$data}}"></app-create-vacancy>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
