<?php

use App\Http\Controllers\SpaController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');
