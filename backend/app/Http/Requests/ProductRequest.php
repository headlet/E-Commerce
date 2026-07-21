<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
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

            'category_id' => [
                'required','exists:categories,id',
            ],

            'name' => [
                'required','string','max:255',
            ],

            'slug' => [
                'required','string','max:255',Rule::unique('products', 'slug')->ignore($id),
            ],

            'description' => [
                'nullable','string',
            ],

            'brand' => [
                'nullable','string','max:255',
            ],

            'is_active' => [
                'sometimes','boolean',
            ],

            //Product image

            'product_id' => [
                'required','exists:products,id',
            ],

            'url' => [
                'required','string','max:255',
            ],

            'alt_text' => [
                'nullable','string','max:255',
            ],

            'sort_order' => [
                'nullable','integer','min:0',
            ],

            'is_primary' => [
                'sometimes','boolean',
            ],

        ];
    }
}
