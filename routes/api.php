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
Route::group(['middleware' => 'cors'], function () { 
    Route::post('transaction', 'Api\TransferServiceController@transaction');
    Route::post('register','Api\UserController@registerUser');
    Route::post('login','Api\UserController@login');
    Route::get('refresh','Api\UserController@refresh');
});








/* Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::get('login', 'Api\CategoryController@login')->name('login');
    Route::post('logout', 'Api\CategoryController@logout');
    Route::post('refresh', 'Api\CategoryController@refresh');
    Route::post('me', 'Api\CategoryController@me');
    Route::post('category/store','Api\CategoryController@store');
    Route::delete('category/delete/{id}','Api\CategoryController@destroy');
    Route::get('category/edit/{id}','Api\CategoryController@edit');
    Route::put('category/update/{id}','Api\CategoryController@update');

}); */

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
