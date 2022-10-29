<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CourseFactory extends Factory
{
    protected $model = Course::class;

    public function definition()
    {
        return [
			'name' => $this->faker->name,
			'duration' => $this->faker->numberBetween(12,48),
			'number_exams' => $this->faker->numberBetween(1,8),
			'skills' => [],
            'price' => $this->faker->numberBetween(20000, 30000),
			'seats' => $this->faker->numberBetween(20,50),
            'image' => $this->faker->imageUrl()
        ];
    }
}
