@extends('layouts.profile')

@section('content')

<div class="print-container" style="margin-bottom: 25px;">
    
    <div class="resume-preview">
            
        <div class="print-container__header">
            <div class="logo">
                <img src="../images/hunter.png" class="img-fluid" alt="">
            </div>
            <div class="desc">
                Резюме сгенерировано в ED Hunter 
            </div>
        </div>

        <div class="profile__block profile__block-info">
            <div class="profile__large">

                <div class="info-date">
                    Резюме от 17 февраля 2019
                </div>

                <h1 class="info-title">
                    Михалюк Татьяна 
                </h1>

                <div class="info-salary">
                    16 000 руб.
                </div>

                <div class="user-data">

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
                            Возраст:
                        </p>
                        <p>
                            19
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Вид занятости:
                        </p>
                        <p>
                            Полная занятость, неполная занятость
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Телефон:
                        </p>
                        <p>
                            <a href="`tel:+7 987 043 93 01`">+7 987 043 93 01</a>
                        </p>
                    </div>

                    <div class="user-data__item">
                        <p>
                            Email:
                        </p>
                        <p>
                            <a href="`mailto:mikalik111@gmail.com`">mikalik111@gmail.com</a>
                        </p>
                    </div>

                    
                </div>

            </div>

            <div class="profile__small">
                <div class="main-info__photo">
                    <img src="../images/print-user.png" class="img-fluid" alt="">
                </div>
            </div>
            
        </div>

        <div class="profile__block profile__block-text">
            <h2>
                Опыт работы
            </h2>

            <div class="education-box">
                <div class="subtitle">
                    Преподаватель английского
                </div>

                <div class="desc">
                    с 09.2016 по 05.2017 (8 месяцев)
                     <br>
                    Частное репетиторство, Севастополь 
                    <span class="grey-text">
                    (Подготовка к сдаче экзаменов)
                    </span>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text">
            <h2>
                Образование
            </h2>

            <div class="education-box">
                <div class="subtitle">
                    Киево-Могилянская академия
                </div>

                <div class="desc">
                    Международные отношения, общественные коммуникации и региональные студии, 
                    Киев Неоконченное высшее, с 09.2017 по 07.2021
                    <span class="grey-text">
                    (3 года 10 месяцев)
                    </span>
                </div>
            </div>
        </div>

        <div class="profile__block profile__block-text" >
            <h2>
                Дополнительное образование
            </h2>
            
            <div class="subtitle">
                Лингвист-центр, г.Севастополь
                <span class="grey-text">
                    (3 года 10 месяцев)
                </span>
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

    
    

@endsection
