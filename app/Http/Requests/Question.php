<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Question as QuestionModel;

class Question extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return array_merge(QuestionModel::rules(), []);
    }
}
