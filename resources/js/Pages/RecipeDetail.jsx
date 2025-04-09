"use client"

import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Clock, ChefHat, Printer, Share2, BookmarkPlus } from "lucide-react"

// Fonction pour simuler la récupération d'une recette par ID
function getRecipe(id) {
  return {
    id: Number.parseInt(id),
    title: "Tarte aux Fraises",
    description: "Une délicieuse tarte aux fraises fraîches sur une crème pâtissière onctueuse.",
    image: "/images/placeholder.jpg",
    category: "Tartes",
    categoryId: 1,
    date: "15 mars 2023",
    author: "Marie Dupont",
    authorImage: "/images/placeholder-author.jpg",
    difficulty: "Facile",
    prepTime: "30 min",
    cookTime: "25 min",
    servings: 8,
    ingredients: [
      "1 pâte sablée",
      "500g de fraises fraîches",
      "50cl de lait entier",
      "4 jaunes d'œufs",
      "100g de sucre",
      "40g de farine",
      "1 gousse de vanille",
      "20g de beurre",
      "Quelques feuilles de menthe pour la décoration",
    ],
    steps: [
      {
        title: "Préparation de la pâte",
        description:
          "Étalez la pâte sablée dans un moule à tarte de 28cm de diamètre. Piquez le fond avec une fourchette et réservez au réfrigérateur pendant 30 minutes.",
      },
      {
        title: "Cuisson à blanc",
        description:
          "Préchauffez le four à 180°C. Recouvrez la pâte de papier sulfurisé et de haricots secs. Faites cuire pendant 15 minutes, puis retirez les haricots et le papier et poursuivez la cuisson pendant 10 minutes jusqu'à ce que la pâte soit dorée.",
      },
      {
        title: "Préparation de la crème pâtissière",
        description:
          "Fendez la gousse de vanille et grattez les graines. Dans une casserole, faites chauffer le lait avec la gousse et les graines de vanille. Dans un saladier, fouettez les jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse. Ajoutez la farine et mélangez. Versez progressivement le lait chaud sur ce mélange tout en remuant. Remettez le tout dans la casserole et faites épaissir à feu doux sans cesser de remuer. Hors du feu, ajoutez le beurre et mélangez. Laissez refroidir.",
      },
      {
        title: "Montage de la tarte",
        description:
          "Étalez la crème pâtissière refroidie sur le fond de tarte. Lavez et équeutez les fraises, puis coupez-les en deux. Disposez-les harmonieusement sur la crème.",
      },
      {
        title: "Finition",
        description:
          "Vous pouvez napper les fraises avec un peu de gelée de fraises ou de nappage neutre pour leur donner de la brillance. Décorez avec quelques feuilles de menthe fraîche.",
      },
    ],
    tips: [
      "Pour une tarte encore plus gourmande, ajoutez un peu de mascarpone à votre crème pâtissière.",
      "Vous pouvez remplacer les fraises par d'autres fruits de saison comme les framboises ou les pêches.",
      "Pour éviter que la pâte ne se détrempe, vous pouvez la badigeonner de blanc d'œuf avant la cuisson.",
    ],
    relatedRecipes: [
      { id: 2, title: "Tarte au Citron Meringuée", image: "/images/placeholder.jpg" },
      { id: 3, title: "Tarte aux Pommes", image: "/images/placeholder.jpg" },
      { id: 4, title: "Tarte Tatin", image: "/images/placeholder.jpg" },
    ],
  }
}

function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    // Simuler une requête API pour obtenir les détails de la recette
    setRecipe(getRecipe(id))
  }, [id])

  if (!recipe) {
    return <div className="container mx-auto px-4 py-8">Chargement...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-pink-500">
          Accueil
        </Link>
        <span className="mx-2">/</span>
        <Link to="/categories" className="hover:text-pink-500">
          Catégories
        </Link>
        <span className="mx-2">/</span>
        <Link to={`/categories/${recipe.categoryId}`} className="hover:text-pink-500">
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
            <span>Préparation: {recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Cuisson: {recipe.cookTime}</span>
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
                src={recipe.authorImage || "/placeholder.svg"}
                alt={recipe.author}
                className="w-[60px] h-[60px] rounded-full"
              />
              <div>
                <p className="text-sm text-gray-500">Recette proposée par</p>
                <h3 className="font-bold">{recipe.author}</h3>
              </div>
            </div>
          </div>

          {/* Related Recipes */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recettes similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recipe.relatedRecipes.map((related) => (
                <Link key={related.id} to={`/recipes/${related.id}`} className="group">
                  <div className="relative h-40 mb-2 overflow-hidden rounded-lg">
                    <img
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-pink-500 transition-colors">{related.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
