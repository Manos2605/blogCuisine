import { Link } from '@inertiajs/react'

function Category({ categoryId, recipes }) {
  // Obtenir le nom de la catégorie
  const categoryName = {
    1: 'Pâtisseries',
    2: 'Biscuits',
    3: 'Viennoiseries',
    4: 'Petits Gâteaux',
    5: 'Gâteaux'
  }[categoryId]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary mb-2">Recettes {categoryName}</h1>
        <p className="text-gray-600">{recipes.length} recettes trouvées</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="overflow-hidden hover:shadow-lg transition-shadow border border-primary/10 rounded-lg group"
          >
            <div className="relative h-48 sm:h-56">
              <img
                src={recipe.image || "/placeholder.svg"}
                alt={recipe.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {recipe.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg sm:text-xl text-secondary font-bold group-hover:text-primary transition-colors duration-300">
                {recipe.title}
              </h3>
              <p className="text-gray-600 text-sm my-2">{recipe.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                <span>Difficulté: {recipe.difficulty}</span>
                <span>•</span>
                <span>Préparation: {recipe.prep_time} min</span>
                <span>•</span>
                <span>Cuisson: {recipe.cook_time} min</span>
              </div>
              <Link
                href={`/recipes/${recipe.id}`}
                className="text-primary hover:underline text-sm font-medium"
              >
                Voir la recette
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category 