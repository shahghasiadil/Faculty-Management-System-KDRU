<?php

namespace App\Http\Controllers;

use App\Models\FinalMark;
use App\Models\Student;
use App\Models\MidtermMark;
use App\Models\Chance;
use Illuminate\Http\Request;

class FinalMarkController extends Controller
{

    public function index()
    {
        return FinalMark::with(['student', 'subject'])->latest()->paginate(10);
    }

    public function create()
    {
    }


    public function store(Request $request)
    {
        $student_id = $request->student_id;
        $subject_id = $request->subject_id;
        $final_marks = $request->marks; 
        $mid_term_record = MidtermMark::where(['student_id' => $student_id, 'subject_id' => $subject_id])->first();
        if($mid_term_record === null){
            $mid_term_marks = 0;
            $total_marks = $final_marks + $mid_term_marks;
            $final_marks_record = ['student_id' => $student_id, 'subject_id' => $subject_id, 'mid_term_marks' => $mid_term_marks, 'marks' => $final_marks];
            $chance_count = Chance::where(['student_id' => $student_id, 'subject_id' => $subject_id])->count();
            $chance_record =  ['student_id' => $student_id, 'subject_id' => $subject_id, 'chance_count' => $chance_count + 1, 'marks' => $final_marks];
                if($total_marks < 55){
                    Chance::create($chance_record);
                } 
        }else{
        $mid_term_marks = $mid_term_record->marks;
        $total_marks = $final_marks + $mid_term_marks;
        $final_marks_record = ['student_id' => $student_id, 'subject_id' => $subject_id, 'mid_term_marks' => $mid_term_marks, 'marks' => $final_marks];
        $chance_count = Chance::where(['student_id' => $student_id, 'subject_id' => $subject_id])->count();
        $chance_record =  ['student_id' => $student_id, 'subject_id' => $subject_id, 'chance_count' => $chance_count + 1, 'marks' => $final_marks];
            if($total_marks < 55){
                Chance::create($chance_record);
            } 
        }
        // $validated = $this->validate($req, [
        //     'student_id' => 'required|integer',
        //     'subject_id' => 'required|integer',
        //     'mid_term_marks' => 'required|integer',
        //     'final_marks' => 'required|integer'
        // ]);
        FinalMark::create($final_marks_record);
        
       
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return FinalMark::with(['student'], ['subject'])->findOrFail($id);
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
        $finalMark = FinalMark::findOrFail($id);
        $validated = $this->validate($request, [
            'marks' => 'required|integer',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);
        $finalMark->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $finalMark = FinalMark::findOrFail($id);
        $finalMark->delete();
    }
    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $finalMark = FinalMark::findOrFail($id);
        $finalMark->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $finalMark = FinalMark::withTrashed()->find($id);
        if ($finalMark && $finalMark->trashed()) {
            $finalMark->restore();
        }
    }
}
