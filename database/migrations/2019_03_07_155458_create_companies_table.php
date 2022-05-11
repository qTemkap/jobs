<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->unsignedInteger('user_id');
            $table->string('name');
            $table->integer('company_type_id')->unsigned();
            $table->integer('company_sizes_id')->unsigned()->nullable();
            $table->text('information')->nullable();
            $table->string('address')->nullable();
            $table->string('phone', 12)->nullable()->unique();
            $table->string('email')->unique()->nullable();
            $table->string('web_site')->nullable();
            $table->string('contact_name');
            $table->string('contact_phone', 12)->nullable();
            $table->string('contact_email');
            $table->timestamps();
        });

        if (Schema::hasTable('companies')) {
            Schema::table('companies', function (Blueprint $table) {
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('company_type_id')->references('id')->on('company_types');
                $table->foreign('company_sizes_id')->references('id')->on('company_sizes')->onDelete('SET NULL');
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
        Schema::dropIfExists('companies');
    }
}
