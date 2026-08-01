<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WishlistRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => [
                'required',
                'exists:users,id',
            ],

            'name' => [
                'required',
                'string',
                'max:255',
            ],

            'is_default' => [
                'nullable',
                'boolean',
            ],

            'items' => [
                'required',
                'array',
                'min:1',
            ],

            'items.*.product_variant_id' => [
                'required',
                'exists:product_variants,id',
                'distinct',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'items.required' => 'Wishlist must contain at least one item.',
            'items.*.product_variant_id.distinct' => 'Duplicate products are not allowed.',
        ];
    }
}
