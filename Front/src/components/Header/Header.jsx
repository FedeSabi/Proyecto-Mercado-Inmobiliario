import React, { useState } from 'react';
import img_1 from '../../assets/img/header1.jpg';
import { MdRealEstateAgent } from "react-icons/md";
import { GiRapidshareArrow } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { Link } from 'react-router-dom';







const Header = () => {





  return (
    <div className='flex flex-wrap bg-cover bg-center' style={{ backgroundImage: `url(${img_1})` }}>

      <div className="flex flex-wrap place-items-start ">
        <section className="relative mx-auto section-container">





          <div className='flex flex-col md:flex-row items-center justify-center min-h-[50vh] mt-[20vh]'>
            <div className='md:w-[45vw] rounded-[20px]   mb-4 md:mb-0 md:mr-4 ml-4 mr-4 md:ml-4 bg-white flex items-center'>
              <div className='flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500 text-white mb-4 ml-[20px]'>
                <GiNotebook size={120} />
              </div>
              <div className='flex flex-col justify-around w-[80%] h-[70%] mr-[10px]'>
                <span className='text-lg font-medium mb-2 ml-[20px] mt-[72px]'>Solicitar Inmueble</span>
                <p className='text-sm mb-4 ml-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className='flex justify-end items-center'>
                  <Link to="/Inmuebles" className='btn flex items-center h-[2rem] mb-[20px] rounded-full ml-0 md:ml-[16px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none'>
                    <span className="flex items-center">
                      <span className="text-sm mr-2 ml-2">Solicitar</span>
                      <GiRapidshareArrow className="ml-2 mr-2 text-xl" />
                    </span>
                 </Link>
                </div>
              </div>
            </div>

            <div className='md:w-[45vw] rounded-[20px]  mb-4 md:mb-0 md:mr-4 md:ml-4 ml-4 mr-4 bg-white flex  items-center'>
              <div className='flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-orange-500 text-white mb-4 ml-[20px]'>
                <MdRealEstateAgent size={120} />
              </div>
              <div className='flex flex-col justify-around w-[80%] h-[70%] mr-[10px]'>
                <span className='text-lg font-medium mb-2 ml-[20px] mt-[72px]'>Publicar Inmueble</span>
                <p className='text-sm mb-4 ml-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <div className='flex justify-end items-center'>
                  <Link to= "/FormBusquedaUser" className='btn flex items-center h-[2rem] mb-[20px] rounded-full ml-0 md:ml-[16px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none'>
                    <span className="flex items-center">
                      <span className="text-sm mr-2 ml-2">Publicar</span>
                      <GiRapidshareArrow className="ml-2 mr-2 text-xl" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>



          <div className=' bg-gray-900 bg-opacity-30 mt-[1.5rem] flex flex-col justify-center'>

            <h1 className="text-xl font-semibold mr-4 text-white mb-4 ml-[36px]">Hola ?, <span className="font-normal text-white">Realice su búsqueda</span></h1>
            <form className="flex flex-wrap justify-center  w-[100vw] mb-[66px] mt-[66px]">

              <div className="w-[87%] md:w-[16%] ">
                <select className="block w-full md:w-[96%] pl-[10px] h-[2rem] rounded-[8px] mb-[6px]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                <select className="block w-full md:w-[96%] pl-[10px] h-[2rem] rounded-[8px] mb-[6px] text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                <select className="block w-full md:w-[96%] pl-[10px] h-[2rem] rounded-[8px] mb-[6px]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                <select className="block w-full md:w-[96%] pl-[10px] h-[2rem] rounded-[8px] mb-[6px]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                <select className="block w-full md:w-[96%] pl-[10px] h-[2rem] rounded-[8px] mb-[6px]  text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
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
                
                <Link to="/DetalleInmuebles">
                <button
                  type="submit"
                  className="block w-full md:w-[96%] h-[2rem] ml-0 md:ml-[16px] rounded-[8px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none"
                >
                  Buscar
                </button>


                </Link>
              </div>
            </form>
          </div>

        </section>
      </div>


    </div>
  );
}

export { Header };

