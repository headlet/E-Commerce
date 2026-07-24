<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InventoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'product_variant_id' => [
                'required',
                'exists:product_variants,id',
            ],

            'quantity' => [
                'required',
                'integer',
                'min:0',
            ],

            'reserved_quantity' => [
                'required',
                'integer',
                'min:0',
                'lte:quantity',
            ],

            'reorder_point' => [
                'required',
                'integer',
                'min:0',
            ],
        ];
    }

    public function messages(): array
    {
        return [
            'reserved_quantity.lte' => 'Reserved quantity cannot exceed available quantity.',
        ];
    }
}
