<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCertificatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('certificates')) {
            Schema::create('certificates', function (Blueprint $table) {
                $table->integer('id')->unsigned()->autoIncrement();
                $table->unsignedInteger('user_id');
                $table->unsignedInteger('job_seeker_id');
                $table->unsignedInteger('summary_id');
                $table->text('description')->nullable();
                $table->timestamps();
            });
        }

        if (Schema::hasTable('certificates')) {
            Schema::table('certificates', function ($table) {
                $table->foreign('user_id', 'certificates_user_id_foreign_key')->references('id')->on('users')->onDelete('cascade');
                $table->foreign('job_seeker_id', 'certificates_job_seeker_id_foreign_key')->references('id')->on('job_seekers')->onDelete('cascade');
                $table->foreign('summary_id', 'certificates_summary_id_foreign_key')->references('id')->on('summaries')->onDelete('cascade');
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
        if (Schema::hasTable('certificates')) {
            Schema::table('certificates', function ($table) {
                $table->dropForeign('certificates_user_id_foreign_key');
                $table->dropForeign('certificates_job_seeker_id_foreign_key');
                $table->dropForeign('certificates_summary_id_foreign_key');
            });
        }

        Schema::dropIfExists('certificates');
    }
}
