<?php

namespace App\Http\Controllers;

use App\Models\FinalMark;
use Illuminate\Http\Request;

class FinalMarkController extends Controller
{

    public function index()
    {
        return FinalMark::with(['student','subject'])->latest()->paginate(10);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
        $validated = $this->validate($request, [
            'marks' => 'required|integer',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);

        FinalMark::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return FinalMark::with(['student'],['subject'])->findOrFail($id);
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
