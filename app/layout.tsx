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
      <body className="bg-black h-lvh">
        <header className="container">
        <h1 
        className="text-cyan-500 italic text-2xl tracking-tighter p-5"
        ><span className="text-amber-400 not-italic font-semibold">H. Meneceur</span> Developpeur Web Freelance</h1>
        </header>
        {children}
        
      </body>
    </html>
  );
}
