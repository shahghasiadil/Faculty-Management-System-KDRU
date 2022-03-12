<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Repeat extends Model
{
    use HasFactory, SoftDeletes , belongsToStudent;
    protected $fillable = ['student_id', 'semester_id'];

    public function semester()
    {
        return $this->belongsTo(Semester::class);
    }

    public function finalMark(){
        return $this->belongsTo(FinalMark::class);
    }
}
