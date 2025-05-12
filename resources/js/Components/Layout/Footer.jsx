import { Link } from '@inertiajs/react'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 animate-fade-in">story Délice</h3>
            <p className="text-gray-600 animate-slide-up">Votre source d'inspiration pour des pâtisseries délicieuses et créatives.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 animate-fade-in">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  Catégories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 animate-fade-in">Suivez-nous</h3>
            <div className="flex space-x-4 justify-start">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" />
              <a
                href="#"
                className="bi bi-facebook p-3 text-2xl rounded-full bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-110"
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              ></a>
              <a
                href="#"
                className="bi bi-instagram p-3 text-2xl rounded-full bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-110"
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              ></a>
              <a
                href="#"
                className="bi bi-youtube p-3 text-2xl rounded-full bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-110"
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              ></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600 animate-fade-in">
          <p>&copy; {new Date().getFullYear()} Story Délice. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 