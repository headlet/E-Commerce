<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\InventoryServices;
use App\Http\Requests\InventoryRequest;
use Illuminate\Http\Request;

class InventoryController extends ResourcesController
{

      public function __construct(InventoryServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return InventoryRequest::class;
    }

    public function getName(){
        return 'Inventory';
    }
}
