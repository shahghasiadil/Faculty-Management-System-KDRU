<?php

namespace App\Http\Controllers;

use App\Models\Chance;
use Illuminate\Http\Request;

class ChanceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Chance::with('student, subject')->latest()->paginate(10);
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
        $validated = $this->validate($request, [
            'marks' => 'required|integer',
            'chance_count' => 'required|integer',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);

        Chance::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Chance::with('student, subject')->findOrFail($id);
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
        $chance = Chance::findOrFail($id);
        $validated = $this->validate($request, [
            'marks' => 'required|integer',
            'chance_count' => 'required|integer',
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);
        $chance->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $chance = Chance::findOrFail($id);
        $chance->delete();
    }
    public function permanentDelete($id)
    {
        $chance = Chance::findOrFail($id);
        $chance->forceDelete();
    }
    public function restore($id)
    {
        $chance = Chance::withTrashed()->find($id);
        if ($chance && $chance->trashed()) {
            $chance->restore();
        }
    }
}
