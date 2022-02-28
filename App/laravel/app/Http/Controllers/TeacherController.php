<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
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
        return new JsonResource(Teacher::with(['user', 'address'])->latest()->get());
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'degree' => 'required|string',
            'address_id' => 'required|integer',
            'bio' => 'required|string'
        ]);
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => 'TEACHER',
                'password' => Hash::make($request->password),
            ]);

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
        $teacher = Teacher::findOrFail($id);

        $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'min:3|max:100',
            'degree' => 'required|string',
            'address_id' => 'required|integer',
            'bio' => 'required|string'
        ]);

        $user = User::findOrFail($teacher->user_id);
        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password)
        {
            $user->password =  Hash::make($request->password);
        }
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
        $teacherUser = User::with(['teacher'])->where('email',$request->email)->first();
        if ($teacherUser)
        {
            return $teacherUser;
        } 
        else return response()->json(['No Teacher with the given email found.' => 204]);
    }
}
