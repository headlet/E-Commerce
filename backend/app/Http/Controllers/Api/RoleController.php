<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\RoleServices;
use App\Http\Requests\RoleRequest;
use Illuminate\Http\Request;

class RoleController extends ResourcesController
{
    public function __construct(RoleServices $services)
    {
        parent::__construct($services);
    }

    public function getName(){
        return 'Role';

    }

    public function getValidationRequest(){
        return RoleRequest::class;
    }
}
