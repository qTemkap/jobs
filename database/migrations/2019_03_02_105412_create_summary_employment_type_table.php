<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSummaryEmploymentTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('summary_employment_type', function (Blueprint $table) {
            $table->integer('summary_id')->unsigned();
            $table->integer('employment_type_id')->unsigned();

            $table->primary(['summary_id', 'employment_type_id']);
            $table->index('summary_id');
            $table->index('employment_type_id');
        });

        if (Schema::hasTable('summary_employment_type')) {
            Schema::table('summary_employment_type', function (Blueprint $table) {
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
                $table->foreign('employment_type_id')->references('id')->on('employment_types')->onDelete('cascade');
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
        Schema::dropIfExists('summary_employment_type');

        if (!Schema::hasTable('job_seekers')) {
            Schema::table('job_seekers', function ($table) {
                $table->dropIndex('summary_city_summary_id_index');
                $table->dropIndex('summary_city_city_id_index');
                $table->dropForeign('summary_city_city_id_foreign');
                $table->dropForeign('summary_city_summary_id_foreign');
            });
        }
    }
}
