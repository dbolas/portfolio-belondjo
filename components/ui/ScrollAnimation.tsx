'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({ children, className = '', delay = 0 }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: 0.1, // 10% de visibilité
      rootMargin: '0px 0px -50px 0px', // Déclenche un peu avant
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter un délai si spécifié
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, delay);
          observer.unobserve(entry.target); // Animation jouée une seule fois
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}
