<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVacanciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->unsignedInteger('company_id');
            $table->string('position');
            $table->string('contact_name');
            $table->string('contact_phone', 12);
            $table->string('contact_email');
            $table->integer('salary');
            $table->string('salary_comment')->nullable();
            $table->text('description')->nullable();
            $table->tinyInteger('published')->unsigned()->default(0);
            $table->timestamps();

            $table->unique(['id', 'company_id']);
        });

        if (Schema::hasTable('vacancies')) {
            Schema::table('vacancies', function ($table) {
                $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
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
        Schema::dropIfExists('vacancies');
    }
}
