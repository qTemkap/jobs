@extends('layouts.app')
@section('content')
    <section class="hero auth-hero"></section>
    <section class="auth ">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <section class="auth-block">
                        <div class="auth-block__header">
                            <a href="/login" class="auth-block__link active">Вход</a>
                            <a href="/register" class="auth-block__link">Регистрация</a>
                        </div>

                        <div class="auth-block__content">
                            <app-auth-reset token="{{ $token }}"></app-auth-reset>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
@endsection

