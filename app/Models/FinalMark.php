<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use App\Traits\belongsToSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class FinalMark extends Model
{
    use HasFactory, SoftDeletes, belongsToStudent, belongsToSubject;
    protected $fillable = ['midterm_mark_id', 'marks', 'student_id', 'subject_id'];

    public function midtermMark()
    {
        return $this->belongsTo(MidtermMark::class);
    }
}
