<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = ['national_id', 'name', 'last_name', 'degree', 'email', 'password', 'bio'];

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function examSchedules()
    {
        return $this->hasMany(ExamSchedule::class);
    }
}