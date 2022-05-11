<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->integer('id')->unsigned()->autoIncrement();
            $table->string('name');
            $table->string('subject');
            $table->string('district');
            $table->integer('population')->unsigned();
            $table->decimal('lat', 8, 6);
            $table->decimal('lon', 9, 6);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
