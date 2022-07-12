<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\TopUpController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\WebController;
use App\Http\Controllers\ApiController;

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



// Route Akun
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('update', [AuthController::class, 'update']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
Route::post('me', [AuthController::class, 'me']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Verify email
Route::get('/email/verify/{id}/{hash}', [VerificationController::class, '__invoke'])
    ->middleware(['signed', 'throttle:6,1'])
    ->name('verification.verify');

// Resend link to verify email
Route::post('/email/verify/resend', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return response()->json(['message' => 'Verification link sent!']);
})->middleware(['auth:api', 'throttle:6,1'])->name('verification.send');

// News Gateway Route
Route::post('addNews', [NewsController::class, 'store']);
Route::get('index', [NewsController::class, 'index']);
Route::delete('delete/{id}', [NewsController::class, 'destroy']);
Route::get('news/{id}', [NewsController::class, 'show']);
Route::put('updateNews/{id}', [NewsController::class, 'update']);

// TopUp Route
Route::get('topup_list', [TopUpController::class, 'topup']);
Route::post('payment', [WebController::class, 'payment']);
Route::post('payment_post', [WebController::class, 'payment_post']);
Route::post('payment_handler', [ApiController::class, 'payment_handler']);
Route::get('payment_history',[WebController::class,'payment_history']);

