<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class FinalMark extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['marks', 'student_id', 'subject_id', 'total_marks'];
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function repeats()
    {
        return $this->hasMany(Repeat::class);
    }
}