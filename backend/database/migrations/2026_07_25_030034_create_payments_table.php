<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {

            $table->id();

            $table->foreignId('order_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('provider');

            $table->string('method');

            $table->string('status')->default('pending');

            $table->decimal('amount', 10, 2);

            $table->string('transaction_id')->nullable()->unique();

            $table->timestamp('authorized_at')->nullable();

            $table->timestamp('captured_at')->nullable();

            $table->timestamp('refunded_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
