<?php

use Illuminate\Database\Seeder;




class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('users')->insert([
            'username' => 'Gomes',
            'email'=>'qwer@qwer.com',
            'password'  => '12345678',
            'api_token' => 'Ka6V9DUpS3TBpttnKMVn97RAM3HRs9QOWGfmhPvgkyophsDDxeKxbeDWj3Uh',
        ]);
    }
}
