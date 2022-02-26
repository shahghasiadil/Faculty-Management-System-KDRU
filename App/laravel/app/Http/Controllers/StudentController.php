<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Student;
use App\Models\User;
use App\Models\Subject;
use App\Models\Semester;
use App\Models\Relative;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
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
        return new JsonResource(Student::with(['user', 'address','relatives'])->get());
    }

    /**
     * Undocumented function
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'personal.name' => 'required|string|min:3|max:100',
            'personal.last_name' => 'required|string|min:3|max:100',
            'personal.father_name' => 'required|string|min:3|max:100',
            'personal.grand_father_name' => 'required|string|min:3|max:100',
            'personal.roll_no' => 'required|string|min:1|max:100',
            'account.email' => 'required|email',
            'account.password' => 'required',
            'account.username' => 'required',
            'personal.period' => 'required|integer',
            'personal.native_tongue' => 'string',
            'tazkira.tazkira_page' => 'int',
            'tazkira.tazkira_volume' => 'required',
            'tazkira.tazkira_registration_number' => 'int',
            'personal.birth_year' => 'string',
            'personal.marital_status' => 'string',
            'kankor.school_name' => 'string',
            'personal.graduation_year' => 'int',
            'kankor.kankor_year' => 'int',
            'kankor.kankor_score' => 'between:0,355.99',
            'kankor.kankor_id' => 'string',
            'personal.phone' => 'string',
            'personal.gender' => 'required'
        ]);

        // try {

            $user = User::create([
                'name' =>   $data['account']['username'],
                'email' => $data['account']['email'],
                'role' => 'STUDENT',
                'password' => Hash::make($data['account']['password']),
            ]);

           $address =  Address::create([
                'province' => $request['address']['province'],
                'district' => $request['address']['district'],
                'area' => $request['address']['area'],
                'house_number' => $request['address']['house_no'],
                'street_number' => $request['address']['street_no']
            ]);

            $student = Student::create([
                'name' => $data['personal']['name'],
                'last_name' => $data['personal']['last_name'],
                'user_id' => $user->id,
                'address_id' => $address->id,
                'period' => $data['personal']['period'],
                'father_name' => $data['personal']['father_name'],
                'grand_father_name'=>$data['personal']['grand_father_name'],
                'roll_no' => $data['personal']['roll_no'],
                'native_tongue' =>$data['personal']['native_tongue'],
                'tazkira_page' => $data['tazkira']['tazkira_page'],
                'tazkira_volume' => $data['tazkira']['tazkira_page'],
                'tazkira_registration_number' => $data['tazkira']['tazkira_registration_number'],
                'birth_year' => $data['personal']['birth_year'],
                'marital_status' => $data['personal']['marital_status'],
                'school_name' =>  $data['kankor']['school_name'],
                'graduation_year' =>  $data['personal']['graduation_year'],
                'kankor_year' => $data['kankor']['kankor_year'],
                'kankor_score' => $data['kankor']['kankor_score'],
                'kankor_id' => $data['kankor']['kankor_id'],
                'phone' => $data['personal']['phone'],
                'gender' => $data['personal']['gender']
            ]);

            foreach($request->relative as $relative){
                Relative::create([
                    'relationship' => $relative['relationship'],
                    'name' => $relative['name'],
                    'father_name' => $relative['fathername'],
                    'job' => $relative['job'],
                    'phone' => $relative['phone'],
                    'student_id' => $student->id,
                    'academic_transfer'=> $relative['academicTransfer']
                ]);
            }



        // } catch (QueryException $e) {
        //     if ($e->errorInfo[1] === 1062) {
        //         return ("Duplicate Entry");
        //     }

        // }
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
        
        // if a student is added to a subject, also add them to the related semester automatically
        $semester = $subject->semester;
        $student = $semester->students->where('id', $request->student_id)->first();
        if($student == null){
            $semester->students()->attach($request->student_id);
        }
    }

    // the update function never updates user_id as it is only set once!
    public function update(Request $request, $id)
    {
        $student = Student::findOrFail($id);

        // return $request;
        $data = $this->validate($request, [
            'personal.name' => 'required|string|min:3|max:100',
            'personal.last_name' => 'required|string|min:3|max:100',
            'personal.father_name' => 'required|string|min:3|max:100',
            'personal.grand_father_name' => 'required|string|min:3|max:100',
            'personal.roll_no' => 'required|string|min:1|max:100',
            'account.email' => 'required|email',
            'account.password' => 'required',
            'account.username' => 'required',
            'personal.period' => 'required|integer',
            'personal.native_tongue' => 'string',
            'tazkira.tazkira_page' => 'int',
            'tazkira.tazkira_volume' => 'required',
            'tazkira.tazkira_registration_number' => 'int',
            'personal.birth_year' => 'string',
            'personal.marital_status' => 'string',
            'kankor.school_name' => 'string',
            'personal.graduation_year' => 'int',
            'kankor.kankor_year' => 'int',
            'kankor.kankor_score' => 'between:0,355.99',
            'kankor.kankor_id' => 'string',
            'personal.phone' => 'string',
            'personal.gender' => 'required'
        ]);


        $user = User::findOrFail($student->user_id);
        $user->name = $data['account']['username'];
        $user->email = $data['account']['email'];
        if ($request->password){
            $user->password =  Hash::make($data['account']['password']);
        }
        $user->save();
        $address = Address::find($student->address_id);

        $address->update([
            'province' => $request['address']['province'],
            'district' => $request['address']['district'],
            'area' => $request['address']['area'],
            'house_number' => $request['address']['house_no'],
            'street_number' => $request['address']['street_no']
        ]);


        $student->update([
            'name' => $data['personal']['name'],
                'last_name' => $data['personal']['last_name'],
                'user_id' => $user->id,
                'address_id' => $address->id,
                'period' => $data['personal']['period'],
                'father_name' => $data['personal']['father_name'],
                'grand_father_name'=>$data['personal']['grand_father_name'],
                'roll_no' => $data['personal']['roll_no'],
                'native_tongue' =>$data['personal']['native_tongue'],
                'tazkira_page' => $data['tazkira']['tazkira_page'],
                'tazkira_volume' => $data['tazkira']['tazkira_page'],
                'tazkira_registration_number' => $data['tazkira']['tazkira_registration_number'],
                'birth_year' => $data['personal']['birth_year'],
                'marital_status' => $data['personal']['marital_status'],
                'school_name' =>  $data['kankor']['school_name'],
                'graduation_year' =>  $data['personal']['graduation_year'],
                'kankor_year' => $data['kankor']['kankor_year'],
                'kankor_score' => $data['kankor']['kankor_score'],
                'kankor_id' => $data['kankor']['kankor_id'],
                'phone' => $data['personal']['phone'],
                'gender' => $data['personal']['gender']
        ]);

        foreach($request->relative as $relative){
            Relative::updateOrCreate([
                'relationship' => $relative['relationship'],
                'name' => $relative['name'],
                'father_name' => $relative['fathername'],
                'job' => $relative['job'],
                'phone' => $relative['phone'],
                'student_id' => $student->id,
                'academic_transfer'=> $relative['academicTransfer']
            ]);
        }

        return "Done!";

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
     * @param Request request (subject id and period)
     * this function returns all students related to a particular subject
     */
    public function getStudentsBySubjectPeriod(Request $request)
    {
        return Subject::findOrFail($request->subject_id)->students->where('period', $request->period);
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
