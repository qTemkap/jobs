@extends('layouts.statics')

@section('content')
    <section class="page">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="content_box">
                        <h2 class="page-title text-page-title">Поиск по компаниям</h2>
                        <div class="top_links_box row">
                            @foreach ($topCompanies as $value)
                                <div class="top_links_item col-lg-3 col-md-4 col-sm-6">
                                    <a href="{{ route('company.show', ['id' => $value->id]) }}"><img src="{{ $value->logo() }}"></a>
                                    <a href="{{ route('company.show', ['id' => $value->id]) }}" class="name">{{ $value->name }}</a>
                                    <a href="{{ route('company.show', ['id' => $value->id]) }}" class="count">{{ count($value->vacancies) }}</a>
                                </div>
                            @endforeach
                            <div class="clear"></div>
                        </div>
                        <div class="abc">
                            <div class="latin">
                                @foreach (App\Company::EN as $value)
                                    @if (isset($en[$value]))
                                        <a href="#word-{{$value}}" class="abc_item">{{$value}}</a>
                                    @else
                                        <span class="abc_item">{{$value}}</span>
                                    @endif
                                @endforeach
                            </div>
                            <div class="cyrillic">
                                @foreach (App\Company::RU as $value)
                                    @if (isset($ru[$value]))
                                        <a href="#word-{{$value}}" class="abc_item">{{$value}}</a>
                                    @else
                                        <span class="abc_item">{{$value}}</span>
                                    @endif
                                @endforeach
                            </div>
                        </div>
                        @foreach ($en as $key => $value)
                            <div class="letter_box row" id="word-{{$key}}">
                                <div class="letter_title col-sm-12">{{$key}}</div>
                                <div class="letter_col col-sm-12">
                                    @foreach ($value as $val)
                                        <div class="letter_item">
                                            <img src="{{ $val['logo'] ?? 'http://www.edhh.webra-dev.com/images/profile-company.jpg' }}"/>
                                            <a href="{{ route('company.show', ['id' => $val['id']]) }}" class="name">{{$val['name']}}</a>
                                            <div class="count">{{count($val['vacancies'])}}</div>
                                            <div class="clear"></div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                        @foreach ($ru as $key => $value)
                            <div class="letter_box row" id="word-{{$key}}">
                                <div class="letter_title col-sm-12">{{$key}}</div>
                                <div class="letter_col col-sm-12">
                                    @foreach ($value as $val)
                                        <div class="letter_item">
                                            <img src="{{ $val['logo'] ?? 'http://www.edhh.webra-dev.com/images/profile-company.jpg' }}"/>
                                            <a href="{{ route('company.show', ['id' => $val['id']]) }}" class="name">{{$val['name']}}</a>
                                            <div class="count">{{count($val['vacancies'])}}</div>
                                            <div class="clear"></div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                    </div>
            </div>
        </div>
    </section>

@endsection
