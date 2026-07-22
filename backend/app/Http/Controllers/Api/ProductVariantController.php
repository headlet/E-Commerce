<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\ProductVariantServices;
use App\Http\Requests\ProductVariantRequest;
use Illuminate\Http\Request;

class ProductVariantController extends ResourcesController
{
    public function __construct(ProductVariantServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest()
    {
        return ProductVariantRequest::class;
    }

    public function getName()
    {
        return 'Product Variant';
    }
}
