<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\BrandServices;
use App\Http\Requests\BrandRequest;
use Illuminate\Http\Request;

class BrandController extends ResourcesController
{

    public function __construct(BrandServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest()
    {
        return BrandRequest::class;
    }

    public function getName()
    {
        return 'Brand';
    }
}
