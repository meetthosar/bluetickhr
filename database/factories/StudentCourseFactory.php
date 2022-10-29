<?php

namespace Database\Factories;

use App\Models\StudentCourse;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class StudentCourseFactory extends Factory
{
    protected $model = StudentCourse::class;

    public function definition()
    {
        return [
			'student_id' => $this->faker->name,
			'course_id' => $this->faker->name,
			'token_id' => $this->faker->name,
			'duration' => $this->faker->name,
			'completed_duration' => $this->faker->name,
			'exams' => $this->faker->name,
			'passed_exams' => $this->faker->name,
        ];
    }
}
