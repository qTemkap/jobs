<?php

namespace App;

use Carbon\Carbon;

class VacancyFilter extends QueryFilter
{
    /**
     * All keys is possible value for input.
     */
    private static $aliasesForOrder = [
        'date' => 'updated_at',
        'salary' => 'salary',
    ];

    private static $possibleValueToPeriod = [1, 7, 30];

    private static function isPossibleValueForPeriod(int $countOfDay): bool {
        return in_array($countOfDay, self::$possibleValueToPeriod);
    }


    public function cities($value){

        if(!$value) return;

        $this->builder->whereHas('cities', function($q) use($value) {
            $q->whereIn('city_id', $value);
        });
    }

    public function categories($value){
        if(!is_array($value)) return;

        $this->builder->whereHas('categories', function($q) use($value) {
            $q->whereIn('category_id', $value);
        });
    }

    public function employment_types($value){
        if(!$value) return;

        $this->builder->whereHas('employment_types', function($q) use($value) {
            $q->whereIn('employment_type_id', $value);
        });
    }


    public function salary($value){
        if(!$value) return;

        $value = ( is_integer ( (int) $value ) ) ? abs( (int) $value ) : 0;

        $this->builder->where('salary', '>=', $value);
    }

    public function without_sn($value){

        if(!boolval($value)) return;

        $this->builder->whereNull('salary');
    }

    public function period($value){

        $days = ( is_integer ( (int) $value ) ) ? abs( (int) $value ) : 0;

        if(self::isPossibleValueForPeriod($days)){
            $dateFrom = Carbon::now()->subDays($days);
            $this->builder->where('updated_at', '>=', $dateFrom->toDateTimeString());
        }
    }

    public function order_asc($value){

        if(!$value) return;

        if(isset(self::$aliasesForOrder[$value])){
            $this->builder->orderBy(self::$aliasesForOrder[$value], 'ASC');
        }
    }

    public function order_desc($value){

        if(!$value) return;

        if(isset(self::$aliasesForOrder[$value])){
            $this->builder->orderBy(self::$aliasesForOrder[$value], 'DESC');
        }
    }
}
