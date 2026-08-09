<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class InventoryRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'product_variant_id' => [
                'required',
                'integer',
                'exists:product_variants,id',
                'unique:inventories,product_variant_id',
            ],
            'quantity' => [
                'sometimes',
                'integer',
                'min:0',
            ],
            'reserved_quantity' => [
                'sometimes',
                'integer',
                'min:0',
            ],
            'reorder_point' => [
                'sometimes',
                'integer',
                'min:0',
            ],
        ];
    }
}
