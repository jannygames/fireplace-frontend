import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-transparent py-8 px-10 flex justify-between items-center">
        <div className="flex items-center gap-10">
            <div>
                <h1 className="font-font font-normal text-2xl">Zidiniai4you.</h1>
            </div>
            <div>
                <ul className="flex gap-10 font-normal">
                    <li>Pradžia</li>
                    <li>Židiniai</li>
                    <li>Krosnelės</li>
                    <li>Kaminai</li>
                    <li>Terasos</li>
                    <li>Pergolos</li>
                </ul>
            </div>
        </div>
        <div className="flex items-center gap-10">
            <div>
                <button className="bg-primary text-white px-4 py-2 rounded-md w-[10vw] hover:bg-primary/80 transition-all duration-300 font-normal tracking-wide">Kontaktai</button>
            </div>
            <div>
                <FaRegUser className="text-2xl" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar