<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddViewCountToVacanciesAndSummariesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('vacancies')) {
            Schema::table('vacancies', function (Blueprint $table) {
                $table->integer('hit_counter')->unsigned()->default(0);
                $table->integer('view_count')->unsigned()->default(0);
            });
        }

        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function (Blueprint $table) {
                $table->integer('hit_counter')->unsigned()->default(0);
                $table->integer('view_count')->unsigned()->default(0);
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
        if (Schema::hasTable('vacancies')) {
            Schema::table('vacancies', function ($table) {
                $table->dropColumn(['hit_counter', 'view_count']);
            });
        }

        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->dropColumn(['hit_counter', 'view_count']);
            });
        }
    }
}
