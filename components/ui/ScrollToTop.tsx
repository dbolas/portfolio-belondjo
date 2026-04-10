'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(32); // 32px = 2rem (bottom-8)

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculer la position pour s'arrêter avant le footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Si le footer est visible à l'écran
        if (footerRect.top < windowHeight) {
          // Calculer la distance entre le bas de l'écran et le haut du footer
          const distanceFromBottom = windowHeight - footerRect.top;
          // Ajouter un offset de 32px (2rem) pour l'espacement
          const newBottom = distanceFromBottom + 32;
          setBottomPosition(Math.max(32, newBottom));
        } else {
          // Footer pas visible, position normale
          setBottomPosition(32);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Vérifier aussi au chargement et au resize
    handleScroll();
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Retour en haut de la page"
      title="Retour en haut"
      className={`
        fixed
        right-8
        w-[60px] h-[60px]
        md:w-[70px] md:h-[70px]
        rounded-full
        flex items-center justify-center
        transition-all duration-300 ease-in-out
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/50
        active:scale-95
        z-50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      style={{
        bottom: `${bottomPosition}px`,
        backgroundColor: 'var(--color-navy)',
        color: 'var(--color-orange)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-orange)';
        e.currentTarget.style.color = 'var(--color-cream)';
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(255, 123, 84, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-navy)';
        e.currentTarget.style.color = 'var(--color-orange)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
      }}
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
}
