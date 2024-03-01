import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useState } from "react";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const autoCloseMenu = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl transition hover:opacity-60 hover:scale-110 ">
          Waldir Merjildo
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
     
            <ul
          className={`md:flex  space-x-4 ${
            isMenuOpen ? " block absolute top-16 left-0 w-full bg-gray-800 p-4 z-10" : "hidden md:block"
          }`}
        >
          <li>
            <Link onClick={autoCloseMenu}   to="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link onClick={autoCloseMenu}  to="/about" className="text-white hover:text-gray-300">
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link onClick={autoCloseMenu}   to="/portfolio" className="text-white hover:text-gray-300">
              Portafolio
            </Link>
          </li>
          <li >
            <a
              href="https://wa.me/51959277088?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300  "
            >
              <FontAwesomeIcon icon={faWhatsapp} className="hover:scale-125" />
            </a>
          </li>
          <li >
            <a
              href="https://www.linkedin.com/in/waldir-ruben-merjildo-ubaldo-819170215/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hover:scale-125" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/muwaldir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faGithub} className="hover:scale-125" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
