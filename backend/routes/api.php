<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::get('/hero', [ApiController::class, 'hero']);
    Route::get('/services', [ApiController::class, 'services']);
    Route::get('/projects', [ApiController::class, 'projects']);
    Route::get('/testimonials', [ApiController::class, 'testimonials']);
    Route::get('/settings', [ApiController::class, 'settings']);
    Route::post('/contact', [ApiController::class, 'submitContact']);
});
