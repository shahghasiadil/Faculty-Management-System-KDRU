<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\MockObject\Builder\Stub;

class StudentController extends Controller
{

    public function index()
    {
        return Student::latest()->paginate(10);
    }
    // This method is for Sever Side Search
    public function search()
    {
        if ($search = request()->get('q')) {
            return Student::where(function ($query) use ($search) {
                $query->where('name', 'LIKE', "%$search%")
                    ->orWhere('last_name', 'LIKE', "%$search%")
                    ->orWhere('email', 'LIKE', "%$search%")
                    ->orWhere('national_id', 'LIKE', "%$search%")
                    ->orWhere('period', 'LIKE', "%$search%");
            })->paginate(10);
        } else {
            return Student::latest()->paginate(10);
        }
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
    // This method check if student exists 
    public function findByEmail(Request $request)
    {
        $student = Student::where('email', '=', $request->email)->get();
        if (sizeof($student) > 0) {
            return response()->json(["email already exists", "status" => 200]);
        } else return response()->json(['status' => 203]);
    }
    // This method is for Force Delete 
    public function permanentDelete($id)
    {
        $student = Student::findOrFail($id);
        $student->forceDelete();
    }
    // This method is for restoring records that SoftDeletes
    public function restore($id)
    {
        $student = Student::withTrashed()->find($id);
        if ($student && $student->trashed()) {
            $student->restore();
        }
    }
}
