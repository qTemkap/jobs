<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSummaryVisebiletyTypeField extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('summaries')) {
            Schema::table('summaries', function ($table) {
                $table->integer('education_level_id')->unsigned()->index();
            });

            Schema::table('summaries', function ($table) {
                $table->foreign('education_level_id')->references('id')->on('education_levels')->onDelete('restrict');
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
            Schema::table('summaries', function ($table) {
                $table->dropForeign('summaries_education_level_id_foreign');
                $table->dropIndex('summaries_education_level_id_index');
                $table->dropColumn(['published', 'show_data', 'education_level_id']);
            });
        }
    }
}
