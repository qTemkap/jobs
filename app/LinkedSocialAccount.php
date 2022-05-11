<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LinkedSocialAccount extends Model
{
    /**
     * Связанная с моделью таблица.
     *
     * @var string
     */
    protected $table = 'social_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'provider_user_id', 'provider', 'user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    public function user()
    {
        return $this->belongsTo(\App\User::class, 'user_id', 'id');
    }

}
