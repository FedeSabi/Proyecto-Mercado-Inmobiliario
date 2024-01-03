import React, { useState } from 'react';
import img_1 from './img/imagen_1.jpg';
import { GiNotebook } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='flex flex-wrap bg-cover bg-center w-screen h-screen' style={{ backgroundImage: `url(${img_1})` }}>
      <div className="flex flex-wrap place-items-start ">
        <section className="relative mx-auto">
          <nav className={`flex justify-between text-white bg-gray-900 bg-opacity-30 w-screen p-4 ${menuVisible ? 'flex-col' : ''}`}>
            <div className="px-5 xl:px-12 py-2 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#">
                <p className="text-orange-500">Mercado</p>
                <p className="h-9 text-orange-500">Inmobiliario</p>
              </a>

              <ul className={`hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ${menuVisible ? 'hidden' : 'flex'}`}>
                <li><a className="hover:text-gray-200 text-xl" href="#">Inmuebles</a></li>
                <li><a className="hover:text-gray-200 text-xl" href="#">Ver corredores</a></li>
                <li><a className="hover:text-gray-200 text-xl" href="#">Ver constructoras</a></li>
                <li><a className="hover:text-gray-200 text-xl" href="#">Sobre nosotros</a></li>
                <li><a className="hover:text-gray-200 text-xl" href="#">Contactos</a></li>
                <li><a className="hover:text-gray-200 text-xl" href="#">Blog</a></li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-500 text-orange-500" href="#">
                  <FaFacebook size={30} />
                </a>
                <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
                  <FaInstagram size={30} />
                </a>
                <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
                  <BsWhatsapp size={30} />
                </a>
                <a className="flex items-center " href="#">
                  <p className="text-blue-900 text-lg hover:text-orange-500">Iniciar sesión</p>
                </a>
              </div>
            </div>

            <a className="navbar-burger self-center mr-12 xl:hidden" href="#" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            <ul className={`md:hidden px-4 mx-auto font-semibold font-heading  ${menuVisible ? 'flex flex-col' : 'hidden'}`} >
              <li><a className="hover:text-gray-200 text-xl" href="#">Inmuebles</a></li>
              <li><a className="hover:text-gray-200 text-xl" href="#">Ver corredores</a></li>
              <li><a className="hover:text-gray-200 text-xl" href="#">Ver constructoras</a></li>
              <li><a className="hover:text-gray-200 text-xl" href="#">Sobre nosotros</a></li>
              <li><a className="hover:text-gray-200 text-xl" href="#">Contactos</a></li>
              <li><a className="hover:text-gray-200 text-xl" href="#">Blog</a></li>
            </ul>
          </nav>

          <div className='flex flex-wrap items-end justify-center min-h-[50vh] bg-opacity-10'>
            <div className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm max-w-full md:max-w-[45rem]  h-[21vh] rounded-[10px] p-4 mb-4 mr-[10px] ml-[10px] bg-white text-black dark:bg-slate-800 dark:text-white w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]'>
              <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-20 h-20 rounded-full bg-orange-500 text-white' style={{ transform: 'rotate(-13deg)' }}>
                  <GiNotebook size={60} style={{ marginRight: '5px' }} />
                </div>
                <span className='text-xl font-medium'>Solicitar Inmueble</span>
              </div>
              <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div className='flex justify-end items-center'>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-none bg-white hover:bg-orange-500 hover:text-white text-orange-500 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span className="text-xl">Solicitar</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </div>

            <div className='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm max-w-full md:max-w-[45rem]  h-[21vh] rounded-[10px] p-4 mb-4 mr-[10px] ml-[10px] bg-white text-black dark:bg-slate-800 dark:text-white w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]'>
              <div className='flex flex-row items-center space-x-3'>
                <div className='flex flex-none items-center justify-center w-20 h-20 rounded-full bg-orange-500 text-white' >
                  <MdRealEstateAgent size={60} style={{ marginRight: '5px' }} />
                </div>
                <span className='text-xl font-medium'>Publicar inmueble</span>
              </div>
              <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
              <div className='flex justify-end items-center '>
                <button className='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-none bg-white hover:bg-orange-500 hover:text-white text-orange-500 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
                  <span className="text-xl">Publicar</span>
                  <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                    <path d='M5 12h13M12 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className='h-[23.4vh] flex fitems-center justify-center bg-gray-900 bg-opacity-30 mt-[6%]'>
            <form >
              <h1 className="text-xl font-semibold ml-[39px] text-white mb-[20px] ">Hola ?, <span className="font-normal text-white">Realice su búsqueda</span></h1>
              <div className='flex flex-wrap justify-center w-[100vw]'>
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <input id="lastname" type="text" name="lastname" placeholder="Doe" autoComplete="family-name" className="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <input id="email" type="email" name="email" placeholder="john.doe@company.com" autoComplete="email" className="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <input id="password" type="password" name="password" placeholder="********" autoComplete="new-password" className="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autoComplete="new-password" className="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                <div className='btn-buscador block w-[13%]'>
                  <button type="submit" className="block w-[100%] py-3 mt-2 ml-[10px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none">
                    Buscar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export { Navbar };
