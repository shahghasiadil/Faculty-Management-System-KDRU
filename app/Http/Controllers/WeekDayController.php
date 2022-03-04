<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\WeekDay;
use App\Models\Schedule;

use Illuminate\Support\Facades\DB;

class WeekDayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WeekDay::with(['schedules'])->latest()->get();
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
        return WeekDay::with(['schedules'])->findOrFail($id);
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
     * Return subjects for a specified week_day.
     *
     * @param  Request  $request
     */
    public function getSubjectsByWeekDay(Request $request)
    {
        // I couldn't do it in Eloquent. so i did it in raw SQL

        return DB::table('schedules')
        ->join('week_days', 'schedules.week_day_id', '=', 'week_days.id')
        ->join('subjects', 'schedules.subject_id', '=', 'subjects.id')
        ->join('semesters', 'subjects.semester_id', '=', 'semesters.id')
        ->select('week_days.day', 'subjects.name', 'schedules.hour_count')
        ->where('week_days.id', $request->week_day_id)
        ->where('semesters.id', $request->semester_id)
        ->orderBy('schedules.hour_count', 'asc')
        ->get();
    }
}
