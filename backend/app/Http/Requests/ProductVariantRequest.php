<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductVariantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [

            /*
            |--------------------------------------------------------------------------
            | Product
            |--------------------------------------------------------------------------
            */

            'product_id' => [
                'required',
                'exists:products,id',
            ],

            /*
            |--------------------------------------------------------------------------
            | Product Variants
            |--------------------------------------------------------------------------
            */

            'variants' => [
                'required',
                'array',
                'min:1',
            ],

            'variants.*.sku' => [
                'required',
                'string',
                'max:100',
                Rule::unique('product_variants', 'sku'),
            ],

            'variants.*.option_values' => [
                'required',
                'string',
                'max:255',
            ],

            'variants.*.price' => [
                'required',
                'numeric',
                'min:0',
            ],

            'variants.*.compare_at_price' => [
                'nullable',
                'numeric',
                'min:0',
            ],

            'variants.*.weight' => [
                'nullable',
                'numeric',
                'min:0',
            ],

            'variants.*.is_active' => [
                'sometimes',
                'boolean',
            ],

            /*
            |--------------------------------------------------------------------------
            | Inventory
            |--------------------------------------------------------------------------
            */

            'variants.*.quantity' => [
                'required',
                'integer',
                'min:0',
            ],

            'variants.*.reorder_point' => [
                'required',
                'integer',
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
            'product_id.exists' => 'The selected product does not exist.',

            'variants.required' => 'At least one product variant is required.',
            'variants.array' => 'Variants must be an array.',

            'variants.*.sku.required' => 'Each variant must have a SKU.',
            'variants.*.sku.unique' => 'The SKU has already been taken.',

            'variants.*.price.required' => 'Each variant must have a price.',
            'variants.*.price.numeric' => 'Price must be a number.',

            'variants.*.quantity.required' => 'Each variant must have a quantity.',
            'variants.*.quantity.integer' => 'Quantity must be an integer.',
            'variants.*.quantity.min' => 'Quantity cannot be negative.',

            'variants.*.reorder_point.required' => 'Each variant must have a reorder point.',
            'variants.*.reorder_point.integer' => 'Reorder point must be an integer.',
            'variants.*.reorder_point.min' => 'Reorder point cannot be negative.',
        ];
    }
}
