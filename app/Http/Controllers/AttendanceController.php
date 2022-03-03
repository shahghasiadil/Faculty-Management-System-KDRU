<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;
use App\Models\Subject;
use App\Models\Semester;
use App\Models\Student;
use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(Attendance::with(['student', 'subject'])->latest()->get());
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
            'month' => 'required|string',
            'year' => 'required|integer',
            'present' => 'required',
            'absent' => 'integer',
            'leave' => 'integer',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer',
        ]);

        Attendance::create([
            'month' => $request->month,
            'year' => $request->year,
            'present' => $request->present,
            'absent' => $request->absent,
            'leave' => $request->leave,
            'year' => $request->year,
            'subject_id' => $request->subject_id,
            'student_id' => $request->student_id
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
        return Attendance::with(['student', 'subject'])->findOrFail($id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchBySubject($id)
    {
        return Attendance::with(['student',])->where('subject_id', $id)->get();
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
        $this->validate($request, [
            'month' => 'string',
            'year' => 'integer',
            'present' => 'integer',
            'absent' => 'integer',
            'leave' => 'integer',
            'student_id' => 'integer',
            'subject_id' => 'integer',
        ]);

        $attendance = Attendance::findOrFail($id);
        $attendance->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->delete();
    }

    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $attendance = Attendance::findOrFail($id);
        $attendance->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $attendance = Attendance::withTrashed()->find($id);
        if ($attendance)
        {
            $attendance->restore();
        }
        else return response()->json(['message' => 'Resource not found', 'status' => 204]);
    }

    /**
     * Returns attendances of all students by subject, period and month.
     * @param  Request request
     * @return App\Models\Attendance;
     */
    public function getAttBySubjectYearMonth(Request $request)
    {
        return Attendance::with(['student'])->where(['subject_id'=>$request->subject_id, 'year'=>$request->year, 'month'=>$request->month])->get()->all();
    }

    /**
     * Returns attendances of all subjects by student.
     * @param  Request request
     * @return App\Models\Attendance;
     */
    public function getAttByStudentMonthYear(Request $request)
    {
        return Attendance::with(['subject'])->where(['student_id'=>$request->student_id, 'month'=>$request->month, 'year'=>$request->year])->get()->all();
    }

    public function getStudentsBySubjectPeriod(Request $request){
        return new JsonResource(Subject::findOrFail($request->subject_id)->students->where('period', $request->period)->all());
    }
}
