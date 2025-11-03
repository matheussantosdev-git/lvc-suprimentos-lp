import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_fundo_branco.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/#home" onClick={() => scrollToSection("home")}>
            <img src={logo} className="w-40" />
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-primaryBlue transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Inicio
            </Link>

            <Link
              to="/sobre"
              className="text-black hover:text-primaryBlue transition-colors"
              onClick={() => scrollToSection("sobre")}
            >
              Sobre Nós
            </Link>

            <Link
              to="/"
              className="text-black hover:text-primaryBlue transition-colors"
              onClick={() => scrollToSection("products")}
            >
              Produtos
            </Link>

            <Link
              to="/"
              className="text-black hover:text-primaryBlue transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col items-center ">
            <Link
              to="/"
              className="w-full block text-center text-black hover:text-primaryBlue transition-colors"
              onClick={() => scrollToSection("home")}
            >
              Inicio
            </Link>

            <Link
              to="/sobre"
              onClick={() => scrollToSection("sobre")}
              className="w-full block text-center text-black hover:text-primaryBlue transition-colors"
            >
              Sobre Nós
            </Link>

            <Link
              to="/"
              onClick={() => scrollToSection("products")}
              className="w-full block text-center text-black hover:text-primaryBlue transition-colors"
            >
              Produtos
            </Link>

            <Link
              to="/"
              onClick={() => scrollToSection("contact")}
              className="w-full block text-center text-black hover:text-primaryBlue transition-colors"
            >
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
