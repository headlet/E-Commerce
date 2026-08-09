<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WishlistItem extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'wishlist_id',
        'product_variant_id',
    ];

    public function wishlist()
    {
        return $this->belongsTo(Wishlist::class);
    }

    public function productVariant()
    {
        return $this->belongsTo(ProductVariant::class);
    }
}
