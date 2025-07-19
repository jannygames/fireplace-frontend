import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-transparent py-5 px-10 flex justify-between items-center">
        <div>
            <h1 className="font-font font-bold text-2xl">Zidiniai4you.</h1>
        </div>
        <div>
            <ul className="flex gap-10 font-bold">
                <li>Pradžia</li>
                <li>Židiniai</li>
                <li>Krosnelės</li>
                <li>Kaminai</li>
                <li>Terasos</li>
                <li>Pergolos</li>
            </ul>
        </div>
        <div>
            <button className="bg-primary text-white px-4 py-2 rounded-md">Kontaktai</button>
        </div>
        <div>
            <FaRegUser />
        </div>
    </nav>
  )
}

export default Navbar