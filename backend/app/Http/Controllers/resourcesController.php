<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\AuthorizationException;
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

    public function getName()
    {
        return '';
    }

    public function index()
    {
        try {
            $resources = $this->service->getAllData(20);
            if ($resources->isEmpty()) {
                return response()->json([
                    'message' => 'There are no ' . $this->getName() . ' currently.',
                    'data' => [],
                ], 200);
            }

            return response()->json([
                'message' => 'Successfully fetch all ' . $this->getName(),
                'data' => $resources,
            ], 200);
        } catch (AuthorizationException $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),
            ], 500);
        }
    }


    public function store(Request $request)
    {
        try {
            $validationRequestClass = $this->getValidationRequest();

            if (!empty($validationRequestClass) && class_exists($validationRequestClass)) {
                $validator = new $validationRequestClass();

                $request->validate(
                    $validator->rules(),
                    $validator->messages() ?? [],
                    $validator->attributes() ?? []
                );
            }

            $response = $this->service->store($request);

            if (isset($response['error'])) {
                return response()->json([
                    'message' => 'Error while storing ' . $response['error'],
                ], 400);
            }

            return response()->json([
                'message' => $this->getName() . ' ' . 'Stored Successfully',
            ]);
        } catch (ValidationException $e) {
            throw $e;
        } catch (AuthorizationException $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),
            ], 500);
        }
    }

    public function edit(String $id)
    {
        try {
            $resources = $this->service->getById($id);

            if (!$resources) {
                return response()->json([
                    'message' => $this->getName() . ' ' . "not found",
                ], 404);
            }

            $response = $this->service->edit($id);

            return response()->json([
                'message' => $this->getName() . ' ' . 'found successfully for edit.',
                'data' => $response,
            ], 200);
        } catch (AuthorizationException $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),
            ], 500);
        }
    }

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

            $response = $this->service->update($request, $id);

            if (isset($response['error'])) {
                return response()->json([
                    'message' => 'Error while updating resource: ' . $response['error'],
                ], 400);
            }

            return response()->json([
                'message' => $this->getName() . " " . ' updated successfully',
                'data' => $response,
            ], 200);
        } catch (ValidationException $e) {
            throw $e;
        } catch (AuthorizationException $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),
            ], 500);
        }
    }

    public function destroy(String $id)
    {
        try {
            $resource = $this->service->getById($id);

            if (!$resource) {
                return response()->json([
                    'message' => $this->getName() . 'not found',
                ], 404);
            }
            $response = $this->service->destroy($id);

            if (isset($response['error'])) {
                return response()->json([
                    'message' => $response['error'],
                ], 400);
            }

            return response()->json([
                'message' => $this->getName() . " " .  'Deleted Successfully'
            ], 200);
        } catch (AuthorizationException $e) {

            return response()->json([
                'success' => false,
                'message' => $e->getMessage(),
            ], 403);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => $th->getMessage(),
                'file' => $th->getFile(),
                'line' => $th->getLine(),
                'trace' => $th->getTraceAsString(),
            ], 500);
        }
    }
}
