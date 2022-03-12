<?php

namespace App\Traits;

use App\Models\Subject;
/**
 * 
 * 
 */
trait  belongsToSubject
{
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
}
