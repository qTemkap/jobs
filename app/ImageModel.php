<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageModel extends Model
{
    const PUBLIC_FOLDER_TO_ACCESS_THE_STORAGE = 'storage';
    const FOLDER_IN_WHICH_SYMBOLIC_LINK_IS_SENT = 'public';

    const TYPE_JOB_SEEKER_AVATAR_THUMB = 1;
    const TYPE_JOB_SEEKER_AVATAR = 2;

    const TYPE_EMPLOYER_AVATAR_THUMB = 10;
    const TYPE_EMPLOYER_AVATAR = 11;

    const TYPE_COMPANY_LOGO_THUMB = 20;
    const TYPE_COMPANY_LOGO = 21;
    const TYPE_COMPANY_LOGO_LARGE = 22;

    const TYPE_CERTIFICATE = 30;

    public static $typeConfig = [

        //JOB SEEKER AVATAR
        self::TYPE_JOB_SEEKER_AVATAR_THUMB => [
            'format' => [
                'height' => 30,
                'width' => 30,
            ],
            'model_type' => \App\JobSeeker::class,
            'directory' => 'avatars/job_seeker',
            'default_path' => '/images/auth.svg',
        ],

        self::TYPE_JOB_SEEKER_AVATAR => [
            'format' => [
                'height' => 152,
                'width' => 158,
            ],
            'model_type' => \App\JobSeeker::class,
            'directory' => 'avatars/job_seeker',
            'default_path' => null,
        ],


        //EMPLOYER AVATAR
        self::TYPE_EMPLOYER_AVATAR_THUMB => [
            'format' => [
                'height' => 30,
                'width' => 30,
            ],
            'model_type' => \App\Employer::class,
            'directory' => 'avatars/employer',
            'default_path' => '/images/auth.svg',
        ],

        self::TYPE_EMPLOYER_AVATAR => [
            'format' => [
                'height' => 152,
                'width' => 158,
            ],
            'model_type' => \App\Employer::class,
            'directory' => 'avatars/employer',
            'default_path' => null,
        ],

        //COMPANY LOGO
        self::TYPE_COMPANY_LOGO_THUMB => [
            'format' => [
                'height' => 72,
                'width' => 72,
            ],
            'model_type' => \App\Company::class,
            'directory' => 'logo/company',
            'default_path' => null,
        ],

        self::TYPE_COMPANY_LOGO => [
            'format' => [
                'height' => 152,
                'width' => 158,
            ],
            'model_type' => \App\Company::class,
            'directory' => 'logo/company',
            'default_path' => null,
        ],

        self::TYPE_COMPANY_LOGO_LARGE => [
            'format' => [
                'height' => 300,
                'width' => 300,
            ],
            'model_type' => \App\Company::class,
            'directory' => 'logo/company',
            'default_path' => null,
        ],

        self::TYPE_CERTIFICATE => [
            'format' => [
                'height' => 300,
                'width' => 300,
            ],
            'model_type' => \App\Certificate::class,
            'directory' => 'certificates',
            'default_path' => null,
            'extensions' => array('jpg','jpeg','png', 'pdf'),
            'max' => 5,
            'minWidth' => 120,
            'minHeight' => 120,
        ],

    ];


    public static function getDefaultPath($type){
        return self::$typeConfig[$type]['default_path'];
    }


    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'image_models';

    public function loadFileToModel($requestFile, $user_id, $model_id,  $type)
    {
        $this->type = $type;
        $this->model_type = $this->getModelType();
        $this->model_id = $model_id;

        //get filename with extension
        $filenameWithExtension = $requestFile->getClientOriginalName();
        //get filename without extension
        $filename = pathinfo($filenameWithExtension, PATHINFO_FILENAME);
        $this->filename = $this->createName($user_id, $filename);

        //get file extension
        $this->extension = $requestFile->getClientOriginalExtension();

        $this->path = $this->createPublicPath();
        $this->format = $this->getFormat();

    }

    public function getHeight(){
        return self::$typeConfig[$this->type]['format']['height'];
    }

    public function getWidth(){
        return self::$typeConfig[$this->type]['format']['width'];
    }

    public function getModelType(){
        return self::$typeConfig[$this->type]['model_type'];
    }

    public function createPublicPath(){

        $config = self::$typeConfig[$this->type];

        $directory = $config['directory'];
        $year = date("Y");
        $month = date("m");
        $day = date("d");

        return join(DIRECTORY_SEPARATOR, [
            $directory,
            $year,
            $month,
            $day
        ]);
    }

    public function createStoragePath(){
        return join(DIRECTORY_SEPARATOR, [
            self::PUBLIC_FOLDER_TO_ACCESS_THE_STORAGE,
            $this->path,
            $this->filename.'.'.$this->extension
        ]);
    }

    public function createName($user_id, $name){
        return md5($user_id . $name . microtime());
    }

    public function getFormat(){
        return $this->getHeight().'_'.$this->getWidth();
    }

    public function getStorageDirectory(){
        return join(DIRECTORY_SEPARATOR, [
            self::PUBLIC_FOLDER_TO_ACCESS_THE_STORAGE,
            $this->path
        ]);
    }

    public function getPublicPath(){
        return join('/', [
            self::PUBLIC_FOLDER_TO_ACCESS_THE_STORAGE,
            $this->path,
            $this->filename.'.'.$this->extension
        ]);
    }

    public function getAbsolutePublicPath(){
        return join('/', [
            env('APP_URL'),
            self::PUBLIC_FOLDER_TO_ACCESS_THE_STORAGE,
            '/storage/',
            $this->path,
            $this->filename.'.'.$this->extension
        ]);
    }

    public function getStoragePath(){
        return join(DIRECTORY_SEPARATOR, [
            self::FOLDER_IN_WHICH_SYMBOLIC_LINK_IS_SENT,
            $this->path,
            $this->filename.'.'.$this->extension
        ]);
    }
}
