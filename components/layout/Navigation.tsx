'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Maison', href: '/' },
  { label: 'À propos', href: '/about' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Composant Navigation avec Design System Belondjo
 *
 * Fonctionnalités:
 * - Sticky header avec fond cream
 * - Logo cliquable (retour accueil)
 * - Menu desktop: liens horizontaux
 * - Menu mobile: hamburger avec overlay
 * - Smooth scroll vers les sections
 * - Transition au scroll
 *
 * @example
 * <Navigation />
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détection du scroll pour ajouter une ombre
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile au clic sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation sticky */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-cream
          transition-shadow duration-300
          ${isScrolled ? 'shadow-md' : ''}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-28 py-4">
            {/* Logo */}
            <Logo width={160} height={55} />

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-dark font-bold
                    hover:text-orange
                    transition-colors duration-200
                    text-base
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                md:hidden
                p-2
                text-dark
                hover:text-orange
                transition-colors
                focus:outline-none
                focus:ring-2
                focus:ring-orange
                rounded-lg
              "
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2.5} />
              ) : (
                <Menu size={28} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          bg-cream
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ top: '112px' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {/* Liens de navigation mobile */}
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="
                text-3xl font-bold text-dark
                hover:text-orange
                transition-colors duration-200
                animate-slide-up
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay sombre pour fermer le menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-dark/20 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
