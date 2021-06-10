<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Attendance;

class AttendanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Attendance::with(['student', 'subject'])->latest()->paginate(10);
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
            'state' => 'required|in:PRESENT,ABSENT',
            'date' => 'required|date',
            'start_time' => 'required|regex:/(\d+\:\d+)/',
            'end_time' => 'required|regex:/(\d+\:\d+)/',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer',
            ]);

        Attendance::create([
            'state' => $request->state,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'student_id' => $request->student_id,
            'subject_id' => $request->subject_id
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
        return Attendance::findOrFail($id);
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
            'state' => 'required|in:PRESENT,ABSENT',
            'date' => 'required|date',
            'start_time' => 'required|regex:/(\d+\:\d+)/',
            'end_time' => 'required|regex:/(\d+\:\d+)/',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer',
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
    public function destroy(Request $request, $id)
    {
        $examSchedule = Attendance::findOrFail($id);
        if($request->permanent_delete){
            $examSchedule->forceDelete();
        }
        else{
            $examSchedule->delete();
        }
    }
}
