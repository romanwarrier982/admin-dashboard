<?php

namespace Database\Factories;

use App\Models\Report;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReportHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'report_id' => $this->faker->numberBetween(1, 10),
            'created_by' => $this->faker->numberBetween(1, 10),
            'updated_by' => $this->faker->numberBetween(1, 10),
            'report_status' => $this->faker->randomElement(['Pending', 'Resolved', 'Closed']),
            'recieved_at' => $this->faker->dateTimeThisMonth,
            'recieved_by' => $this->faker->numberBetween(1, 10),
            'recieved_description' => $this->faker->sentence,
            'resolved_at' => $this->faker->dateTimeThisMonth,
            'resolved_by' => $this->faker->numberBetween(1, 10),
            'resolved_description' => $this->faker->sentence,
            'closed_at' => $this->faker->dateTimeThisMonth,
            'closed_by' => $this->faker->numberBetween(1, 10),
            'closed_description' => $this->faker->sentence,
            'assigned_at' => $this->faker->dateTimeThisMonth,
            'assigned_by' => $this->faker->numberBetween(1, 10),
            'assigned_description' => $this->faker->sentence,
            'assigned_to' => $this->faker->numberBetween(1, 10),
            'assigned_status' => $this->faker->randomElement(['Assigned', 'Unassigned']),
            'forward_at' => $this->faker->dateTimeThisMonth,
            'forward_by' => $this->faker->numberBetween(1, 10),
            'forward_description' => $this->faker->sentence,
            'forward_to' => $this->faker->numberBetween(1, 10),
            'forward_status' => $this->faker->randomElement(['Forwarded', 'Not Forwarded']),
        ];
    }
}

 
//["report_id","created_by", "updated_by", "report_status", "recieved_at", "recieved_by", "recieved_description", "resolved_at", "resolved_by", "resolved_description", "closed_at", "closed_by", "closed_description", "assigned_at", "assigned_by", "assigned_description", "assigned_to", "assigned_status", "forward_at","forward_by","forward_description","forward_to","forward_status"];
