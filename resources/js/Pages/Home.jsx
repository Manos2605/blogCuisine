import { Link } from '@inertiajs/react'
import "@/Components/UI/CategoryCard"
import "@/Components/UI/RecipeCard"

// Données simulées pour les recettes
const featuredRecipes = [
  {
    id: 1,
    title: 'Crêpes sucrées',
    description: 'Des crêpes moelleuses et parfumées, parfaites pour le goûter ou le petit-déjeuner.',
    image: '/images/placeholder.jpg',
    category: 'Pâtisseries',
    date: '2024-03-13',
    difficulty: 'Facile',
    prepTime: 15,
    cookTime: 20
  },
  {
    id: 2,
    title: 'Cookies Moelleux au Chocolat',
    description: 'Les cookies moelleux, c\'est le goûter parfait : croustillants à l\'extérieur, fondants à l\'intérieur.',
    image: '/images/placeholder.jpg',
    category: 'Biscuits',
    date: '2024-03-13',
    difficulty: 'Très facile',
    prepTime: 15,
    cookTime: 15
  },
  {
    id: 3,
    title: 'Croissants maison bien feuilletés',
    description: 'Des croissants maison délicieusement feuilletés, croustillants à l\'extérieur et moelleux à l\'intérieur.',
    image: '/images/placeholder.jpg',
    category: 'Viennoiseries',
    date: '2024-03-13',
    difficulty: 'Moyen',
    prepTime: 30,
    cookTime: 20
  },
  {
    id: 4,
    title: 'Cupcakes vanille glaçage crémeux',
    description: 'Des cupcakes moelleux à la vanille avec un délicieux glaçage crémeux, parfaits pour toutes les occasions !',
    image: '/images/placeholder.jpg',
    category: 'Petits Gâteaux',
    date: '2024-03-13',
    difficulty: 'Facile',
    prepTime: 20,
    cookTime: 20
  },
  {
    id: 5,
    title: 'Gâteau maison ultra moelleux',
    description: 'Un gâteau simple et délicieux, parfait pour toutes les occasions. Sa texture moelleuse et son goût délicat en font un classique indémodable.',
    image: '/images/placeholder.jpg',
    category: 'Gâteaux',
    date: '2024-03-13',
    difficulty: 'Très facile',
    prepTime: 15,
    cookTime: 40
  },
  {
    id: 6,
    title: 'Gâteau au chocolat fondant maison',
    description: 'Un gâteau au chocolat délicieusement fondant, parfait pour les amateurs de chocolat. Son cœur moelleux et son goût intense en font un dessert irrésistible.',
    image: '/images/placeholder.jpg',
    category: 'Gâteaux',
    date: '2024-03-13',
    difficulty: 'Facile',
    prepTime: 15,
    cookTime: 30
  }
]

// Données simulées pour les catégories
const categories = [
  { id: 1, name: "Pâtisseries", count: 1 },  // Crêpes sucrées
  { id: 2, name: "Biscuits", count: 1 },     // Cookies Moelleux au Chocolat
  { id: 3, name: "Viennoiseries", count: 1 }, // Croissants maison
  { id: 4, name: "Petits Gâteaux", count: 1 }, // Cupcakes
  { id: 5, name: "Gâteaux", count: 2 }      // Gâteau maison et Gâteau au chocolat
]

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 rounded-xl p-8 mb-12 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-secondary animate-fade-in">
              Découvrez l'Art de la Pâtisserie
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 animate-slide-in">
              Bienvenue sur Story Délice, votre source d'inspiration pour des recettes de pâtisserie délicieuses et
              créatives.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded outline hover:bg-pink-600 transition-transform transform hover:scale-105">
                Découvrir nos recettes
              </button>
              <Link
                href={route('login')}
                className="bg-white hover:bg-pink-50 text-primary border-2 border-primary px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <span>Rejoindre l'aventure</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/placeholder.jpg"
              alt="Délicieuses pâtisseries"
              width={600}
              height={400}
              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Recettes Populaires</h2>
          <Link to="/recipes" className="text-primary hover:underline text-sm sm:text-base">
            Voir toutes les recettes
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRecipes.map((recipe) => (
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
                  <span>Préparation: {recipe.prepTime} min</span>
                  <span>•</span>
                  <span>Cuisson: {recipe.cookTime} min</span>
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-secondary">Catégories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 border border-gray-200 rounded-lg p-4 text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-out"
            >
              <h3 className="font-medium mb-1 text-secondary group-hover:text-primary transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {category.count} recettes
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-accent rounded-xl p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-secondary">Abonnez-vous à notre newsletter</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Recevez nos nouvelles recettes et astuces de pâtisserie directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-grow px-4 py-2 rounded border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm sm:text-base"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-sm sm:text-base">
              S'abonner
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
