@extends('layouts.app')

@section('content')
    <section class="hero auth-hero"></section>

    <section class="auth ">
        <div class="conatiner">
            <div class="row">
                <div class="col-sm-12">

                    <section class="auth-block">
                        <div class="auth-block__header">
                            <a href="/login" class="auth-block__link">Вход</a>
                            <a href="{{ route('register') }}" class="auth-block__link active">Регистрация</a>
                        </div>

                        @php
                           $data = (isset($data)) ? $data : json_encode(['name' => '', 'surname' => '', 'email' => '',]);
                        @endphp

                        <div class="auth-block__content">
                            <app-auth-registration data="{{ $data }}" type="{{ $type }}"></app-auth-registration>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>
@endsection
