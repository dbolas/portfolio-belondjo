import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label du champ
   */
  label?: string;

  /**
   * Message d'erreur à afficher
   */
  error?: string;

  /**
   * Message d'aide à afficher
   */
  helperText?: string;

  /**
   * Si true, affiche une astérisque sur le label
   */
  required?: boolean;

  /**
   * Classes CSS additionnelles pour l'input
   */
  className?: string;

  /**
   * Classes CSS pour le conteneur
   */
  containerClassName?: string;
}

/**
 * Composant Input avec Design System Belondjo
 *
 * Spécifications strictes:
 * - Border: border-bottom uniquement (pas de bordure complète)
 * - Border-color: orange (#FF7B54)
 * - Background: transparent
 * - Focus: border-bottom plus épais (3px)
 * - Font: Courier Prime (monospace)
 *
 * @example
 * // Input simple
 * <Input placeholder="Votre email" />
 *
 * @example
 * // Avec label et erreur
 * <Input
 *   label="Email"
 *   error="Email invalide"
 *   required
 * />
 *
 * @example
 * // Avec react-hook-form
 * <Input
 *   label="Nom"
 *   {...register('name')}
 *   error={errors.name?.message}
 * />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      className = '',
      containerClassName = '',
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    // Générer un ID unique si non fourni
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Classes de base pour l'input
    const baseClasses =
      'w-full bg-transparent border-0 border-b-2 py-3 px-0 text-dark placeholder:text-gray-500 focus:outline-none transition-all duration-200 font-mono';

    // Classes conditionnelles
    const borderClass = error
      ? 'border-red-500 focus:border-red-600'
      : 'border-orange focus:border-b-[3px]';

    // Classes combinées
    const inputClasses = `${baseClasses} ${borderClass} ${className}`.trim();

    return (
      <div className={`w-full ${containerClassName}`.trim()}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-dark font-bold mb-2 text-sm"
          >
            {label}
            {required && <span className="text-orange ml-1">*</span>}
          </label>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          {...props}
        />

        {/* Message d'erreur */}
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-500 font-mono"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Texte d'aide */}
        {helperText && !error && (
          <p
            id={`${inputId}-helper`}
            className="mt-2 text-sm text-gray-600 font-mono"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
