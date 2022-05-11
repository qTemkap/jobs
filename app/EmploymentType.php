<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmploymentType extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'employment_types';

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
        ];
    }

    public static function getAllAsKeyValue(){
        return self::all(['id', 'name'])->sortBy('id')->toArray();
    }
}
