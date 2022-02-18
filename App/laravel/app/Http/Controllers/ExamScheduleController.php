<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExamSchedule;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ExamScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(ExamSchedule::with(['teacher', 'subject'])->latest()->get());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return ExamSchedule::findOrFail($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->date;
        $this->validate($request, [
            'date' => 'required|date',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);
        // return $request;
        $date = Carbon::parse($request->date)->format('Y-m-d');
        // return $request->date;
        ExamSchedule::create([
            'date' => $date,
            'teacher_id' => $request->teacher_id,
            'subject_id' => $request->subject_id
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
        $this->validate($request, [
            'date' => 'required|date',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer'
            ]);

        $examSchedule = ExamSchedule::findOrFail($id);
        $examSchedule->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $examSchedule = ExamSchedule::findOrFail($id);
        $examSchedule->delete();
    }

    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $examSchedule = ExamSchedule::findOrFail($id);
        $examSchedule->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $examSchedule = ExamSchedule::withTrashed()->find($id);
        if ($examSchedule && $examSchedule->trashed()) {
            $examSchedule->restore();
        }
    }
}
