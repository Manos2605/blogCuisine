import { Link } from "@inertiajs/react"

// Données simulées pour les catégories
const categories = [
  {
    id: 1,
    name: "Tartes",
    description: "Des tartes sucrées aux fruits, au chocolat ou à la crème.",
    image: "/images/placeholder.jpg",
    count: 12,
  },
  {
    id: 2,
    name: "Gâteaux",
    description: "Des gâteaux pour toutes les occasions, du simple quatre-quarts au gâteau d'anniversaire élaboré.",
    image: "/images/placeholder.jpg",
    count: 18,
  },
  {
    id: 3,
    name: "Petits Gâteaux",
    description: "Macarons, cupcakes, muffins et autres délicieuses petites bouchées sucrées.",
    image: "/images/placeholder.jpg",
    count: 9,
  },
  {
    id: 4,
    name: "Biscuits",
    description: "Des cookies aux sablés, en passant par les biscuits de Noël et autres gourmandises croquantes.",
    image: "/images/placeholder.jpg",
    count: 15,
  },
  {
    id: 5,
    name: "Pâtisseries Françaises",
    description: "Les grands classiques de la pâtisserie française : éclairs, mille-feuilles, Paris-Brest, etc.",
    image: "/images/placeholder.jpg",
    count: 14,
  },
  {
    id: 6,
    name: "Viennoiseries",
    description: "Croissants, pains au chocolat, brioches et autres délices du petit-déjeuner.",
    image: "/images/placeholder.jpg",
    count: 8,
  },
  {
    id: 7,
    name: "Desserts Glacés",
    description: "Glaces, sorbets, parfaits et autres desserts rafraîchissants.",
    image: "/images/placeholder.jpg",
    count: 7,
  },
  {
    id: 8,
    name: "Desserts de Fêtes",
    description: "Bûches de Noël, galettes des rois et autres pâtisseries festives.",
    image: "/images/placeholder.jpg",
    count: 10,
  },
]

function Categories() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Catégories de Recettes</h1>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Explorez notre collection de recettes de pâtisserie classées par catégories. Des tartes aux gâteaux, en passant
        par les petites douceurs et les desserts de fêtes, trouvez l'inspiration pour votre prochaine création sucrée.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="relative h-48">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-xl font-bold">{category.name}</h2>
                <p className="text-sm">{category.count} recettes</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
