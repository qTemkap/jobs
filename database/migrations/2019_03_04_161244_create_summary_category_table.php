<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSummaryCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('summary_category', function (Blueprint $table) {
            $table->integer('summary_id')->unsigned();
            $table->integer('category_id')->unsigned();

            $table->primary(['summary_id', 'category_id']);
            $table->index('summary_id');
            $table->index('category_id');
        });

        if (Schema::hasTable('summary_category')) {
            Schema::table('summary_category', function (Blueprint $table) {
                $table->foreign('summary_id')->references('id')->on('summaries')->onDelete('cascade');
                $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
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
//        if (Schema::hasTable('summary_category')) {
//            Schema::table('summary_category', function ($table) {
//                $table->dropIndex('summary_category_summary_id_index');
//                $table->dropIndex('summary_category_category_id_index');
//                $table->dropForeign('summary_category_category_id_foreign');
//                $table->dropForeign('summary_category_summary_id_foreign');
//            });
//        }

        Schema::dropIfExists('summary_category');
    }
}
