<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Teacher extends Model
{
    use HasFactory, SoftDeletes;
<<<<<<< HEAD
    protected $fillable = ['national_id', 'name', 'last_name', 'degree', 'email', 'password', 'bio'];
=======
    protected $fillable = ['national_id', 'name', 'last_name', 'degree', 'bio', 'address_id', 'user_id'];
>>>>>>> df3f393260d273b15f526a8272aaf8044f8c05bd

    public function schedules()
    {
        return $this->hasMany(Schedule::class);
    }
    public function examSchedules()
    {
        return $this->hasMany(ExamSchedule::class);
    }
<<<<<<< HEAD
=======

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function address()
    {
        return $this->belongsTo(Address::class);
    }
>>>>>>> df3f393260d273b15f526a8272aaf8044f8c05bd
}
