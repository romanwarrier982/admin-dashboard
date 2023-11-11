<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReportFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 50 reports with random room_id, user_id, asset_id, report_description, report_status, created_by, updated_by, history_id, report_type
            'room_id' => $this->faker->numberBetween(1, 10), 
            'user_id' => $this->faker->numberBetween(1, 10), 
            'asset_id' => $this->faker->numberBetween(1, 10), 
            'report_description' => $this->faker->sentence,
            'report_status' => $this->faker->randomElement(['Pending', 'Resolved', 'Closed', 'In Progress','Opened', 'Active']),
            'created_by' => $this->faker->numberBetween(1, 10), 
            'updated_by' => $this->faker->numberBetween(1, 10), 
            'history_id' => null, // Set this value accordingly
            'report_type' => $this->faker->randomElement(['Software Issue', 'Hardware Issue', 'Network Issue', 'Other']),


        ];
    }
}


