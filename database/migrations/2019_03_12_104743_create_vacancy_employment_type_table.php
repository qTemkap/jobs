<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacancyEmploymentTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancy_employment_type', function (Blueprint $table) {
            $table->integer('vacancy_id')->unsigned();
            $table->integer('employment_type_id')->unsigned();

            $table->primary(['vacancy_id', 'employment_type_id']);
            $table->index('vacancy_id');
            $table->index('employment_type_id');
        });

        if (Schema::hasTable('vacancy_employment_type')) {
            Schema::table('vacancy_employment_type', function (Blueprint $table) {
                $table->foreign('vacancy_id')->references('id')->on('vacancies')->onDelete('cascade');
                $table->foreign('employment_type_id')->references('id')->on('employment_types')->onDelete('cascade');
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
        Schema::dropIfExists('vacancy_employment_type');
    }
}
