"use client"

import { Link, useForm } from "@inertiajs/react"
import { Clock, ChefHat, Printer, Share2, BookmarkPlus, Heart } from "lucide-react"
import { useState, useEffect } from "react"

function RecipeDetail({ recipe }) {
  const [likesCount, setLikesCount] = useState(recipe.likes_count || 0)
  const [userLike, setUserLike] = useState(recipe.user_like)
  const [isAnimating, setIsAnimating] = useState(false)
  const { data, setData, post, processing, reset } = useForm({
    content: ''
  })

  const handleLike = () => {
    setUserLike(!userLike)
    setLikesCount(prev => userLike ? prev - 1 : prev + 1)
    setIsAnimating(true)

    setTimeout(() => {
      setIsAnimating(false)
    }, 2000)

    post(`/recipes/${recipe.id}/like`, {
      preserveScroll: true,
      onSuccess: (page) => {
        if (page.props.recipe) {
          setLikesCount(page.props.recipe.likes_count)
          setUserLike(page.props.recipe.user_like)
        }
      },
      onError: () => {
        setUserLike(!userLike)
        setLikesCount(prev => userLike ? prev + 1 : prev - 1)
        setIsAnimating(false)
      }
    })
  }

  const handleComment = (e) => {
    e.preventDefault()
    post(`/recipes/${recipe.id}/comment`, {
      onSuccess: () => {
        reset()
      }
    })
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Recette non trouvée</h1>
          <p className="text-gray-600 mb-6">La recette que vous recherchez n'existe pas ou a été supprimée.</p>
          <Link href="/" className="text-primary hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
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
        <span className="text-gray-700">{recipe.category}</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{recipe.title}</span>
      </div>

      {/* Recipe Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
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
          <button 
            onClick={handleLike}
            className="group relative flex items-center gap-1 border border-primary/20 rounded-md px-3 py-1 hover:bg-accent transition-all duration-300"
          >
            <div className="relative">
              <Heart 
                className={`h-5 w-5 transition-all duration-300 ${
                  isAnimating ? 'scale-150' : ''
                } ${userLike ? 'fill-current text-red-500' : 'text-white stroke-2'}`}
              />
              {isAnimating && (
                <>
                  <div className="absolute inset-0 animate-ping">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {userLike ? '+1' : '-1'}
                    </div>
                  </div>
                </>
              )}
            </div>
            <span className="font-medium text-lg">{likesCount}</span>
          </button>
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
          {recipe.tips && recipe.tips.length > 0 && (
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
          )}

          {/* Comments Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Commentaires</h2>
            
            {/* Comment Form */}
            <form onSubmit={handleComment} className="mb-8">
              <div className="mb-4">
                <textarea
                  value={data.content}
                  onChange={e => setData('content', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  rows="3"
                  placeholder="Ajouter un commentaire..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={processing}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50"
              >
                Publier
              </button>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {recipe.comments && recipe.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={comment.user.avatar || "/placeholder-author.svg"}
                      alt={comment.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{comment.user.name}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(comment.created_at).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>
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
