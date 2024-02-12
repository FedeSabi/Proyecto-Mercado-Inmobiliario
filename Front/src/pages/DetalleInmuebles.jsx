import React, {useState} from 'react';
        import { Link } from "react-router-dom";
        import imagen1 from "../assets/img/bernard-1.jpg";
        import imagen2 from "../assets/img/chris-curry-1.jpg";
        import imagen3 from "../assets/img/chris-curry-2.jpg";
        
        import { FaFacebook, FaInstagram } from "react-icons/fa";
        import { BsWhatsapp } from "react-icons/bs";
const DetalleInmuebles = () => {
    const images = [imagen1, imagen2, imagen3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const selectThumbnail = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <div>
        <div className=' h-[20%] '>
         
          <div className='flex justify-center items-end  h-[25vh] '>
            <div className=' h-16 ml-[5%] '>
              <h1 className=' text-orange-500 text-sm md:text-lg lg:text-xl xl:text-1xl'>CASA EN VENTA RESIDENCIAL - VILLA NUEVA</h1>
            </div>
            <div className='ml-[20%] w-[20%]'>
              <div className=' '>
              <h1 className=' text-orange-500 text-sm md:text-lg lg:text-xl xl:text-1xl'>
                VENTA
              </h1>

              </div>
              <div className=''>
              <h1 className=' text-green-500 text-sm md:text-lg lg:text-xl xl:text-1xl'>U$D  110.000</h1>
              </div>
              </div>
         
        </div>
        
  
            </div>
         
        <div className='flex flex-wrap mr-[10px] justify-center '>
            <div className='flex flex-col  ]'>
            <div className="h-[65vh] p-3 relative ">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-[100vh] h-full object-cover rounded-lg" />
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 h-[48px] bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none text-white rounded-full">←</button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 h-[48px] bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none text-white rounded-full">→</button>
          </div>
  
          {/* Miniaturas */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 cursor-pointer rounded-md ${index === currentIndex ? 'border-2 border-orange-500' : ''}`}
                onClick={() => selectThumbnail(index)}
              />
            ))}
          </div>

            </div>
         
        
            <div className=" flex justify-start mb-[20px] mt-10  ml-[8%] ">
              <div className="flex flex-col justify-center max-w-lg bg-white p-8 rounded-xl shadow shadow-orange-300 ] h-[70vh] w-[90vw] mr-[8%]">
                
          
                
                <form action="" >
                  <div className="flex flex-col space-y-5">
                  <label htmlFor="email">
                      <p className="font-medium text-orange-700 pb-2">Ingrese su Nombre</p>
                      <input
                        id="nombre"
                        name="nombre"
                        type="nombre"
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                        placeholder="Ingrese su Nombre"
                      />
                    </label>
                    <label htmlFor="email">
                      <p className="font-medium text-orange-700 pb-2">Ingrese su Email</p>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                        placeholder="Ingrese su Email"
                      />
                    </label>
                    <label htmlFor="password">
                      <p className="font-medium text-orange-700 pb-2">Contraseña</p>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                        placeholder="Ingrese su Contraseña"
                      />
                    </label>
                    <label htmlFor="password">
                      <p className="font-medium text-orange-700 pb-2">Su Mensaje</p>
                      <textarea
                        id="text"
                        name="text"
                        type="text"
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                        placeholder="Ingrese su Mensaje"
                      />
                    </label>
                    
                    <button className="w-full py-3 font-medium text-white bg-orange-600 hover:bg-orange-400 rounded-lg border-orange-400 hover:shadow inline-flex space-x-2 items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Enviar</span>
                    </button>
                  <div>
                  <div className="hidden xl:flex items-center space-x-5 items-center justify-around">
                <a className="hover:text-gray-500 text-orange-500" href="#">
                 <FaFacebook size={30} />
                </a>
                    <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
               <FaInstagram size={30} />
               </a>
                    <a className="flex items-center hover:text-gray-500 text-orange-500" href="#">
                     <BsWhatsapp size={30} />
                   </a>
          
        
        
                   </div>
                  </div>
                  </div>
                </form>
              </div>
              </div>
              </div>
              <div className="flex justify-center mb-[80px]">
               <a
          href="/"
          type="button"
          className=" flex justify-center  inline-block rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Volver
        </a>
      </div>
            </div>
            
          
          
          );
        }
        
        export { DetalleInmuebles };
    