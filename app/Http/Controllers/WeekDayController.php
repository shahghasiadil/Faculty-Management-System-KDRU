<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeekDay;
use App\Models\Schedule;

class WeekDayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            'day' => 'required|string'
        ]);

        WeekDay::create([
            'day' => $request->day
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
        $this->validate($request, [
            'day' => 'required|string'
        ]);

        WeekDay::update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $weekday = WeekDay::findOrFail($id);
        $weekday->delete();
    }

    /**
     * Return subjects for a specified semester and week_day.
     *
     * @param  Request  $request
     */
    public function getSubjectsBySemesterWeekDay(Request $request)
    {
        $schedules = Schedule::with(['subject'])->where('week_day_id', $request->week_day_id)->get();
        return $schedules;
    }
}
