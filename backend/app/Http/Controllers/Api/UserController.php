<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\UserServices;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;

class UserController extends ResourcesController
{
    public function __construct(UserServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return UserRequest::class;
    }
}
