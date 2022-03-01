<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teacher extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['national_id', 'name', 'last_name', 'degree', 'bio', 'address_id', 'user_id'];

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    
    public function examSchedules()
    {
        return $this->hasMany(ExamSchedule::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function finalProject()
    {
        return $this->hasMany(FinalProject::class);
    }

    /**
     * Get all of the subjects for the Teacher
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
}
