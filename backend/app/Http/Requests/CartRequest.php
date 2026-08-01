<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules.
     */
    public function rules(): array
    {
        return [
            // Cart
            'user_id' => [
                'required',
                'integer',
                'exists:users,id',
            ],

            'status' => [
                'nullable',
                Rule::in(['active', 'ordered', 'abandoned']),
            ],

            // Cart Items
            'items' => [
                'required',
                'array',
                'min:1',
            ],

            'items.*.product_variant_id' => [
                'required',
                'integer',
                'exists:product_variants,id',
                'distinct',
            ],

            'items.*.quantity' => [
                'required',
                'integer',
                'min:1',
            ],

            'items.*.unit_price' => [
                'required',
                'numeric',
                'min:0',
            ],
        ];
    }

    /**
     * Custom validation messages.
     */
    public function messages(): array
    {
        return [
            'user_id.required' => 'User is required.',
            'user_id.exists' => 'Selected user does not exist.',

            'items.required' => 'At least one cart item is required.',
            'items.array' => 'Items must be an array.',
            'items.min' => 'At least one item must be added.',

            'items.*.product_variant_id.required' => 'Product variant is required.',
            'items.*.product_variant_id.exists' => 'Selected product variant does not exist.',
            'items.*.product_variant_id.distinct' => 'Duplicate product variants are not allowed.',

            'items.*.quantity.required' => 'Quantity is required.',
            'items.*.quantity.integer' => 'Quantity must be an integer.',
            'items.*.quantity.min' => 'Quantity must be at least 1.',

            'items.*.unit_price.required' => 'Unit price is required.',
            'items.*.unit_price.numeric' => 'Unit price must be a number.',
            'items.*.unit_price.min' => 'Unit price cannot be negative.',
        ];
    }
}
