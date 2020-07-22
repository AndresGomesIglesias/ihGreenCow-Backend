<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




// Route::get('{all}', function () {return view('index');});
Route::get('/', function () {return view('index');});

Route::get('/home', function () {return view('index');});

Route::get('/categories', function () { return view('index');})->name('path_cat');

Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');
// Route::Resource('/categories', 'Api\v1\CategoriesController');
// Route::resource('articles', 'ArticlesController');

//Route::resource('profiles', 'ProfilesController');
//Route::get('profile/{user}', 'ProfilesController@index')->name('profile.show');
//Route::get('profile/{user}/edit', 'ProfilesController@edit')->name('profile.edit');
//Route::post('profile/{user}/save', 'ProfilesController@save');

//Route::patch('profile/{user}', 'ProfilesController@update')->name('profile.update');




