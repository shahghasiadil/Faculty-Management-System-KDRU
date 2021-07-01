<?php

namespace App\Http\Controllers;

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
        return Subject::with('semester')->latest()->paginate(10);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:80',
            'credit' => 'required|integer',
            'semester_id' => 'required',
        ]);

        Subject::create([
            'name' => $request->name,
            'credit' => $request->credit,
            'semester_id' => $request->semester_id
        ]);
    }
    // This method updates Subject
    public function update(Request $request, $id)
    {
        $subject = Subject::findOrFail($id);
        $this->validate($request, [
            'name' => 'required|string|max:80',
            'credit' => 'required|integer',
            'semester_id' => 'required',
        ]);
        $subject->update($request->all());
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
