<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\Services\ReviewServices;
use App\Http\Requests\ReviewRequest;
use Illuminate\Http\Request;
use Override;

class ReviewController extends ResourcesController
{

    public function __construct(ReviewServices $service)
    {
         parent::__construct($service);
    }


    public function getValidationRequest()
    {
        return ReviewRequest::class;
    }

    public function getName()
    {
        return 'Review';
    }
}
