<?php

namespace App\Models;

use App\Traits\belongsToSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
{
    use HasFactory, SoftDeletes, belongsToSubject;
    protected $fillable = ['week_day_id', 'subject_id', 'hour_count'];

    /**
     * Get the week_day that owns the Schedule
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function week_day()
    {
        return $this->belongsTo(WeekDay::class);
    }
}
