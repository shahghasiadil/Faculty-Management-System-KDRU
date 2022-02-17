<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use App\Models\Subject;
use App\Models\Semester;
use App\Models\Relative;
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
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $this->validate($request, [
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
            'native_tongue' => 'string',
            'tazkira_page' => 'int',
            'tazkira_volume' => 'required',
            'tazkira_registration_number' => 'int',
            'birth_year' => 'int',
            'marital_status' => 'string',
            'school_name' => 'string',
            'graduation_year' => 'int',
            'kankor_year' => 'int',
            'kankor_score' => 'between:0,355.99',
            'kankor_id' => 'string',
            'phone' => 'string'

        ]);
        try {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => 'STUDENT',
                'password' => Hash::make($request->password),
            ]);



            $student = Student::create([
                'national_id' => $request->national_id,
                'name' => $request->name,
                'last_name' => $request->last_name,
                'user_id' => $user->id,
                'address_id' => $request->address_id,
                'period' => $request->period,
                'father_name' => $request->father_name,
                'grand_father_name'=> $request->grand_father_name,
                'roll_no' => $request->roll_no,
                'native_tongue' => $request->native_tongue,
                'tazkira_page' => $request->tazkira_page,
                'tazkira_volume' => $request->tazkira_volume,
                'tazkira_registration_number' => $request->tazkira_registration_number,
                'birth_year' => $request->birth_year,
                'marital_status' => $request->marital_status,
                'school_name' => $request->school_name,
                'graduation_year' => $request->graduation_year,
                'kankor_year' => $request->kankor_year,
                'kankor_score' => $request->kankor_score,
                'kankor_id' => $request->kankor_id,
                'phone' => $request->phone
            ]);



        } catch (QueryException $e) {
            // if ($e->errorInfo[1] === 1062) {
            //     return ("Duplicate Entry");
            // }
            echo($e);
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

        $this->validate($request, [
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
            'native_tongue' => 'string',
            'tazkira_page' => 'int',
            'tazkira_volume' => 'required',
            'tazkira_registration_number' => 'int',
            'birth_year' => 'int',
            'marital_status' => 'string',
            'school_name' => 'string',
            'graduation_year' => 'int',
            'kankor_year' => 'int',
            'kankor_score' => 'between:0,355.99',
            'kankor_id' => 'string',
            'phone' => 'string',
            'relationship' => 'required|string',
            'name' => 'required|string',
            'father_name' => 'required|string',
            'job' => 'required|string',
            'phone' => 'required|string',

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
            'user_id' => $user->id,
            'address_id' => $request->address_id,
            'period' => $request->period,
            'father_name' => $request->father_name,
            'grand_father_name'=> $request->grand_father_name,
            'roll_no' => $request->roll_no,
            'native_tongue' => $request->native_tongue,
            'tazkira_page' => $request->tazkira_page,
            'tazkira_volume' => $request->tazkira_volume,
            'tazkira_registration_number' => $request->tazkira_registration_number,
            'birth_year' => $request->birth_year,
            'marital_status' => $request->marital_status,
            'school_name' => $request->school_name,
            'graduation_year' => $request->graduation_year,
            'kankor_year' => $request->kankor_year,
            'kankor_score' => $request->kankor_score,
            'kankor_id' => $request->kankor_id,
            'phone' => $request->phone
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
        return Student::with(['user', 'address', 'relatives'])->findOrFail($id);
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
        return Subject::findOrFail($id)->students;
    }

    /** @param int id (semester id)
    * this function returns all students related to a particular semester
    */
    public function getStudentsBySemester($id)
    {
        return Semester::findOrFail($id)->students;
    }

   public function getStudentRelatives($id)
   {
       return Student::findOrFail($id)->relatives;
   }
}
