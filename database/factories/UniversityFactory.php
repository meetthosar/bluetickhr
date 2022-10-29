<?php

namespace Database\Factories;

use App\Models\University;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UniversityFactory extends Factory
{
    protected $model = University::class;

    public function definition()
    {
        return [
			'name' => $this->faker->name,
			'address' => $this->faker->name,
        ];
    }
}
