<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Schedule::with(['teachers', 'subjects'])->latest()->paginate(10);
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
            'week_day' => 'required|string|max:80',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer',
            'start_time' => 'required|regex:/(\d+\:\d+)/',
            'end_time' => 'required|regex:/(\d+\:\d+)/'
        ]);

        Schedule::create([
            'week_day' => $request->week_day,
            'teacher_id' => $request->teacher_id,
            'subject_id' => $request->subject_id,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time
        ]);
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
        $schedule = Schedule::findOrFail($id);
        $this->validate($request, [
            'week_day' => 'required|string|max:80',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer',
            'start_time' => 'required|regex:/(\d+\:\d+)/',
            'end_time' => 'required|regex:/(\d+\:\d+)/'
        ]);

        $schedule->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $schedule = Schedule::findOrFail($id);
        $schedule->delete();
    }
}
