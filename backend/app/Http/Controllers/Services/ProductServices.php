<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Http\Requests\AllProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
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
    //     "brand": "Dell",
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
                        'url'        => $path,
                        'alt_text'   => $imageData['alt_text'] ?? null,
                        'sort_order' => $imageData['sort_order'] ?? ($index + 1),
                        'is_primary' => $imageData['is_primary'] ?? false,
                    ]);
                }
            }

            if ($request->filled('variants')) {
                $product->variant()->createMany($request->input('variants'));
            }

            return $product->load('image', 'variant');
        });
    }


    public function update(Request $request, String $id)
    {

        $product = $this->getById($id);
        $productData = $request->except('__token');

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
