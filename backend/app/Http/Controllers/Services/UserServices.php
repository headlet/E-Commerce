<?php

namespace App\Http\Controllers\Services;

use App\Models\User;
use Illuminate\Http\Request;

class UserServices extends Services
{

    public function __construct(User $model)
    {
        parent::__construct($model);
    }

    public function update(string $id, Request $request)
    {

        $user = User::findorFail($id);

        $data = $request->except([
            '_token',
            'password_confirmation'
        ]);

        if (empty($data['password'])) {
            unset($data['password']);
        } else {
            $data['password'] = bcrypt($data['password']);
        }
        // if ($request->hasFile('image')) {
        //     if ($campaign->image && Storage::disk('public')->exists($campaign->image)) {
        //         Storage::disk('public')->delete($campaign->image);
        //     }
        //     $data['image'] = $request->file('image')->store('uploads/campaign', 'public');
        // }
        $user->update($data);
        return $user;
    }


    public function destroy(String $id)
    {

        $user = $this->getById($id);
        if (!$user) {
            return false;
        }
        return $user->delete();
    }
}
