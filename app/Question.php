<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'question';

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'email' => ['required', 'string', 'max:255'],
            'comment' => ['required', 'string'],
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'comment',
    ];
}
