<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



//Product APIs
Route::post('products_get', [ProductController::class, 'index'])->name('products_get');
Route::post('products', [ProductController::class, 'upload'])->name('products');
Route::post('product_update', [ProductController::class, 'update'])->name('product_update');
Route::post('product_delete', [ProductController::class, 'delete'])->name('product_delete');
Route::post('product_search', [ProductController::class, 'search'])->name('product_search');

//User APIs
Route::post('users_get', [ProductController::class, 'userList'])->name('users_get');

//getUserListByRoleId get user list by role id
Route::post('users_get_by_role_id/{id}', [ProductController::class, 'getUserListByRoleId'])->name('users_get_by_role_id');      

// update report status and report history with assign to user id

Route::post('update_report_status', [ReportController::class, 'updateReportStatus'])->name('update_report_status');

//Roles APIs
Route::post("roles_get", [RoleController::class, 'index'])->name("roles_get");

//Permission APIs
Route::post('permissions_get', [PermissionController::class, 'index'])->name('permissions_get');

//Reports APIs
Route::post('reports_get', [ReportController::class, 'getReports'])->name('reports_get');
// Reports History APIs
Route::post('report_history_get/{id}', [ReportController::class, 'getReportHistory'])->name('report_history_get');

Route::post('products_by_user_id_get/{id}', [ProductController::class, 'getProductsByUserId'])->name('products_by_user_id_get');

Route::post('products_by_room_id_get/{id}', [ProductController::class, 'getProductsByRoomId'])->name('products_by_room_id_get');

//Report By User ID

Route::post('reports_by_user_id_get/{id}', [ReportController::class, 'getReportsByUserId'])->name('reports_by_user_id_get');

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('register', [AuthController::class, 'signup']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});
