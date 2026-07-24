<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [

            'user_id' => [
                'required',
                'exists:users,id',
            ],

            'product_id' => [
                'required',
                'exists:products,id',
            ],

            'rating' => [
                'required',
                'integer',
                'between:1,5',
            ],

            'title' => [
                'required',
                'string',
                'max:255',
            ],

            'body' => [
                'required',
                'string',
                'max:5000',
            ],

            'is_verified_purchase' => [
                'sometimes',
                'boolean',
            ],
        ];
    }

    /**
     * Custom validation messages.
     */
    public function messages(): array
    {
        return [
            'rating.between' => 'Rating must be between 1 and 5 stars.',
        ];
    }
}
