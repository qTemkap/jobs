<?php

namespace App\Providers;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        if (!Config::get('app.debug')) {
            URL::forceScheme('https');
        }
        // current password validation rule
        Validator::extend('current_password', function ($attribute, $value, $parameters, $validator) {
            return Hash::check($value, Auth::user()->password);
        });

        //SET LOCAL CONFIGURATION FOR DATE MANAGEMENT
        setlocale(LC_ALL, 'ru_RU.utf8');
        Carbon::setLocale(config('app.locale'));

        view()->composer('*', function($view)
        {
            //SET VERSION OF INCLUDE FILES
            $view->with('jsAndCssVersion', 4);

            if(Auth::check()){
                $view->with('avatar_thumb', Auth::user()->getAvatarThumb());
            } else {
                return '/images/auth.svg';
            }
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
