<?php

namespace App\Http\Controllers\JobSeeker;

use App\OfferCategory as OfferCategoryModel;
use App\Http\Requests\OfferCategory as OfferCategoryRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\OfferCategory as MailModel;

class OfferCategoryController extends Controller
{
    public function send(OfferCategoryRequest $request)
    {
        $user = Auth::user();

        $model = new OfferCategoryModel();
        $model->fill($request->all());
        $model->setAttribute('user_id', $user->id);

        if($model->save()){
            try {
                Mail::to(config('mail.send_offer_category_to'))->send(new MailModel($model, $user));
            } catch (\Exception $exception) {
            }

            return response()->json(['status' => 'success'], 200);
        } else {
            return response()->json(['status' => 'error'], 500);
        }
    }
}
