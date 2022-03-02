<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use Illuminate\Http\Resources\Json\JsonResource;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(Schedule::with(['teacher', 'subject'])->latest()->get());
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
            'week_day_id' => 'required|string|max:80',
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
        $this->validate($request, [
            'week_day_id' => 'string|max:80',
            'subject_id' => 'integer',
            'hour_count' => 'integer'
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
}
