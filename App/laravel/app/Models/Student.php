<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['national_id', 'name', 'last_name', 'email', 'password', 'period','user_id','father_name','grand_father_name','roll_no','address_id'];
    public function registrations()
    {
        return $this->belongsToMany(Registration::class);
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
