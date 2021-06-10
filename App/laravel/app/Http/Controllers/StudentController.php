<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Expr\Empty_;

use function PHPUnit\Framework\isEmpty;

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
        try {
            Student::create([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'period' => $request->period
            ]);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1062) {
                return ("Duplicate Entry");
            }
        }
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

    public function show($id)
    {
        return Student::findOrFail($id);
    }
    public function findByEmail(Request $request)
    {
        $student = Student::where('email', '=', $request->email)->get();
        if (sizeof($student) > 0) {
            return response()->json(["email already exists", "status" => 200]);
        } else return response()->json(['status' => 203]);
    }

    public function permanentDelete($id)
    {
        $student = Student::findOrFail($id);
        $student->forceDelete();
    }
    public function restore($id)
    {
        $studentData = Student::onlyTrashed()->where('id', $id)->restore();
    }
}
