<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMidTransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('midtrans', function (Blueprint $table) {
            $table->id();
            $table->string('username')->nullable();
            $table->string('order_id');
            $table->string('product_id')->nullable();
            $table->string('status')->nullable();
            $table->string('payment_type')->nullable();
            $table->string('payment_code')->nullable();
            $table->string('pdf')->nullable();
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
        Schema::dropIfExists('midtrans');
    }
}
