import React, { useState } from "react";
import Logo from "../../public/img/logoblack.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-whiteDark text-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="w-16 md:w-20" /> {/* Logo más pequeño */}
          </div>

          {/* Toggle Button (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-6`}
          >
            <a
              href="#home"
              className="block mt-2 md:mt-0 text-gray-800 hover:text-gray-500"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="block mt-2 md:mt-0 text-gray-800 hover:text-gray-500"
            >
              Sobre Nosotros
            </a>
            <a
              href="#services"
              className="block mt-2 md:mt-0 text-gray-800 hover:text-gray-500"
            >
              Servicios
            </a>
            <a
              href="#contact"
              className="block mt-2 md:mt-0 text-gray-800 hover:text-gray-500"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
