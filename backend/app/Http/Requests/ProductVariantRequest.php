<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductVariantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules($id = null): array
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
            | Variants
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
                'gte:variants.*.price',
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
        ];
    }
}
