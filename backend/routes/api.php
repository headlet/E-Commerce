<?php

use App\Http\Controllers\Api\AddressController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\InventoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\ProductImageController;
use App\Http\Controllers\Api\ProductVariantController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\WishlistController;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {

    // Authentication
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me', [AuthController::class, 'me']);

    // Users & roles
    Route::apiResource('user', UserController::class)->except('create');
    Route::apiResource('role', RoleController::class);

    // Address
    Route::apiResource('address', AddressController::class);

    // Catalog
    Route::apiResource('category', CategoryController::class);
    Route::apiResource('brand', BrandController::class);
        Route::apiResource('product/image', ProductImageController::class);
    Route::apiResource('product/variant', ProductVariantController::class);
    Route::apiResource('product', ProductController::class);


    // Reviews
    Route::apiResource('review', ReviewController::class);

    // Shopping
    Route::apiResource('cart', CartController::class);
    Route::apiResource('wishlist', WishlistController::class);

    // Inventory
    Route::get('/inventory', [InventoryController::class, 'index']);
});
