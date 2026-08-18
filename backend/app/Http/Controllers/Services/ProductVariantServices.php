<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductVariant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductVariantServices extends Services
{
    public function __construct(ProductVariant $model)
    {
        parent::__construct($model);
    }


    public function getAllData(int $pagination)
    {
        return $this->model::with('inventory')->paginate($pagination);
    }

    public function store(Request $request)
    {
        $data = $request->except('__token');

        return DB::transaction(function () use ($data) {

            $variantData = $data['variants'][0];

            $variant = $this->model->create([
                'product_id'       => $data['product_id'],
                'sku'              => $variantData['sku'],
                'option_values'    => $variantData['option_values'],
                'price'            => $variantData['price'],
                'compare_at_price' => $variantData['compare_at_price'] ?? null,
                'weight'           => $variantData['weight'] ?? null,
                'is_active'        => $variantData['is_active'] ?? true,
            ]);

            $variant->inventory()->create([
                'quantity'          => $variantData['quantity'],
                'reserved_quantity' => 0,
                'reorder_point'     => $variantData['reorder_point'],
            ]);

            return $variant->load('inventory');
        });
    }

    public function update(Request $request, string $id)
    {
        $variant = $this->getById($id);

        $data = $request->except('_token');


        return DB::transaction(function () use ($variant, $data) {

            $variantData = $data['variants'][0];

            $variant->update([
                'sku'              => $variantData['sku'],
                'option_values'    => $variantData['option_values'],
                'price'            => $variantData['price'],
                'compare_at_price' => $variantData['compare_at_price'] ?? null,
                'weight'           => $variantData['weight'] ?? null,
                'is_active'        => $variantData['is_active'] ?? true,
            ]);

            $variant->inventory->update([
                'quantity'      => $variantData['quantity'],
                'reorder_point' => $variantData['reorder_point'],
            ]);

            return $variant->load('inventory');
        });
    }
}
