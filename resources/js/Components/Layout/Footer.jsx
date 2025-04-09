import { Link } from '@inertiajs/react'

function Footer() {
  return (
    <footer className="bg-accent py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Story Délice</h3>
            <p className="text-gray-600">Votre source d'inspiration pour des pâtisseries délicieuses et créatives.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary transition-colors">
                  Catégories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Pinterest
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Story Délice. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 