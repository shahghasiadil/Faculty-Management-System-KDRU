<?php

namespace App\Http\Controllers;

use App\Http\Resources\SubjectResource;
use App\Models\Semester;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * @author  Shahghasi Adil
     * @date    2021-06-13
     *
     */

    // index Method return the data of subjects with semester
    public function index()
    {
        return new SubjectResource(Subject::with('semester')->latest()->get());
    }

    public function show($id)
    {
        return Subject::with('semester')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $data =$this->validate($request, [
            'name' => 'required|string|max:80',
            'credit' => 'required|integer',
            'semester_id' => 'required',
            'code' => 'required'
        ]);

        Subject::create($data);
    }

    // This method updates Subject
    public function update(Request $request, $id)
    {
        $subject = Subject::findOrFail($id);
        $data = $this->validate($request, [
            'name' => 'required|string|max:80',
            'credit' => 'required|integer',
            'semester_id' => 'required',
            'code' => 'required'
        ]);
        $subject->update($data);
    }

    // softDeletes the students
    public function destroy($id)
    {
        $subject = Subject::findOrFail($id);
        $subject->delete();
    }

    public function permanentDelete($id)
    {
        $subject = Subject::findOrFail($id);
        $subject->forceDelete();
    }

    public function restore($id)
    {
        $subject = Subject::withTrashed()->find($id);
        if ($subject && $subject->trashed()) {
            $subject->restore();
        }
    }
}
