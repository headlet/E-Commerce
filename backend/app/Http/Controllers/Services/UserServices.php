<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserServices extends Controller
{

    public function __construct(User $model)
    {
        parent::__construct($model);
    }


    public function getById(string $id)
    {
        return [
            'user' => User::where('id', $id)->first(),
        ];
    }

    public function update(string $id, Request $request)
    {

        $user = User::findorFail($id);

        $data = $request->except('_token');

        // if ($request->hasFile('image')) {
        //     if ($campaign->image && Storage::disk('public')->exists($campaign->image)) {
        //         Storage::disk('public')->delete($campaign->image);
        //     }
        //     $data['image'] = $request->file('image')->store('uploads/campaign', 'public');
        // }


        $user->update($data);

        return $user;
    }
}
