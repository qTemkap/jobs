<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Favorite extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'favorite';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'vacancy_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'summary_id'
    ];

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */

    public static function rules()
    {
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'vacancy_id' => ['nullable', 'integer', 'exists:vacancies,id'],
        ];
    }

    public function user()
    {
        return $this->hasMany(\App\User::class, 'id', 'user_id');
    }

    public function vacancy()
    {
        return $this->hasOne(\App\Vacancy::class, 'id', 'vacancy_id');
    }

    public function getCreatedDate(){
        $date = Carbon::parse($this->created_at);

        $man = [
            1  => 'января',
            2  => 'февраля',
            3  => 'марта',
            4  => 'апреля',
            5  => 'мая',
            6  => 'июня',
            7  => 'июля',
            8  => 'августа',
            9  => 'сентября',
            10 => 'октября',
            11 => 'ноября',
            12 => 'декабря',
        ];

        return intval($date->format('d')).' '.$man[intval($date->format('m'))].' '.$date->format('Y');
    }
}
