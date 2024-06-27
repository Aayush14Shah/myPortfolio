<?php

namespace App\Http\Controllers;

use App\Models\UserResponse;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserResponseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:user_responses,email',
                'message' => 'required',
            ]);

            $data = new UserResponse();
            $data->name = $validatedData['name'];
            $data->email = $validatedData['email'];
            $data->message = $validatedData['message'];

            $data->save();

            return response()->json(['message' => 'Data saved successfully', 'data' => $data], 201);
        } catch (ValidationException $e) {
            return $e;
        } catch (\Exception $e) {
            // Log the exception
            Log::error('Error saving data: ' . $e->getMessage());
            return response()->json(['message' => 'Internal Server Error'], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(UserResponse $userResponse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserResponse $userResponse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserResponse $userResponse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserResponse $userResponse)
    {
        //
    }
}
