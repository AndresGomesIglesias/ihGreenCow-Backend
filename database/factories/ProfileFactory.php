<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\models\Profile;
use App\models\User;
use Faker\Generator as Faker;

$factory->define(Profile::class, function (Faker $faker) {
 return [
        // 'user_id' => function () {
        //     return factory(App\models\Profile::class)->create()->id;
        // },
        'user_id' => $faker->numberBetween(1,5),
        'firstname'=> $faker->firstName,
        'lastname'=> $faker->lastName,
        'adress'=> $faker->streetAddress,
        'number'=> $faker->numberBetween(1,99),
        'npa'=> $faker->state,
        'city'=> $faker->city,
        'state'=> $faker->state,
        'about'=> $faker->text,
        'hobbies'=> $faker->text,
        'country'=> $faker->country,
        'picture'=> $faker->url,
    ];
});
