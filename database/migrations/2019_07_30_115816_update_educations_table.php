<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateEducationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('educations')) {
            Schema::table('educations', function (Blueprint $table) {
                $table->string('faculty')->nullable()->after('specialty');
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
        if (Schema::hasTable('educations')) {
            Schema::table('educations', function (Blueprint $table) {
                $table->dropColumn([
                    'faculty',
                ]);
            });
        }
    }
}
