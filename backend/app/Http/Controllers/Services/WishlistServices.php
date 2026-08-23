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


    public function getAllData(int $pagination)
    {
        return $this->model::with([
            'items.productVariant.product',
        ])
            ->latest()
            ->paginate($pagination);
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

    // have wishlist items id 
    public function destroy(string $id)
    {
        $userId = auth('api')->id();
        return DB::transaction(function () use ($id, $userId) {

            $wishlist = $this->model
                ->where('user_id', $userId)
                ->firstOrFail();

            $wishlistItem = $wishlist->items()
                ->where('id', $id)
                ->firstOrFail();

            $wishlistItem->delete();

            // Delete wislist if empty
            if (! $wishlist->items()->exists()) {
                $wishlist->delete();
            }

            return true;
        });
    }
}
