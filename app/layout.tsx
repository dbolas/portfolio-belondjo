import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui";

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "Belondjo Bolankoko · Product Designer (UX/UI)",
  description: "Portfolio de Belondjo Bolankoko, Product Designer UX/UI à Strasbourg. Recherche utilisateur, design system, accessibilité RGAA, et des produits menés jusqu'à la mise en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${courierPrime.variable} antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
