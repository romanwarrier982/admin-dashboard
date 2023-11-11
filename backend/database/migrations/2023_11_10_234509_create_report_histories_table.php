<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReportHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('report_histories', function (Blueprint $table) {
            $table->id();
            $table->string("report_id");
            $table->string("created_by")->nullable();
            $table->string("updated_by")->nullable();
            $table->string("report_status")->nullable();
            $table->string("recieved_at")->nullable();
            $table->string("recieved_by")->nullable();
            $table->string("recieved_description")->nullable();
            $table->string("resolved_at")->nullable();
            $table->string("resolved_by")->nullable();
            $table->string("resolved_description")->nullable();
            $table->string("closed_at")->nullable();
            $table->string("closed_by")->nullable();
            $table->string("closed_description")->nullable();
            $table->string("assigned_at")->nullable();
            $table->string("assigned_by")->nullable();
            $table->string("assigned_description")->nullable();
            $table->string("assigned_to")->nullable();
            $table->string("assigned_status")->nullable();
            $table->string("forward_at")->nullable();
            $table->string("forward_by")->nullable();
            $table->string("forward_description")->nullable();
            $table->string("forward_to")->nullable();
            $table->string("forward_status")->nullable();

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
        Schema::dropIfExists('report_histories');
    }
}
