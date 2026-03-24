import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LiteOps - IA d'entreprise sécurisée et performante",
  description:
    "Votre prochaine réussite majeure, propulsée par l'IA. La plateforme IA d'entreprise conçue pour la sécurité, la flexibilité et la performance.",
  keywords: ["IA", "entreprise", "LLM", "sécurité", "déploiement", "API"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
