<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\ProductVariant;
use Illuminate\Http\Request;

class ProductVariantServices extends Services
{
       public function __construct(ProductVariant $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        $Variant = $request->except('__token');

        return $this->model->create($Variant);
    }

       public function update(Request $request, String $id) {
        $Variant = $this->getById($id);
        $data = $request->except('__token');
        return $Variant->update($data);
    }
}
