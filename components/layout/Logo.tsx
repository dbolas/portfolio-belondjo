import Link from 'next/link';

interface LogoProps {
  /**
   * Largeur du logo en pixels
   * @default 120
   */
  width?: number;

  /**
   * Hauteur du logo en pixels
   * @default 40
   */
  height?: number;

  /**
   * Si true, le logo sera cliquable et redirigera vers la page d'accueil
   * @default true
   */
  clickable?: boolean;

  /**
   * Classes CSS additionnelles
   */
  className?: string;

  /**
   * Variante du logo
   * @default 'default'
   */
  variant?: 'default' | 'light' | 'dark';
}

/**
 * Composant Logo du portfolio Belondjo
 *
 * Utilise le logo SVG situé dans /public/images/logo-belondjo.svg
 * Couleur principale: Navy (#2C3E50) selon le Design System
 *
 * Note: Utilise <img> au lieu de Next.js Image pour une meilleure
 * compatibilité avec les fichiers SVG volumineux.
 *
 * @example
 * // Logo par défaut dans le header
 * <Logo />
 *
 * @example
 * // Logo plus grand non cliquable
 * <Logo width={200} height={60} clickable={false} />
 *
 * @example
 * // Logo avec classes personnalisées
 * <Logo className="hover:opacity-80 transition-opacity" />
 */
export default function Logo({
  width = 120,
  height = 40,
  clickable = true,
  className = '',
  variant = 'default',
}: LogoProps) {
  // Classes pour les variants
  const variantClasses = {
    default: '',
    light: 'brightness-0 invert',
    dark: 'brightness-0',
  };

  const logo = (
    <img
      src="/images/logo-belondjo.svg"
      alt="Belondjo Portfolio Logo"
      width={width}
      height={height}
      className={`${variantClasses[variant]} ${className}`.trim()}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );

  if (clickable) {
    return (
      <Link
        href="/"
        className="inline-block transition-opacity hover:opacity-80"
        aria-label="Retour à l'accueil"
      >
        {logo}
      </Link>
    );
  }

  return logo;
}
