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
  title: "Belondjo Bolankoko — Product Designer & AI Builder",
  description: "Portfolio de Belondjo Bolankoko, Product Designer & AI Builder basé à Strasbourg. De la recherche terrain à la mise en production — Design System, Claude Code & n8n.",
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
