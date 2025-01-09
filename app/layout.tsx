import type { Metadata } from "next";
import Image from 'next/image';
import "./globals.css";

export const metadata: Metadata = {
  title: "Le portfolio de Hamza Meneceur",
  description: "Développeur freelance",
};


export default function RootLayout(
  {
  children,
  
}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="fr">
      <body className="bg-slate-200 h-lvh ">
        <header>
        <Image
        width={200}
        height={200}
        src="/hamza-meneceur-logo.svg"
        alt="Logo de ce site représentant les balise de code et en dessous le nom et prénom du créateur de ce projet"
        ></Image>
        </header>
        {children}
      </body>
    </html>
  );
}

/**
 * <h1

        className="text-cyan-500 italic font-semibold md:text-7xl p-2 tracking-tighter "
        ><span className="text-amber-600 not-italic font-bold">Hamza Meneceur</span> <br />Developpeur Web Freelance</h1>
        
 */