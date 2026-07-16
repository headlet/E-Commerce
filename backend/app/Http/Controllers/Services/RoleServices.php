<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;
use Override;

class RoleServices extends Services
{
    public function __construct(Role $model)
    {
      parent::__construct($model);
    }

    public function store(Request $request){
        $roles = $request->except('__token');

        return $this->model::create($roles);
    }

    public function edit(String $id){
        $role = $this->getById($id);
        return $role;
    }

    public function update(){

    }
}
