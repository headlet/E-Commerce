<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\AddressServices;
use App\Http\Requests\AddressRequest;
use Illuminate\Http\Request;

class AddressController extends ResourcesController
{
    public function __construct(AddressServices $services)
    {
        parent::__construct($services);
    }

    public function getValidationRequest(){
        return AddressRequest::class;
    }

    public function getName(){
        return 'Addres';
    }
}
