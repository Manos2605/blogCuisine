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

function Categories({ categories }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-secondary mb-8">Nos Catégories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-secondary mb-2">{category.name}</h2>
            <p className="text-gray-600">{category.count} recette{category.count > 1 ? 's' : ''}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
