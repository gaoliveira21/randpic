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
		Route::put('/users', 'UserController@update')->name('user.update');

		Route::post('/collections', 'CollectionController@store')->name('collection.store');
		Route::get('/collections', 'CollectionController@index')->name('collection.index');
		Route::get('/collections/{id}', 'CollectionController@show')->name('collection.show');
		Route::put('/collections/{id}', 'CollectionController@update')->name('collection.update');
		Route::delete('/collections/{id}', 'CollectionController@destroy')->name('collection.delete');

		Route::post('/collections/{id}/images', 'CollectionImageController@store')->name('collections_images.store');
		Route::get('/collections/{id}/images', 'CollectionImageController@index')->name('collections_images.index');

		Route::post('/downloads', 'DownloadController@store')->name('download.store');
		Route::get('/downloads', 'DownloadController@index')->name('download.index');
	});
});
