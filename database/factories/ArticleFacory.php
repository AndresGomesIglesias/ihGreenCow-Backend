<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\models\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'title'             =>  $faker->word,
        'brand'             =>  $faker->company,
        'color'             =>  $faker->colorName,
        'madeIn'            =>  $faker->country,
        'location'          =>  $faker->address,
        'description'       =>  $faker->sentences(5, true),
        'categories_id'     =>  $faker->numberBetween(1,5),
        'user_id'           =>  1,
        'vote'              =>  $faker->numberBetween,
        'status'            =>  1,
        'price'             =>  $faker->randomFloat(null,0,100),
        'slug'              =>  $faker->slug,
    ];
});
