<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\api\RoleController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('user', UserController::class)->except("show",'create','store');
    Route::resource('role', RoleController::class)->except('show');
});
