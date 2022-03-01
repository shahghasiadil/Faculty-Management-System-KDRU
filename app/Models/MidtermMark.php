<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MidtermMark extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['marks', 'subject_id', 'student_id'];
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function finalMarks()
    {
        return $this->hasMany(FinalMark::class);
    }
}
