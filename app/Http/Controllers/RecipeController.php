<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class RecipeController extends Controller
{
    public function show($id)
    {
        try {
            $recipe = Recipe::findOrFail($id);
            
            // Formater les données pour la vue
            $formattedRecipe = [
                'id' => $recipe->id,
                'title' => $recipe->title,
                'description' => $recipe->description,
                'image' => $recipe->image,
                'category' => $recipe->category,
                'difficulty' => $recipe->difficulty,
                'prep_time' => $recipe->prep_time . ' min',
                'cook_time' => $recipe->cook_time . ' min',
                'servings' => $recipe->servings,
                'ingredients' => is_string($recipe->ingredients) ? json_decode($recipe->ingredients) : $recipe->ingredients,
                'steps' => array_map(function($step, $index) {
                    return [
                        'title' => 'Étape ' . ($index + 1),
                        'description' => $step
                    ];
                }, is_string($recipe->steps) ? json_decode($recipe->steps) : $recipe->steps, array_keys(is_string($recipe->steps) ? json_decode($recipe->steps) : $recipe->steps)),
                'tips' => is_string($recipe->tips) ? json_decode($recipe->tips) : $recipe->tips,
                'author' => $recipe->author,
                'author_image' => $recipe->author_image,
                'date' => $recipe->date instanceof \DateTime ? $recipe->date->format('d F Y') : Carbon::parse($recipe->date)->format('d F Y')
            ];

            return Inertia::render('RecipeDetail', ['recipe' => $formattedRecipe]);
        } catch (\Exception $e) {
            Log::error('Erreur dans RecipeController@show: ' . $e->getMessage());
            Log::error($e->getTraceAsString());
            return Inertia::render('RecipeDetail', ['recipe' => null]);
        }
    }
}
