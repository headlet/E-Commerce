<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\ProductImage;
use Illuminate\Http\Request;

class ProductImageServices extends Services
{
    public function __construct(ProductImage $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        $Image = $request->except('__token');

        return $this->model->create($Image);
    }

    public function update(Request $request, String $id)
    {
        $Image = $this->getById($id);
        $data = $request->except('__token');
        return $Image->update($data);
    }
}
