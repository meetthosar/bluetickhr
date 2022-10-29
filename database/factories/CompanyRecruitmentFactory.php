<?php

namespace Database\Factories;

use App\Models\CompanyRecruitment;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CompanyRecruitmentFactory extends Factory
{
    protected $model = CompanyRecruitment::class;

    public function definition()
    {
        return [
			'company_id' => $this->faker->name,
			'student_id' => $this->faker->name,
			'contract_address' => $this->faker->name,
        ];
    }
}
