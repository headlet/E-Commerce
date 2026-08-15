<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductImageServices extends Services
{
    public function __construct(ProductImage $model)
    {
        parent::__construct($model);
    }


    public function store(Request $request)
    {
        try {
            DB::transaction(function () use ($request) {

                $productId = $request->input('product_id');

                foreach ($request->input('images', []) as $index => $imageData) {

                    $data = [
                        'product_id' => $productId,
                        'file' => $request
                            ->file("images.$index.file")
                            ->store('uploads/product', 'public'),
                        'alt_text' => $imageData['alt_text'] ?? null,
                        'sort_order' => $imageData['sort_order'] ?? ($index + 1),
                        'is_primary' => $imageData['is_primary'] ?? false,
                    ];

                    $this->model->create($data);
                }
            });

            return true;
        } catch (\Throwable $e) {
            return false;
        }
    }

    public function update(Request $request, String $id)
    {

        dd($request->all());
        $image = $this->getById($id);

        $data = $request->except('__token');

        if ($request->hasFile('file')) {

            if ($image->file && Storage::disk('public')->exists($image->file)) {
                Storage::disk('public')->delete($image->file);
            }

            $data['file'] = $request
                ->file('file')
                ->store('uploads/product', 'public');
        }

        return $image->update($data);
    }
}
