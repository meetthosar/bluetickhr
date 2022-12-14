<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Stringable::macro('initials', function(){
            $words = preg_split("/\s+/", (string)$this);
            $initials = "";

            foreach ($words as $w) {
                $initials .= $w[0];
            }

            return new static($initials);
        });
        Str::macro('initials', function(string $string){
            return (string) (new Stringable($string))->initials();
        });
    }
}
