<!DOCTYPE html>
<html lang="ru">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251"/>
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#dc0525">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#dc0525">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#dc0525">

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ config('app.name', 'EDHunter') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<style>
    body { font-family: DejaVu Sans, sans-serif; }
</style>
<div class="print-container" style="margin-bottom: 25px;">

    <div class="resume-preview">

        <div class="print-container__header">
            <div class="logo">
                <img src="{{$avatar}}" class="img-fluid" alt="">
            </div>
            <div class="desc">
                Вакансия сгенерирована в ED Hunter
            </div>
        </div>

        <div class="profile__block profile__block-info">
            <div class="profile__large">

                <div class="info-date">
                    Вакансия от 17 февраля 2019
                </div>

                <h1 class="info-title">
                    Преподаватель
                </h1>

                <div class="info-salary">
                    1 000 000 руб руб.
                </div>

                <div class="user-data">
                    @if($hidePersonalData)
                    <div class="user-data__item" >
                        <p>
                            Город:
                        </p>
                        <p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 9 11"
                                width="9px" height="11px">
                                <path fill-rule="evenodd" fill="rgb(0, 146, 215)"
                                      d="M4.499,11.001 L8.100,6.549 C9.450,5.008 9.255,2.475 7.681,1.128 C6.831,0.400 5.701,-0.001 4.499,-0.001 C3.296,-0.001 2.166,0.400 1.316,1.128 C-0.257,2.474 -0.453,5.007 0.892,6.543 L4.499,11.001 ZM4.540,2.410 C5.446,2.410 6.183,3.041 6.183,3.817 C6.183,4.592 5.446,5.223 4.540,5.223 C3.634,5.223 2.897,4.592 2.897,3.817 C2.897,3.041 3.634,2.410 4.540,2.410 Z"/>
                            </svg>
                            Москва
                        </p>
                    </div>


                    <div class="user-data__item">
                        <p>
                            Вид занятости:
                        </p>
                        <p>
                            полная занятость
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Контактное лицо::
                        </p>
                        <p>
                            Ксения Ворона
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            8055591272
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            E-mail:
                        </p>
                        <p>
                            maxger14901304@gmail.com
                        </p>
                    </div>

                    @endif
                </div>

            </div>

            <div class="profile__small">
                <div class="main-info__photo">
                    <img src="{{$avatar}}" class="img-fluid" alt="">
                </div>
            </div>

        </div>

        <div class="profile__block profile__block-text" >
            <h2>
                Краткая информация
            </h2>

            <div class="subtitle">
                xzcXZC
            </div>
        </div>

        <div class="profile__block profile__block-text" >
            <h2>
                Описание вакансии
            </h2>

            <div class="subtitle">
                xzcXZC
            </div>
        </div>


    </div>

</div>

<div class="print-container">

    <div class="resume-preview">

        <div class="profile__block profile__block-text">
            <h2>
                Владение языками
            </h2>

            <div class="education-box language-box">
                <div class="subtitle">
                    Английский- продвинутый
                </div>
                <div class="grey-text">
                    Могу проходить собеседование на этом языке
                </div>
            </div>

            <div class="education-box language-box">
                <div class="subtitle">
                    Французский- выше среднего
                </div>
                <div class="grey-text">
                    Могу проходить собеседование на этом языке
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text">
            <h2>
                Курсы, тренинги, сертификаты
            </h2>

            <div class="education-box language-box">
                <div class="subtitle">
                    Английский язык НУШ(Кривой Рог)
                </div>

                <div class="grey-text">
                    Год окончания 2018
                </div>

                <div class="desc">
                    Очный и дистанционный курс английского для возможности работать в начальной школе.
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text" >
            <h2>
                Дополнительная информация
            </h2>

            <div class="desc dop-info">
                <p>
                    Изучением английского языка я занималась в школьные годы в г.Севастополе в лингвистическом центре, имеющем сертификат Cambridge, подтверждающий соответствие методике преподавания их стандартам. Два года назад закончила обучение на ступени С1, после чего продолжила изучение языка в университете, где большинство дисциплин преподаются на английском языке.
                    Также обучалась в языковом центре Speak-up на ступени С2.
                </p>
                <p>
                    В г. Севастополе в течение одного года занималась репетиторством, а именно подготовке школьников к сдаче экзаменов, поэтому имею опыт общения с учениками и использовавния методик преподавания на практике.
                </p>
            </div>
        </div>


    </div>

</div>
</body>
</html>


@extends('layouts.profile')

