<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\FinalMark;
use App\Models\Semester;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        // ... Code

    }public function maleStudentsCount(){
         // count of male students
        return $maleStudents = Student::where('gender', 'male')->count();
    }
    public function femaleStudentsCount(){
        // count of female students
        return $maleStudents = Student::where('gender', 'female')->count();
    }
    public function topStudentsOfSemester($name){
    // top 10 students of semester
        $topTen = DB::table('final_marks')
        ->leftJoin('students', 'final_marks.student_id', '=', 'students.id')
        ->leftJoin('subjects', 'final_marks.subject_id', '=', 'subjects.id')
        ->leftJoin('semesters', 'subjects.semester_id', '=', 'semesters.id')
        ->select('students.name', 'students.father_name', 'students.period', DB::raw('AVG(final_marks.marks) as totalMarks') )
        ->where('semesters.name', '=', $name)
        ->orderBy('totalMarks', 'desc')
        ->groupBy('student_id', 'final_marks.created_at')
        ->take(3)
        ->latest('final_marks.created_at')
        ->get();
        return $topTen;
    }
    public function teacherInfo(){
        // count of bachelor degree teachers
        // count of master degree teachers
        // count of phd degree teachers
    }
    public function subjectInfo(){
        // count of 6 credits subjects
        // count of 4 credits subjects
        // count of 3 credits subjects
        // count of 2 credits subjects
        // count of 1 credits subjects

    }
    public function semesterInfo(){
        // semester info according to teaching learning
        // star of the semester his bio, gpa , marks and congrate
    }
    public function examInfo(){
        // exam start date
        // exam end date
        // exam rules
    }
    public function attendenceInfo(){
            // distitute students in attendence
            // students which have full present reward
    }
}
