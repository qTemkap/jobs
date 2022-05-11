<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobSeekerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('job_seekers')) {
            Schema::create('job_seekers', function($table){
                $table->integer('id')->unsigned()->autoIncrement();
                $table->integer('user_id')->unsigned();
                $table->string('name');
                $table->string('surname');
                $table->string('patronymic')->nullable();
                $table->date('date_of_birth')->nullable();
                $table->integer('city_id')->unsigned()->nullable();
                $table->string('address')->nullable();
                $table->string('phone', 12)->nullable()->unique();
                $table->addColumn('tinyInteger', 'show_data', ['length' => 1, 'default' => 1]);
                $table->timestamps();
            });
            Schema::table('job_seekers', function($table) {
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        if (Schema::hasTable('job_seekers')) {
            Schema::table('job_seekers', function ($table) {
                $table->dropForeign('job_seekers_user_id_foreign');
            });

            Schema::dropIfExists('job_seeker');
        }
    }
}
