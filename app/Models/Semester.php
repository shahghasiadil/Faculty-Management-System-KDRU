<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Semester extends Model
{

    use HasFactory, SoftDeletes;


    protected $fillable = ['name'];
    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }


    public function students()
    {
        return $this->belongsToMany(Student::class);
    }

    public function finalMarks()
    {
        return $this->hasMany(FinalMark::class);
    }
}
