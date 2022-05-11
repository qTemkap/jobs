<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNewSatusToRespondVacancy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('respond_vacancy')) {
            Schema::table('respond_vacancy', function (Blueprint $table) {
                $table->tinyInteger('new')->unsigned()->default(0);
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
        if (Schema::hasTable('respond_vacancy')) {
            Schema::table('respond_vacancy', function (Blueprint $table) {
                $table->dropColumn(['new']);
            });
        }
    }
}
