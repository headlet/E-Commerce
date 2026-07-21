<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Override;

class ProductServices extends Services
{

    public function __construct(Product $model)
    {
        parent::__construct($model);
    }

    public function getAllData(int $pagination)
    {
        return $this->model::with('image')->latest()->paginate($pagination);
    }

    public function getById(string $id)
    {
        $product = $this->model::with('image')->findOrFail($id);
        return $product;
    }
}
