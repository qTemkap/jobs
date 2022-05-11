<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExperiencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('job_seeker_id');
            $table->unsignedInteger('summary_id');
//            $table->integer('education_level_id')->unsigned()->index();
            $table->string('company');
            $table->string('position');
            $table->string('city');
            $table->tinyInteger('i_work')->nullable()->default(0);
            $table->date('worked_with')->nullable();
            $table->date('worked_to')->nullable();

            $table->timestamps();
        });

        if (Schema::hasTable('experiences')) {
            Schema::table('experiences', function ($table) {
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('job_seeker_id')->references('id')->on('job_seekers')->onDelete('cascade');
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
//                $table->foreign('education_level_id')->references('id')->on('education_levels');
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
        Schema::dropIfExists('experiences');
    }
}
