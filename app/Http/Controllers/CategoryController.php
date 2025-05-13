<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = [
            [
                'id' => 1,
                'name' => 'Pâtisseries',
                'count' => Recipe::where('category', 'Pâtisseries')->count()
            ],
            [
                'id' => 2,
                'name' => 'Biscuits',
                'count' => Recipe::where('category', 'Biscuits')->count()
            ],
            [
                'id' => 3,
                'name' => 'Viennoiseries',
                'count' => Recipe::where('category', 'Viennoiseries')->count()
            ],
            [
                'id' => 4,
                'name' => 'Petits Gâteaux',
                'count' => Recipe::where('category', 'Petits Gâteaux')->count()
            ],
            [
                'id' => 5,
                'name' => 'Gâteaux',
                'count' => Recipe::where('category', 'Gâteaux')->count()
            ]
        ];

        return Inertia::render('Categories', [
            'categories' => $categories
        ]);
    }
}
