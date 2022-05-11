@extends('layouts.statics')

@section('content')
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="col-12 city">
                    <div class="content_box">
                        <h2 class="page-title text-page-title">Поиск по компаниям</h2>
                        <div class="top_links_box row">
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=604"><img src="/images/cities/1.jpg"></a>
                                <a href="/jobs?cities[]=604" class="name">Москва</a>
                                <a href="/jobs?cities[]=604" class="count">{{ $top[604] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=825"><img src="/images/cities/2.jpg"></a>
                                <a href="/jobs?cities[]=825" class="name">Санкт-Петербург</a>
                                <a href="/jobs?cities[]=825" class="count">{{ $top[825] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=671"><img src="/images/cities/3.jpg"></a>
                                <a href="/jobs?cities[]=671" class="name">Новосибирск</a>
                                <a href="/jobs?cities[]=671" class="count">{{ $top[671] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=275"><img src="/images/cities/4.jpg"></a>
                                <a href="/jobs?cities[]=275" class="name">Екатеринбург</a>
                                <a href="/jobs?cities[]=275" class="count">{{ $top[275] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=646"><img src="/images/cities/5.jpg"></a>
                                <a href="/jobs?cities[]=646" class="name">Нижний Новгород</a>
                                <a href="/jobs?cities[]=646" class="count">{{ $top[646] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=352"><img src="/images/cities/6.jpg"></a>
                                <a href="/jobs?cities[]=352" class="name">Казань</a>
                                <a href="/jobs?cities[]=352" class="count">{{ $top[352] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=1045"><img src="/images/cities/7.jpg"></a>
                                <a href="/jobs?cities[]=1045" class="name">Челябинск</a>
                                <a href="/jobs?cities[]=1045" class="count">{{ $top[1045] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=708"><img src="/images/cities/8.jpg"></a>
                                <a href="/jobs?cities[]=708" class="name">Омск</a>
                                <a href="/jobs?cities[]=708" class="count">{{ $top[708] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=824"><img src="/images/cities/9.jpg"></a>
                                <a href="/jobs?cities[]=824" class="name">Самара</a>
                                <a href="/jobs?cities[]=824" class="count">{{ $top[824] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=807"><img src="/images/cities/10.jpg"></a>
                                <a href="/jobs?cities[]=807" class="name">Ростов-на-Дону</a>
                                <a href="/jobs?cities[]=807" class="count">{{ $top[807] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=1011"><img src="/images/cities/11.jpg"></a>
                                <a href="/jobs?cities[]=1011" class="name">Уфа</a>
                                <a href="/jobs?cities[]=1011" class="count">{{ $top[1011] ?? 0 }}</a>
                            </div>
                            <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                <a href="/jobs?cities[]=477"><img src="/images/cities/12.jpg"></a>
                                <a href="/jobs?cities[]=477" class="name">Красноярск</a>
                                <a href="/jobs?cities[]=477" class="count">{{ $top[477] ?? 0 }}</a>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="abc">
                            <div class="cyrillic">
                                @foreach (App\City::RU as $value)
                                    @if (isset($ru[$value]))
                                        <a href="#word-{{$value}}" class="abc_item">{{$value}}</a>
                                    @else
                                        <span class="abc_item">{{$value}}</span>
                                    @endif
                                @endforeach
                            </div>
                        </div>
                        @foreach ($ru as $key => $value)
                            <div id="word-{{$key}}">
                                <div class="letter_box row">
                                    <div class="letter_title col-sm-12">{{ $key }}</div>
                                    <div class="letter_col col-sm-12">
                                        @foreach ($value ?? [] as $k => $v)
                                            <div class="letter_item">
                                                <a href="/jobs?cities[]={{ $k }}" class="name">{{ $cities[$k]['name']}}</a>
                                                <span class="region">{{ $cities[$k]['district']}}</span>
                                                <div class="count">{{$v}}</div>
                                                <div class="clear"></div>
                                            </div>
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
