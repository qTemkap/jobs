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

    <section class="page search">
        <div class="container">
            <app-resume-search data="{{$data}}"></app-resume-search>
        </div>
    </section>
@endsection
