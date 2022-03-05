<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use Illuminate\Http\Resources\Json\JsonResource;

use Illuminate\Support\Facades\DB;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(Schedule::with(['week_day', 'subject'])->latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $this->validate($request, [
            'week_day_id' => 'required|integer|max:80',
            'subject_id' => 'required|integer',
            'hour_count' => 'required|integer'
        ]);

        Schedule::create($data);
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
        $data = $this->validate($request, [
            'week_day_id' => 'integer|max:80',
            'subject_id' => 'integer',
            'hour_count' => 'integer'
        ]);

        $schedule->update($data);
    }

    public function show($id)
    {
        return new JsonResource(Schedule::with(['week_day','subject'])->findOrFail($id));
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

    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $schedule = Schedule::findOrFail($id);
        $schedule->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $schedule = Schedule::withTrashed()->find($id);
        if ($schedule && $schedule->trashed()) {
            $schedule->restore();
        }
    }

    public function scheduleFilter(Request $request)
    {
        return new JsonResource(Schedule::with('subject','teacher')->whereYear('created_at',$request->year)->whereHas('subject.semester', function($query) use ($request){
            $query->where('id',$request->semester_id);
        })->get());
    }

    /**
     * Return all week schedule of a semester.
     *
     * @param int  $id
     */
    public function getScheduleBySemester($id)
    {
        // I couldn't do it in Eloquent. so i did it in raw SQL

        return DB::table('schedules')
        ->join('week_days', 'schedules.week_day_id', '=', 'week_days.id')
        ->join('subjects', 'schedules.subject_id', '=', 'subjects.id')
        ->join('semesters', 'subjects.semester_id', '=', 'semesters.id')
        ->select('week_days.day', 'subjects.name', 'schedules.hour_count')
        ->where('semesters.id', $id)
        ->orderBy('week_days.id', 'asc') //we have to store the week_day records in a sequence like: [saturday=1, sunday=2, mon...]
        ->orderBy('schedules.hour_count', 'asc')
        ->get();
    }
}