@section('content')
    <div class="page-search">
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
                <div class="col-sm-12">
                    <h2 class="page-title">
                        Мои резюме
                    </h2>
                </div>
                <div class="col-xl-3">
                    @include('jobseeker.profile_sidebar')
                </div>
                <div class="col-xl-9">
                    <div class="main-wrapper resume-preview">
                        <div class="profile__block profile__block-edit">
                            <a href="{{ route('summery.edit', ['id' => $summary['id']])  }}" class="btn btn-green btn-xs">
                                Редактировать
                            </a>
                        </div>

                        <div class="profile__block profile__block-info">
                            <div class="profile__large">

                                <div class="info-date">
                                    Резюме от {{ $summary['created_at']  }}
                                </div>

                                <h1 class="info-title">
                                    {{ $full_name }}
                                </h1>

                                <div class="info-salary">
                                    {{ $summary['salary'] }} руб.
                                </div>

                                <div class="user-data">
                                    @if(!$hidePersonalData)
                                        <div class="user-data__item">
                                            <p>
                                                Город:
                                            </p>
                                            <p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 9 11"
                                                    width="9px" height="11px">
                                                    <path fill-rule="evenodd"  fill="rgb(0, 146, 215)"
                                                          d="M4.499,11.001 L8.100,6.549 C9.450,5.008 9.255,2.475 7.681,1.128 C6.831,0.400 5.701,-0.001 4.499,-0.001 C3.296,-0.001 2.166,0.400 1.316,1.128 C-0.257,2.474 -0.453,5.007 0.892,6.543 L4.499,11.001 ZM4.540,2.410 C5.446,2.410 6.183,3.041 6.183,3.817 C6.183,4.592 5.446,5.223 4.540,5.223 C3.634,5.223 2.897,4.592 2.897,3.817 C2.897,3.041 3.634,2.410 4.540,2.410 Z"/>
                                                </svg>
                                                {{ $personalData['city']  }}
                                            </p>
                                        </div>


                                        <div class="user-data__item">
                                            <p>
                                                Возраст:
                                            </p>
                                            <p>
                                                {{ $personalData['age'] }}
                                            </p>
                                        </div>

                                        <div class="user-data__item">
                                            <p>
                                                Адрес:
                                            </p>
                                            <p>
                                                {{ $personalData['address'] }}
                                            </p>
                                        </div>

                                        <div class="user-data__item">
                                            <p>
                                                E-mail:
                                            </p>
                                            <p>
                                                {{ $personalData['email'] }}
                                            </p>
                                        </div>

                                        <div class="user-data__item">
                                            <p>
                                                Телефон:
                                            </p>
                                            <p>
                                                {{ $personalData['phone'] }}
                                            </p>
                                        </div>
                                    @endif

                                    <div class="user-data__item">
                                        <p>
                                            Вид занятости:
                                        </p>
                                        <p>
                                            @foreach ($summary['employment_types']  as $employment_type)
                                                @if ($loop->last)
                                                    {{ Illuminate\Support\Str::lower($employment_type['name']) }}.
                                                @elseif($loop->first)
                                                    {{ Illuminate\Support\Str::ucfirst($employment_type['name']) }},
                                                @else
                                                    {{ Illuminate\Support\Str::lower($employment_type['name']) }},
                                                @endif
                                            @endforeach
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="profile__small">
                                <div class="main-info__photo">
                                    <img src="{{ $avatar }}" class="img-fluid" alt="">
                                </div>
                            </div>
                        </div>

                        {{--<div class="profile__block profile__block-text">--}}
                        {{--<h2>--}}
                        {{--Опыт работы--}}
                        {{--</h2>--}}

                        {{--<div class="subtitle">--}}
                        {{--Преподаватель английского--}}
                        {{--</div>--}}

                        {{--<div class="desc">--}}
                        {{--с 09.2016 по 05.2017 (8 месяцев) <br>--}}
                        {{--Частное репетиторство, Севастополь <span class="grey-text">(Подготовка к сдаче экзаменов)</span>--}}
                        {{--</div>--}}
                        {{--</div>--}}

                        <div class="profile__block profile__block-text">
                            <h2>
                                Образование
                            </h2>

                            @foreach($educations as $education)

                                <div class="subtitle">
                                    {{ $education['institution']  }}
                                </div>

                                <div class="desc">
                                    {{ $education['specialty']  }},
                                    {{ $education['faculty']  }},
                                    {{ $education['city']  }},
                                    {{ $education['education_levels'] }},
                                    с {{ $education['study_with']  }} по {{ $education['study_to']  }}
                                    <span class="grey-text">( {{ $education['duration_of_training']  }} )</span>
                                </div>
                            @endforeach
                        </div>

                        {{--<div class="profile__block profile__block-text">--}}
                        {{--<h2>--}}
                        {{--Дополнительное образование--}}
                        {{--</h2>--}}

                        {{--<div class="desc">--}}
                        {{--Лингвист-центр, г.Севастополь <span class="grey-text">(2012, 5 лет)</span>--}}
                        {{--</div>--}}
                        {{--</div>--}}

                        <div class="profile__block profile__block-text">
                            <h2>
                                Дополнительная информация
                            </h2>

                            {!! $summary['information'] !!}
                        </div>

                        <div class="profile__block profile__block-edit">
                            <a href="{{ route('summery.edit', ['id' => $summary['id']])  }}" class="btn btn-green btn-xs">
                                Редактировать
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>


@endsection

