import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/LOGO_FUNDO_PRETO.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isSobrePage = location.pathname === "/sobre";

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-sm text-white">
      <div className="flex flex-col md:flex-row items-center md:px-28 w-full text-center md:text-left">
        <a href="/#home">
          <img src={logo} className="w-40 md:w-43" alt="Logo" />
        </a>

        <ul className="hidden md:flex gap-8 text-gray-200 text-xl font-medium mx-auto">
          <li>
            <a href="/#home" className="hover:text-[#00ABF9] transition">
              Home
            </a>
          </li>
          <li>
            <a
              href={isSobrePage ? "#clientes" : "/#marcas"}
              className="hover:text-[#00ABF9] transition"
            >
              {isSobrePage ? "Clientes" : "Marcas"}
            </a>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-[#00ABF9] transition">
              Sobre Nós
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <a
            href="/#contato"
            className="bg-[#0077C8] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#00ABF9] transition"
          >
            Contato
          </a>
        </div>

        <button
          className="md:hidden w-full py-4 flex items-center justify-center text-4xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden absolute w-full z-50 bg-[#111] backdrop-blur-sm text-gray-200 
               flex flex-col items-center py-4"
        >
          <a
            href="/#home"
            className="w-full text-center py-2 hover:bg-[#00ABF9] hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href={isSobrePage ? "/#clientes" : "/#marcas"}
            className="w-full text-center py-2 hover:bg-[#0090D9] hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            {isSobrePage ? "Clientes" : "Marcas"}
          </a>

          <Link
            to="/sobre"
            className="w-full text-center py-2 hover:bg-[#0077C8] hover:text-black transition"
            onClick={() => setMenuOpen(false)}
          >
            Sobre Nós
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
