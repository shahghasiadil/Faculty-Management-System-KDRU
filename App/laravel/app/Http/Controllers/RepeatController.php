<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Subject;
use App\Models\FinalMark;
use App\Models\Semester;
use App\Models\Repeat;
use Illuminate\Support\Facades\DB;

class RepeatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function create()
    {
          
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        // this variable is used to find specific semester total subjects credits to used in repeat rules
        // when one student has been chanced in high credits than total credits of semester his repeated to next year
        $sem_total_credits = Subject::with('semester')->where('semester_id', $request->semester_id)->sum('credit');
        
        // this variable is used to find  students total credit in specific semester that credits in which they are chanced.
        // this variable is array of students objects with their total credits in which they are chanced
        $students_chance_credits_sum = DB::table('final_marks')
        ->leftJoin('students', 'students.id', '=', 'final_marks.student_id')
        ->leftJoin('subjects', 'subjects.id', '=', 'final_marks.subject_id')
        ->select('final_marks.student_id', DB::raw('sum(subjects.credit) as total_chance_credit'))
        ->where('final_marks.year', '=', $request->year)
        ->where('semester_id', '=', $request->semester_id)
        ->where('final_marks.marks', '<', 55)
        ->groupBy('student_id')
        ->get();

       // is used for inserting repeated students to repeat table
        foreach($students_chance_credits_sum as $std_credit_sum){
            if( $std_credit_sum->total_chance_credit > ($sem_total_credits/2) ){
                Repeat::create([
                    'student_id' => $std_credit_sum->student_id,
                    'semester_id' => $request->semester_id,
                    'repeat_year' => $request->year
                ]);
                 }
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
