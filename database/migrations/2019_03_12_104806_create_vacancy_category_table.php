<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacancyCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancy_category', function (Blueprint $table) {
            $table->integer('vacancy_id')->unsigned();
            $table->integer('category_id')->unsigned();

            $table->primary(['vacancy_id', 'category_id']);
            $table->index('vacancy_id');
            $table->index('category_id');
        });

        if (Schema::hasTable('vacancy_category')) {
            Schema::table('vacancy_category', function (Blueprint $table) {
                $table->foreign('vacancy_id')->references('id')->on('vacancies')->onDelete('cascade');
                $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
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
        Schema::dropIfExists('vacancy_category');
    }
}
