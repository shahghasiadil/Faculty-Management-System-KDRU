<?php

namespace App\Models;

use App\Traits\belongsToStudent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relative extends Model
{
    use HasFactory, belongsToStudent;
    protected $fillable = ['relationship', 'name', 'father_name', 'job', 'phone', 'academic_transfer', 'student_id'];

}
