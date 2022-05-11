<?php

namespace App\Http\Controllers\Statics;

use App\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Question as QuestionRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\Question as MailModel;

class FaqController extends Controller
{
    /**
     * Show the application conditions page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show()
    {
        return view('statics.faq');
    }

    public function question(QuestionRequest $request)
    {
        $model = new Question();
        $model->fill($request->all());

        if($model->save()){
//            try {
                Mail::to(config('mail.send_question_to', 'info.edhh@gmail.com'))->send(new MailModel($model));
//            } catch (\Exception $e) {
//
//            }
            return response()->json(['status' => 'success'], 200);
        } else {
            return response()->json(['status' => 'error'], 500);
        }
    }
}
