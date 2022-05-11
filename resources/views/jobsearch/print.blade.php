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
    <style>
        body {
             font-family: DejaVu Sans, sans-serif;
             padding: 0;
             margin: 0;
             font-size: 16px;
        }
        .table-header{
            width: 100%;
            height: 57px;
            border-bottom: 1px solid #000
        }
       .header-desc{
            margin: 0;
            font-size: 10px;
       }
       .logo{
           text-align: left;
       }
       .general-info{
           width: 100%;
       }
       .info-date {
            color: #7d7d7d;
            font-size: 0.6875rem;
            font-weight: 400;
            margin-bottom: 0;
            letter-spacing: -0.5px;
            margin-top: 15px;
        }

        .info-title {
            font-size: 1.75rem;
            margin-bottom: 5px;
            letter-spacing: -0.8px;
            font-weight: 400;
            margin-top: 0;
        }

        .info-salary {
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 1.25rem;
        }

        .user-info__title{
            line-height: 1.4;
            font-size: 0.8125rem;
            margin-bottom: 4px;
            width: 170px;
        }
        .user-info__desc{
            font-size: 0.875rem;
            color: #909192;
            font-weight: 400;
            margin-left: 9px;
            text-align: left;
        }

        .user-info__desc a{
            color: #008bcc;
            font-size: 0.875rem;
            text-align: left;
        }

        .print-content{
            width: 100%;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #cfd6dc;
        }

        .print-content h2{
            font-size: 1.3125rem;
            margin-bottom: 15px;
            line-height: 2.1875rem;
            font-weight: 600;
            margin-top: 0;
            text-align: left;
        }
       
        .print-content ul{
            padding: 0;
            margin: 0;
            
        }

        .print-content li{
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 0.875rem;
            position: relative;
            padding-left: 15px;
            margin-bottom: 15px;
        }

       
        .print-content li .grey-text{
            line-height: 1;
        }

        .print-content p{
            padding-left: 15px;
            font-size: 0.875rem;
            line-height: 1.375rem;
            margin-bottom: 0;
        }

        .print-content-dop p{
            padding-left: 0;
        }
        .print-content-last{
            border-bottom: none;
        }

        .grey-text{
            font-weight: 400;
            color: #8d8d8d;
            font-size: 0.875rem;
            line-height: 1.375rem;
        }

        .user-info{
            margin-bottom: 15px;
            width: 100%;
        }

        .print-content-desc{
            margin-top: -5px;
            margin-bottom: -5px;
        }

        .print-content__item{
            margin-bottom: 15px;
        }
        .print-content-curse .print-content-desc {
            margin-bottom: -15px;
        }
        .print-content-curse .print-content__item{
            margin-bottom: 20px;
        }

        .main-info__photo{
            width: 112px;
        }
        .main-info__photo img{
            width: 100%;
            margin-top: 30px;
        }
        .logo-img{
            text-align: left;

        }

    </style>
</head>
<body>

    <div class="print-container" style="margin-bottom: 25px;">

        <div class="resume-preview" style="clear:both">
            <div style="width: 100%">
                <img src="http://edhh.webra-dev.com/images/page-logo.svg" class="logo-img" style="float:left;height: 44px;" alt="Group-3" border="0">
                <div class="header-desc" style="float:right;margin-top: 13px">
                    Резюме сгенерировано в ED Hunter
                </div>
            </div>
            <div style="clear:both"></div>

            <table class="general-info">
                <tbody>
                <tr>
                    <td class="user-info__block">
                        <table>
                            <tr>
                                <td>
                                    <div class="info-date">
                                        Резюме от {{$vacancy['published_at']}}
                                    </div>

                                    <h1 class="info-title">
                                        {{$vacancy['position']}}
                                    </h1>

                                    <div class="info-salary">
                                        {{$vacancy['salary']}} руб.
                                    </div>
                                </td>
                            </tr>
                        </table>

                    </td>

                    <td class="main-info__photo">

                        @if(!is_null($logo))
                            <img src="{{$logo}}" class="img-fluid" alt="">
                        @endif
                        <!-- <img src="http://edhh.webra-dev.com/images/profile-company.jpg" class="img-fluid" alt=""> -->
                        
                    </td>
                </tr>

                </tbody>
            </table>

            <table class="user-info">
                <tbody>
                   <tr>
                        <td class="user-info__title">
                            Адрес:
                        </td>
                        <td class="user-info__desc">
                            {{$company['address']}}
                        </td>
                    </tr>
                    <tr>
                        <td class="user-info__title">
                            Веб сайт:
                        </td>
                        <td class="user-info__desc">
                            <a href="{{$company['web_site']}}`">{{$company['web_site']}}</a>
                        </td>
                    </tr>
                   
                    <tr>
                        <td class="user-info__title">
                            Вид занятости:
                        </td>
                        <td class="user-info__desc">
                            @foreach($vacancy['employment_types'] as $type)
                                {{ $type['name']  }}
                            @endforeach
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="user-info__title">
                            Контактное лицо:
                        </td>
                        <td class="user-info__desc">
                            {{$company['contact_name']}}
                        </td>
                    </tr>
                    <tr>
                        <td class="user-info__title">
                            Телефон:
                        </td>
                        <td class="user-info__desc">
                            <a href="tel:`{{$company['contact_phone']}}`">{{$company['contact_phone']}}</a>
                        </td>
                    </tr>
                    <tr>
                        <td class="user-info__title">
                            Email:
                        </td>
                        <td class="user-info__desc">
                            <a href="mailto:`{{$company['contact_email']}}">{{$company['contact_email']}}</a>
                        </td>
                    </tr>
                   
                </tbody>
            </table>

            <div class="print-content">
                <h2>
                    Описание вакансии
                </h2>
                {!! $vacancy['description'] !!}
            </div>

               
             <div style="clear:both"></div>
            
            <div style="width: 100%; padding-top: 35px">
                <img src="https://i.ibb.co/jgPyQZh/page-logo.png" class="logo-img" style="float:left;height: 44px;" alt="Group-3" border="0">
                <div class="header-desc" style="float:right;margin-top: 13px">
                    Резюме сгенерировано в ED Hunter
                </div>
            </div>

        </div>

    </div>

</body>
</html>
