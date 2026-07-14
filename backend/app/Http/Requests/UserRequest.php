<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
    public function rules($id = null): array
    {

        return [
            'first_name' => 'required|string|max:100',
            'last_name'  => 'required|string|max:100',
            'dob'         => 'required|date',
            'phone' => ['required', 'string', 'max:20', Rule::unique('users', 'phone')->ignore($id),],

            'username' => ['required', 'string', 'max:50', Rule::unique('users', 'username')->ignore($id),],
            'gender'      => 'required|in:male,female,other',
            'role_id'     => 'nullable|exists:roles,id',

            'email'       => ['required', 'email', Rule::unique("users", "email")->ignore($id)],
            'password'    => 'nullable|string|min:8|confirmed',
            'status'      => 'sometimes|in:active,inactive,blocked',
        ];
    }
}
