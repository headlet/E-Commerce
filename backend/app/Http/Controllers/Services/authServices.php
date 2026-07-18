<?php

namespace App\Http\Controllers\Services;

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
        try {
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
                'data' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'expires_in' => JWTAuth::factory()->getTTL() * 20,
            ], 201);
        } catch (ValidationException $e) {
            throw $e;
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),


            ], 500);
        }
    }

    public function login(array $data)
    {
        try {
            if (! $token = JWTAuth::attempt($data)) {
                return response()->json([
                    'message' => 'Invalid Email or Password',
                ], 401);
            }

            return response()->json([
                'message' => 'Login successful',
                'user' => JWTAuth::user(),
                'access_token' => $token,
                'token_type' => 'Bearer',
                'expires_in' => JWTAuth::factory()->getTTL() * 20,
            ], 200);
        } catch (ValidationException $e) {
            throw $e;
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),


            ], 500);
        }
    }

    public function logout()
    {
        JWTAuth::logout();

        return response()->json([
            'message' => 'Successfully logged out',
        ], 200);
    }

    public function refresh()
    {
        return response()->json([
            'access_token' => JWTAuth::refresh(),
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ]);
    }

    public function me()
    {
        return response()->json([
            'user' => JWTAuth::user(),
        ]);
    }
}
