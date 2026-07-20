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

            'product_id' => [
                'required',
                'exists:products,id'
            ],

            'sku' => [
                'required',
                'string',
                'max:100',
                Rule::unique('product_variants', 'sku')->ignore($id)
            ],

            'option_values' => [
                'required',
                'string',
                'max:255'
            ],

            'price' => [
                'required',
                'numeric',
                'min:0'
            ],

            'compare_at_price' => [
                'nullable',
                'numeric',
                'gte:price'
            ],

            'weight' => [
                'nullable',
                'numeric',
                'min:0'
            ],

            'is_active' => [
                'sometimes',
                'boolean'
            ]
        ];
    }
}
