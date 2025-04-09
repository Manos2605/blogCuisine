import { Link } from '@inertiajs/react'

function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
          {recipe.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-secondary mb-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
          <span>Difficulté: {recipe.difficulty}</span>
          <span>•</span>
          <span>Préparation: {recipe.prepTime}</span>
          <span>•</span>
          <span>Cuisson: {recipe.cookTime}</span>
        </div>
        <Link
          href={`/recipes/${recipe.id}`}
          className="text-primary hover:underline text-sm font-medium"
        >
          Voir la recette
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard 