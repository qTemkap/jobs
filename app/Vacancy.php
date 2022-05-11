<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Vacancy extends Model
{
    const DISPLAY_PERSONAL_DATA = 1;
    const NOT_DISPLAY_PERSONAL_DATA = 0;

    const PUBLISHED = 1;
    const NOT_PUBLISHED = 0;

    const KEY_FOR_CACHING_AUTOCOMPLETE = 'autocomplete_vacancies';

    /**
     * The number of models to return for pagination.
     *
     * @var int
     */
    protected $perPage = 25;

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'vacancies';

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'company_id' => ['required', 'integer', 'exists:companies,id'],
            'position' => ['required', 'string', 'max:255'],

            'contact_name' => ['required', 'string', 'max:255'],
            'contact_phone' => ['required', 'string', 'max:12'],
            'contact_email' => ['nullable', 'string', 'email'],

            'salary' => ['required', 'integer'],
            'salary_comment' => ['nullable', 'string', 'max:1000'],

            'information' => ['string', 'max:2000'],
            'short_desc' => ['nullable', 'string', 'max:255'],
            'video' => ['nullable', 'string', 'max:255'],

            'published' => ['required', 'boolean'],

            'hit_counter' => ['nullable', 'integer'],
            'view_count' => ['nullable', 'integer'],
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'position',
        'contact_name',
        'contact_phone',
        'contact_email',
        'salary',
        'salary_comment',
        'description',
        'short_desc',
        'published',
        'hit_counter',
        'view_count',
        'video'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'company_id'
    ];

    public function company()
    {
        return $this->belongsTo(\App\Company::class, 'company_id', 'id');
    }

    public function cities()
    {
        return $this->belongsToMany('App\City', 'vacancy_city', 'vacancy_id', 'city_id');
    }

    public function employment_types()
    {
        return $this->belongsToMany('App\EmploymentType', 'vacancy_employment_type', 'vacancy_id', 'employment_type_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Category', 'vacancy_category', 'vacancy_id', 'category_id');
    }

    public function respondVacancy()
    {
        return $this->hasMany('App\RespondVacancy', 'vacancy_id', 'id');
    }

    public function offerVacancy(){
        return $this->hasMany('App\OfferVacancy', 'vacancy_id', 'id');
    }

    /**
     * Scope a query to only include active users.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($builder, $filters)
    {
        return $filters->apply($builder);
    }

    public function scopeSearch($builder, $query)
    {
        if (!is_null($query) && !empty($query)) {
            return $builder->whereRaw("MATCH(position,description) AGAINST(? IN BOOLEAN MODE)", [$query]);
        }
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */

    public function scopeDefaultOrder($builder, $query)
    {
        if (!is_null($query) && $query === true) {
           return $builder->orderBy('updated_at', 'DESC');
        }
    }

    /**
     * Scope a query to only include popular users.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->where('published', '=', self::PUBLISHED);
    }

    public function getPublishedDate(){
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

    public function getTheWordingOfTheElapsedTime($numberOfHours){

    }

    public function getSalaryInCurrencyFormat(){
        return number_format($this->salary, 0, ',', ' ');
    }

    public function getPastTimeSincePosting(){
        $from = Carbon::parse($this->updated_at);
        $now = Carbon::now();

        $numberOfHours = $from->diffInHours($now);

        if($numberOfHours < 24){
            if($numberOfHours === 0){
                return 'меньше часа';
            } elseif($numberOfHours === 1){
                return 'час';
            } elseif ($numberOfHours > 1 && $numberOfHours < 5){
                return  $numberOfHours.' часа';
            } elseif ($numberOfHours >= 5){
                return  $numberOfHours.' часов';
            } else {
                return $numberOfHours;
            }
        } elseif ($numberOfHours > 24){
            $numberOfDays = $from->diffInDays($now);

            if($numberOfDays === 1){
                return $numberOfDays.' день';
            } elseif ($numberOfDays > 1 && $numberOfHours < 5){
                return  $numberOfDays.' дня';
            } elseif ($numberOfDays >= 5){
                return  $numberOfDays.' дней';
            } elseif ($numberOfDays > 7) {
                return 'больше недели';
            }
        }

        return $from->diffInDays().' дней';
    }

    public function prepareForEdit(){

        $cities = $this->cities()->select(['id', 'name', 'population'])->orderByDesc('population')->get();
        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        $categories = $this->categories()->select(['id', 'name'])->get();

        $data = [
            'id' => $this->id,
            'link_to_offer_category' => route('employer.offer_category', [], false),
            'position' => $this->position,
            'cities' => $cities->toArray(),
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_email' => $this->contact_email,
            'employment_types' => $employment_types->toArray(),
            'salary' => $this->salary,
            'salary_comment' => (!is_null($this->salary_comment)) ? $this->salary_comment : '',
            'categories' => $categories->toArray(),
            'description' => (!is_null($this->description)) ? $this->description : '',
            'short_desc' =>  (!is_null($this->short_desc)) ? $this->short_desc : '',
            'published' => $this->published,
            'video' => $this->video ?? '',
        ];

        return $data;
    }

    public function prepareForPreview(){
        $city = $this->cities()->first();
        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        $categories = $this->categories()->select(['id', 'name'])->get();

        preg_match('/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/', $this->video, $v);

        $data = [
            'id' => $this->id,
            'position' => $this->position,
            'city' => (!is_null($city)) ? $city->name : '',
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_phone_href' => preg_replace('/[^\d\+]+/', '',$this->contact_phone),
            'contact_email' => $this->contact_email,
            'employment_types' => $employment_types->toArray(),
            'salary' => $this->getSalaryInCurrencyFormat(),
            'salary_comment' => (!is_null($this->salary_comment)) ? $this->salary_comment : '',
            'categories' => $categories->toArray(),
            'description' => $this->description,
            'short_desc' => $this->short_desc,
            'published' => $this->published,
            'published_at' => $this->getPublishedDate(),
            'past_time' => $this->getPastTimeSincePosting(),
            'video' => (!empty($v[7])) ? $v[7] :  '',
        ];

        return $data;
    }

    public function prepareForList(){

        $cities = $this->cities()->select(['id', 'name', 'population'])->orderByDesc('population')->get(['id', 'name', 'population']);

        $data = [
            'id' => $this->id,
            'show' => route('vacancy.show', ['id' => $this->id]),
            'edit' => route('vacancy.edit', ['id' => $this->id]),
            'delete' => route('vacancy.delete', ['id' => $this->id]),
            'responses' => route('vacancy.responses.list', ['vacancyId' => $this->id]),
            'cities' => $cities->toArray(),
            'position' => $this->position,
            'salary' => $this->getSalaryInCurrencyFormat(),
            'published' => $this->published,
            'hit_counter' => $this->hit_counter,
            'view_count' => $this->view_count
        ];

        return $data;
    }

    public function prepareForShowInSearch(){

        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        $city = $this->cities()->first();

        preg_match('/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/', $this->video, $v);

        return [
            'id' => $this->id,
            'show' => route('search.job.show', ['id' => $this->id]),
            'position' => $this->position,
            'city' => $city->name,
            'salary' => $this->getSalaryInCurrencyFormat(),
            'published_at' => $this->getPublishedDate(),
            'past_time' => $this->getPastTimeSincePosting(),
            'employment_types' => $employment_types->toArray(),
            'description' => (!is_null($this->description)) ? $this->description : '',
            'short_desc' =>  (!is_null($this->short_desc)) ? $this->short_desc : '',
            'video' => (!empty($v[7])) ? $v[7] :  '',
        ];
    }

    public function prepareForShowInCompanyPage(){

        $city = $this->cities()->first();

        return [
            'id' => $this->id,
            'show' => route('search.job.show', ['id' => $this->id]),
            'position' => $this->position,
            'city' => $city->name,
            'salary' => $this->getSalaryInCurrencyFormat(),
            'past_time' => $this->getPastTimeSincePosting(),
        ];
    }

    public function prepareForShow(){
        $city = $this->cities()->first();
        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        $categories = $this->categories()->select(['id', 'name'])->get();

        preg_match('/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/', $this->video, $v);

        $data = [
            'id' => $this->id,
            'position' => $this->position,
            'city' => (!is_null($city)) ? $city->name : '',
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_phone_href' => preg_replace('/[^\d\+]+/', '',$this->contact_phone),
            'contact_email' => $this->contact_email,
            'employment_types' => $employment_types->toArray(),
            'salary' => $this->getSalaryInCurrencyFormat(),
            'salary_comment' => $this->salary_comment,
            'categories' => $categories->toArray(),
            'description' => $this->description,
            'published' => $this->published,
            'published_at' => $this->getPublishedDate(),
            'past_time' => $this->getPastTimeSincePosting(),
            'video' => (!empty($v[7])) ? $v[7] :  '',
        ];

        return $data;
    }
}
