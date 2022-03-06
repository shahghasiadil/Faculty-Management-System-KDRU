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
        return new SubjectResource(Subject::with('semester','teacher')->latest()->get());
    }

    public function show($id)
    {
        return Subject::with('semester','teacher')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $data =$this->validate($request, [
            'name' => 'required|string|max:80',
            'credit' => 'required|integer',
            'semester_id' => 'required|integer',
            'teacher_id' => 'required|integer',
            'code' => 'required'
        ]);

        Subject::create($data);
    }

    // This method updates Subject
    public function update(Request $request, $id)
    {
        $subject = Subject::findOrFail($id);
        $data = $this->validate($request, [
            'name' => 'string|max:80',
            'credit' => 'integer',
            'semester_id' => 'integer',
            'teacher_id' => 'integer',
            'code' => ''
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

    /**
     * @param Request request [student_id, subject_id]
     * this function add a students to a particular subject
     */
    public function addStudentToSubject(Request $request)
    {
        $this->validate($request, [
            'student_id' => 'required|integer',
            'subject_id' => 'required|integer'
        ]);

        $subject = Subject::findOrFail($request->subject_id);
        $subject->students()->attach($request->student_id);
        
        // if a student is added to a subject, also add them to the related semester automatically
        $semester = $subject->semester;
        $student = $semester->students->where('id', $request->student_id)->first();
        if($student == null){
            $semester->students()->attach($request->student_id);
        }
    }
}
