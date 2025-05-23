<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('image')->nullable();
            $table->string('category');
            $table->string('difficulty');
            $table->integer('prep_time');
            $table->integer('cook_time');
            $table->integer('servings');
            $table->json('ingredients');
            $table->json('steps');
            $table->json('tips')->nullable();
            $table->string('author');
            $table->string('author_image')->nullable();
            $table->date('date');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
}; 