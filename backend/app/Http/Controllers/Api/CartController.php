<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\CartServices;
use App\Http\Requests\CartRequest;
use Illuminate\Http\Request;
use Override;

class CartController extends ResourcesController
{
    public function __construct(CartServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest()
    {
        return CartRequest::class;
    }

    public function getName()
    {
        return 'Cart';
    }
}
