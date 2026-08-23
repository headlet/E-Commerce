<?php

namespace App\Http\Controllers\Services;

use App\Events\UserRegistered;
use App\Models\EmailVerificationToken;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;

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
            'role_id'    => Role::where('name', 'Customer')->value('id'),
            'email'      => $data['email'],

            // Important
            'password'   => Hash::make($data['password']),
        ]);

        $verificationToken = Str::random(64);

        EmailVerificationToken::create([
            'user_id' => $user->id,

            // Never store the raw token
            'token_hash' => hash(
                'sha256',
                $verificationToken
            ),

            // Token valid for 60 minutes
            'expires_at' => now()->addMinutes(60),
        ]);

        event(new UserRegistered(
            $user,
            $verificationToken
        ));

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
        JWTAuth::invalidate(JWTAuth::getToken());
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
