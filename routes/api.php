<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
	'namespace' => 'Api',
], function () {
	Route::post('/auth', 'AuthController@store')->name('auth.store');
	Route::post('/users', 'UserController@store')->name('user.store');

	// private routes
	Route::group([
		'middleware' => 'jwt.verify'
	], function () {
		Route::get('/user', 'UserController@show')->name('user.show');		
	});
});
