<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSectionToCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->renameColumn('parent_id', 'section_id');
        });

        if (Schema::hasTable('categories')) {
            Schema::table('categories', function ($table) {
                $table->foreign('section_id')->references('id')->on('sections')->onDelete('SET NULL');
                $table->dropUnique('categories_name_unique');
                $table->unique(['name', 'section_id']);
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
        Schema::table('categories', function (Blueprint $table) {
            $table->renameColumn('parent_id', 'section_id');
        });
    }
}
