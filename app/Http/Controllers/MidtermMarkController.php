<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MidtermMark;
use App\Models\Student;
use App\Models\Subject;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class MidtermMarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(MidtermMark::with(['student','subject'])->latest()->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $this->validate(
            $request,
            [
                'marks' => 'required|integer|between:1,20',
                'subject_id' => 'required',
                'student_id' => 'required'
            ]
        );

        MidtermMark::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return MidtermMark::with(['student'],['subject'])->findOrFail($id);
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
        //
        $midtermMark = MidtermMark::findOrFail($id);
        $validated = $this->validate(
            $request,
            [
                'marks' => 'required|integer|between:1,20',
                'subject_id' => 'required',
                'student_id' => 'required'
            ]
        );
        $midtermMark->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $midtermMark = MidtermMark::findOrFail($id);
        $midtermMark->delete();
    }
    public function permanentDelete($id)
    {
        $midtermMark = MidtermMark::findOrFail($id);
        $midtermMark->forceDelete();
    }
    public function restore($id)
    {
        $midtermMark = MidtermMark::withTrashed()->find($id);
        if ($midtermMark && $midtermMark->trashed()) {
            $midtermMark->restore();
        }
    }

}
