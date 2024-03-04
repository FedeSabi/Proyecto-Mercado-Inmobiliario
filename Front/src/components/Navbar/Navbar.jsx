
/*


import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div>
      <nav
        className={`flex justify-between text-white bg-gray-900 bg-opacity-30 w-screen p-4 z-50 fixed ${
          menuVisible ? "flex-col" : ""
        }`}
      >
        <div className="px-5 xl:px-12 py-2 flex w-full items-center">
          <Link className="text-3xl font-bold font-heading" to={"/"}>
            <p className="text-orange-500">Mercado</p>
            <p className="h-9 text-orange-500">Inmobiliario</p>
          </Link>

          <ul
            className={`hidden md:flex px-6 mx-auto font-semibold font-heading space-x-12 ${
              menuVisible ? "hidden" : "flex"
            }`}
          >
            <li>
              <Link
                to={"/Inmuebles"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Inmuebles
              </Link>
            </li>
            <li>
              <Link
                to={"/FormCorretor"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Corredores
              </Link>
            </li>
            <li>
              <Link
                to={"/FormConstrutora"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Constructoras
              </Link>
            </li>
            <li>
              <Link
                to={"/Nosotros"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to={"/Contacto"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Contactos
              </Link>
            </li>
          </ul>

          <div className="hidden xl:flex items-center space-x-5 mr-[20px]">
            <Link
              className="hover:text-gray-500 text-orange-500"
              to={"https://www.facebook.com/"}
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              className="flex items-center hover:text-gray-500 text-orange-500"
              to={"https://www.instagram.com/"}
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              className="flex items-center hover:text-gray-500 text-orange-500"
              to={"https://www.whatsapp.com/?lang=es_LA"}
            >
              <BsWhatsapp size={30} />
            </Link>

            <Link
              to="/FormLogin"
              className="flex items-center hover:text-gray-500 text-orange-500"
            >
              <BsPersonCircle size={30} />
            </Link>
          </div>
        </div>

        <Link
          className="navbar-burger self-center mr-12 xl:hidden"
          to={"#"}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-12 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Link>

        <ul
          className={`md:hidden px-6 mx-auto font-semibold font-heading  ${
            menuVisible ? "flex flex-col" : "hidden"
          }`}
        >
          <li>
            <Link to="/Inmuebles" className="hover:text-gray-200">
              Inmuebles
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200 " to={"#"}>
              Ver corredores
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200 " to={"#"}>
              Ver constructoras
            </Link>
          </li>
          <li>
            <Link to={"/Nosotros"} className="hover:text-gray-200 ">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to={"/Contacto"} className="hover:text-gray-200">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };

*/

import { Link } from 'react-router-dom';
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsJustify, BsPersonCircle, BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      <nav
        className={`flex justify-between text-white bg-gray-900 bg-opacity-30 w-screen p-4 z-50 fixed ${
          menuVisible ? "flex-col" : ""
        }`}
      >
        <div className="px-5 xl:px-12 py-2 flex w-full items-center">
          <Link className="text-3xl font-bold font-heading" to={"/"}>
            <p className="text-orange-500">Mercado</p>
            <p className="h-9 text-orange-500">Inmobiliario</p>
          </Link>

          <ul
            className={`hidden md:flex px-6 mx-auto font-semibold font-heading space-x-12 ${
              menuVisible ? "hidden" : "flex"
            }`}
          >
            <li>
              <Link
                to={"/inmuebles"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Inmuebles
              </Link>
            </li>
            <li>
              <Link
                to={"/FormCorretor"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Corredores
              </Link>
            </li>
            <li>
              <Link
                to={"/FormConstrutora"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Constructoras
              </Link>
            </li>
            <li>
              <Link
                to={"/Nosotros"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to={"/Contacto"}
                className="hover:text-gray-200 text-sm md:text-lg lg:text-xl xl:text-1xl"
              >
                Contactos
              </Link>
            </li>
          </ul>

          <div className="hidden xl:flex items-center space-x-5 mr-[20px]">
            <Link
              className="hover:text-gray-500 text-orange-500"
              to={"https://www.facebook.com/"}
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              className="flex items-center hover:text-gray-500 text-orange-500"
              to={"https://www.instagram.com/"}
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              className="flex items-center hover:text-gray-500 text-orange-500"
              to={"https://www.whatsapp.com/?lang=es_LA"}
            >
              <BsWhatsapp size={30} />
            </Link>

            <Link
              to="/FormLogin"
              className="flex items-center hover:text-gray-500 text-orange-500"
            >
              <BsPersonCircle size={30} />
            </Link>
          </div>
        </div>

        <Link
          className="navbar-burger self-center mr-12 xl:hidden"
          to={"#"}
          onClick={toggleMenu}
        >
          {/* Reemplaza la etiqueta <svg> con el componente de icono de React */}
          <BsJustify className="h-6 w-12 hover:text-gray-200" />
        </Link>

        <ul
          className={`md:hidden px-6 mx-auto font-semibold font-heading  ${
            menuVisible ? "flex flex-col" : "hidden"
          }`}
        >
          <li>
            <Link to="/Inmuebles" className="hover:text-gray-200">
              Inmuebles
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200 " to={"#"}>
              Ver corredores
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-200 " to={"#"}>
              Ver constructoras
            </Link>
          </li>
          <li>
            <Link to={"/Nosotros"} className="hover:text-gray-200 ">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to={"/Contacto"} className="hover:text-gray-200">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
