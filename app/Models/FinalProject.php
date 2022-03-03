<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinalProject extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'code', 'teacher_id'];

    public function students()
    {
        return $this->belongsToMany(Student::class);
    }

    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }

    public function midtermMark()
    {
        return $this->belongsTo(MidtermMark::class);
    }
}
