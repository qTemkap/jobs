<?php

namespace App\Jobs;

use App\Summary;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UpdateSummaryHitCounter implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 2;

    protected $summary;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Summary $summary)
    {
        $this->summary = $summary;

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
        $this->summary->increment('hit_counter');
    }
}
