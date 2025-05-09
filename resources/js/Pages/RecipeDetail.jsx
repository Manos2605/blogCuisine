"use client"

import { Link } from "@inertiajs/react"
import { Clock, ChefHat, Printer, Share2, BookmarkPlus } from "lucide-react"

function RecipeDetail({ recipe }) {
  if (!recipe) {
    return <div className="container mx-auto px-4 py-8">Chargement...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-pink-500">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link href="/categories" className="hover:text-pink-500">
          Catégories
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${recipe.category_id}`} className="hover:text-pink-500">
          {recipe.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{recipe.title}</span>
      </div>

      {/* Recipe Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Préparation: {recipe.prep_time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Cuisson: {recipe.cook_time}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>Difficulté: {recipe.difficulty}</span>
          </div>
          <div>
            <span>Pour {recipe.servings} personnes</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button className="flex items-center gap-1 border border-primary/20 rounded-md px-3 py-1 hover:bg-accent">
            <Printer className="h-4 w-4" />
            <span>Imprimer</span>
          </button>
          <button className="flex items-center gap-1 border border-primary/20 rounded-md px-3 py-1 hover:bg-accent">
            <Share2 className="h-4 w-4" />
            <span>Partager</span>
          </button>
          <button className="flex items-center gap-1 border border-primary/20 rounded-md px-3 py-1 hover:bg-accent">
            <BookmarkPlus className="h-4 w-4" />
            <span>Sauvegarder</span>
          </button>
        </div>
      </div>

      {/* Recipe Image */}
      <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="w-full h-full object-cover" />
      </div>

      {/* Recipe Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Ingredients */}
        <div className="lg:col-span-1">
          <div className="bg-pink-50 rounded-xl p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Ingrédients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border border-pink-300 flex-shrink-0 mt-0.5" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Instructions</h2>
            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mb-8 bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Astuces du Chef</h2>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Author */}
          <div className="mb-8 border-t border-b py-6">
            <div className="flex items-center gap-4">
              <img
                src={recipe.author_image || "/placeholder-author.svg"}
                alt={recipe.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold">{recipe.author}</h3>
                <p className="text-sm text-gray-600">Publié le {recipe.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
