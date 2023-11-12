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
            $table->string('user_id')->nullable();
            $table->string('room_id')->nullable();
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
            $table->dropColumn('status');
            $table->dropColumn('supplier_id');
            $table->dropColumn('expired_at');
            $table->dropColumn('invoice_id');
            $table->dropColumn('created_by');
            $table->dropColumn('updated_by');
            $table->dropColumn('details');
            $table->dropColumn('count');
            $table->dropColumn('type');
            $table->dropColumn('user_id');
            $table->dropColumn('room_id');
        });
    }
}
