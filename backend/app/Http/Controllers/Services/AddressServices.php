<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class AddressServices extends Services
{
    public function __construct(Address $model)
    {
        parent::__construct($model);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['user_id'] = JWTAuth::user()->id;

        if (!empty($data['is_default']) && $data['is_default']) {
            Address::where('user_id', $data['user_id'])
                ->update(['is_default' => false]);
        }

        return Address::create($data);
    }

    public function update(Request $request, string $id)
    {
        $address = $this->getById($id);

        $data = $request->all();

        unset($data['user_id']);

        if (!empty($data['is_default'])) {
            Address::where('user_id', $address->user_id)
                ->where('id', '!=', $id)
                ->update([
                    'is_default' => false,
                ]);
        }

        $address->update($data);

        return $address;
    }
}
