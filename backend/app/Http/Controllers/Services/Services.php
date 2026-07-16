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
}
