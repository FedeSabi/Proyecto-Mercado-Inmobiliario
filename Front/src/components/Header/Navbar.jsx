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
    <div className='flex flex-wrap bg-cover bg-center w-screen h-screen ' style={{ backgroundImage: `url(${img_1})` }}>
    <div className="flex flex-wrap place-items-start ">
      <section className="relative mx-auto section-container"> {/* Nueva clase section-container */}
        <nav className={`flex justify-between text-white bg-gray-900 bg-opacity-30 w-screen p-4 z-50 lg:fixed  ${menuVisible ? 'flex-col' : ''}`}>
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

          <div className='flex flex-col md:flex-row items-center justify-center min-h-[50vh] mt-[20vh]'>
  <div className='md:w-[40vw]  h-[20vh] mb-4 md:mb-0 md:mr-4 md:ml-4 bg-white flex items-center'>
    <div className='flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500 text-white mb-4 ml-[20px]'>
      <GiNotebook size={120} />
    </div>
    <div className='flex flex-col justify-around w-[80%] h-[70%]'>
      <span className='text-lg font-medium mb-2 ml-[20px]'>Solicitar Inmueble</span>
      <p className='text-sm mb-4 ml-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      <div className='flex justify-end items-center'>
        <button className='btn block w-[40%] md:w-[27%] h-[2rem]  rounded-full ml-0 md:ml-[16px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none'>
          <span className="text-sm">Solicitar----</span>
        </button>
      </div>
    </div>
  </div>

  <div className='md:w-[40vw] h-[20vh] mb-4 md:mb-0 md:mr-4 md:ml-4 bg-white flex  items-center'>
    <div className='flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500 text-white mb-4 ml-[20px]'>
      <MdRealEstateAgent size={120} />
    </div>
    <div className='flex flex-col justify-around w-[80%] h-[70%]'>
      <span className='text-lg font-medium mb-2 ml-[20px]'>Publicar Inmueble</span>
      <p className='text-sm mb-4 ml-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      <div className='flex justify-end items-center'>
        <button className='btn block w-[40%]  md:w-[25%] h-[2rem]  rounded-full ml-0 md:ml-[16px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none'>
          <span className="text-sm">Publicar----</span>
        </button>
      </div>
    </div>
  </div>
</div>


          
          <div className=' h-[27.2vh] bg-gray-900 bg-opacity-30 mt-[1.5rem] flex flex-col justify-center'>
       
          <h1 className="text-xl font-semibold mr-4 text-white mb-4 ml-[36px]">Hola ?, <span className="font-normal text-white">Realice su búsqueda</span></h1>    
  <form className="flex flex-wrap justify-center  w-[100vw] ">
   
  <div className="w-[87%] md:w-[16%] ">
               <select className= "block w-full md:w-[96%] p-[5px] h-[2rem]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  id="genero"
                  value=""
                  onChange=""
                  required
                >
                  <option value="bbbb">Seleccione su Ciudad :</option>
                  <option value="masculino">La Plata </option>
                  <option value="femenino">Quilmes</option>
                  <option value="otro">Avellaneda</option>
                 
                </select>
            </div>
    <div className="w-[87%] md:w-[16%] ">
               <select className= "block w-full md:w-[96%] p-[5px] h-[2rem]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  id="genero"
                  value=""
                  onChange=""
                  required
                >
                  <option value="bbbb">Seleccione su Barrio :</option>
                  <option value="masculino">San jose </option>
                  <option value="femenino">La Cañada</option>
                  <option value="otro">La Carolina</option>
                  <option value="otro">Villa Alsira</option>
                 
                </select>
            </div>

             <div className="w-[87%] md:w-[16%] ">
               <select className= "block w-full md:w-[96%] p-[5px] h-[2rem]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  id="genero"
                  value=""
                  onChange=""
                  required
                >
                  <option value="bbbb">Seleccione tipo de inmueble :</option>
                  <option value="masculino">Casa  </option>
                  <option value="femenino">Departamento</option>
                  <option value="otro">quinta</option>
                 
                </select>
            </div>

            <div className="w-[87%] md:w-[16%] ">
               <select className= "block w-full md:w-[96%] p-[5px] h-[2rem]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  id="genero"
                  value=""
                  onChange=""
                  required
                >
                  <option value="bbbb">Pretencion :</option>
                  <option value="masculino">***** </option>
                  <option value="femenino">*****</option>
                  <option value="otro">*****</option>
                 
                </select>
            </div>
            <div className="w-[87%] md:w-[16%] ">
               <select className= "block w-full md:w-[96%] p-[5px] h-[2rem]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  id="genero"
                  value=""
                  onChange=""
                  required
                >
                  <option value="bbbb">Id: Inmueble :</option>
                  <option value="masculino">****** </option>
                  <option value="femenino">******</option>
                  <option value="otro">******</option>
                 
                </select>
            </div>
    <div className="w-[87%] md:w-[16%] ">
      <button
        type="submit"
        className="block w-full md:w-[96%] h-[2rem] ml-0 md:ml-[16px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none"
      >
        Buscar
      </button>
    </div>
  </form>
</div>

        </section>
      </div>
    </div>
  );
}

export { Navbar };
