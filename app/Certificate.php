<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Spatie\MediaLibrary\InteractsWithMedia;

class Certificate extends Model
{
    use InteractsWithMedia;


    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'certificates';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'description'
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

            'description' => ['required', 'string', 'max:3000'],
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

    public function prepareForShow(){
        $image = $this->getMedia(ImageModel::TYPE_CERTIFICATE)->first();
        if(!empty($image)) {
            $scan['path'] = $image->getUrl();
            $scan['size'] = File::size($image->getPath());
            $scan['id'] = $image->id;
        }

        $data = [
            'id' => $this->id,
            'description' => (!is_null($this->description)) ? $this->description : '',
            'path' => $scan['path'] ?? '',
            'size' => $scan['size'] ?? '',
            'fileId' => $scan['id'] ?? '',
        ];

        return $data;
    }


    public function prepareForPrint(){
        $data = [
            'id' => $this->id,
            'description' => (!is_null($this->description)) ? $this->description : '',
        ];

        return $data;
    }

    public function prepareForEdit(){
        $image = $this->getMedia(ImageModel::TYPE_CERTIFICATE)->first();
        if(!empty($image)) {
            $scan['path'] = $image->getUrl();
            $scan['size'] = File::size($image->getPath());
            $scan['id'] = $image->id;
        }

        $data = [
            'id' => $this->id,
            'description' => (!is_null($this->description)) ? $this->description : '',
            'path' => $scan['path'] ?? '',
            'size' => $scan['size'] ?? '',
            'fileId' => $scan['id'] ?? '',
        ];

        return $data;
    }
}
