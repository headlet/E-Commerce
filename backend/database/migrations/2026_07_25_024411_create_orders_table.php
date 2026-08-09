<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {

            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->foreignId('addresses_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('status')->default('pending');

            $table->decimal('subtotal',10,2);

            $table->decimal('discount_total',10,2)->default(0);

            $table->decimal('tax_total',10,2)->default(0);

            $table->decimal('shipping_total',10,2)->default(0);

            $table->decimal('grand_total',10,2);

            $table->timestamp('placed_at')->nullable();

            $table->timestamps();

            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
