<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;

class AddressServices extends Services
{
    public function __construct(Address $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        $address = $request->except('__token');

        return $this->model->create($address);
    }

    public function update(Request $request, String $id) {
        $address = $this->getById($id);
        $data = $request->except('__token');

        return $address->update($data);
    }
}
