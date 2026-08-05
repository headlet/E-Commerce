<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandServices extends Services
{
    public function __construct(Brand $model)
    {
        parent::__construct($model);
    }

}
