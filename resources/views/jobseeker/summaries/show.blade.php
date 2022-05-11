@extends('layouts.profile')

@section('meta_title', (isset($meta_title) ? $meta_title : ''))
@section('meta_image', (isset($meta_image) ? $meta_image : ''))
@section('meta_description', (isset($meta_description) ? $meta_description : ''))

@section('content')
    <div class="page-search no-print">
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
                <div class="col-sm-12 no-print">
                    <h2 class="page-title">
                        Мои резюме
                    </h2>
                </div>
                <div class="col-xl-3 no-print">
                    @include('jobseeker.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <app-show-resume data="{{ $data }}"></app-show-resume>
                </div>
            </div>
        </div>
    </section>


@endsection

