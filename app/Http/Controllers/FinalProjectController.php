<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FinalProject;
use Illuminate\Http\Resources\Json\JsonResource;

class FinalProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new JsonResource(FinalProject::with('teacher','students:id,name,father_name')->latest()->get());
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
        // return $request;
        $data = $this->validate($request, [
            'name' => 'required|string',
            'code' => 'required|string',
            'teacher_id' => 'required|integer'
        ]);

            $finalProject = FinalProject::create($data);
            $this->addStudentToFinalProject($finalProject->id, $request->students);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new JsonResource(FinalProject::with('teacher','students:id,name,father_name')->findOrFail($id));
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
     */
    public function update(Request $request, $id)
    {

        $validatedData = $this->validate($request, [
            'name' => 'string',
            'code' => 'string',
            'teacher_id' => 'integer'
        ]);

        $finalProject = FinalProject::findOrFail($id);
        $finalProject->update($validatedData);
        $finalProject->students()->sync($request->students);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id)
    {
        $finalProject = FinalProject::findOrFail($id);
        $finalProject->delete();
    }

    /**
     * Remove the specified resource from storage permanently.
     *
     * @param  int  $id
     */
    public function permanentDelete($id)
    {
        $finalProject = FinalProject::findOrFail($id);
        $finalProject->students()->detach();
        $finalProject->forceDelete();
    }

    /**
     * Restore the specified resource from delete.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $finalProject = FinalProject::withTrashed()->find($id);
        if ($finalProject && $finalProject->trashed()) {
            $finalProject->restore();
        }
        else return response()->json(['message' => 'Resource not found', 'status' => 204]);
    }

    /**
     * Adds a student to a final project.
     *
     * @param  int project_id and list students
     */
    public function addStudentToFinalProject(Request $request)
    {
        try{
            $finalProject = FinalProject::findOrFail($request->project_id);
            $finalProject->students()->attach($request->students);
        }
        catch (QueryException $e) 
        {
            echo($e);
        }
    }



    /**
     * Returns all students related to a final project.
     *
     * @param  Student  $students
     */
    public function getFinalProjectStudents($id)
    {
        return FinalProject::findOrFail($id)->students;
    }

    /**
     * Returns the teacher related to a final project.
     *
     * @param  Teacher  $teacher
     */
    public function getFinalProjectTeacher($id)
    {
        return FinalProject::findOrFail($id)->teacher->with(['user', 'address'])->get();
    }

    public function project_filter(Request $request)
    {
        return new JsonResource(FinalProject::with('teacher','students:id,name,father_name')
        ->whereRelation('students','period','=',$request->period)
        ->latest()
        ->get()
    );
    }
}
