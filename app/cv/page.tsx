import { redirect } from 'next/navigation';

// L'ancienne page CV était un gabarit de départ (faux projets, fausses statistiques).
// Le parcours à jour vit sur la page À propos, et le PDF sur /cv/CV-Belondjo.pdf.
export default function CvPage() {
  redirect('/about');
}
