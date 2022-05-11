@extends('layouts.app')

@section('content')
    <section class="hero auth-hero"></section>

    <section class="auth">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">

                    <section class="auth-block">
                        <div class="auth-block__header">
                            <a href="/login" class="auth-block__link">Вход</a>
                            <a href="/register" class="auth-block__link active">Регистрация</a>
                        </div>

                        <div class="auth-block__content text-center">
                            <h2 class="auth-title">
                                Подтвердите регистрацию
                            </h2>

                            <p class="auth-text-confirm">
                                На Ваш E-mail <a href="#" class="link-default">{{$email}}</a> было направлено письмо с активацией, для продолжения работы на сайте
                                выполните действия указанные в письме.
                            </p>
                            <a href="{{ route('verification.resend') }}" class="btn btn-green btn-small">
                                Отправить еще раз
                            </a>
                        </div>

                    </section>

                </div>
            </div>
        </div>
    </section>
@endsection
