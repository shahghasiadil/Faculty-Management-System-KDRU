<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
// use Illuminate\View\View;

class RegistrationController extends Controller
{
    /**
     * @author  Shahghasi Adil
     * @date    2021-06-13
     *
     */
    // return View
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Registration::with(['subjects', 'students'])->get();
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
            'student_id' => 'required',
            'subject_id' => 'required'
        ]);
        Registration::create($validated);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Registration::findOrFail($id);
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
        $registration = Registration::findOrFail($id);
        $validated = $this->validate($request, [
            'student_id' => 'required',
            'subject_id' => 'required'
        ]);
        $registration->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $registration = Registration::destroy($id);
    }

    public function restore($id)
    {
        $registration = Registration::withTrashed()->find($id);
        if ($registration && $registration->trashed()) {
            $registration->restore();
        }
    }

    public function permanentDelete($id)
    {
        $registration = Registration::findOrFail($id)->forceDelete();
    }
}
