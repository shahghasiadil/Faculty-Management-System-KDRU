<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{

    public function index()
    {
        return Student::latest()->paginate(10);
    }

    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'period' => 'required|integer'
        ]);
        Student::create([
            'national_id' => $request->national_id,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'period' => $request->period
        ]);
    }


    public function update(Request $request, $id)
    {
        $students = Student::findOrFail($id);

        $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'period' => 'required|integer'
        ]);
        if ($request['password']) {
            $students->update([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'period' => $request->period
            ]);
        } else {
            $students->update([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'period' => $request->period
            ]);
        }
    }


    public function destroy($id)
    {
        $students = Student::findOrFail($id);
        $students->delete();
    }
}
