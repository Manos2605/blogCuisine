"use client"

import { useState } from "react"
import { Link } from '@inertiajs/react'
import { AlignJustify, Search } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <img src="/images/logo.png" alt="Story Délice" width={180} height={100} className="h-auto" />
          </Link>

          {/* Navigation pour desktop */}
          <nav className="hidden md:flex items-center space-x-6  bg-pink-500">
            <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/categories" className="text-lg font-medium hover:text-primary transition-colors">
              Catégories
            </Link>
            <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
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
                  <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                    Accueil
                  </Link>
                  <Link href="/categories" className="text-lg font-medium hover:text-primary transition-colors">
                    Catégories
                  </Link>
                  <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                    À propos
                  </Link>
                  <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
