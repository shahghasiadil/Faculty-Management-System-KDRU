<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Relative;

class RelativeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $this->validate($request, [
            'relationship' => 'required|string',
            'name' => 'required|string',
            'father_name' => 'required|string',
            'job' => 'required|string',
            'phone' => 'required|string',
            'student_id' => 'required|int',
        ]);

        try
        {
            Relative::create([
                'relationship' => $request->relationship,
                'name' => $request->name,
                'father_name' => $request->father_name,
                'job' => $request->job,
                'academic_transfer' => $request->academic_transfer,
                'phone' => $request->phone,
                'student_id' => $request->student_id
            ]);
        }
        catch (QueryException $e) 
        {
            echo($e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $relative = Relative::findOfFail($id);

        $this->validate($request, [
            'relationship' => 'required|string',
            'name' => 'required|string',
            'father_name' => 'required|string',
            'job' => 'required|string',
            'academic_transfer' => 'required|string',
            'phone' => 'required|string',
            'student_id' => 'required|int',
        ]);

        $relative->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $relative = Relative::findOfFail($id);
        $relative->delete();
    }

    /**
     * Remove the specified resource from storage permanently.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function permanentDelete($id)
    {
        $relative = Relative::findOfFail($id);
        $relative->forceDelete();
    }

    /**
     * Restore the specified resource from softDelete.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        $student = Relative::withTrashed()->find($id);
        if ($relative && $relative->trashed()) {
            $relative->restore();
        }
    }
}
