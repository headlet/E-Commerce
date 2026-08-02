<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Override;

class CategoryServices extends Services
{

    public function __construct(Category $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        $category = $request->except('__token');
        return $this->model->create($category);
    }

    public function update(Request $request, String $id)
    {
        $category = $this->getById($id);
        $data = $request->except('__token');
        return $category->update($data);
    }
}
