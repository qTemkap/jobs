<?php

namespace App\Jobs;

use App\Vacancy;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UpdateVacancyHitCounter implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 2;

    protected $vacancy;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Vacancy $vacancy)
    {
        $this->vacancy = $vacancy;

//        if ($this->attempts() > 3) {
//            //
//        }
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->vacancy->increment('hit_counter');
    }
}
