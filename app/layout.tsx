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
      <body className="bg-slate-200 h-lvh ">
      
        <header className="bg-black">
        <h1 
        className="text-cyan-500 italic font-semibold md:text-7xl tracking-tighter p-2 push-on-hover"
        ><span className="text-amber-600 not-italic font-bold">Hamza Meneceur</span> <br />Developpeur Web Freelance</h1>
        </header>
        {children}
        
      </body>
    </html>
  );
}
