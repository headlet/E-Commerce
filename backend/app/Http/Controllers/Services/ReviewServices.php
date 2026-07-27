<?php

namespace App\Http\Controllers\Services;

use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ReviewServices extends Services
{
    public function __construct(Review $model)
    {
        parent::__construct($model);
    }

    public function update(Request $request, string $id)
    {
        $review = $this->getById($id);

        Gate::authorize('update', $review);

        $review->update(
            $request->validated()
        );

        return $review;
    }

    public function destroy(string $id)
    {
        $review = $this->getById($id);

        Gate::authorize('delete', $review);

        return $review->delete();
    }
}
