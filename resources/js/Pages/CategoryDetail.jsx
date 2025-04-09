"use client"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

// Données simulées pour les recettes par catégorie
const recipesByCategory = {
  1: [
    {
      id: 1,
      title: "Tarte aux Fraises",
      description: "Une délicieuse tarte aux fraises fraîches sur une crème pâtissière onctueuse.",
      image: "/images/placeholder.jpg",
      difficulty: "Facile",
      prepTime: "30 min",
      cookTime: "25 min",
    },
    {
      id: 7,
      title: "Tarte au Citron Meringuée",
      description: "Une tarte acidulée au citron, surmontée d'une meringue légère et aérienne.",
      image: "/images/placeholder.jpg",
      difficulty: "Intermédiaire",
      prepTime: "45 min",
      cookTime: "35 min",
    },
    {
      id: 8,
      title: "Tarte Tatin",
      description: "Une tarte aux pommes caramélisées, renversée et servie tiède.",
      image: "/images/placeholder.jpg",
      difficulty: "Intermédiaire",
      prepTime: "30 min",
      cookTime: "40 min",
    },
  ],
  // Autres catégories...
}

// Données simulées pour les catégories
const categories = [
  { id: 1, name: "Tartes", description: "Des tartes sucrées aux fruits, au chocolat ou à la crème." },
  { id: 2, name: "Gâteaux", description: "Des gâteaux pour toutes les occasions." },
  {
    id: 3,
    name: "Petits Gâteaux",
    description: "Macarons, cupcakes, muffins et autres délicieuses petites bouchées sucrées.",
  },
  { id: 4, name: "Biscuits", description: "Des cookies aux sablés, en passant par les biscuits de Noël." },
  { id: 5, name: "Pâtisseries Françaises", description: "Les grands classiques de la pâtisserie française." },
]

function CategoryDetail() {
  const { id } = useParams()
  const [category, setCategory] = useState(null)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    // Simuler une requête API pour obtenir les détails de la catégorie
    const categoryData = categories.find((cat) => cat.id === Number.parseInt(id))
    setCategory(categoryData || { name: "Catégorie inconnue", description: "" })

    // Simuler une requête API pour obtenir les recettes de cette catégorie
    setRecipes(recipesByCategory[id] || [])
  }, [id])

  if (!category) {
    return <div className="container mx-auto px-4 py-8">Chargement...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
        <p className="text-gray-600 max-w-3xl">{category.description}</p>
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="overflow-hidden hover:shadow-lg transition-shadow border border-primary/10 rounded-lg"
            >
              <div className="relative h-48">
                <img
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-secondary font-bold">{recipe.title}</h3>
                <p className="text-gray-600 text-sm my-2">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                  <span>Difficulté: {recipe.difficulty}</span>
                  <span>•</span>
                  <span>Préparation: {recipe.prepTime}</span>
                  <span>•</span>
                  <span>Cuisson: {recipe.cookTime}</span>
                </div>
                <Link to={`/recipes/${recipe.id}`} className="text-primary hover:underline text-sm font-medium">
                  Voir la recette
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aucune recette trouvée dans cette catégorie.</p>
        </div>
      )}
    </div>
  )
}

export default CategoryDetail
