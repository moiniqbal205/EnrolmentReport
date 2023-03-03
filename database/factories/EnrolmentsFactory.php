<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Courses;

class EnrolmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::all()->random()->id,
            'course_id' => Courses::all()->random()->id,
            'completion_status' => $this->faker->randomElement(['not started', 'in progress', 'completed']),
        ];
    }
}
