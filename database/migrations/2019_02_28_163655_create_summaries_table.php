<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSummariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('summaries')) {
            Schema::create('summaries', function (Blueprint $table) {
                $table->integer('id')->unsigned()->autoIncrement();
                $table->unsignedInteger('user_id');
                $table->unsignedInteger('job_seeker_id');
                $table->string('position');
                $table->integer('salary');
                $table->string('salary_comment')->nullable();
                $table->string('institution');
                $table->string('specialty');
                $table->integer('city_id')->unsigned();
                $table->text('progress')->nullable();
                $table->date('study_with')->nullable();
                $table->date('study_to')->nullable();
                $table->text('information')->nullable();
                $table->tinyInteger('published')->unsigned()->default(0);
                $table->tinyInteger('show_data')->unsigned()->default(1);
                $table->timestamps();

                $table->unique(['id', 'user_id']);
                $table->unique(['id', 'job_seeker_id']);
            });
        }

        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('summaries');
        if (Schema::hasTable('job_seekers')) {
//            Schema::table('job_seekers', function ($table) {
//                $table->dropIndex('summaries_id_user_id_unique');
//                $table->dropIndex('summaries_id_job_seeker_id_unique');
//                $table->dropForeign('summaries_job_seeker_id_foreign');
//                $table->dropForeign('summaries_user_id_foreign');
//            });


        }
    }
}
