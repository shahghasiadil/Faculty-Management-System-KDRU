<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model
{
    use HasFactory, SoftDeletes;

    // Mass Assignment 
    protected $fillable = ['name', 'credit', 'semester_id'];

    public function students()
    {
        return $this->belongsToMany(Student::class);
    }

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
}