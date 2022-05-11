<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta property="og:locale" content="{{config('app.locale')}}">
    <meta property="og:type" content="@yield('meta_type', 'website')">
    <meta property="og:title" content="@yield('meta_title')">
    <meta property="og:description" content="@yield('meta_description')">
    <meta property="og:image" content="@yield('meta_image')">
    <meta property="og:site_name" content="{{config('app.name')}}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">

    <app-error></app-error>

    <div class="page-header">
        <section class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12 header__wrapper">
                        <a href="/" class="header__logo"></a>

                        <app-header-nav></app-header-nav>

                        <div class="header__auth">
                            @auth
                                <img src="{{ $avatar_thumb  }}" class="header__auth-image" alt="">
                                @role('employer')
                                <a href="{{ route('employer.profile') }}" class="header__auth-link">Личный кабинет</a>
                                @endrole
                                @role('job_seeker')
                                <a href="{{ route('profile') }}" class="header__auth-link">Личный кабинет</a>
                                @endrole

                                <a href="{{ route('logout.get') }}" class="header__auth-link">Выйти</a>
                            @endauth
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>

    <main class="content">
        @yield('content')
    </main>

    <app-footer></app-footer>

</div>
<!-- Scripts -->
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
