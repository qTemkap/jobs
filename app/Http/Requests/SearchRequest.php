<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;

class SearchRequest extends FormRequest
{
    private $possibleValueForPerPage = [
        25,50,75,100,
    ];

    private function isPossibleValueForPerPage(int $value): bool {
        return in_array($value, $this->possibleValueForPerPage);
    }

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public function rules()
    {
        return [

        ];
    }


    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if(!$this->has('page_size') || !$this->isPossibleValueForPerPage($this->input('page_size'))){
            $this->merge([
                'page_size' => null
            ]);
        }

        if(!$this->has('query')){
            $this->merge([
                'query' => null
            ]);
        } else {
            $query = preg_replace('/[^\p{L}0-9 ]/iu',' ', $this->input('query'));
            $query = explode('+', $query);
            $query = array_map('trim', $query);
            $query = array_filter($query);
            $query = implode(' ', $query);
            $query = strtolower($query);

            $this->merge([
                'query' => $query
            ]);
        }

        if(!$this->has('order_asc') && !$this->has('order_desc')) {
            $this->merge([
                'default_order' => true
            ]);
        }
    }
}
