<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Repeat extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['student_id', 'semester_id', 'repeat_year'];
   
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }

    public function finalMark(){
        return $this->belongsTo(FinalMark::class);
    }
}
