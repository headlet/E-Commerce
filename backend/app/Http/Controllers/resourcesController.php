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

    public function getName(){
        return '';
    }

    public function index() {
        
    }

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
                    $validator->rules($id),
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
                'message' => $this->getName() . ' updated successfully',
                'data' => $response,
            ], 200);
        } catch (ValidationException $e) {
            throw $e;

        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),


            ], 500);
        }
    }

    public function delete() {}
}
