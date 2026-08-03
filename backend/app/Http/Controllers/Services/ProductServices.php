<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Http\Requests\AllProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;
use Override;

class ProductServices extends Services
{

    public function __construct(Product $model)
    {
        parent::__construct($model);
    }

    public function getAllData(int $pagination)
    {
        return $this->model::with('image', 'variant')->latest()->paginate($pagination);
    }

    public function getById(string $id)
    {
        $product = $this->model::with('image')->findOrFail($id);
        return $product;
    }


    //     {
    //     "category_id": 1,
    //     "name": "Laptop",
    //     "slug": "laptop",
    //     "description": "Gaming laptop",
    //     "brand-id": "1",
    //     "is_active": true,

    //     "images": [
    //         {
    //             "url": "...",
    //             "alt_text": "...",
    //             "is_primary": true
    //         }
    //     ],

    //     "variants": [
    //         {
    //             "color": "Black",
    //             "price": 1000,
    //             "stock": 5
    //         }
    //     ]
    // }

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

    public function destroy(String $id)
    {
        $product = $this->getById($id);
        DB::transaction(function () use ($product) {

            foreach ($product->image as $images) {
                Storage::disk('public')->delete($images->url);
            }

            return $product->delete();
        });
    }
}
