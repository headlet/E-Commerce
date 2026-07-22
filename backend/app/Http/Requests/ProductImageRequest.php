<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class ProductImageRequest extends FormRequest
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
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //Product image

            'product_id' => [
                'required',
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
