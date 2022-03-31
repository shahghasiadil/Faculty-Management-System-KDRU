<?php

namespace App\Traits;

use App\Models\Student;
/**
 * 
 */
trait  belongsToStudent
{
    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

