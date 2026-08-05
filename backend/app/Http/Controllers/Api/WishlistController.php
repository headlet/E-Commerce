<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\WishlistServices;
use App\Http\Requests\WishlistRequest;
use Illuminate\Http\Request;
use Override;

class WishlistController extends ResourcesController
{
    public function __construct(WishlistServices $service)
    {
        parent::__construct($service);
    }

    public function getValidationRequest()
    {
        return WishlistRequest::class;
    }

	public function getName()
    {
        return 'Wishlist';
    }
}
