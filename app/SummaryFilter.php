<?php

namespace App;

use Carbon\Carbon;

class SummaryFilter extends QueryFilter
{
    /**
     * All keys is possible value for input.
     */
    private static $aliasesForOrder = [
        'date' => 'updated_at',
        'salary' => 'salary',
    ];

    public function categories($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('categories', function($q) use($value) {
            $q->whereIn('category_id', $value);
        });
    }

    public function employment_types($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('employment_types', function($q) use($value) {
            $q->whereIn('employment_type_id', $value);
        });
    }

    public function age($value){
        if(!is_string($value)) return;

        $value = explode('_', $value);

        $ageFrom = ( is_integer ( (int) $value[0] ) ) ? abs( (int) $value[0] ) : 0;

        $dateFrom = Carbon::now()->subYears($ageFrom);

        $this->builder->whereHas('jobSeeker', function($q) use($dateFrom) {
            $q->where('date_of_birth', '<=', $dateFrom->format('Y-m-d'));
        });


        $ageTo = ( isset($value[1]) && (int) $value[1] > $ageFrom ) ? abs( (int) $value[1] ) : false;

        if($ageTo){
            $dateTo = Carbon::now()->subYears($ageTo);

            $this->builder->whereHas('jobSeeker', function($q) use($dateTo) {
                $q->where('date_of_birth', '>=', $dateTo->format('Y-m-d'));
            });
        }
    }

    public function gander($value){
        if(!is_string($value)) return;

        if(isset(JobSeeker::$aliasesForGender[$value])){
            $this->builder->whereHas('jobSeeker', function($q) use($value) {
                $q->where('gender', '=', JobSeeker::$aliasesForGender[$value]);
            });
        }
    }

    public function salary($value){
        if(!is_string($value)) return;

        $value = explode('_', $value);

        $salaryFrom = ( is_integer ( (int) $value[0] ) ) ? abs( (int) $value[0] ) : 0;

        $this->builder->where('salary', '>=', $salaryFrom);

        $salaryTo = ( isset($value[1]) && (int) $value[1] > $salaryFrom ) ? abs( (int) $value[1] ) : false;

        if($salaryTo)  $this->builder->where('salary', '<=', $salaryTo);
    }

    public function without_sn($value){

        if(!boolval($value)) return;

        $this->builder->whereNull('salary');
    }

    public function educations($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('educations', function($q) use($value) {
            $q->whereIn('education_level_id', $value);
        });
    }

    public function order_asc($value){

        if(!$value) return;

        if(isset(self::$aliasesForOrder[$value])){
            $this->builder->orderBy(self::$aliasesForOrder[$value], 'ASC');
//            $this->builder->orderBy('updated_at', 'ASC');
        }
    }

    public function order_desc($value){

        if(!$value) return;

        if(isset(self::$aliasesForOrder[$value])){
            $this->builder->orderBy(self::$aliasesForOrder[$value], 'DESC');
        }
    }

    public function cities($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('cities', function($q) use($value) {
            $q->whereIn('city_id', $value);
        });
    }
}
