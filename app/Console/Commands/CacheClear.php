<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class CacheClear extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cache:clear_all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear all cache & caching settings';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $exitCode = Artisan::call('cache:clear');
        echo 'Cache facade value cleared'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('optimize');
        echo 'Reoptimized class loader'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('route:cache');
        echo 'Routes cached'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('route:clear');
        echo 'Route cache cleared'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('view:clear');
        echo 'View cache cleared'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('config:clear');
        echo 'Clear Config cleared'.' with code: '.$exitCode.PHP_EOL;

        $exitCode = Artisan::call('config:cache');
        echo 'Config added to cache'.' with code: '.$exitCode.PHP_EOL;
    }
}
