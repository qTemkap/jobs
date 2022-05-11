<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfferVacancyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_vacancy', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->unsignedInteger('vacancy_id');
            $table->unsignedInteger('summary_id');
            $table->unsignedInteger('job_seeker_id');
            $table->integer('rating')->default(0);
            $table->timestamps();

            $table->unique(['vacancy_id', 'summary_id']);
        });

        if (Schema::hasTable('offer_vacancy')) {
            Schema::table('offer_vacancy', function ($table) {
                $table->foreign('vacancy_id')->references('id')->on('vacancies')->onDelete('cascade');
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
                $table->foreign('job_seeker_id')->references('id')->on('job_seekers')->onDelete('cascade');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_vacancy');
    }
}
