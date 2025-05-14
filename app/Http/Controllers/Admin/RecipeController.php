<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function index()
    {
        $recipes = Recipe::latest()->paginate(10);
        return Inertia::render('Admin/Recipes/Index', [
            'recipes' => $recipes
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Recipes/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'category' => 'required|string|max:255',
            'difficulty' => 'required|string|max:255',
            'prep_time' => 'required|integer|min:1',
            'cook_time' => 'required|integer|min:1',
            'servings' => 'required|integer|min:1',
            'ingredients' => 'required|array',
            'steps' => 'required|array',
            'tips' => 'nullable|array',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('recipes', 'public');
        }

        $validated['author'] = $request->user()->name;
        $validated['author_image'] = $request->user()->profile_photo_url ?? null;
        $validated['date'] = now();

        Recipe::create($validated);

        return redirect()->route('admin.recipes.index')
            ->with('success', 'Recette créée avec succès.');
    }

    public function edit(Recipe $recipe)
    {
        return Inertia::render('Admin/Recipes/Edit', [
            'recipe' => $recipe
        ]);
    }

    public function update(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|max:2048',
            'category' => 'required|string|max:255',
            'difficulty' => 'required|string|max:255',
            'prep_time' => 'required|integer|min:1',
            'cook_time' => 'required|integer|min:1',
            'servings' => 'required|integer|min:1',
            'ingredients' => 'required|array',
            'steps' => 'required|array',
            'tips' => 'nullable|array',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('recipes', 'public');
        }

        $recipe->update($validated);

        return redirect()->route('admin.recipes.index')
            ->with('success', 'Recette mise à jour avec succès.');
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->delete();

        return redirect()->route('admin.recipes.index')
            ->with('success', 'Recette supprimée avec succès.');
    }
} 