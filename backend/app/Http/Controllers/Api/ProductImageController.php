<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\ProductImageServices;
use App\Http\Requests\ProductImageRequest;
use Illuminate\Http\Request;

class ProductImageController extends ResourcesController
{
      public function __construct(ProductImageServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return ProductImageRequest::class;
    }

    public function getName(){
        return 'Product Image';
    } //
}
