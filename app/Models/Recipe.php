<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'category',
        'difficulty',
        'prep_time',
        'cook_time',
        'servings',
        'ingredients',
        'steps',
        'tips',
        'author',
        'author_image',
        'date',
    ];

    protected $casts = [
        'ingredients' => 'array',
        'steps' => 'array',
        'tips' => 'array',
    ];
}
