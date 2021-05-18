<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Mockery\Matcher\Subset;

class Student extends Model
{
    use HasFactory;

    protected $fillable = ['national_id', 'name', 'last_name', 'email', 'password', 'period'];
    public function subjects()
    {
        return $this->belongsToMany(Subset::class);
    }
}
