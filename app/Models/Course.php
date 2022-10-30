<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
	use HasFactory;

    public $timestamps = true;

    protected $table = 'courses';

    protected $fillable = ['user_id','name','duration','number_exams','skills','seats','price','admission_started'];

    public static array $rules = [
        'user_id' => 'required|integer',
        'name' => 'required|string',
        'duration' => 'required|integer',
//        'number_exams' => 'required|integer',
        'skills' => 'required|array|min:1',
        'seats' => 'required|integer',
        'price' => 'required|integer'
    ];

    protected $casts = [
        'skills' => 'array'
    ];

    /**
     * @return HasMany
     */
    public function courseTokens()
    {
        return $this->hasMany('App\Models\CourseToken', 'course_id', 'id');
    }

    /**
     * @return HasMany
     */
    public function studentCourses()
    {
        return $this->hasMany('App\Models\StudentCourse', 'course_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function university()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }


    /**
     * @return HasMany
     */
    public function applicants(): HasMany
    {
        return $this->hasMany(CourseApplicant::class, 'course_id', 'id');
    }
}
