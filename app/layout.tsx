import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le portfolio de Hamza Meneceur",
  description: "Développeur freelance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <header className="container">
        <h1 className="text-center text-3xl">H. Meneceur Freelance</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
