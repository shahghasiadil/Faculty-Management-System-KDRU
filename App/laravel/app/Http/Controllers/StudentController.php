<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use App\Models\Subject;
use App\Models\Semester;
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
            'address_id' => 'required|integer',
        ]);
        try {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => 'STUDENT',
                'password' => Hash::make($request->password),
            ]);

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
    }
    
    /**
     * @param int student_id
     * @param int semester_id
     * this funciton adds a student to a specified semester
     */
    public function addStudentToSemester(Request $request)
    {
        $this->validate($request, [
            'student_id' => 'required|integer',
            'semester_id' => 'required|integer'
        ]);
        $semester = Semester::findOrFail($request->semester_id);
        $semester->students()->attach($request->student_id);
    }

    /**
     * @param int id (subject id)
     * this function add a students to a particular subject
     */
    public function addStudentToSubject(Request $request)
    {
        $this->validate($request, [
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);
        $subject = Subject::findOrFail($request->subject_id);
        $subject->students()->attach($request->student_id);
    }

    // the update function never updates user_id as it is only set once!
    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

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
            'address_id' => 'required|integer'
        ]);

        $user = User::findOrFail($student->user_id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->password){
            $user->password =  Hash::make($request->password);
        }
        $user->save();

        $student->update([
            'national_id' => $request->national_id,
            'name' => $request->name,
            'last_name' => $request->last_name,
            'address_id' => $request->address_id,
            'period' => $request->period,
            'father_name' => $request->father_name,
            'grand_father_name'=> $request->grand_father_name,
            'roll_no' => $request->roll_no
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
        $studentUser = User::with(['student'])->where('email', $request->email)->first();
        if ($studentUser) {
            return $studentUser;
        } 
        else return response()->json(['No Student with the given email found.' => 204]);
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
        // return Student::get(['id', 'name']);
        return 'hello';
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

    /**
     * @param int id (subject id)
     * this function returns all students related to a particular subject
     */
    public function getStudentsBySubject($id)
    {
        return Subject::find($id)->students;
    }

    /** @param int id (semester id)
    * this function returns all students related to a particular semester
    */
   public function getStudentsBySemester($id)
   {
       return Semester::find($id)->students;
   }
}
