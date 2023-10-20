<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->string('status')->nullable();
            $table->bigInteger('supplier_id')->nullable();
            $table->dateTime('expired_at')->nullable();
            $table->string('invoice_id')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('details')->nullable();
            $table->string('count')->nullable();
            $table->string('type')->nullable();
            $table->string('room')->nullable();
            $table->string('user')->nullable();
            $table->string('history')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->dropColumn('paid');
        });
    }
}
