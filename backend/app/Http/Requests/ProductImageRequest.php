<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductImageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules($id = null): array
    {
        // =========================
        // UPDATE
        // =========================
        if ($id) {
            return [
                'file' => [
                    'nullable',
                    'image',
                    'mimes:jpg,jpeg,png,webp',
                    'max:2048',
                ],

                'alt_text' => [
                    'nullable',
                    'string',
                    'max:255',
                ],

                'sort_order' => [
                    'nullable',
                    'integer',
                    'min:0',
                ],

                'is_primary' => [
                    'sometimes',
                    'boolean',
                ],
            ];
        }

        // =========================
        // CREATE
        // =========================
        else {
            return [
                'product_id' => [
                    'required',
                    'integer',
                    'exists:products,id',
                ],

                'images' => [
                    'required',
                    'array',
                    'min:1',
                ],

                'images.*.file' => [
                    'required',
                    'image',
                    'mimes:jpg,jpeg,png,webp',
                    'max:2048',
                ],

                'images.*.alt_text' => [
                    'nullable',
                    'string',
                    'max:255',
                ],

                'images.*.sort_order' => [
                    'nullable',
                    'integer',
                    'min:0',
                ],

                'images.*.is_primary' => [
                    'sometimes',
                    'boolean',
                ],
            ];
        }
    }
}
