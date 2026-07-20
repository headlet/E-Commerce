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
        return $this->model::where('id', $id)->first();
    }

    public function getAllData(int $pagination)
    {
        return $this->model::latest()->paginate($pagination);
    }

    public function store(Request $request)
    {
        $roles = $request->except('__token');

        return $this->model::create($roles);
    }

    public function edit(String $id)
    {
        $data = $this->getById($id);
        return $data;
    }

    public function destroy(String $id)
    {

        $data = $this->getById($id);
        if (!$data) {
            return false;
        }
        return $data->delete();
    }
}
