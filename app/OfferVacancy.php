<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class OfferVacancy extends Model
{
    const NEW = 0;
    const SEEN = 1;

    /**
     * The number of models to return for pagination.
     *
     * @var int
     */
    protected $perPage = 6;

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'offer_vacancy';
    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'job_seeker_id' => ['nullable', 'integer', 'exists:users,id'],
            'vacancy_id' => ['required', 'integer', 'exists:vacancies,id'],
            'summary_id' => ['required', 'integer', 'exists:summaries,id'],
            'rating' => ['nullable', 'integer', 'between:1,5'],
            'new' => ['nullable', 'integer', 'between:0,1']
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rating', 'new', 'vacancy_id', 'summary_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];

    public function vacancy(){
        return $this->belongsTo(\App\Vacancy::class, 'vacancy_id', 'id');
    }

    public function summary(){
        return $this->belongsTo(\App\Summary::class, 'summary_id', 'id');
    }

    public function JobSeeker(){
        return $this->hasOneThrough(
            'App\JobSeeker',
            'App\Summary',
            'summary_id', // Foreign key on users table...
            'job_seeker_id', // Foreign key on history table...
            'id', // Local key on suppliers table...
            'id' // Local key on users table...
        );
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNew($query)
    {
        return $query->where('new', '=', self::NEW);
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

        return intval($date->format('d')).' '.$man[intval($date->format('m'))];
    }
}
