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

            $variant = $this->model->create([
                'product_id'       => $data['product_id'],
                'sku'              => $data['sku'],
                'option_values'    => $data['option_values'],
                'price'            => $data['price'],
                'compare_at_price' => $data['compare_at_price'] ?? null,
                'weight'           => $data['weight'] ?? null,
                'is_active'        => $data['is_active'] ?? true,
            ]);

            $variant->inventory()->create([
                'quantity'          => $data['quantity'],
                'reserved_quantity' => 0,
                'reorder_point'     => $data['reorder_point'],
            ]);

            return $variant->load('inventory');
        });
    }
    public function update(Request $request, string $id)
    {
        $variant = $this->getById($id);

        $data = $request->except('_token');

        return DB::transaction(function () use ($variant, $data) {

            $variant->update([
                'sku'              => $data['sku'],
                'option_values'    => $data['option_values'],
                'price'            => $data['price'],
                'compare_at_price' => $data['compare_at_price'] ?? null,
                'weight'           => $data['weight'] ?? null,
                'is_active'        => $data['is_active'] ?? true,
            ]);

            $variant->inventory->update([
                'quantity'      => $data['quantity'],
                'reorder_point' => $data['reorder_point'],
            ]);

            return $variant->load('inventory');
        });
    }
}
