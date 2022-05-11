<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGenderToProfilesAndMakeSalaryNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('job_seekers')) {
            Schema::table('job_seekers', function ($table) {
                $table->tinyInteger('gender')->unsigned()->nullable();
            });
        }

        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->integer('salary')->nullable()->change();

            });
        }


        if (Schema::hasTable('employers')) {
            Schema::table('employers', function ($table) {
                $table->tinyInteger('gender')->unsigned()->nullable();
            });
        }

        if (Schema::hasTable('vacancies')) {
            Schema::table('vacancies', function ($table) {
                $table->integer('salary')->nullable()->change();
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
        if (Schema::hasTable('job_seekers')) {
            Schema::table('job_seekers', function ($table) {
                $table->dropColumn(['gender']);
            });
        };

        if (Schema::hasTable('employers')) {
            Schema::table('employers', function ($table) {
                $table->dropColumn(['gender']);
            });
        };
    }
}
