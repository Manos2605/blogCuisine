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
        'likes'
    ];

    protected $casts = [
        'ingredients' => 'array',
        'steps' => 'array',
        'tips' => 'array',
    ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function likes()
    {
        return $this->hasMany(RecipeLike::class);
    }

    public function userLikes()
    {
        return $this->hasMany(RecipeLike::class)->where('is_liked', true);
    }

    public function userDislikes()
    {
        return $this->hasMany(RecipeLike::class)->where('is_liked', false);
    }
}
