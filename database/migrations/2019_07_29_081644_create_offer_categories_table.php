<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfferCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('offer_categories')) {
            Schema::create('offer_categories', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->unsignedInteger('user_id');
                $table->string('category');
                $table->text('comment')->nullable();

                $table->timestamps();
            });


            if (Schema::hasTable('offer_categories')) {
                Schema::table('offer_categories', function ($table) {
                    $table->foreign('user_id', 'offer_category_request_user_id_foreign')->references('id')->on('users')->onDelete('cascade');
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (!Schema::hasTable('offer_categories')) {
            Schema::table('offer_categories', function ($table) {
                $table->dropForeign('offer_category_request_user_id_foreign');
            });
        }

        Schema::dropIfExists('offer_categories');
    }
}
