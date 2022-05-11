<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEmployerRelations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('employers')) {
            Schema::table('employers', function (Blueprint $table) {
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
        if (Schema::hasTable('employers')) {
            Schema::table('employers', function ($table) {
                $table->dropForeign('employers_company_id_foreign');
            });
        }
    }
}
