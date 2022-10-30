<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseApplicant extends Model
{
    use HasFactory;

    protected $table = 'course_applicants';

    protected $fillable = [
      'course_id',
      'student_id',
      'status'
    ];

    public function course(){
       return $this->hasOne(Course::class, 'id', 'course_id');
    }

    public function student(){
       return $this->hasOne(User::class,'id', 'student_id');
    }
}
