<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateSummaryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function (Blueprint $table) {
                $table->string('video')->nullable()->after('salary');
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
        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function (Blueprint $table) {
                $table->dropColumn([
                    'video',
                ]);
            });
        }
    }
}
