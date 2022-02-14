<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{

    //use this method to signin users
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required|string|min:6'
        ]);

        if (!Auth::attempt($validated)) {
            return response()->json('Credentials not match', 401);
        }

        return response()->json([
            'user' => auth()->user(),
            'access_token' => auth()->user()->createToken('Auth_Token')->plainTextToken,
            'token_type' => 'Bearer']);

    }

    // this method signs out users by removing tokens
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([ 'valid' => auth()->check() ]);
    }
}
