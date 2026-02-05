import type { Config } from 'tailwindcss';

/**
 * Configuration Tailwind CSS v4 pour Portfolio Belondjo
 *
 * NOTE: Tailwind v4 utilise principalement la configuration CSS dans app/globals.css
 * Ce fichier est fourni pour la compatibilité IDE et la documentation
 *
 * Design System:
 * - Couleurs: cream, orange, navy, dark
 * - Typographie: Courier Prime (monospace obligatoire)
 * - Border-radius: pill (50px)
 * - Boutons: outline orange avec hover fill
 * - Inputs: border-bottom uniquement
 */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales du Design System
        cream: '#F9F6F0',
        orange: '#FF7B54',
        navy: '#2C3E50',
        dark: '#1A1A1A',

        // Nuances de gris
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },

        // Alias pour compatibilité
        border: '#FF7B54',
        background: '#F9F6F0',
        foreground: '#1A1A1A',
      },

      fontFamily: {
        // Police monospace obligatoire
        mono: ['Courier Prime', 'Courier New', 'Courier', 'monospace'],
      },

      fontSize: {
        // Tailles custom
        hero: ['4rem', { lineHeight: '1.1' }],      // 64px
        h2: ['3rem', { lineHeight: '1.2' }],        // 48px
        h3: ['2rem', { lineHeight: '1.3' }],        // 32px
      },

      borderRadius: {
        // Border-radius pill pour les boutons
        pill: '50px',
      },

      // Animations personnalisées (optionnel)
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
