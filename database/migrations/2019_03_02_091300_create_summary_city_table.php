<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSummaryCityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('summary_city', function (Blueprint $table) {
            $table->integer('summary_id')->unsigned();
            $table->integer('city_id')->unsigned();

            $table->primary(['summary_id', 'city_id']);
            $table->index('summary_id');
            $table->index('city_id');
        });

        if (Schema::hasTable('summary_city')) {
            Schema::table('summary_city', function (Blueprint $table) {
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
                $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade');
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
        if (!Schema::hasTable('summary_city')) {
            Schema::table('summary_city', function ($table) {
                $table->dropIndex('summary_city_summaries_id_index');
                $table->dropIndex('summary_city_city_id_index');
                $table->dropForeign('summary_city_city_id_foreign');
                $table->dropForeign('summary_city_summaries_id_foreign');
            });
        }

        Schema::dropIfExists('summary_city');
    }
}
