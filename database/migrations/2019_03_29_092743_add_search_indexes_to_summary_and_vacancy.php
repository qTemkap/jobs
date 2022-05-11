<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSearchIndexesToSummaryAndVacancy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vacancies', function (Blueprint $table) {
            DB::statement('ALTER TABLE `vacancies` ADD FULLTEXT search(`position`, `description`)');
        });

        Schema::table('summaries', function (Blueprint $table) {
            DB::statement('ALTER TABLE `summaries` ADD FULLTEXT search(`position`, `information`)');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vacancies', function($table) {
            $table->dropIndex('search');
        });

        Schema::table('summaries', function($table) {
            $table->dropIndex('search');
        });
    }
}
