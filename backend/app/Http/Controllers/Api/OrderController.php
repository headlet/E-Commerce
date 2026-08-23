<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\OrderServices;
use App\Http\Requests\OrderRequest;
use Illuminate\Http\Request;
use Override;

class OrderController extends ResourcesController
{
    public function __construct(OrderServices $service)
    {
        parent::__construct($service);
    }

    public function getValidationRequest()
    {
        return OrderRequest::class;
    }

    public function getName()
    {
        return 'Order';
    }
}
