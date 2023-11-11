<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string("room_id")->nullable();
            $table->string("user_id");
            $table->string("asset_id");
            $table->string("report_description");
            $table->string("report_status")->default('active');
            $table->string("created_by")->nullable();
            $table->string("updated_by")->nullable();
            $table->string("history_id")->nullable();
            $table->string("report_type")->nullable();




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
