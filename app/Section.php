<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'sections';

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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function categories(){
        return $this->hasMany('App\Category', 'section_id', 'id');
    }

    public static function getAllAsKeyValue(){
        return self::all(['id', 'name'])->toArray();
    }
}
