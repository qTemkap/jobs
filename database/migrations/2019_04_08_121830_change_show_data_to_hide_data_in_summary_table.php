<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeShowDataToHideDataInSummaryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('summaries', function (Blueprint $table) {
            $table->dropColumn(['show_data']);
        });

        Schema::table('summaries', function (Blueprint $table) {
            $table->tinyInteger('hide_data')->unsigned()->default(0)->after('published');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('summaries', function (Blueprint $table) {
            $table->dropColumn(['hide_data']);
        });

        Schema::table('summaries', function (Blueprint $table) {
            $table->tinyInteger('show_data')->unsigned()->default(1)->after('published');
        });
    }
}
