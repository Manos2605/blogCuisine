import { useState } from "react"
import { Link, useForm } from '@inertiajs/react'
import { AlignJustify, Search } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { data, setData, get } = useForm({
    query: ''
  })

  const handleSearch = (e) => {
    e.preventDefault()
    if (data.query.trim()) {
      get(route('recipes.search', { query: data.query }))
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Story Délice" width={180} height={100} className="h-auto" />
          </Link>

          {/* Navigation pour desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-lg font-medium hover:text-pink-500 transition-colors">
              Accueil
            </Link>
            <Link href="/categories" className="text-lg font-medium hover:text-pink-500 transition-colors">
              Catégories
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-pink-500 transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-pink-500 transition-colors">
              Contact
            </Link>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </nav>

          {/* Menu hamburger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border border-primary/20 rounded hover:bg-accent"
            >
              <AlignJustify className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 z-50 bg-white">
                <div className="flex justify-end p-4">
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-accent rounded-full">
                    <span className="sr-only">Fermer le menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <nav className="flex flex-col items-center space-y-4 p-4">
                  <Link href="/" className="text-lg font-medium hover:text-pink-500 transition-colors">
                    Accueil
                  </Link>
                  <Link href="/categories" className="text-lg font-medium hover:text-pink-500 transition-colors">
                    Catégories
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-pink-500 transition-colors">
                    À propos
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-pink-500 transition-colors">
                    Contact
                  </Link>
                  <div className="w-full mt-4">
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        type="text"
                        value={data.query}
                        onChange={e => setData('query', e.target.value)}
                        placeholder="Rechercher une recette..."
                        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </form>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>

        {isSearchOpen && (
          <div className="mt-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={data.query}
                onChange={e => setData('query', e.target.value)}
                placeholder="Rechercher une recette..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </form>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 