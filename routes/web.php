<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/categories', [CategoryController::class, 'index'])->name('categories');

Route::get('/categories/{id}', [RecipeController::class, 'byCategory'])->name('categories.show');

Route::get('/recipes/{id}', [RecipeController::class, 'show'])->name('recipe.show');

Route::get('/search', [RecipeController::class, 'search'])->name('recipes.search');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/recipes/{id}/like', [RecipeController::class, 'like'])->name('recipes.like');
Route::post('/recipes/{id}/comment', [RecipeController::class, 'comment'])->name('recipes.comment');

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/recipes', [App\Http\Controllers\Admin\RecipeController::class, 'index'])->name('recipes.index');
    Route::get('/recipes/create', [App\Http\Controllers\Admin\RecipeController::class, 'create'])->name('recipes.create');
    Route::post('/recipes', [App\Http\Controllers\Admin\RecipeController::class, 'store'])->name('recipes.store');
    Route::get('/recipes/{recipe}/edit', [App\Http\Controllers\Admin\RecipeController::class, 'edit'])->name('recipes.edit');
    Route::put('/recipes/{recipe}', [App\Http\Controllers\Admin\RecipeController::class, 'update'])->name('recipes.update');
    Route::delete('/recipes/{recipe}', [App\Http\Controllers\Admin\RecipeController::class, 'destroy'])->name('recipes.destroy');
});

require __DIR__.'/auth.php';
