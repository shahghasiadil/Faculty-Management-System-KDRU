<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use App\Traits\belongsToSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attendance extends Model
{
    use HasFactory, SoftDeletes, belongsToStudent, belongsToSubject;
    protected $fillable = ['month', 'year', 'present', 'absent', 'leave', 'student_id', 'subject_id'];
}