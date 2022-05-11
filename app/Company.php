<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Company extends Model
{
    const EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'companies';

    /**
     * Получить правила проверки для применения к запросу.
     *
     * @return array
     */
    public static function rules()
    {
        return array_merge([
            self::rulesForRelations(),
            self::rulesForCommon(),
            self::rulesForInformation(),
            self::rulesForAbout(),
            self::rulesForContacts(),
        ]);
    }

    /**
     * Получить правила проверки для данных описывающих зависимости.
     *
     * @return array
     */
    public static function rulesForRelations(){
        return [
            'user_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }

    /**
     * Получить правила проверки для общей информации.
     *
     * @return array
     */
    public static function rulesForCommon(){
        return [
            'name' => ['required', 'string', 'max:255'],

            'company_type_id' => ['required', 'integer', 'exists:company_types,id'],
            'company_sizes_id' => ['nullable', 'integer', 'exists:company_sizes,id'],
        ];
    }

    /**
     * Получить правила проверки для описания компании.
     *
     * @return array
     */
    public static function rulesForInformation(){
        return [
            'information' => ['nullable', 'string', 'max:2000'],
        ];
    }


    /**
     * Получить правила проверки для информации о компании.
     *
     * @return array
     */
    public static function rulesForAbout(){
        return [

            'address' => ['nullable', 'string', 'max:255'],
            'phones' => ['nullable', 'array'],
            'phones.*' => ['distinct', 'string', 'max:12'],
            'email' => ['nullable', 'string', 'email', 'max:255'],
            'web_site' => ['nullable', 'string', 'max:255'],
        ];
    }

    /**
     * Получить правила проверки для контактной информации.
     *
     * @return array
     */
    public static function rulesForContacts(){
        return [
            'contact_name' => ['required', 'string', 'max:255'],
            'contact_phone' => ['required', 'string', 'max:12'],
            'contact_email' => ['nullable', 'string', 'email'],
        ];
    }


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'company_type_id',
        'company_sizes_id',
        'information',
        'address',
        'phones',
        'email',
        'web_site',
        'contact_name',
        'contact_phone',
        'contact_email',
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

    /**
     * Атрибуты, которые нужно преобразовать в нативный тип.
     *
     * @var array
     */
    protected $casts = [
        'phones' => 'array',
    ];

    protected static $storageTimeInMinutes = 2880;

    public function logo($type = ImageModel::TYPE_COMPANY_LOGO_LARGE){

        $cacheKey = $this->getKeyForCachingLogos($type);
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
     * get name to add logo to cache
     *
     * @return string
     */
    public function getKeyForCachingLogos($type = ImageModel::TYPE_COMPANY_LOGO){
        return implode( '_', [
            'logo_c',
            $this->attributes['id'],
            $type
        ] );
    }

    public function user()
    {
        return $this->hasOne(\App\User::class, 'id', 'user_id');
    }

    public function employer()
    {
        return $this->hasMany(\App\Employer::class, 'company_id', 'id');
    }

    public function vacancies(){
        return $this->hasMany('App\Vacancy', 'company_id', 'id');
    }

    public function cities(){
        return $this->belongsToMany('App\City', 'company_city', 'company_id', 'city_id');
    }

    public function type(){
        return $this->hasOne('App\CompanyType', 'id','company_type_id');
    }

    public function size(){
        return $this->hasOne('App\CompanySize', 'id','company_sizes_id');
    }

    public function getCreatedDate(){
        return $this->created_at->formatLocalized('%d %B %Y');
    }

    public function setContactName($name, $surname, $patronymic = null){
        $this->contact_name = join(' ', [
            $name,
            $surname,
            (!is_null($patronymic)) ? $patronymic : ''
        ] );
    }

    public function prepareForEdit(){
        $cities = $this->cities()->select(['id', 'name', 'population'])->orderByDesc('population')->get();
        $company_types = $this->type()->select(['id', 'name'])->get();
        $company_size = $this->size()->select(['id', 'name'])->get();

        $data = [
            'id' => $this->id,
            'name' => $this->name,
            'cities' => $cities->toArray(),
            'company_types' => $company_types->toArray(),
            'company_size' => $company_size->toArray(),
            'information' => (!is_null($this->information)) ? $this->information : '',
            'address' => $this->address,
            'phones' => $this->phones,
            'email' => $this->email,
            'web_site' => $this->web_site,
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_email' => $this->contact_email,
            'logo' => $this->logo(),
        ];

        return $data;
    }

    public function prepareForShow(){
        $company_types = $this->type;
        $company_size = $this->size;

        $data = [
            'id' => $this->id,
            'load_vacancies' => route('company.vacancies', ['company_id' => $this->id], false),
            'name' => $this->name,
            'company_types' => (!is_null($company_types)) ? $company_types->name : [],
            'company_size' => (!is_null($company_size)) ? $company_size->name : null,
            'information' => (!is_null($this->information)) ? $this->information : '',
            'email' => $this->email,
            'web_site' => $this->web_site,
            'logo' => $this->logo(),
        ];

        return $data;
    }

    public function prepareForShowInVacanciesSearch(){

        return [
            'show' => route('company.show', ['id' => $this->id]),
            'name' => $this->name,
            'address' => $this->address,
            'web_site' => $this->web_site,
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_email' => $this->contact_email,
            'logo' => $this->logo(),
            'logo_thumb' =>$this->logo(ImageModel::TYPE_COMPANY_LOGO_THUMB),
        ];
    }

    public function prepareForCreateVacancy(){
        $data = [
            'link_to_offer_category' => route('employer.offer_category', [], false),
            'contact_name' => $this->contact_name,
            'contact_phone' => $this->contact_phone,
            'contact_email' => $this->contact_email,
            'logo' => $this->logo(),
        ];

        return $data;
    }

    public function prepareForShowVacancy(){
        $data = [
            'name' => $this->name,
            'show' => route('company.show', ['id' => $this->id]),
            'logo' => $this->logo(),
            'logo_thumb' =>$this->logo(ImageModel::TYPE_COMPANY_LOGO_THUMB),
        ];

        return $data;
    }
}
