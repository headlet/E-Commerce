<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShipmentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'order_id' => [
                'required',
                'exists:orders,id',
            ],

            'carrier' => [
                'required',
                'string',
                'max:100',
            ],

            'service' => [
                'required',
                'string',
                'max:100',
            ],

            'tracking_number' => [
                'nullable',
                'string',
                'max:255',
                'unique:shipments,tracking_number',
            ],

            'status' => [
                'required',
                'string',
                'max:50',
            ],

            'shipped_at' => [
                'nullable',
                'date',
            ],

            'delivered_at' => [
                'nullable',
                'date',
                'after_or_equal:shipped_at',
            ],
        ];
    }
}
