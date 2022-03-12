<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attendance extends Model
{
    use HasFactory, SoftDeletes, belongsToStudent;
    protected $fillable = ['month', 'year', 'present', 'absent', 'leave', 'student_id', 'subject_id'];

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
}
