/**
 * Composant Verbatim - Citation utilisateur stylisée
 *
 * Utilisé pour afficher les retours et témoignages des utilisateurs
 * dans les études de cas UX.
 *
 * Spécifications:
 * - Fond légèrement coloré (beige/crème pâle)
 * - Bordure gauche épaisse orange
 * - Citation en italique
 * - Signature alignée à droite
 * - Utilise les balises sémantiques HTML
 */

interface VerbatimProps {
  /** Le texte de la citation */
  citation: string;
  /** L'auteur de la citation (nom, rôle, date) */
  auteur: string;
  /** Classes CSS additionnelles */
  className?: string;
}

export default function Verbatim({ citation, auteur, className = '' }: VerbatimProps) {
  return (
    <blockquote
      className={`
        relative
        border-l-4 border-orange
        rounded-r-lg
        p-6
        my-4
        transition-all duration-300
        ${className}
      `}
      style={{
        backgroundColor: 'var(--color-verbatim-bg)',
      }}
    >
      <p
        className="text-base md:text-lg italic leading-relaxed mb-3"
        style={{ color: 'var(--color-verbatim-text)' }}
      >
        "{citation}"
      </p>
      <cite
        className="block text-right text-sm not-italic"
        style={{ color: 'var(--color-verbatim-author)' }}
      >
        — {auteur}
      </cite>
    </blockquote>
  );
}
