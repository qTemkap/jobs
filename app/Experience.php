<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;

class Experience extends Model
{
    const I_WORK = 1;
    const I_DO_WORK = 0;

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'experiences';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company', 'position', 'city', 'i_work', 'worked_with', 'worked_to'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'job_seeker_id', 'summary_id'
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
            'job_seeker_id' => ['required', 'integer', 'exists:job_seekers,id'],
            'summary_id' => ['nullable', 'integer', 'exists:summaries,id'],

//            'education_level_id' => ['required', 'integer', 'exists:education_levels,id'],
            'company' => ['required', 'string', 'max:255'],
            'position' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'i_work' => ['required', 'boolean'],

            'worked_with' => ['required', 'date_format:"Y-m-d"', 'before:today', 'after:1901-01-01'],
            'worked_to' => ['nullable', 'date_format:"Y-m-d"', 'after:1901-01-01', 'required_unless:i_work,1'],
        ];
    }

    /**
     * * @mixed array or true
     */
    public function isValidOrReturnErrors(){

        $this->makeVisible(['user_id', 'job_seeker_id', 'summary_id']);

        $validator = Validator::make($this->attributesToArray(), self::rules());

        if ($validator->fails()) {
            return $validator->errors();
        } else {
            return true;
        }
    }

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'id', 'user_id');
    }

    public function jobSeeker()
    {
        return $this->belongsTo(\App\JobSeeker::class, 'id', 'job_seeker_id');
    }

    public function summary()
    {
        return $this->belongsTo(\App\Summary::class, 'id', 'summary_id');
    }

//    public function educationLevel(){
//        return $this->hasOne('App\EducationLevel', 'id','education_level_id');
//    }

    public function setWorkedWith($year, $month){
        $date = Carbon::create($year, $month, 01);
        $this->setAttribute('worked_with', $date->toDateString());
    }

    public function setWorkedTo(?int $year,?int $month){
        if($year && $month) {
            $date = Carbon::create($year, $month, 01);
            $this->setAttribute('worked_to', $date->toDateString());
        } else {
            $this->setAttribute('worked_to', null);
        }
    }

    public function getWorkedWithInFormat($format = 'm.Y'){
        $date = Carbon::createFromFormat('Y-m-d', $this->worked_with);
        return $date->format($format);
    }

    public function getWorkedToInFormat($format = 'm.Y'){
        if($this->i_work !== self::I_WORK && !is_null($this->worked_to)) {
            $date = Carbon::createFromFormat('Y-m-d', $this->worked_to);
            return $date->format($format);
        }else {
            return null;
        }
    }

    public function getDurationOfEmployment(){
        $to = Carbon::createFromFormat('Y-m-d', $this->worked_with);

        if(!is_null($this->worked_to)) {
            $from = Carbon::createFromFormat('Y-m-d', $this->worked_to);
        } else {
            $from = Carbon::now();
        }

        $countOfMonth = $from->diffInMonths($to);
        $countOfYear = (int)($countOfMonth / 12);

        $mOfYear = $countOfMonth - ($countOfYear * 12);

        $yearText = ' лет';

        if($countOfYear == 1){
            $yearText = ' год';
        } elseif ($countOfYear === 2 || $countOfYear === 3 || $countOfYear === 4){
            $yearText = ' года';
        }

        $mText = ' месяцев';
        if($mOfYear === 1){
            $mText = ' месяц';
        } elseif ($mOfYear === 2 || $mOfYear === 3 || $mOfYear === 4){
            $mText = ' месяца';
        }

        if($countOfYear < 1 && $countOfMonth > 0){
            return $mOfYear . $mText;
        } elseif($countOfYear > 0 && $mOfYear > 0){
            return $countOfYear . $yearText .' '. $mOfYear . $mText;
        } elseif ($countOfYear > 0 && $mOfYear === 0) {
            return $countOfYear . $yearText;
        } else {
            return '';
        }
    }


    public function prepareForShow(){
        $data = [
            'id' => $this->id,
            'company' => $this->company,
            'position' => $this->position,
            'city' => $this->city,
            'worked_with' => $this->getWorkedWithInFormat(),
            'worked_to' => $this->getWorkedToInFormat(),
            'duration_of_training' => $this->getDurationOfEmployment(),
        ];

        return $data;
    }

    public function getWorkedToForPrintSummary($format = 'm.Y'){
        if($this->i_work !== self::I_WORK && !is_null($this->worked_to)) {
            $date = Carbon::createFromFormat('Y-m-d', $this->worked_to);
            return $date->format($format);
        }else {
            return 'настоящее время';
        }
    }

    public function prepareForPrint(){
        $data = [
            'id' => $this->id,
            'company' => $this->company,
            'position' => $this->position,
            'city' => $this->city,
            'worked_with' => $this->getWorkedWithInFormat(),
            'worked_to' => $this->getWorkedToForPrintSummary(),
            'duration_of_training' => $this->getDurationOfEmployment(),
        ];

        return $data;
    }

    public function prepareForEdit(){

//        $educationLevel = $this->educationLevel;

        $data = [
            'id' => $this->id,
//            'education_levels' => $educationLevel->attributesToArray(),
            'company' => $this->company,
            'position' => $this->position,
            'city' => $this->city,
            'i_work' => $this->i_work,
            'worked_month_with' => $this->getWorkedWithInFormat('m'),
            'worked_year_with' => $this->getWorkedWithInFormat('Y'),
            'worked_month_to' =>  $this->getWorkedToInFormat('m'),
            'worked_year_to' => $this->getWorkedToInFormat('Y'),
        ];

        return $data;
    }
}
