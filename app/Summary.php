<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Spatie\MediaLibrary\InteractsWithMedia;

class Summary extends Model
{
    use InteractsWithMedia;

    const HIDE_PERSONAL_DATA = 1;
    const NOT_HIDE_PERSONAL_DATA = 0;

    const PUBLISHED = 1;
    const NOT_PUBLISHED = 0;

    const KEY_FOR_CACHING_AUTOCOMPLETE = 'autocomplete_summaries';

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
    protected $table = 'summaries';


    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'job_seeker_id' => ['required', 'integer', 'exists:job_seekers,id'],
            'position' => ['required', 'string', 'max:255'],

            'salary' => ['required', 'integer'],
            'salary_comment' => ['nullable', 'string', 'max:255'],
            'video' => ['nullable', 'string', 'max:255'],

            'information' => ['nullable', 'string', 'max:2000'],
            'short_desc' => ['nullable', 'string', 'max:255'],

            'published' => ['required', 'boolean'],
            'hide_data' => ['required', 'boolean'],

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
        'salary',
        'salary_comment',
        'information',
        'short_desc',
        'published',
        'hide_data',
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
        'user_id',
        'job_seeker_id'
    ];

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'user_id', 'id');
    }

    public function jobSeeker()
    {
        return $this->belongsTo(\App\JobSeeker::class, 'job_seeker_id', 'id');
    }

    public function cities(){
        return $this->belongsToMany('App\City', 'summary_city', 'summary_id', 'city_id');
    }

    public function employment_types(){
        return $this->belongsToMany('App\EmploymentType', 'summary_employment_type', 'summary_id', 'employment_type_id');
    }

    public function categories(){
        return $this->belongsToMany('App\Category', 'summary_category', 'summary_id', 'category_id');
    }

    public function educations(){
        return $this->hasMany(\App\Education::class, 'summary_id', 'id');
    }

    public function experiences(){
        return $this->hasMany(\App\Experience::class, 'summary_id', 'id');
    }

    public function certificates(){
        return $this->hasMany(\App\Certificate::class, 'summary_id', 'id');
    }

    public function respondVacancy(){
        return $this->hasMany('App\RespondVacancy', 'summary_id', 'id');
    }

    public function offerVacancy(){
        return $this->hasMany('App\OfferVacancy', 'summary_id', 'id');
    }

    /**
     * Scope a query to only include active users.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFilter($builder, $filters){
        return $filters->apply($builder);
    }

    public function scopeSearch($builder, $query)
    {
        if (!is_null($query) && !empty($query)) {
            return $builder->whereRaw( "MATCH(position,information) AGAINST(? IN BOOLEAN MODE)", [$query]);
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

    public function getSalaryInCurrencyFormat(){
        return number_format($this->salary, 0, ',', ' ');
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

    public function getPastTimeSincePosting(){
        $from = Carbon::parse($this->created);
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
            'link_to_offer_category' => route('job_seeker.offer_category', [], false),
            'position' => $this->position,
            'salary' =>  $this->salary,
            'salary_comment' =>  (!is_null($this->salary_comment)) ? $this->salary_comment : '',
            'cities' => $cities->toArray(),
            'employment_types' => $employment_types->toArray(),
            'categories' => $categories->toArray(),
            'information' => (!is_null($this->information)) ? $this->information : '',
            'short_desc' =>  (!is_null($this->short_desc)) ? $this->short_desc : '',
            'published' => $this->published,
            'hide_data' => $this->hide_data,
            'video' => (!is_null($this->video)) ? $this->video :  '',
        ];

        return $data;
    }

    public function prepareForPreview(){
        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        $categories = $this->categories()->select(['id', 'name'])->get();

        preg_match('/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/', $this->video, $v);

        return [
            'id' => $this->id,
            'position' => $this->position,
            'salary' => $this->getSalaryInCurrencyFormat(),
            'employment_types' => $employment_types->toArray(),
            'categories' => $categories->toArray(),
            'information' => (!is_null($this->information)) ? $this->information : '',
            'published' => $this->published,
            'hide_data' => $this->hide_data,
            'created_at' => $this->getCreatedDate(),
            'video' => (!empty($v[7])) ? $v[7] :  '',
        ];
    }

    public function prepareForShowInSearch(){

        $employment_types = $this->employment_types()->select(['id', 'name'])->get();
        preg_match('/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/', $this->video, $v);

        return [
            'show' => route('search.resume.show', ['id' => $this->id]),
            'print' => route('search.resume.print', ['id' => $this->id]),
            'id' => $this->id,
            'salary' => $this->getSalaryInCurrencyFormat(),
            'salary_comment' => (!is_null($this->salary_comment)) ? $this->salary_comment : '',
            'employment_types' => $employment_types->toArray(),
            'position' => $this->position,
            'information' => $this->information,
            'short_desc' =>  (!is_null($this->short_desc)) ? $this->short_desc : '',
            'published_at' => $this->getCreatedDate(),
            'video' => (!empty($v[7])) ? $v[7] :  '',
        ];
    }
}
