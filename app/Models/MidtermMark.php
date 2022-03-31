<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use App\Traits\belongsToSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MidtermMark extends Model
{
    use HasFactory, SoftDeletes, belongsToStudent, belongsToSubject;
    protected $fillable = ['marks', 'subject_id', 'student_id'];
   
    public function finalMarks()
    {
        return $this->hasMany(FinalMark::class);
    }
}
