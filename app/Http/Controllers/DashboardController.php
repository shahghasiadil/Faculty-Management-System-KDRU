<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\FinalMark;
use App\Models\Semester;
use GuzzleHttp\Psr7\Exception\MalformedUriException;

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
        $data = [];
        $students = Student::all()->count();
        $teachers = Teacher::all()->count();
        $subjects = Subject::all()->count();
        $maleStudents = Student::where('gender', 'male')->count();
        $femaleStudents = Student::where('gender', 'female')->count();
        $data['students'] = $students;
        $data['teachers'] = $teachers;
        $data['subjects'] = $subjects;
        $data['maleStudents'] = $maleStudents;
        $data['femaleStudents'] = $femaleStudents;
        return $data;

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

}
