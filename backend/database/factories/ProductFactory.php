<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

use Illuminate\Support\Str;
use Faker\Generator as Faker;


class ProductFactory extends Factory
{
    protected $model = Product::class;
    public function definition()
    {
        return [
            // 'name' => $this->faker->word,
            'name' => $this->faker->randomElement(['Telephone Devices', 'Intercom', 'Laptop', 'PC', 'Projector', 'Sound Suystem', 'Microphone', 'Wi-Fi', 'Router', 'Networking Devices', 'Other', 'Mobile', 'Software']),
            'price' => $this->faker->randomFloat(2, 10, 1000),
            'image_name' => 'box.png',
            'status' => $this->faker->randomElement(['available', 'out of stock', 'discontinued', 'on order', 'allocated', 'unavailable']),
            'supplier_id' => $this->faker->numberBetween(1, 10), 
            'expired_at' => $this->faker->dateTimeBetween('now', '+2 year'),
            'invoice_id' => $this->faker->unique()->uuid, 
            'details' => $this->faker->sentence,
            'count' => $this->faker->numberBetween(1, 100),
            'type' => $this->faker->randomElement(['Electronics', 'Software', 'Hardware', 'Other']),
            'created_by' => 1,
            'updated_by' => 1,
            'user_id' => $this->faker->numberBetween(1, 10),
            'room_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
