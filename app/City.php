<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    const EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

    const TOP = [
        604 => 'Москва',
        825 => 'Санкт-Петербург',
        671 => 'Новосибирск',
        275 => 'Екатеринбург',
        646 => 'Нижний Новгород',
        352 => 'Казань',
        1045 => 'Челябинск',
        708 => 'Омск',
        824 => 'Самара',
        807 => 'Ростов-на-Дону',
        1011 => 'Уфа',
        477 => 'Красноярск'
    ];

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'cities';

    /**
     * Определяет необходимость отметок времени для модели.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'population' => ['required', 'integer'],
            'name' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'subject' => ['required', 'string', 'max:255'],
            'lat' => ['required', 'numeric'],
            'lon' => ['required', 'numeric'],
        ];
    }


    public static function getAllAsKeyValue(){
       return self::all(['id', 'name', 'population'])->sortByDesc('population')->toArray();
    }

    public function summaries(){
        return $this->belongsToMany('App\Summary', 'summary_city', 'city_id', 'summary_id');
    }
}
