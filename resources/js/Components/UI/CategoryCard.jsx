import { Link } from '@inertiajs/react'

function CategoryCard({ category }) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="bg-white border border-primary/20 rounded-lg p-4 text-center hover:border-primary hover:shadow-md transition-all"
    >
      <div className="relative h-32 mb-4">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h3 className="font-medium mb-1 text-secondary">{category.name}</h3>
      <p className="text-sm text-gray-500">{category.count} recettes</p>
    </Link>
  )
}

export default CategoryCard 