
export default function Home() {
  return (
    <>
      <main className="grid place-content-center h-screen">
        <div 
        className=
        "flex justify-center rounded-md box-border md:h-32 md:w-80 p-4 bg-cyan-500 shadow-lg shadow-cyan-500/50"
        >
        <p 
        className="text-center tracking-wide text-white"
        >
          Bienvenue sur mon portfolio ! Explorez les différents onglets pour découvrir mes projets et, si vous le souhaitez, entrer en contact avec moi.
        </p>

        </div>
       
      </main>
      <footer>
<div className="bg-cyan-500  h-52 grid grid-cols-3">
  <div className="col-span-2 flex justify-center items-center flex-col gap-2">
    <p>Entreprise</p>
    <p>MENECEUR EI</p>
  </div>
  <div className="flex justify-center items-center flex-col gap-2">
    <p>Contact</p>
    <a className="hover:text-amber500" href="mailto:hamza.meneceur.dev@gmail.com">hamza.meneceur.dev@gmail.com</a>
  </div>
</div>
<div className="bg-amber-500 h-80">

</div>
      </footer>
    </>
);
}
