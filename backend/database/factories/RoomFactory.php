<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Models\Room;

class RoomFactory extends Factory
{
    protected $model = Room::class;

    public function definition()
    {
        $uniqueRoomNumber = null;

        do {

            $initial = $this->faker->randomLetter;

            // Generate a random number.
            $roomNumber = $this->faker->numberBetween(1, 999);

            // Format the room_number as a 2-character initial followed by numbers.
            $uniqueRoomNumber = $initial . str_pad($roomNumber, 3, '0', STR_PAD_LEFT);
        } while (Room::where('room_number', $uniqueRoomNumber)->exists());

        return [
            'room_number' => $uniqueRoomNumber,
            'room_type_id' => $this->faker->numberBetween(1, 10),
            'room_status' => $this->faker->randomElement(['available', 'occupied', 'under maintenance']),
            'created_by' => 1,
            'updated_by' => 1,
        ];
    }
}
