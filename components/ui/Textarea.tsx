import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
   * Classes CSS additionnelles pour le textarea
   */
  className?: string;

  /**
   * Classes CSS pour le conteneur
   */
  containerClassName?: string;

  /**
   * Si true, permet le redimensionnement
   * @default false
   */
  resizable?: boolean;
}

/**
 * Composant Textarea avec Design System Belondjo
 *
 * Spécifications:
 * - Border: bordure complète orange 2px
 * - Border-radius: arrondi (12px)
 * - Background: transparent ou cream
 * - Focus: bordure plus épaisse (3px)
 * - Font: Courier Prime (monospace)
 * - Resize: désactivé par défaut
 *
 * @example
 * // Textarea simple
 * <Textarea placeholder="Votre message..." rows={4} />
 *
 * @example
 * // Avec label et erreur
 * <Textarea
 *   label="Message"
 *   error="Message trop court"
 *   required
 *   rows={6}
 * />
 *
 * @example
 * // Avec react-hook-form
 * <Textarea
 *   label="Description"
 *   {...register('description')}
 *   error={errors.description?.message}
 * />
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      required,
      className = '',
      containerClassName = '',
      resizable = false,
      rows = 4,
      id,
      ...props
    },
    ref
  ) => {
    // Générer un ID unique si non fourni
    const textareaId =
      id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    // Classes de base pour le textarea
    const baseClasses =
      'w-full bg-transparent border-2 rounded-xl py-3 px-4 text-dark placeholder:text-gray-500 focus:outline-none transition-all duration-200 font-mono';

    // Classes conditionnelles
    const borderClass = error
      ? 'border-red-500 focus:border-red-600 focus:border-[3px]'
      : 'border-orange focus:border-[3px] focus:border-orange';

    const resizeClass = resizable ? 'resize-y' : 'resize-none';

    // Classes combinées
    const textareaClasses =
      `${baseClasses} ${borderClass} ${resizeClass} ${className}`.trim();

    return (
      <div className={`w-full ${containerClassName}`.trim()}>
        {/* Label */}
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-dark font-bold mb-2 text-sm"
          >
            {label}
            {required && <span className="text-orange ml-1">*</span>}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${textareaId}-error`
              : helperText
              ? `${textareaId}-helper`
              : undefined
          }
          {...props}
        />

        {/* Message d'erreur */}
        {error && (
          <p
            id={`${textareaId}-error`}
            className="mt-2 text-sm text-red-500 font-mono"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Texte d'aide */}
        {helperText && !error && (
          <p
            id={`${textareaId}-helper`}
            className="mt-2 text-sm text-gray-600 font-mono"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
