<?php

namespace App\Http\Controllers;

use App\Models\Semester;
use App\Models\Student;

use Illuminate\Http\Request;

class SemesterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Semester::latest()->paginate(10);
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
            'name' => 'required|string'
        ]);

        Semester::create([
            'name' => $request->name
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
        return Semester::findOrFail($id);
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
        $semester = Semester::findOrFail($id);
        $this->validate($request, [
            'name' => 'required|string|min:4|max:8'
        ]);
        $semester->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $semester = Semester::findOrFail($id);
        $semester->delete();
    }

    // ** permanentDelete method for forceDelete
    public function permanentDelete($id)
    {
        $semester = Semester::findOrFail($id);
        $semester->forceDelete();
    }
    // ** restore method for restoring softDeletes records
    public function restore($id)
    {
        $semester = Semester::withTrashed()->find($id);
        if ($semester && $semester->trashed()) {
            $semester->restore();
        }
    }

    public function findByNumber(Request $request)
    {
        $semester = Semester::where('name', '=', $request->name)->get();
        if (sizeof($semester) > 0) {
            return response()->json(["semester already exists", "status" => 200]);
        } else return response()->json(['status' => 203]);
    }
}
