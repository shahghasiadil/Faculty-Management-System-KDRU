<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    /**
     * @author  Shahghasi Adil
     * @date    2021-06-13
     *
     */

    // ** index method for getting data
    public function index()
    {
        return Student::with(['user', 'address'])->latest()->paginate(10);
    }
    /**
     * Undocumented function
     *
     * @return void
     */
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
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'father_name' => 'required|string|min:3|max:100',
            'grand_father_name' => 'required|string|min:3|max:100',
            'roll_no' => 'required|string|min:1|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'period' => 'required|integer',
            'address_id' => 'required',
            'user_id' => 'required',
            'father_name' => 'required',
            'grand_father_name' => 'required',
            'roll_no' => 'required'
        ]);
        if(User::where('email',$request->email)->Exists()){
                $user = User::Where('email',$request->email)->first();
                $user->name = $request->name . ' ' . $request->last_name;
                $user->email = $request->email;
                $user->password =  Hash::make($request->password);
                $user->type = 'student';
                $user->save();
        }
        else{
            $user = new User;
            $user->name = $request->name . ' ' . $request->last_name;
            $user->email = $request->email;
            $user->password =  Hash::make($request->password);
            $user->type = 'student';
            $user->save();
        }
        try {
            Student::create([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'user_id' => $user->id,
                'address_id' => $request->address_id,
                'period' => $request->period,
                'father_name' => $request->father_name,
                'grand_father_name'=> $request->grand_father_name,
                'roll_no' => $request->roll_no
            ]);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] === 1062) {
                return ("Duplicate Entry");
            }
        }
        // return
    }
    /**
     * Undocumented function
     *
     * @param Request $request
     * @param [type] $id
     * @return void
     */
    public function update(Request $request, $id)
    {
        $students = Student::findOrFail($id);

        $validated = $this->validate($request, [
            'national_id' => 'required|integer',
            'name' => 'required|string|min:3|max:100',
            'last_name' => 'required|string|min:3|max:100',
            'email' => 'required|email',
            'password' => 'required',
            'period' => 'required|integer',
            'address_id' => 'required',
            'user_id' => 'required',
            'father_name' => 'required',
            'grand_father_name' => 'required',
            'roll_no' => 'required'
        ]);
        $user = User::findOrFail($students->user_id);
        $user->name = $request->name . ' ' . $request->last_name;
        $user->email = $request->email;
        $user->password =  Hash::make($request->password);
        $user->save();

        $students->update([
            'national_id' => $request->national_id,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'user_id' => $user->id,
            'address_id' => $request->address_id,
            'period' => $request->period
        ]);
    }
    // ** destroy method for softDeletes
    public function destroy($id)
    {
        $students = Student::findOrFail($id);
        $students->delete();
    }
    // ** show method for showing single record
    public function show($id)
    {
        return Student::with(['user', 'address'])->findOrFail($id);
    }
    // ** findByEmail method for Duplicate emails, check if student exists
    public function findByEmail(Request $request)
    {
        $student = User::where('email', '=', $request->email)->get();
        if (sizeof($student) > 0) {
            return response()->json(["email already exists", "status" => 200]);
        } else return response()->json(['status' => 203]);
    }
    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $student = Student::findOrFail($id);
        $student->forceDelete();
    }
    // ** restore is for restoring records that SoftDeletes
    public function restore($id)
    {
        $student = Student::withTrashed()->find($id);
        if ($student && $student->trashed()) {
            $student->restore();
        }
    }
    public function getStudent()
    {

        return Student::get(['id', 'name']);
    }
    public function studentFatherName($name)
    {
        $studentFather = Student::select('father_name')->where('name', '=', $name)->groupBy('father_name')->get();
        return $studentFather;
    }
    public function studentRollNo($fname)
    {
        return Student::select('id', 'roll_no')->where('father_name', '=', $fname)->get();
    }
}
