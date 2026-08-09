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

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me', [AuthController::class, 'me']);
    Route::resource('user', UserController::class)->except("show", 'create', 'store');
    Route::resource('role', RoleController::class)->except('show');
    Route::resource('address', AddressController::class)->except('show');
    Route::resource('category', CategoryController::class)->except('show');
    Route::resource('product', ProductController::class)->except('show');
    Route::resource('brand', BrandController::class)->except('show');
    Route::resource('product/image', ProductImageController::class)->except('show');
    Route::get("inventory", [InventoryController::class, 'index']);
    Route::resource('product/varient', ProductVariantController::class)->except('show');
    Route::resource('review', ReviewController::class)->except('show');
    Route::resource('cart', CartController::class)->except('show');
    Route::resource('wishlist', WishlistController::class)->except('show');
    //order and payment 
});
