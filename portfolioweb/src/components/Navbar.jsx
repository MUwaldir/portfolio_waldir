import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-2xl">
          Waldir Merjildo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              Acerca de mí
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:text-gray-300">
              Portafolio
            </Link>
          </li>
          {/* <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contacto
            </Link>
          </li> */}
          <li>
            <a
              href="https://wa.me/51959277088"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/muwaldir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
