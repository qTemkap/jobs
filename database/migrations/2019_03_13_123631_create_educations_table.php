<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEducationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->dropForeign('summaries_city_id_foreign');
                $table->dropForeign('summaries_education_level_id_foreign');
            });
        }

        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function (Blueprint $table) {
                $table->dropColumn([
                    'education_level_id',
                    'institution',
                    'specialty',
                    'city_id',
                    'progress',
                    'study_with',
                    'study_to',
                ]);
            });
        }

        Schema::create('educations', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('job_seeker_id');
            $table->unsignedInteger('summary_id');
            $table->integer('education_level_id')->unsigned()->index();
            $table->string('institution');
            $table->string('specialty');
            $table->string('city');
            $table->tinyInteger('i_study')->nullable()->default(0);
            $table->date('study_with')->nullable();
            $table->date('study_to')->nullable();

            $table->timestamps();
        });

        if (Schema::hasTable('educations')) {
            Schema::table('educations', function ($table) {
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('job_seeker_id')->references('id')->on('job_seekers')->onDelete('cascade');
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
                $table->foreign('education_level_id')->references('id')->on('education_levels');
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
        Schema::dropIfExists('educations');
    }
}
