<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Services\AuthServices;
use App\Http\Requests\auth\loginRequest;
use App\Http\Requests\auth\registerRequest;
use App\Http\Requests\UserRequest;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    protected AuthServices $authServices;

    public function __construct(AuthServices $authServices)
    {
        $this->authServices = $authServices;
    }

    public function register(registerRequest $request)
    {
        $resources = $this->authServices->register(
            $request->validated()
        );

        return response()->json([
            'message' => 'User registered successfully',
            'data' => $resources['user'],
            'access_token' => $resources['token'],
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ], 201);
    }

    public function login(loginRequest $request)
    {
        $resources = $this->authServices->login($request->validated());

        if ($resources === null) {
            return response()->json([
                'message' => 'Invalid email or password.',
            ], 401);
        }

        return response()->json([
            'message' => 'Login successfully.',
            'data' => $resources['user'],
            'access_token' => $resources['token'],
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ], 200);
    }

    public function logout()
    {
        $this->authServices->logout();

        return response()->json([
            'message' => 'Successfully logged out.',
        ], 200);
    }

    public function refresh()
    {
        $token = $this->authServices->refresh();

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ]);
    }


    public function me()
    {
        return response()->json([
            'user' => $this->authServices->me(),
        ]);
    }
}
