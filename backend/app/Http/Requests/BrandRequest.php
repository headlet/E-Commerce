<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class BrandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation Rules
     */
    public function rules($id = null): array
    {
        return [
            'name' => [
                'required',
                'string',
                'max:100',
                Rule::unique('brands', 'name')->ignore($id),
            ],

            'slug' => [
                'required',
                'string',
                'max:150',
                Rule::unique('brands', 'slug')->ignore($id),
            ],

            'description' => [
                'nullable',
                'string',
            ],

            'is_active' => [
                'sometimes',
                'boolean',
            ],
        ];
    }
}
