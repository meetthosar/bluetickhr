<?php

namespace Database\Factories;

use App\Models\CourseToken;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CourseTokenFactory extends Factory
{
    protected $model = CourseToken::class;

    public function definition()
    {
        return [
			'course_id' => $this->faker->name,
			'token_id' => $this->faker->name,
        ];
    }
}
