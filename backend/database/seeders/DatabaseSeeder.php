<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Role;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Seeding user 
        \App\Models\User::factory(1)->create();

        for ($i = 1; $i <= 10; $i++) {
            \App\Models\User::factory()
                ->create([
                    'name' => 'User' . $i,
                    'email' => 'user' . $i . '@gmail.com',
                    'email_verified_at' => now(),
                    'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                    'remember_token' => Str::random(1),
                    'role_id' => $i,
                ]);
        }
        //seed room
        \App\Models\Room::factory(20)->create();
        //product seeder
        \App\Models\Product::factory(20)->create();

        // see RoomType

        \App\Models\RoomType::factory()
            ->count(10)
            ->state(new Sequence(
                [
                    'type_name' => 'Office Room',
                    'room_description' => 'Office Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Class Room',
                    'room_description' => 'Class Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Meeting Room',
                    'room_description' => 'Meeting Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Laboratory Room',
                    'room_description' => 'Laboratory Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Server Room',
                    'room_description' => 'Server Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Storage Room',
                    'room_description' => 'Storage Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Lecture Room',
                    'room_description' => 'Lecture Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Auditorium Room',
                    'room_description' => 'Auditorium Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Library Room',
                    'room_description' => 'Library Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
                [
                    'type_name' => 'Cafetaria Room',
                    'room_description' => 'Cafetaria Room',
                    'status' => 'Active',
                    'created_by' => '1',
                    'updated_by' => '1',
                ],
            ))
            ->create();



        //Seeding roles 
        \App\Models\Role::factory()
            ->count(10)
            ->state(new Sequence(
                ['name' => 'User'],
                ['name' => 'Super Admin'],
                ['name' => 'IT Staff'],
                ['name' => 'IT Admin'],
                ['name' => 'General Staff'],
                ['name' => 'Teacher'],
                ['name' => 'Electrical Staff'],
                ['name' => 'Networking Staff'],
                ['name' => 'Software Staff'],
                ['name' => 'Hardware Staff'],
            ))
            ->create();

        //Seeding permissions 
        \App\Models\Permission::factory()
            ->count(5)
            ->state(new Sequence(
                ['name' => 'User View'],
                ['name' => 'Super Admin View'],
                ['name' => 'IT Staff View'],
                ['name' => 'IT Admin View'],
                ['name' => 'General Staff View'],
            ))
            ->create();
    }
}
