<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\CategoryServices;
use App\Http\Requests\CategroyRequest;
use Illuminate\Http\Request;

class CategoryController extends ResourcesController
{

      public function __construct(CategoryServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return CategroyRequest::class;
    }

    public function getName(){
        return 'Categroy';
    }
}
