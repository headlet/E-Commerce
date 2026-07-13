<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException; // 1. Import this class
use Tymon\JWTAuth\Facades\JWTAuth;

class ResourcesController extends Controller
{
    protected $service;

    public function __construct($service)
    {
        $this->service = $service;
    }

    public function getValidationRequest()
    {
        return '';
    }

    public function index() {}

    public function edit() {}

    public function update(Request $request, String $id)
    {
        try {
            $resources = $this->service->getById($id);

            if (!$resources) {
                return response()->json([
                    'message' => 'Resource not found',
                ], 404);
            }

            $validationRequestClass = $this->getValidationRequest();

            if (!empty($validationRequestClass) && class_exists($validationRequestClass)) {
                $validator = new $validationRequestClass();

                // This automatically stops code execution and sends a 422 JSON if validation fails
                $request->validate(
                    $validator->rules(),
                    $validator->messages() ?? [],
                    $validator->attributes() ?? []
                );
            }

            $response = $this->service->update($id, $request);

            if (isset($response['error'])) {
                return response()->json([
                    'message' => 'Error while updating resource: ' . $response['error'],
                ], 400);
            }

            return response()->json([
                'message' => 'Resource updated successfully',
                'data' => $response, // Changed from $user to make it a generic resource response
            ], 200);

        } catch (ValidationException $e) {
            // 2. Re-throw this exception so Laravel can handle and send the 422 validation error to React
            throw $e;
        } catch (\Throwable $th) {
            // 3. Handle unexpected system or database errors safely
            return response()->json([
                'message' => 'An unexpected error occurred',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function delete() {}
}
