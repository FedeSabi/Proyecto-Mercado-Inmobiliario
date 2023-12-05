import React from 'react';
import img_1 from './img/imagen_1.jpg'
import { GiNotebook } from "react-icons/gi";
import { MdRealEstateAgent } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";





const Navbar = () => {
  


    return (
      
    
<div  className='contenedor-navbar bg-cover bg-center w-screen  h-screen'
style={{ backgroundImage: `url(${img_1})` }}>

            <div class="flex flex-wrap place-items-start ">
                <section class="relative mx-auto">

                <nav class="flex justify-between  text-white bg-gray-900 bg-opacity-30 w-screen p-4">


                        <div class="px-5 xl:px-12 py-2 flex w-full items-center">
                            <a class="text-3xl font-bold font-heading" href="#">
                                <p class="text-orange-500 ">Mercado</p>
                               <p class="h-9   text-orange-500" >Inmobiliario</p>

                            </a>

                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><a class="hover:text-gray-200 text-xl" href="#">Inmuebles</a></li>
                                <li><a class="hover:text-gray-200 text-xl" href="#">Ver corretores</a></li>
                                <li><a class="hover:text-gray-200 text-xl" href="#">Ver constructoras</a></li>
                                <li><a class="hover:text-gray-200 text-xl" href="#">Sobre nosotros</a></li>
                                <li><a class="hover:text-gray-200 text-xl" href="#">Contactos</a></li>
                                <li><a class="hover:text-gray-200 text-xl" href="#">Blog</a></li>
                            </ul>

                            <div class="hidden xl:flex items-center space-x-5 items-center ">
                                <a class="hover:text-gray-500 text-orange-500" href="#">
                                 <FaFacebook size={30} />
                                </a>
                                <a class="flex items-center hover:text-gray-500 text-orange-500" href="#">
                                    <FaInstagram size={30}/>
                                   
                                   
                                </a>
                                <a class="flex items-center hover:text-gray-500 text-orange-500" href="#">
                                    <BsWhatsapp  size={30}/>
                                   
                                   
                                </a>

                                <a class="flex items-center " href="#">
                                 <p class="text-blue-900 text-lg hover:text-orange-500">Inisiar sesion</p>
                                </a>

                            </div>
                        </div>

                        <a class="xl:hidden flex mr-6 items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class="flex absolute -mt-5 ml-4">
                                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>
                  

<div className='flex items-end justify-center  min-h-[50vh] bg-opacity-10'>
   
<div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm max-w-[45rem] mr-[20px] h-[21vh] rounded-[10px] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]'>
        
        <div class='flex flex-row items-center space-x-3'>
        <div className='flex flex-none items-center justify-center w-20 h-20 rounded-full bg-orange-500 text-white' style={{ transform: 'rotate(-13deg)' }}>
      <GiNotebook size={60} style={{ marginRight: '5px' }} />
       </div>

            <span class='text-xl font-medium'>Solicitar Inmueble</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div class='flex justify-end items-center'>
           
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-none bg-white hover:bg-orange-500 hover:text-white text-orange-500 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span class="text-xl">Solicitar</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
   
   <div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm max-w-[45rem] ml-[20px] h-[21vh] rounded-[10px] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]'>
        
        <div class='flex flex-row items-center space-x-3'>
        <div className='flex flex-none items-center justify-center w-20 h-20 rounded-full bg-orange-500 text-white' >
      <MdRealEstateAgent size={60} style={{ marginRight: '5px' }} />
       </div>
            <span class='text-xl font-medium'>Publicar inmueble</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div class='flex justify-end items-center '>
          
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-none bg-white hover:bg-orange-500 hover:text-white text-orange-500 dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span class="text-xl">Publicar</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
        </div>
         
        
        
        
        <div className='h-[23.6vh] flex items-center justify-center bg-gray-900 bg-opacity-30 mt-[7%]'>
      
         <form >
         <h1 class="text-xl font-semibold ml-[39px] text-white mb-[20px] ">Hola ?, <span class="font-normal text-white">Realice su busqueda</span></h1>
         <div className='flex justify-center w-[100vw] ' >
   
         
          
          
       
          <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-[13%] h-[10%] m-[10px]  p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />


          <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-[13%] h-[10%] m-[10px]  p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
         
          <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block  w-[13%] h-[10%] m-[10px]  p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
        
          <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
        
          <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
         
         
          <div class='btn-buscador block w-[13%]'>
            
          <button type="submit" class=" block w-[100%] py-3 mt-2  ml-[10px] font-medium tracking-widest text-white uppercase bg-orange-500 focus:outline-none hover:bg-gray-500 hover:shadow-none">
        Buscar
         </button>
      </div>
    
      </div>
    </form>
  </div>

         
                </section>
                
            </div>
            
            </div>
          
       
    )
}

export { Navbar }