<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\Comment;
use App\Models\RecipeLike;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class RecipeController extends Controller
{
    public function show($id)
    {
        try {
            $recipe = Recipe::with(['comments.user', 'likes'])->findOrFail($id);
            $userLike = null;
            
            if (Auth::check()) {
                $userLike = $recipe->likes()->where('user_id', Auth::id())->first();
            }
            
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
                'date' => $recipe->date instanceof \DateTime ? $recipe->date->format('d F Y') : Carbon::parse($recipe->date)->format('d F Y'),
                'likes_count' => $recipe->userLikes()->count(),
                'dislikes_count' => $recipe->userDislikes()->count(),
                'user_like' => $userLike ? $userLike->is_liked : null,
                'comments' => $recipe->comments->map(function($comment) {
                    return [
                        'id' => $comment->id,
                        'content' => $comment->content,
                        'created_at' => $comment->created_at,
                        'user' => [
                            'id' => $comment->user->id,
                            'name' => $comment->user->name,
                            'avatar' => $comment->user->avatar
                        ]
                    ];
                })
            ];

            return Inertia::render('RecipeDetail', ['recipe' => $formattedRecipe]);
        } catch (\Exception $e) {
            Log::error('Erreur dans RecipeController@show: ' . $e->getMessage());
            Log::error($e->getTraceAsString());
            return Inertia::render('RecipeDetail', ['recipe' => null]);
        }
    }

    public function like($id)
    {
        if (!Auth::check()) {
            return response()->json([
                'error' => 'Pour liker cette recette, connectez-vous à votre compte',
                'action' => 'login',
                'message' => 'Rejoignez notre communauté de passionnés de pâtisserie !'
            ], 401);
        }

        $recipe = Recipe::findOrFail($id);
        $userLike = $recipe->likes()->where('user_id', Auth::id())->first();

        if ($userLike) {
            // Si l'utilisateur a déjà liké, on change son vote
            $userLike->is_liked = !$userLike->is_liked;
            $userLike->save();
        } else {
            // Sinon, on crée un nouveau like
            $recipe->likes()->create([
                'user_id' => Auth::id(),
                'is_liked' => true
            ]);
        }

        // Récupérer la recette mise à jour avec les relations
        $recipe = Recipe::with(['comments.user', 'likes'])->find($id);
        $userLike = $recipe->likes()->where('user_id', Auth::id())->first();

        // Formater les données comme dans la méthode show
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
            'date' => $recipe->date instanceof \DateTime ? $recipe->date->format('d F Y') : Carbon::parse($recipe->date)->format('d F Y'),
            'likes_count' => $recipe->userLikes()->count(),
            'user_like' => $userLike ? $userLike->is_liked : null,
            'comments' => $recipe->comments->map(function($comment) {
                return [
                    'id' => $comment->id,
                    'content' => $comment->content,
                    'created_at' => $comment->created_at,
                    'user' => [
                        'id' => $comment->user->id,
                        'name' => $comment->user->name,
                        'avatar' => $comment->user->avatar
                    ]
                ];
            })
        ];

        return Inertia::render('RecipeDetail', ['recipe' => $formattedRecipe]);
    }

    public function comment(Request $request, $id)
    {
        if (!Auth::check()) {
            return response()->json([
                'error' => 'Pour commenter cette recette, connectez-vous à votre compte',
                'action' => 'login',
                'message' => 'Partagez vos impressions avec notre communauté !'
            ], 401);
        }

        $request->validate([
            'content' => 'required|min:3'
        ]);

        $recipe = Recipe::findOrFail($id);
        $comment = new Comment([
            'content' => $request->content,
            'user_id' => Auth::id()
        ]);
        
        $recipe->comments()->save($comment);
        
        // Récupérer la recette mise à jour avec les relations
        $recipe = Recipe::with(['comments.user', 'likes'])->find($id);
        $userLike = $recipe->likes()->where('user_id', Auth::id())->first();

        // Formater les données comme dans la méthode show
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
            'date' => $recipe->date instanceof \DateTime ? $recipe->date->format('d F Y') : Carbon::parse($recipe->date)->format('d F Y'),
            'likes_count' => $recipe->userLikes()->count(),
            'user_like' => $userLike ? $userLike->is_liked : null,
            'comments' => $recipe->comments->map(function($comment) {
                return [
                    'id' => $comment->id,
                    'content' => $comment->content,
                    'created_at' => $comment->created_at,
                    'user' => [
                        'id' => $comment->user->id,
                        'name' => $comment->user->name,
                        'avatar' => $comment->user->avatar
                    ]
                ];
            })
        ];

        return Inertia::render('RecipeDetail', ['recipe' => $formattedRecipe]);
    }

    public function byCategory($categoryId)
    {
        $categoryMap = [
            1 => 'Pâtisseries',
            2 => 'Biscuits',
            3 => 'Viennoiseries',
            4 => 'Petits Gâteaux',
            5 => 'Gâteaux'
        ];

        $recipes = Recipe::where('category', $categoryMap[$categoryId])->get();

        return Inertia::render('Category', [
            'categoryId' => $categoryId,
            'recipes' => $recipes
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        
        $recipes = Recipe::where('title', 'like', "%{$query}%")
            ->orWhere('description', 'like', "%{$query}%")
            ->orWhere('category', 'like', "%{$query}%")
            ->get();

        return Inertia::render('Search', [
            'recipes' => $recipes,
            'query' => $query
        ]);
    }
}
