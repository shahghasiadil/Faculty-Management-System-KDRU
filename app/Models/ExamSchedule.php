<?php

namespace App\Models;

use App\Traits\belongsToSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExamSchedule extends Model
{
    use HasFactory, SoftDeletes, belongsToSubject;
    protected $fillable = ['date', 'teacher_id', 'subject_id'];
    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
}
