<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Services extends Controller
{
    protected $model;

    public function __construct($model)
    {
        $this->model = $model;
    }

    public function getById(string $id)
    {
        return $this->model::findOrFail($id);
    }

    public function getAllData(int $pagination)
    {
        return $this->model::latest()->paginate($pagination);
    }

    public function store(Request $request)
    {
        
        return $this->model::create(
            $request->all()
        );
    }

    public function edit(string $id)
    {
        return $this->getById($id);
    }

    public function destroy(string $id)
    {
        return $this->getById($id)->delete();
    }
}
