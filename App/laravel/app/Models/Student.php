<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Student extends Model
{
    use HasFactory;

    protected $fillable = ['national_id', 'name', 'last_name', 'email', 'password', 'period'];
    public function subject()
    {
        return $this->belongsToMany(Student::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function chances()
    {
        return $this->hasMany(Chance::class);
    }

    public function semesters()
    {
        return $this->belongsToMany(Semester::class);
    }

    public function finalMarks()
    {
        return $this->hasMany(FinalMark::class);
    }

    public function midtermMarks()
    {
        return $this->hasMany(MidtermMark::class);
    }
}
