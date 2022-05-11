<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class Employer extends Model
{
    const DISPLAY_PERSONAL_DATA_IN_RESUME = 1;
    const NOT_DISPLAY_PERSONAL_DATA_IN_RESUME = 0;

    const GENDER_FEMALE = 0;
    const GENDER_MALE = 1;

    public static $aliasesForGender  = [
        0        => self::GENDER_FEMALE,
        'female' => self::GENDER_FEMALE,
        'women'  => self::GENDER_FEMALE,
        'she'    => self::GENDER_FEMALE,
        '🚺'    => self::GENDER_FEMALE,
        '♀'    => self::GENDER_FEMALE,
        1        => self::GENDER_MALE,
        'male'   => self::GENDER_MALE,
        'men'    => self::GENDER_MALE,
        'he'     => self::GENDER_MALE,
        '🚹'     => self::GENDER_MALE,
        '♂'     => self::GENDER_MALE,
    ];

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'employers';

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'user_id' => ['integer', 'exists:users,id'],
            'company_id' => ['integer', 'exists:companies,id'],
            'name' => ['required', 'string', 'max:255'],
            'surname' => ['required', 'string', 'max:255'],
            'patronymic' => ['nullable', 'string', 'max:255'],
            'date_of_birth' => ['date_format:"Y-m-d"', 'before:today', 'after:1901-01-01'],
            'city_id' => ['integer', 'exists:cities,id'],
            'phone' => ['string', 'max:12', 'unique:employers'],
            'address' => ['nullable', 'string', 'max:255'],
            'show_data' => ['boolean'],
        ];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'surname', 'patronymic', 'date_of_birth', 'city_id', 'phone', 'address', 'show_data'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'id', 'user_id');
    }

    protected static $storageTimeInMinutes = 2880;

    public function avatar($type = ImageModel::TYPE_EMPLOYER_AVATAR){

        $cacheKey = $this->getKeyForCachingAvatars($type);
        $defaultPath = ImageModel::getDefaultPath($type);
        $pathToAvatar = $defaultPath;

        if (Cache::has($cacheKey)) {
            return $pathToAvatar = Cache::get($cacheKey);
        } else {
            //IF don't find avatar in cache find it in data base
            $avatar = ImageModel::where([
                ['model_type', '=', self::class],
                ['model_id', '=', $this->id],
                ['type', '=', $type],
            ])->first();

            //if avatar exists save to cache
            if(!is_null($avatar)) {
                $pathToAvatar = $avatar->getAbsolutePublicPath();
                Cache::put($cacheKey, $pathToAvatar, self::$storageTimeInMinutes);
            } else { //else save to cache default picture
                Cache::put($cacheKey, $pathToAvatar, self::$storageTimeInMinutes);
            }

            return $pathToAvatar;
        }
    }

    /**
     * get name to add avatars to cache
     *
     * @return string
     */
    public function getKeyForCachingAvatars($type = ImageModel::TYPE_EMPLOYER_AVATAR){
        return implode( '_', [
            'avatar_e',
            $this->attributes['id'],
            $type
        ] );
    }

    /**
     * Указивает нужно ли отображать данные пользователя
     *
     * @return boolean
     */
    public function showData(){
        return boolval($this->show_data);
    }

    public function summaries(){
        return $this->hasMany('App\Summary', 'job_seeker_id', 'id');
    }

    public function company(){
        return $this->hasOne('App\Company', 'id','company_id');
    }

    public function city(){
        return $this->hasOne('App\City', 'id','city_id');
    }

    public function getCityName(){
        return (!is_null($this->city)) ? $this->city->name : '';
    }

    public function getAge(){
        if(!is_null($this->date_of_birth)){

            $age = Carbon::createFromFormat('Y-m-d', $this->date_of_birth)->age;
            $ageRest = ($age % 10);

            if($ageRest >= 5){
                $ageText = ' лет';
            } else {
                $ageText = ' года';
            }

            return $age.$ageText;
        } else {
            return '-';
        }
    }

    public function getFullName(){
        return join(' ', [
            (!is_null($this->surname)) ? $this->surname : '',
            $this->name,
            (!is_null($this->patronymic)) ? $this->patronymic : ''
        ] );
    }
}
