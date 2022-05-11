<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacancyCityTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancy_city', function (Blueprint $table) {
            $table->integer('vacancy_id')->unsigned();
            $table->integer('city_id')->unsigned();

            $table->primary(['vacancy_id', 'city_id']);
            $table->index('vacancy_id');
            $table->index('city_id');
        });

        if (Schema::hasTable('vacancy_city')) {
            Schema::table('vacancy_city', function (Blueprint $table) {
                $table->foreign('vacancy_id')->references('id')->on('vacancies')->onDelete('cascade');
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
        if (!Schema::hasTable('vacancy_city')) {
            Schema::table('vacancy_city', function ($table) {
                $table->dropIndex('vacancy_city_vacancies_id_index');
                $table->dropIndex('vacancy_city_city_id_index');
                $table->dropForeign('vacancy_city_city_id_foreign');
                $table->dropForeign('vacancy_city_vacancies_id_foreign');
            });
        }

        Schema::dropIfExists('vacancy_city');
    }
}
