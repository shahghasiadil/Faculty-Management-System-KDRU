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
        $examSchedule = ExamSchedule::findOrFail($id);
        $this->validate($request, [
            'date' => 'required|date',
            'teacher_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);

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
}
