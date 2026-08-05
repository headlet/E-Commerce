<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Override;
use PHPOpenSourceSaver\JWTAuth\Contracts\Providers\Auth;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class WishlistServices extends Services
{

    public function __construct(Wishlist $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        return
            DB::transaction(function () use ($request) {
                $wishlist = $this->model::firstOrCreate(
                    ['user_id' => JWTAuth::user()->id],
                    [
                        'name' => 'My Wishlist',
                        'is_default' => true,
                    ]
                );

                return $wishlist->items()->create([
                    'product_variant_id' => $request->product_variant_id,
                    'added_at' => now(),
                ]);
            });
    }

    public function destroy(string $id)
    {
        DB::transaction(function () use ($id) {

            $wishlist = $this->model
                ->where('user_id', JWTAuth::user()->id)
                ->firstOrFail();

            $wishlistItem = $wishlist->items()
                ->where('product_variant_id', $id)
                ->firstOrFail();

            $wishlistItem->delete();

            if (! $wishlist->items()->exists()) {
                $wishlist->delete();
            }
        });

        return true;
    }
}
