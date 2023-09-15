<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
        \App\Models\Role::factory()
        ->count(5)
        ->state(new Sequence(
            ['name' => 'User'],
            ['name' => 'Super Admin'],
            ['name' => 'IT Staff'],
            ['name' => 'IT Admin'],
            ['name' => 'General Staff'],
        ))
        ->create();
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
