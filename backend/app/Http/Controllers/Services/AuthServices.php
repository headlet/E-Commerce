<?php

namespace App\Http\Controllers\Services;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Nette\Schema\ValidationException;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthServices
{
    /**
     * Register a new user.
     */
    public function register(array $data)
    {
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name'  => $data['last_name'],
            'username'   => $data['username'],
            'dob'        => $data['dob'],
            'phone'      => $data['phone'],
            'gender'     => $data['gender'],
            'role_id' => Role::where('name', 'Customer')->value('id'),
            'email'      => $data['email'],
            'password'   => $data['password'],
        ]);

        // Generate JWT Token
        $token = JWTAuth::fromUser($user);
        return [
            'user' => $user,
            'token' => $token,
        ];
    }

    public function login(array $credentials): ?array
    {
        if (! $token = JWTAuth::attempt($credentials)) {
            return null;
        }

        return [
            'user' => JWTAuth::user(),
            'token' => $token,
        ];
    }

    public function logout(): void
    {
        JWTAuth::logout();
    }

    public function refresh(): string
    {
        return JWTAuth::refresh();
    }
    
    public function me(): User
    {
        return JWTAuth::user();
    }
}
