<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyCityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_city', function (Blueprint $table) {
            $table->integer('company_id')->unsigned();
            $table->integer('city_id')->unsigned();

            $table->primary(['company_id', 'city_id']);
            $table->index('company_id');
            $table->index('city_id');
        });

        if (Schema::hasTable('company_city')) {
            Schema::table('company_city', function (Blueprint $table) {
                $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
                $table->foreign('city_id')->references('id')->on('cities');
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
        if (!Schema::hasTable('company_city')) {
            Schema::table('company_city', function ($table) {
                $table->dropIndex('company_city_summaries_id_index');
                $table->dropIndex('company_city_city_id_index');
                $table->dropForeign('company_city_city_id_foreign');
                $table->dropForeign('company_city_companies_id_foreign');
            });
        }

        Schema::dropIfExists('company_city');
    }
}
