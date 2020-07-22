<?php

use App\models\Article;
use App\models\Profile;
use App\models\User;
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
        $this->call(UsersTableSeeder::class);
        $this->call(ArticlesTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProfileTableSeeder::class);

        factory(Article::class, 50)->create();
        factory(User::class, 10)->create();
        // factory(Profile::class, 10)->create();
    }
}
