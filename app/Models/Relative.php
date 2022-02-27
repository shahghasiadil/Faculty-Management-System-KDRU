<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relative extends Model
{
    use HasFactory;
    protected $fillable = ['relationship', 'name', 'father_name', 'job', 'phone', 'academic_transfer', 'student_id'];

    /**
     * Get the Student that owns the Relative
     */
    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
