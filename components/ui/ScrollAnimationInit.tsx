'use client';

import { useEffect } from 'react';

export default function ScrollAnimationInit() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // 10% de visibilité
      rootMargin: '0px 0px -50px 0px', // Déclenche un peu avant
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Animation jouée une seule fois
        }
      });
    }, observerOptions);

    // Observer toutes les sections avec la classe fade-in-section
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null; // Ce composant ne rend rien
}
