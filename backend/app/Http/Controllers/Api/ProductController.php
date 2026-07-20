<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\ProductServices;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;

class ProductController extends ResourcesController
{
      public function __construct(ProductServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return ProductRequest::class;
    }

    public function getName(){
        return 'Product';
    }
}
