<?php

namespace Database\Factories;

use App\Models\StudentRating;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class StudentRatingFactory extends Factory
{
    protected $model = StudentRating::class;

    public function definition()
    {
        return [
			'student_id' => $this->faker->name,
			'token_id' => $this->faker->name,
			'company_id' => $this->faker->name,
			'colleague_id' => $this->faker->name,
			'rating' => $this->faker->name,
        ];
    }
}
