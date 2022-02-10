<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * @author  Shahghasi Adil
     * @date    2021-06-13
     *
     */

    public function index()
    {
        return Teacher::with(['user', 'address'])->latest()->paginate(10);
    }


    public function create()
    {
        //
    }

    public function store(Request $request)

    {
        $this->validate($request, [
            'national_id' => 'required|integer',
            'username' => 'required|string|min:3|max:100',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'degree' => 'required|string',
            'address_id' => 'required',
            'bio' => 'required|string'
        ]);
        $user = new User;
        $user->name = $request->username;
        $user->email = $request->email;
        $user->password =  Hash::make($request->password);
        $user->role = 'TEACHER';
        $user->save();
        try {
            Teacher::create([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'user_id' => $user->id,
                'address_id' => $request->address_id,
                'degree' => $request->degree,
                'bio' => $request->bio
            ]);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1063) {
                return "Duplicate Entry";
            }
        }
    }


    public function show($id)
    {
        return Teacher::with(['user', 'address'])->findOrFail($id);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        // return $request;
        $teacher = Teacher::findOrFail($id);
        $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'degree' => 'required|string',
            'bio' => 'required|string'
        ]);
        // return Teacher::with('user')->findOrFail($id);
        $user = User::findOrFail($teacher->user_id);
        $user->name = $request->name . ' ' . $request->last_name;
        $user->email = $request->email;
        $user->password =  Hash::make($request->password);
        $user->save();

        $teacher->update([
            'national_id' => $request->national_id,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'user_id' => $user->id,
            'address_id' => $request->address_id,
            'degree' => $request->degree,
            'bio' => $request->bio
        ]);
        // return $request . "ABD";
    }

    public function destroy($id)
    {
        $teacher = Teacher::findOrFail($id);
        $teacher->delete();
    }
    public function restore($id)
    {
        $teacherData = Teacher::withTrashed()->find($id);
        if ($teacherData && $teacherData->trashed()) {
            $teacherData->restore();
        }
    }
    public function permanentDelete($id)
    {
        $teacher = Teacher::findOrFail($id);
        $teacher->forceDelete();
    }

    public function findByEmail(Request $request)
    {
        $teacher = User::where('email', '=', $request->email)->get();
        if (sizeof($teacher) > 0) {
            return response()->json(["email already exists", "status" => 200]);
        } else return response()->json(['status' => 203]);
    }
}
