<?php

namespace App\Http\Controllers\Statics;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ConditionsController extends Controller
{
    /**
     * Show the application conditions page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        return view('statics.conditions');
    }

    public function verified(){

    }
}
