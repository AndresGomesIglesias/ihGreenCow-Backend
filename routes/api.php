<?php

use App\models\Profile;
use App\models\Categories;
use Illuminate\Http\Request;



Route::middleware('auth:api')->get('/user', function (Request $request) 
{
    return $request->user();
});


Route::prefix('v1')->namespace('Api\v1')->group( function() 
{
    // API Resource Aricles
    Route::apiResource('/articles', 'ArticlesController')->only(['show','destroy','update','store','index']);
    
    // API Resource Categories
    Route::GET('/categories', 'CategoriesController@index')->name('categories.index');
});


//Route::get('profile/{user}', 'ProfilesController@index')->name('profile.show');
// Route::post('profile/{user}/save', 'ProfilesController@save');

/*Route::apiResource('/profile', 'ProfilesController')
    ->only(['show','destroy','update','store','index','delete','save']);*/

