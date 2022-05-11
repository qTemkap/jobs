<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function show()
    {
        return view('test.auth.show');
    }

    public  function list(){
        return view('test.list');
    }

    public  function summary(){
        return view('test.summary');
    }

    public function index()
    {
        return [
            'head' => '200',
            'body' => [
                '1' => 'bla',
                '2' => 'bla2',
            ],
        ];
    }

    public function search(){
        return [
            'head' => '200',
            'body' => [
                '1' => 'Москва',
                '2' => 'Питер',
            ],
        ];
    }
}
