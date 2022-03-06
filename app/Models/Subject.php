<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use HasFactory, SoftDeletes;

    // Mass Assignment
    protected $fillable = ['name', 'credit', 'semester_id', 'code', 'teacher_id'];

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function examSchedules()
    {
        return $this->hasMany(ExamSchedule::class);
    }

    public function chances()
    {
        return $this->hasMany(Chance::class);
    }
    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }
    public function finalMarks()
    {
        return $this->belongsTo(FinalMark::class);
    }

    /**
     * The students that belong to the Subject
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function students()
    {
        return $this->belongsToMany(Student::class);
    }

    /**
     * Get the teacher that owns the Subject
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
}
