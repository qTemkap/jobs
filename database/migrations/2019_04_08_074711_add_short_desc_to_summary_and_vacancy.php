<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddShortDescToSummaryAndVacancy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vacancies', function (Blueprint $table) {
            $table->string('short_desc')->nullable()->after('description');
        });

        Schema::table('summaries', function (Blueprint $table) {
            $table->string('short_desc')->nullable()->after('information');
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
            $table->dropColumn(['short_desc']);
        });

        Schema::table('summaries', function($table) {
            $table->dropColumn(['short_desc']);
        });
    }
}
