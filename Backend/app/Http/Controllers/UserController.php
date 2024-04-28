<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Validator;

class UserController extends Controller
{
    public function index(){
       $users = Users::all();

       return response()->json($users,200);
    }

    public function RoleUpdate(Request $request,$id){

        if (Users::where('id', $id)->exists()) {
            $user = Users::find($id);
            $user->role = $user->role == 0 ? 1: 0 ;
            $user->timestamps = false;
            $user->save();
            return response()->json([
                'message' => "'User role updated successfully'+$user->role"
            ], 200);
        } else {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }
    }
}
