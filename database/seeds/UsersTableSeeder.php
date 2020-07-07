<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Collection;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
        	'name' => 'Admin',
        	'email' => 'admin@mail.com',
        	'password' => bcrypt('123456')
        ]);

        Collection::create([
            'name' => 'favorites',
            'user_id' => $user->id
        ]);
    }
}
