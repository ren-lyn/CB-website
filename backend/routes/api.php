<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user()->load('department');
    });

    Route::apiResource('services', \App\Http\Controllers\ServiceController::class)->except(['index', 'show']);
    Route::apiResource('projects', \App\Http\Controllers\ProjectController::class)->except(['index', 'show']);
    Route::apiResource('inquiries', \App\Http\Controllers\InquiryController::class)->except(['store']);
});

Route::get('/services', [\App\Http\Controllers\ServiceController::class, 'index']);
Route::get('/services/{service}', [\App\Http\Controllers\ServiceController::class, 'show']);

Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'index']);
Route::get('/projects/{project}', [\App\Http\Controllers\ProjectController::class, 'show']);

Route::post('/inquiries', [\App\Http\Controllers\InquiryController::class, 'store']);
