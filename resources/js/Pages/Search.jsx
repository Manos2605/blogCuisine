import { Link } from "@inertiajs/react"
import { Clock, ChefHat } from "lucide-react"

function Search({ recipes, query }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Résultats de recherche</h1>
        <p className="text-gray-600">
          {recipes.length} résultat{recipes.length > 1 ? 's' : ''} pour "{query}"
        </p>
      </div>

      {recipes.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Aucun résultat trouvé</h2>
          <p className="text-gray-600 mb-6">
            Essayez d'autres mots-clés ou parcourez nos catégories de recettes.
          </p>
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600"
          >
            Voir toutes les catégories
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded text-sm">
                  {recipe.category}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition-colors">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prep_time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="h-4 w-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search 