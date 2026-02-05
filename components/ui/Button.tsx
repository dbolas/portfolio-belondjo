import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Variante du bouton
   * - primary: Outline orange avec hover fill (défaut)
   * - secondary: Outline navy avec hover fill
   */
  variant?: 'primary' | 'secondary';

  /**
   * Taille du bouton
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Si true, le bouton prend toute la largeur disponible
   */
  fullWidth?: boolean;

  /**
   * Icône à afficher avant le texte
   */
  iconBefore?: React.ReactNode;

  /**
   * Icône à afficher après le texte
   */
  iconAfter?: React.ReactNode;

  /**
   * Si true, affiche un état de chargement
   */
  loading?: boolean;

  /**
   * Classes CSS additionnelles
   */
  className?: string;

  /**
   * Contenu du bouton
   */
  children: React.ReactNode;
}

/**
 * Composant Button avec Design System Belondjo
 *
 * Spécifications:
 * - Border: outline 2px
 * - Border-radius: 50px (pill)
 * - Hover: remplissage avec couleur
 * - Transition: smooth 300ms
 *
 * @example
 * // Bouton primary (orange)
 * <Button>Cliquez ici</Button>
 *
 * @example
 * // Bouton secondary (navy)
 * <Button variant="secondary">En savoir plus</Button>
 *
 * @example
 * // Avec icônes
 * <Button iconAfter={<ArrowRight />}>Suivant</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      iconBefore,
      iconAfter,
      loading = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Classes de base
    const baseClasses =
      'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-pill focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    // Variants
    const variantClasses = {
      primary:
        'border-2 border-orange text-orange hover:bg-orange hover:text-cream focus:ring-orange',
      secondary:
        'border-2 border-navy text-navy hover:bg-navy hover:text-cream focus:ring-navy',
    };

    // Tailles
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    // Largeur
    const widthClass = fullWidth ? 'w-full' : '';

    // Classes combinées
    const combinedClasses = `
      ${baseClasses}
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${widthClass}
      ${className}
    `.trim();

    return (
      <button
        ref={ref}
        className={combinedClasses}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Chargement...</span>
          </>
        ) : (
          <>
            {iconBefore && <span className="flex-shrink-0">{iconBefore}</span>}
            {children}
            {iconAfter && <span className="flex-shrink-0">{iconAfter}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
