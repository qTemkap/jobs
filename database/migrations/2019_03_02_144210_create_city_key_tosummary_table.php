<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCityKeyTosummaryTable extends Migration
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
                $table->foreign('city_id')->references('id')->on('cities')->onDelete('restrict');
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
        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->dropForeign('summaries_city_id_foreign');
            });
        }
    }
}
