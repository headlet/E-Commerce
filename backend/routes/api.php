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
    Route::apiResource('role', RoleController::class)->except('create');

    // Address
    Route::apiResource('address', AddressController::class)->except('create');

    // Catalog
    Route::apiResource('category', CategoryController::class)->except('create');
    Route::apiResource('brand', BrandController::class)->except('create');
    Route::apiResource('product', ProductController::class)->except('create');
    Route::apiResource('product/image', ProductImageController::class)->except('create');
    Route::apiResource('product/variant', ProductVariantController::class)->except('create');

    // Reviews
    Route::apiResource('review', ReviewController::class)->except('create');

    // Shopping
    Route::apiResource('cart', CartController::class)->except('create');
    Route::apiResource('wishlist', WishlistController::class)->except('create');

    // Inventory
    Route::get('/inventory', [InventoryController::class, 'index']);
});
