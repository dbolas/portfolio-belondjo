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
  title: "Belondjo Bolankoko — Product Designer & Builder",
  description: "Portfolio de Belondjo Bolankoko, Product Designer UX/UI et builder IA basé à Strasbourg. Spécialisé en UX Research, Design System, Claude Code et automatisation IA.",
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
