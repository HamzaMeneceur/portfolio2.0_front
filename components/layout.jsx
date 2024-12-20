'use client'
//! Etaoe suivant rendre tout le header ici et réutiliser le span 
import { useEffect, useState } from "react";

export default function Dynamic() {
    const [spanArray, setSpan] = useState([]);
    const [nameArray, setName] = useState([])
    useEffect(() => {
        const text = 
        "Développeur Web Freelance"
        const name =
        "Hamza Meneceur"
        setSpan(text.split(""));
        setName(name.split(""))
 // Je voudrais pouvoir séléctionner un élément du tableau en utilisant [0] | [1]
 // est ainsi pouvoir utiliser deux span sur mon titre pour afficher premiere élément et second avec des police d'écriture diférrente

    }, []);
 

    return (
        
        <h1 className="text-cyan-500 italic font-semibold md:text-7xl p-2 tracking-tighter">
          {
            nameArray.map((letter, index) =>(
              <span
              key={index}
              className="push-on-hover text-amber-600 not-italic font-bold"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))
          }
          <br />
          {
            spanArray.map((letter, index) => (
              <span 
              key={index}
              className="push-on-hover"
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          
      
    </h1>
        
    )
  }
  