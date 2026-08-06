<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class CartServices extends Services
{
    public function __construct(Cart $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        return DB::transaction(function () use ($request) {

            $userId = JWTAuth::id();

            $cart = $this->model::firstOrCreate(
                [
                    'user_id' => $userId,
                ],
                [
                    'status' => 'active',
                ]
            );

            // Check if product already exists in cart
            $item = $cart->items()
                ->where('product_variant_id', $request->product_variant_id)
                ->first();

            if ($item) {
                $item->increment('quantity', $request->quantity);

                return $item->fresh();
            }

            return $cart->items()->create([
                'product_variant_id' => $request->product_variant_id,
                'quantity'           => $request->quantity,
                'unit_price'         => $request->unit_price,
                'added_at'           => now(),
            ]);
        });
    }

    public function update(Request $request, string $id)
    {
        return DB::transaction(function () use ($request, $id) {

            $cart = $this->model
                ->where('user_id', JWTAuth::id())
                ->firstOrFail();

            $cartItem = $cart->items()
                ->where('product_variant_id', $id)
                ->firstOrFail();

            $cartItem->update([
                'quantity' => $request->quantity,
            ]);

            return $cartItem->fresh();
        });
    }

    public function destroy(string $id)
    {
        return DB::transaction(function () use ($id) {

            $cart = $this->model
                ->where('user_id', JWTAuth::id())
                ->firstOrFail();

            $cartItem = $cart->items()
                ->where('product_variant_id', $id)
                ->firstOrFail();

            $cartItem->delete();

            // Delete cart if empty
            if (! $cart->items()->exists()) {
                $cart->delete();
            }

            return true;
        });
    }
}
