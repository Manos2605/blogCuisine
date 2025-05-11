import { Link } from '@inertiajs/react'

function Footer() {
  return (
    <footer className="bg-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Story Délice</h3>
            <p className="text-gray-600">Votre source d'inspiration pour des pâtisseries délicieuses et créatives.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Catégories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex space-x-2 justify-start">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
              <a href="#" className="bi bi-facebook p-4 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"></a>
              <a href="#" className="bi bi-instagram p-4 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"></a>
              {/* <a href="#" className="p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
              Pinterest
            </a> */}
              <a href="#" className="bi bi-youtube p-4 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Story Délice. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 