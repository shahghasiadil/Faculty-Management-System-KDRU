<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['national_id', 'name', 'last_name', 'email', 'password', 'period','user_id','father_name','grand_father_name','roll_no','address_id', 'native_tongue', 'tazkira_volume', 'tazkira_page', 'tazkira_registration_number', 'birth_date', 'marital_status', 'school_name', 'graduation_year', 'kankor_score', 'kankor_year', 'kankor_id', 'phone'];

    public function relatives()
    {
        return $this->hasMany(Relative::class);
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

    public function subjects()
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
