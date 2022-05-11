<?php

namespace App;


class CompanyVacanciesFilter extends QueryFilter
{
    public function categories($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('categories', function($q) use($value) {
            $q->whereIn('category_id', $value);
        });
    }

    public function cities($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('cities', function($q) use($value) {
            $q->whereIn('city_id', $value);
        });
    }
}