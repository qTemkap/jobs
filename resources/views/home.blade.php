@extends('layouts.app')

@section('content')
    <section class="hero home-hero">
        <div class="container h-100">
            <div class="row h-100 align-items-end">
                <div class="col-sm-12 home-hero__wrapper">
                    <h1>
                        <span>Работа в образовании</span>
                        и науке доступная каждому
                    </h1>
                    <div class="home-search">
                        <app-search></app-search>
                    </div>
                    <div class="home-hero__links">
                        <span class="title">Добавьте вакансию или резюме в базу сайта</span>
                        @if (Auth::check() && Auth::user()->hasRole(App\UsersRoles::USER_ROLE_EMPLOYER))
                            <a class="btn btn-hero__resume" href="{{ route('vacancy.create') }}">Добавить вакансию</a>
                        @elseif (Auth::check() && Auth::user()->hasRole(App\UsersRoles::USER_ROLE_JOB_SEEKER))
                            <a class="btn btn-hero__vacancy" href="{{ route('summery.create') }}">Добавить резюме</a>
                        @else
                            <a class="btn btn-hero__resume" href="{{ route('register', ['type' => 1]) }}">Добавить вакансию</a>
                            <a class="btn btn-hero__vacancy" href="{{ route('register', ['type' => 0]) }}">Добавить резюме</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="institutions grey-bg">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Вакансии учебных заведений
                    </h2>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-1.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                            Национальный исследовательский университет «Высшая школа экономики»
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-2.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                            Российский экономический университет имени Г.В. Плеханова
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-3.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                           Институт иностранных языков Российского университета дружбы народов
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-4.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                           Московский издательско-полиграфический колледж имени Ивана Федорова
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-5.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                           Институт экономики и культуры
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-6.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                          Колледж «Синергия
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-7.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                         Московский городской университет управления Правительства Москвы
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-8.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                        Университет  «Синергия»
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-9.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                        Московский социально-педагогический институт
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="#" class="institutions__item">
                        <img src="../images/institutions/institution-10.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                        Московский экономический институт
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/jobs" class="institutions__item">
                        <img src="../images/institutions/institution-11.jpg" class="img-fluid institutions__image" alt="">
                        <span class="institutions__text">
                        Эксплуатация транспортно-технологических машин и комплексов
                        </span>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="/companies" class="institutions__item institutions__item-last">
                        Смотреть все
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 5"
                                width="16px" height="5px">
                            <path fill-rule="evenodd"  fill="rgb(43, 83, 198)"
                                  d="M16.000,2.999 L15.707,2.999 L13.793,4.913 L13.086,4.206 L14.293,2.999 L-0.000,2.999 L-0.000,1.999 L14.293,1.999 L13.086,0.792 L13.793,0.084 L15.707,1.999 L16.000,1.999 L16.000,2.999 Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="home-city">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 title-btn">
                    <h2 class="page-title">
                        Самые популярные города в России
                    </h2>
                    <a href="/cities" class="btn btn-grey">
                        <span>Все города</span>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 5"
                                width="16px" height="5px">
                            <path fill-rule="evenodd"  fill="rgb(43, 83, 198)"
                                  d="M16.000,2.999 L15.707,2.999 L13.793,4.913 L13.086,4.206 L14.293,2.999 L-0.000,2.999 L-0.000,1.999 L14.293,1.999 L13.086,0.791 L13.793,0.084 L15.707,1.999 L16.000,1.999 L16.000,2.999 Z"/>
                        </svg>
                    </a>
                </div>
                <div class="col-sm-12 home-city__content">
                    <a href="/jobs?cities[]=604" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-1.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                            Москва
                        </span>
                    </a>
                    <a href="/jobs?cities[]=825" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-2.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                            Санкт-Петербург
                        </span>
                    </a>
                    <a href="/jobs?cities[]=671" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-3.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                            Новосибирск
                        </span>
                    </a>
                    <a href="/jobs?cities[]=275" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-4.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                           Екатеринбург
                        </span>
                    </a>
                    <a href="/jobs?cities[]=646" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-5.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                            Нижний Новгород
                        </span>
                    </a>
                    <a href="/jobs?cities[]=352" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-6.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                           Казань
                        </span>
                    </a>
                    <a href="/jobs?cities[]=1045" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-7.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                           Челябинск
                        </span>
                    </a>
                    <a href="/jobs?cities[]=708" class="home-city__item">
                        <span class="overlay">
                            <img src="../images/city/city-8.jpg" class="home-city__image" alt="">
                        </span>
                        <span class="home-city__text">
                           Омск
                        </span>
                    </a>

                </div>
            </div>
        </div>
    </section>

    <section class="blog home-blog d-none">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 title-btn">
                    <h2 class="page-title">
                        Статьи
                    </h2>
                    <a href="/" class="btn btn-grey">
                        <span>Все статьи</span>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 5"
                                width="16px" height="5px">
                            <path fill-rule="evenodd"  fill="rgb(43, 83, 198)"
                                  d="M16.000,2.999 L15.707,2.999 L13.793,4.913 L13.086,4.206 L14.293,2.999 L-0.000,2.999 L-0.000,1.999 L14.293,1.999 L13.086,0.791 L13.793,0.084 L15.707,1.999 L16.000,1.999 L16.000,2.999 Z"/>
                        </svg>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6">
                    <a href="/" class="blog__item">
                        <img src="../images/blog/blog-1.jpg" class="img-fluid blog__preview" alt="">
                        <span class="blog__text">
                            Где школьнику найти материалы для подготовки к олимпиадам?
                        </span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6">
                    <a href="#" class="blog__item">
                        <img src="../images/blog/blog-2.jpg" class="img-fluid blog__preview" alt="">
                        <span class="blog__text">
                            13 олимпиад по информатике, которые дадут льготы при поступлении.
                        </span>
                    </a>
                </div>
                <div class="col-md-4 col-sm-6">
                    <a href="#" class="blog__item">
                        <img src="../images/blog/blog-3.jpg" class="img-fluid blog__preview" alt="">
                        <span class="blog__text">
                           УМСО-2018 соберет ведущих экспертов в области образования
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <app-seo-block></app-seo-block>

@endsection
