//import { useRouter } from "next/navigation";
import Image from "next/image";
export default function NavigationBar(){
  //const navigation = useRouter();
  return (
    <nav className="bg-slate-800">
      <div  className="flex w-full bg-slate-700">
        <Image
        alt="Logo of my company"
        width={128}
        height={128}
        src="/hamza-meneceur-logo.svg"
        >
        </Image>
        <ul className="flex align-middle bg-slate-700">
          <li>Un</li>
          <li>Deux</li>
          <li>Trois</li>
          <li>Quatre</li>
        </ul>
      </div>
    </nav>
  )
}
