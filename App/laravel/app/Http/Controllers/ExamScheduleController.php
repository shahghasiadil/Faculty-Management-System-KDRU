<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExamSchedule;

class ExamScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ExamSchedule::with(['teacher', 'subject'])->latest()->paginate(10);
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
        $this->validate($request, [
            'date' => 'required|date',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);

        ExamSchedule::create([
            'date' => $request->date,
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
        $examSchedule = ExamSchedule::onlyTrashed()->find($id);
        if(!is_null($examSchedule)){
            $examSchedule->forceDelete();
        }
        else{
            return response()->json(['error'=>"Trashed Object Not Found"], 404);
        }
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
