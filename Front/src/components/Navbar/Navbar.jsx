import React from 'react';
import img_1 from './img/imagen_1.jpg'

const Navbar = () => {
    return (
      
    
<div  className='contenedor-navbar bg-cover bg-center  h-screen'
style={{ backgroundImage: `url(${img_1})` }}>

            <div class="flex flex-wrap place-items-start ">
                <section class="relative mx-auto">

                <nav class="flex justify-between  text-white bg-gray-900 bg-opacity-30 w-screen p-4">


                        <div class="px-5 xl:px-12 py-2 flex w-full items-center">
                            <a class="text-3xl font-bold font-heading" href="#">
                                <img class="h-9" src="logo.png" alt="logo" />

                            </a>

                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                                <li><a class="hover:text-gray-200" href="#">Home</a></li>
                                <li><a class="hover:text-gray-200" href="#">Catagory</a></li>
                                <li><a class="hover:text-gray-200" href="#">Collections</a></li>
                                <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
                            </ul>

                            <div class="hidden xl:flex items-center space-x-5 items-center">
                                <a class="hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </a>
                                <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span class="flex absolute -mt-5 ml-4">
                                        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                        </span>
                                    </span>
                                </a>

                                <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
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
            <div class='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                <line x1='3' y1='22' x2='21' y2='22' />
            </svg>
            </div>
            <span class='text-base font-medium'>Solicitar Inmueble</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div class='flex justify-end items-center'>
           
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span>Solicitar</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
   
   <div class='break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm max-w-[45rem] ml-[20px] h-[21vh] rounded-[10px] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white w-full md:w-[calc(50% - 1rem)] lg:w-[calc(33.33% - 1rem)]'>
        
        <div class='flex flex-row items-center space-x-3'>
            <div class='flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
                <line x1='3' y1='22' x2='21' y2='22' />
            </svg>
            </div>
            <span class='text-base font-medium'>Publicar inmueble</span>
        </div>
        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</div>
        <div class='flex justify-end items-center '>
          
            <button class='flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            <span>Publicar</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <path d='M5 12h13M12 5l7 7-7 7' />
            </svg>
            </button>
        </div>
        </div>
        </div>
         
        
        
        
        <div className='h-[26vh] flex items-center justify-center bg-gray-900 bg-opacity-30 mt-[7%]'>
      
         <form >
         <h1 class="text-xl font-semibold ml-[198px] text-white mb-[20px] ">Hola ?, <span class="font-normal text-white">Realice su busqueda</span></h1>
         <div className='flex justify-center w-[100vw] ' >
       
         
          <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
       
          <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-[10%] h-[13%] m-[10px]  p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
         
          <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block  w-[13%] h-[10%] m-[10px]  p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
        
          <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
        
          <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-[13%] h-[10%] m-[10px] p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
         
         
          <div class='btn-buscador block w-[13%]'>
            
          <button type="submit" class=" block w-[100%] py-3 mt-2  ml-[10px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign up
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