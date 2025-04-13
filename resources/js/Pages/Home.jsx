import { Link } from '@inertiajs/react'
import "@/Components/UI/CategoryCard"
import "@/Components/UI/RecipeCard"

// Données simulées pour les recettes
const featuredRecipes = [
  {
    id: 1,
    title: "Tarte aux Fraises",
    description: "Une délicieuse tarte aux fraises fraîches sur une crème pâtissière onctueuse.",
    image: "/images/placeholder.jpg",
    category: "Tartes",
    date: "15 mars 2023",
    difficulty: "Facile",
    prepTime: "30 min",
    cookTime: "25 min",
  },
  {
    id: 2,
    title: "Macarons à la Vanille",
    description: "Des macarons parfaitement croustillants à l'extérieur et moelleux à l'intérieur.",
    image: "/images/placeholder.jpg",
    category: "Petits Gâteaux",
    date: "2 avril 2023",
    difficulty: "Intermédiaire",
    prepTime: "45 min",
    cookTime: "15 min",
  },
  {
    id: 3,
    title: "Éclair au Chocolat",
    description: "Un classique de la pâtisserie française avec une ganache au chocolat intense.",
    image: "/images/placeholder.jpg",
    category: "Pâtisseries Françaises",
    date: "10 février 2023",
    difficulty: "Intermédiaire",
    prepTime: "40 min",
    cookTime: "30 min",
  },
  {
    id: 4,
    title: "Cheesecake New-Yorkais",
    description: "Un cheesecake crémeux avec une base de biscuits croquante et une touche de citron.",
    image: "/images/placeholder.jpg",
    category: "Gâteaux",
    date: "5 mai 2023",
    difficulty: "Facile",
    prepTime: "20 min",
    cookTime: "50 min",
  },
  {
    id: 5,
    title: "Mille-feuille",
    description: "Couches de pâte feuilletée croustillante et de crème pâtissière à la vanille.",
    image: "/images/placeholder.jpg",
    category: "Pâtisseries Françaises",
    date: "18 janvier 2023",
    difficulty: "Avancé",
    prepTime: "60 min",
    cookTime: "25 min",
  },
  {
    id: 6,
    title: "Cookies aux Pépites de Chocolat",
    description: "Des cookies moelleux avec des pépites de chocolat fondantes.",
    image: "/images/placeholder.jpg",
    category: "Biscuits",
    date: "22 mars 2023",
    difficulty: "Facile",
    prepTime: "15 min",
    cookTime: "12 min",
  },
]

// Données simulées pour les catégories
const categories = [
  { id: 1, name: "Tartes", count: 12 },
  { id: 2, name: "Gâteaux", count: 18 },
  { id: 3, name: "Petits Gâteaux", count: 9 },
  { id: 4, name: "Biscuits", count: 15 },
  { id: 5, name: "Pâtisseries Françaises", count: 14 },
]

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-pink-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Découvrez l'Art de la Pâtisserie</h1>
            <p className="text-lg text-gray-700 mb-6">
              Bienvenue sur Story Délice, votre source d'inspiration pour des recettes de pâtisserie délicieuses et
              créatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded outline hover:bg-pink-600">
                Découvrir nos recettes
              </button>
              <button className="border border-primary text-primary hover:bg-pink-100 px-4 py-2 rounded">
                En savoir plus
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/placeholder.jpg"
              alt="Délicieuses pâtisseries"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Recettes Populaires</h2>
          <Link to="/recipes" className="text-primary hover:underline">
            Voir toutes les recettes
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
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
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm">
                  {recipe.category}
                </div>
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
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-pink-100 border border-gray-200 rounded-lg p-4 text-center hover:border-pink-300 hover:shadow-md transition-all"
            >
              <h3 className="font-medium mb-1 text-secondary">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} recettes</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-accent rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary">Abonnez-vous à notre newsletter</h2>
          <p className="text-gray-600 mb-6">
            Recevez nos nouvelles recettes et astuces de pâtisserie directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-2 rounded border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">S'abonner</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
