<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FixCompanyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('companies')) {
            Schema::table('companies', function ($table) {
                $table->dropUnique('companies_email_unique');
                $table->dropUnique('companies_phone_unique');
                $table->dropColumn(['phone']);
                $table->string('phones')->nullable();
            });
        };
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('companies')) {
            Schema::table('companies', function ($table) {
                $table->string('phone', 12)->nullable()->unique();
                $table->dropColumn(['phones']);
            });
        };
    }
}
