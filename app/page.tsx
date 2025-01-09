import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="grid place-content-center h-screen relative theme z-10">
        
       
      </main>
      <footer className="relative z-10">
<div className="pt-5 bg-black text-white h-[400px] grid grid-cols-2 max-[695px]:text-sm">
  <div className="flex  items-center flex-col gap-2">
    <p className="text-xl font-bold tracking-wider">Entreprise</p>
    <Link 
    className="hover:text-amber-600 hover:font-semibold" 
    href={'/quisuisje'}>À propos</Link>
    <a 
    className="hover:text-amber-600 hover:font-semibold" 
    href="#">Mentions légales</a>
    <a 
    className="hover:text-amber-600 hover:font-semibold" 
    href="#">Services proposés</a>
    <a 
    className="hover:text-amber-600 hover:font-semibold" 
    href="#">Mon engagement</a>
  </div>
  <div 
  className="flex items-center flex-col gap-2">
    <p className="text-xl font-bold tracking-wider">Contact</p>
    <a 
    className="hover:text-amber-600 hover:font-semibold" 
    href="mailto:hamza.meneceur.dev@gmail.com">hamza.meneceur.dev@gmail.com</a>
    <a 
    className="hover:text-amber-600 hover:font-semibold" 
    href="tel:+33787488108">Tel : 07-87-48-81-08</a>
    <address className="select-all text-center not-italic">6 Place de la Mairie<br />
    <span 
    className="font-semibold">Besmé 02300</span></address>
  </div>
</div>
<div className="bg-slate-200 h-80"></div>
<div 
className="p-3 grid grid-rows-4 gap-2 rounded-md max-[1434px]:hidden bg-slate-100 h-80 w-72 absolute md:bottom-32 z-10 md:left-[22%] shadow-xl shadow-amber-500/50 box-border text-center">
  <p className="text-black font-extrabold text-center text-xl tracking-wider">Contact</p>
  <p className="text-amber-600 font-semibold">Ou suis-je ?</p>
  <p className="text-sm">Régions Parisienne et <br />dans le Hauts-de-France</p>
  <p className="text-amber-600 font-semibold">Email</p>
  <a 
    className="text-sm text-black hover:text-cyan-600 hover:font-semibold" 
    href="mailto:hamza.meneceur.dev@gmail.com">hamza.meneceur.dev@gmail.com</a>
    <br />
  <p className="text-amber-600 font-semibold">Téléphone :</p>
  <a 
    className="text-sm text-black hover:text-cyan-600 hover:font-semibold" 
    href="tel:+33787488108">(+33)07-87-48-81-08</a>
</div>
<div 
className="rounded-md max-[900px]:hidden bg-amber-400 h-[550px] w-96 absolute md:bottom-24 md:right-[40%]">
<form 
action="mailto:hamza.meneceur.dev@gmail.com" 
method="post"
className='grid grid-rows-8 gap-4'
>
  <div className='row-span-2'></div>
  <p className='w-[85%] m-auto row-span-2 font-bold p-2 text-xl text-white tracking-wide'>Une idée à concrétiser ?<br /><span className='text-2xl text-white'>Parlons-en !</span></p>  
  <input className="w-[80%] h-10 m-auto p-1" type="text" name="Type de projet" id="tp" placeholder="Type de projet :" />
  <input className="w-[80%] h-10 m-auto p-1" type="text" name="Nom" id="name" placeholder="Nom"/>
  <input className="w-[80%] h-10 m-auto p-1" type="text" name="Prenom" id="firstname" placeholder="Prenom"/>
  <input className="w-[80%] h-10 m-auto p-1 bg-cyan-500 hover:bg-orange-600  animate-bounce mt-2 font-semibold tracking-widest text-white  hover:font-extrabold" type="submit" value="Lance toi !" />
</form>
</div>
      </footer>
    </>
);
}
