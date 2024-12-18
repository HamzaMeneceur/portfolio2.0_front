'use client'
//! Etaoe suivant rendre tout le header ici et réutiliser le span 
import { useEffect, useState } from "react";

export default function Dynamic() {
    const [letters, setLetters] = useState([]);
  
    useEffect(() => {
        const text = 
        [
          "Hamza Meneceur","Developpeur Web Freelance"
        ];
        setLetters(text);

        /**
         * soucis avec la dépendance :
         * Profondeur maximale de mise à jour dépassée. Cela peut se produire lorsqu'un composant
         * appelle "setState" à l'intérieur de "useEffect", mais que "useEffect" n'a pas de tableau de
         * dépendances, ou qu'une des dépendances change à chaque rendu.
         * */  
        
    }, []);
 

    return (
        
        <h1>
          {
            letters.map((letter, index) => (
              <span 
              key={index}
              className="push-on-hover text-amber-600 not-italic font-bold"
              >
                {letter === " " ? "\u00A0" : console.log("ici ", letter[1].split(""))}
              </span>
            ))}
          
      
    </h1>
        
    )
  }
  