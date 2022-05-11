<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class OfferCategory extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'offer_categories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'category', 'comment'
    ];

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'user_id'       => ['nullable', 'integer', 'exists:users,id'],
            'category'      => ['required', 'string', 'max:255'],
            'comment'       => ['nullable', 'string', 'max:1000'],
        ];
    }

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'id', 'user_id');
    }
}
