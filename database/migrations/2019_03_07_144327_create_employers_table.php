<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmployersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('employers')) {
            Schema::create('employers', function($table){
                $table->integer('id')->unsigned()->autoIncrement();
                $table->integer('user_id')->unsigned();
                $table->integer('company_id')->unsigned()->index();
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
            Schema::table('employers', function($table) {
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
        if (Schema::hasTable('employers')) {
            Schema::table('employers', function ($table) {
                $table->dropForeign('employers_user_id_foreign');
            });

            Schema::dropIfExists('employers');
        }
    }
}
