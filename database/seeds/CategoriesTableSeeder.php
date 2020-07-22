<?php
use Illuminate\Database\Seeder;
class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
   

        DB::table('categories')->insert([
            'name' => 'Femmes',
            'status'=>1,
            'slug' => 'femmes',
        ]);
        DB::table('categories')->insert([
            'name' => 'Chaussure',
            'status'=>1,
            'slug' => 'chaussure',
        ]);

        DB::table('categories')->insert([
            'name' => 'Hommes',
            'status'=>1,
            'slug' => 'hommes',
        ]);

        DB::table('categories')->insert([
            'name' => 'panta',
            'status'=>1,
            'slug' => 'panta',
        ]);

        DB::table('categories')->insert([
            'name' => 'men',
            'status'=>1,
            'slug' => 'men',
        ]);

        DB::table('categories')->insert([
            'name' => 'fashion',
            'status'=>1,
            'slug' => 'fashion',
        ]);




    
    
    
    }
}
