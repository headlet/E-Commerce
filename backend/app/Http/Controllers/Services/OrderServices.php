<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Override;

class OrderServices extends Services
{

    public function __construct(Order $model)
    {
        parent::__construct($model);
    }


    public function store(Request $request)
    {
        return DB::transaction(function () use ($request) {

            $productData = Arr::except($request->all(), ['images', 'variants']);
            $productData['slug'] = generateSlug($productData['name']);

            if ($this->model->where('slug', $productData['slug'])->exists()) {
                throw ValidationException::withMessages([
                    'name' => ['A product with this name already exists.'],
                ]);
            }

            $product = $this->model->create($productData);


            if ($request->has('images')) {

                foreach ($request->input('images') as $index => $imageData) {

                    $path = null;

                    if ($request->hasFile("images.$index.file")) {

                        $path = $request
                            ->file("images.$index.file")
                            ->store('uploads/product', 'public');
                    }

                    $product->image()->create([
                        'file'        => $path,
                        'alt_text'   => $imageData['alt_text'] ?? null,
                        'sort_order' => $imageData['sort_order'] ?? ($index + 1),
                        'is_primary' => $imageData['is_primary'] ?? false,
                    ]);
                }
            }

            if ($request->filled('variants')) {
                foreach ($request->input('variants') as $variantData) {

                    $variant = $product->variant()->create([
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
                }
            }

            return $product->load('image', 'variant', 'brand');
        });
    }


    public function update(Request $request, String $id)
    {

        $product = $this->getById($id);
        $productData = $request->except('__token');
        $productData['slug'] = generateSlug($productData['name']);

        if (
            $this->model
            ->where('slug', $productData['slug'])
            ->where('id', '!=', $id)
            ->exists()
        ) {
            throw ValidationException::withMessages([
                'name' => ['A product with this name already exists.'],
            ]);
        }

        return  $product->update($productData);
    }

    public function destroy(string $id)
    {
        $product = $this->getById($id);

        return DB::transaction(function () use ($product) {

            $images = $product->image()->get();

            foreach ($images as $image) {
                if (!empty($image->file)) {
                    Storage::delete($image->file);
                }
            }
            $product->image()->delete();
            $variants = $product->variant()->get();

            foreach ($variants as $variant) {

                $variant->inventory()->delete();

                $variant->delete();
            }

            return $product->delete();
        });
    }
}
