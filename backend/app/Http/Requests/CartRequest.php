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



            'product_variant_id' => [
                'required',
                'integer',
                'exists:product_variants,id',
                'distinct',
            ],

            'quantity' => [
                'required',
                'integer',
                'min:1',
            ],

            'unit_price' => [
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


            'product_variant_id.required' => 'Product variant is required.',
            'product_variant_id.exists' => 'Selected product variant does not exist.',
            'product_variant_id.distinct' => 'Duplicate product variants are not allowed.',

            'quantity.required' => 'Quantity is required.',
            'quantity.integer' => 'Quantity must be an integer.',
            'quantity.min' => 'Quantity must be at least 1.',

            'unit_price.required' => 'Unit price is required.',
            'unit_price.numeric' => 'Unit price must be a number.',
            'unit_price.min' => 'Unit price cannot be negative.',
        ];
    }
}
