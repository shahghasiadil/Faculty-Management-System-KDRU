<?php

namespace App\Http\Controllers;

use App\Http\Resources\SemesterResource;
use App\Models\FinalMark;
use App\Models\MidtermMark;
use App\Models\Semester;
use App\Models\Student;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SemesterResource(Semester::latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string'
        ]);

        Semester::create([
            'name' => $request->name
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Semester::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $semester = Semester::findOrFail($id);
        $this->validate($request, [
            'name' => 'required|string|min:4|max:8'
        ]);
        $semester->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $semester = Semester::findOrFail($id);
        $semester->delete();
    }

    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $semester = Semester::findOrFail($id);
        $semester->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $semester = Semester::withTrashed()->find($id);
        if ($semester && $semester->trashed()) {
            $semester->restore();
        }
    }

    // ** find a semester by name
    public function findByName(Request $request)
    {
        $semester = Semester::where('name', $request->name)->get();
        if ($semester) {
            return $semester;
        } 
        else return response()->json(['message' => 'Resource Not Found', 'status' => 204]);
    }

    /**
     * @param Request request (semester_id and period)
     * this function returns all students who are eligible for governmental fund related to a particular semester
     */
    public function getFundedStudentsBySemester(Request $request){
        $students = Semester::findOrFail($request->semester_id)->students->where('period', $request->period)->all();
        $funded = [];

        foreach($students as $student){
            // students from 'Kandahar City' won't be counted as funded.
            if($student->address->province == 'KANDAHAR' && $student->address->district == 'CITY'){
                continue;
            }
            else{
                // counts the number of subject that the student has enrolled
                $subjectCount = 0;
                // sums final marks of all subjects that the student has enrolled
                $sumOfFinalMarks = 0;
                foreach($student->finalMarks as $marks){
                    $subjectCount++;
                    $sumOfFinalMarks += $marks->marks;
                }
                // total marks divided by number of subject that he has enrolled
                $average = $sumOfFinalMarks/$subjectCount;
                // resets the variables
                $sumOfFinalMarks = 0;
                $subjectCount = 0;

                // adds the student to a global array if the average is above 65
                if($average > 65){
                    array_push($funded, $student);
                }
            }
        }
        // return all funded students
        return $funded;
    }

    public function find_all_students_of_semester(Request $request)
    {
        $student = FinalMark::where('subject_id',$request->subject_id)->pluck('student_id');
        return new JsonResource(Semester::find($request->id)->students()
        ->with(['midtermMarks' => function($query) use ($request){
            $query->where('subject_id', $request->subject_id);
        }])
        ->whereNotIn('students.id',$student)
        ->where('period', $request->period)
        ->get());
    }

    public function find_all_students(Request $request)
    {
        $student = MidtermMark::where('subject_id',$request->subject_id)->pluck('student_id');
        // return $student;
        return new JsonResource(Semester::find($request->semester_id)->students()
        ->whereNotIn('students.id',$student)
        ->where('period', $request->period)
        ->get());
    }
}
