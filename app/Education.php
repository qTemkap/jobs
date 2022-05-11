<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
use phpDocumentor\Reflection\Types\Self_;

class Education extends Model
{
    const I_STUDY = 1;
    const I_DO_NOT_STUDY = 0;

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'educations';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'education_level_id', 'institution', 'specialty', 'faculty', 'city', 'i_study', 'study_with', 'study_to'
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

            'education_level_id' => ['required', 'integer', 'exists:education_levels,id'],
            'institution' => ['required', 'string', 'max:255'],
            'specialty' => ['required', 'string', 'max:255'],
            'faculty'  => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'i_study' => ['required', 'boolean'],

            'study_with' => ['required', 'date_format:"Y-m-d"', 'before:today', 'after:1901-01-01'],
            'study_to' => ['nullable', 'date_format:"Y-m-d"', 'after:1901-01-01', 'required_unless:i_study,1'],
        ];
    }

    /**
     * * @mixed array or true
     */
    public function isValidOrReturnErrors(){

        $this->makeVisible(['user_id', 'job_seeker_id', 'summary_id']);

        $validator = Validator::make($this->attributesToArray(), Education::rules());

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

    public function educationLevel(){
        return $this->hasOne('App\EducationLevel', 'id','education_level_id');
    }

    public function setStudyWith($year, $month){
        $date = Carbon::create($year, $month, 01);
        $this->setAttribute('study_with', $date->toDateString());
    }

    public function setStudyTo($year, $month){
        if(!is_null($year) && !is_null($month)) {
            $date = Carbon::create($year, $month, 01);
            $this->setAttribute('study_to', $date->toDateString());
        } else {
            $this->setAttribute('study_to', null);
        }
    }

    public function getStudyWithInFormat($format = 'm.Y'){
        $date = Carbon::createFromFormat('Y-m-d', $this->study_with);
        return $date->format($format);
    }

    public function getStudyToInFormat($format = 'm.Y'){
        if($this->i_study == self::I_DO_NOT_STUDY && !is_null($this->study_to)) {
            $date = Carbon::createFromFormat('Y-m-d', $this->study_to);
            return $date->format($format);
        }else {
            return null;
        }
    }

    public function getDurationOfTraining(){
        $to = Carbon::createFromFormat('Y-m-d', $this->study_with);

        if(!is_null($this->study_to)) {
            $from = Carbon::createFromFormat('Y-m-d', $this->study_to);
        } else {
            $from = Carbon::now();
        }

        $countOfMonth = $from->diffInMonths($to);
        $countOfYear = floor($countOfMonth / 12);

        $mOfYear = $countOfMonth - ($countOfYear * 12);

        $yearText = ' лет';

        if($countOfYear == 1){
            $yearText = ' год';
        } elseif ($countOfYear == 2 || $countOfYear == 3 || $countOfYear == 4){
            $yearText = ' года';
        }

        $mText = ' месяцев';
        if($mOfYear == 1){
            $mText = ' месяц';
        } elseif ($mOfYear == 2 || $mOfYear == 3 || $mOfYear == 4){
            $mText = ' месяца';
        }

        if($countOfYear < 1 && $countOfMonth > 0){
            return $mOfYear . $mText;
        } elseif($countOfYear > 0 && $countOfMonth > 0){
            return $countOfYear . $yearText .' '. $mOfYear . $mText;
        } elseif ($countOfYear > 0 && $countOfMonth == 0) {
            return $countOfYear . $yearText;
        } else {
            return '';
        }
    }

    public function prepareForShow(){
        $data = [
            'id' => $this->id,
            'education_levels' => $this->educationLevel->name,
            'institution' => $this->institution,
            'specialty' => $this->specialty,
            'faculty' => (!is_null($this->faculty)) ? $this->faculty : '',
            'city' => $this->city,
            'study_with' => $this->getStudyWithInFormat(),
            'study_to' => $this->getStudyToInFormat(),
            'duration_of_training' => $this->getDurationOfTraining(),
        ];

        return $data;
    }

    public function getWorkedToForPrintSummary($format = 'm.Y'){
        if($this->i_study == self::I_STUDY && !is_null($this->study_to)) {
            $date = Carbon::createFromFormat('Y-m-d', $this->study_to);
            return $date->format($format);
        }else {
            return 'настоящее время';
        }
    }

    public function prepareForPrint(){
        $data = [
            'id' => $this->id,
            'education_levels' => $this->educationLevel->name,
            'institution' => $this->institution,
            'specialty' => $this->specialty,
            'faculty' => (!is_null($this->faculty)) ? $this->faculty : '',
            'city' => $this->city,
            'study_with' => $this->getStudyWithInFormat(),
            'study_to' => $this->getWorkedToForPrintSummary(),
            'duration_of_training' => $this->getDurationOfTraining(),
        ];

        return $data;
    }

    public function prepareForEdit(){

        $educationLevel = $this->educationLevel;

        $data = [
            'id' => $this->id,
            'education_levels' => $educationLevel->attributesToArray(),
            'institution' => $this->institution,
            'specialty' => $this->specialty,
            'faculty' => (!is_null($this->faculty)) ? $this->faculty : '',
            'city' => $this->city,
            'i_study' => $this->i_study,
            'study_month_with' => $this->getStudyWithInFormat('m'),
            'study_year_with' => $this->getStudyWithInFormat('Y'),
            'study_month_to' =>  $this->getStudyToInFormat('m'),
            'study_year_to' => $this->getStudyToInFormat('Y'),
        ];

        return $data;
    }
}
