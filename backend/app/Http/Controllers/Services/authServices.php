<?php

namespace App\Http\Controllers\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
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
            'role_id'    => $data['role_id'] ?? null,
            'email'      => $data['email'],
            'password'   => Hash::make($data['password']),
            'status'     => $data['status'],
        ]);

        // Generate JWT Token
        $token = JWTAuth::fromUser($user);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ], 201);
    }

    /**
     * Login user.
     */
    public function login(array $data)
    {
        if (! $token = JWTAuth::attempt($data)) {
            return response()->json([
                'message' => 'Invalid data',
            ], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'user' => JWTAuth::user(),
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 20,
        ], 200);
    }

    /**
     * Logout user.
     */
    public function logout()
    {
        JWTAuth::logout();

        return response()->json([
            'message' => 'Successfully logged out',
        ], 200);
    }

    /**
     * Refresh JWT token.
     */
    public function refresh()
    {
        return response()->json([
            'access_token' => JWTAuth::refresh(),
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ]);
    }

    /**
     * Get authenticated user.
     */
    public function me()
    {
        return response()->json([
            'user' => JWTAuth::user(),
        ]);
    }
}
