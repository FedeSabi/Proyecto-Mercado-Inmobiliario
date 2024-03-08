import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';






const InmuebleFormPersona = () => {

  
  const [titulo, setTitulo] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tipoInmueble, setTipoInmueble] = useState('');
  const [presentacion, setPresentacion] = useState('');
  const [cuartos, setCuartos] = useState('');
  const [banos, setBanos] = useState('');
  const [garage, setGarage] = useState('');
  const [precios, setPrecios] = useState('');
  const [condominio, setCondominio] = useState('');
  const [inpuesto, setInpuesto] = useState('');
  const [lanzamientos, setLanzamientos] = useState(0);
  const [amuebladas, setAmuebladas] = useState(0);
  const [nuevos, setNuevos] = useState(0);
  const [calidadSuperior, setCalidadSuperior] = useState(0);
  const [financiado, setFinanciado] = useState(0);
  const [areaTotal, setAreaTotal] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [caracteristicasAdicionales, setCaracteristicasAdicionales] = useState('');
  const [descripcionAdicional, setDescripcionAdicional] = useState('');
  const [verInmueble, setVerInmueble] = useState('');
  const [redSocial, setRedSocial] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  

  const [logo, setLogoFile] = useState(null);
  const [fotosDestacada, setFotosDestacadaFile] = useState(null);
  const [galeriaFotos, setGaleriaFotosFiles] = useState(null);
  const [videos, setVideosFile] = useState(null);

  const[ enviado, setEnviado]=useState(false);
  const [mensaje, setMensaje]=useState('')

  const handleLogoFileChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleFotosDestacadaFileChange = (e) => {
    setFotosDestacadaFile(e.target.files[0]);
  };

  const handleGaleriaFotosFilesChange = (e) => {
    setGaleriaFotosFiles(e.target.files[0]);
  };

  const handleVideosFileChange = (e) => {
    setVideosFile(e.target.files[0]);
  };


  const manejarEnvioFormulario = async () => {
    try {
   
      const formData = new FormData();
      formData.append('logo', logo);
      formData.append('fotosDestacada', fotosDestacada);
      formData.append('galeriaFotos', galeriaFotos);
      formData.append('videos', videos);

     
      formData.append('titulo', titulo);
      formData.append('ciudad', ciudad);
      formData.append('tipoInmueble', tipoInmueble);
      formData.append('presentacion', presentacion);
      formData.append('cuartos', cuartos);
      formData.append('banos', banos);
      formData.append('garage', garage);
      formData.append('precios', precios);
      formData.append('condominio', condominio);
      formData.append('inpuesto', inpuesto);
      formData.append('lanzamientos', lanzamientos);
      formData.append('amuebladas', amuebladas);
      formData.append('nuevos', nuevos);
      formData.append('calidadSuperior', calidadSuperior);
      formData.append('financiado', financiado);
      formData.append('areaTotal', areaTotal);
      formData.append('antiguedad', antiguedad);
      formData.append('caracteristicasAdicionales', caracteristicasAdicionales);
      formData.append('descripcionAdicional', descripcionAdicional);
      formData.append('verInmueble', verInmueble);
      formData.append('redSocial', redSocial);
      formData.append('email', email);
      formData.append('whatsapp', whatsapp);
      console.log(formData);
   


      const respuesta = await axios.post("http://localhost:4000/guardarInmueble", formData);
      
      
      console.log("Respuesta del servidor:", respuesta.data);

      setEnviado(true);
      setMensaje("¡Formulario enviado con éxito!"); // Handle the response as needed
    } catch (error) {
      console.error('Error al guardar el inmueble:', error);
    }
  };

  return (
    
    <div  className="flex flex-col h-full items-center justify-center mb-24" >
      <div enctype="multipart/form-data" className="grid bg-white rounded-lg mt-40 shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold mt-7 md:text-2xl text-xl ">
              Publicar Propiedad (usuarios)
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
           Titulo
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            type="text"
            placeholder="Titulo"
            onChange={(e)=> setTitulo(e.target.value)}
          />
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Ciudad
            </label>
            <select  onChange={(e)=> setCiudad(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option >Ciudad</option>
              <option value={'Rosario'}> Rosario</option>
              <option value={'La Plata'}> La Plata</option>
              <option value={'Capital federal'}>Capital Federal</option>
              
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Tipo de inmueble
            </label>
            <select  onChange={(e)=> setTipoInmueble(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option value={'Departamento'}> Departamento</option>
              <option value={'duplex'}> Duplex</option>
              <option value={'Cabaña'}> Cabaña</option>
              <option value={'Casa'}> Casa</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Presentacion
            </label>
            <select  onChange={(e)=> setPresentacion(e.target.value)}className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option >Presentacion</option>
              <option value={2}>2</option>
              <option value={0}>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Cuartos
            </label>
            <select onChange={(e)=> setCuartos(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option >Cuartos</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Baños
            </label>
            <select onChange={(e)=> setBanos(e.target.value)}  className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option > Baños</option>
              <option value={1}> 1</option>
              <option value={2}> 2</option>
              <option value={0}>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Garage
            </label>
            <select onChange={(e)=> setGarage(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option > Garage</option>
              <option value={1}> 1</option>
              <option value={2}> 2</option>
              <option value={0}>no tiene</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Precio u$a
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Precio u$a"
              onChange={(e)=> setPrecios(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Condominio u$a
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Condominio u$a"
              onChange={(e)=> setCondominio(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Impuestos u$a
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Impuestos u$a"
              onChange={(e)=> setInpuesto(e.target.value)}
            />
          </div>
        </div>
      

        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-center">
          <div>
            <label htmlFor="lanzamientos" className="">
              <input
                type="checkbox"
                id="lanzamientos"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4 "
                onChange={(e)=> setLanzamientos(e.target.checked ? 1 : 0 )}
              />
              Lanzamientos
            </label>
          </div>

          <div>
            <label htmlFor="nuevos" className="">
              <input
                type="checkbox"
                id="nuevos"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
                onChange={(e)=> setAmuebladas (e.target.checked ? 1 : 0 )}
              />
              Amuebladas
            </label>
          </div>

          <div>
            <label htmlFor="nuevos" className="">
              <input
                type="checkbox"
                id="alquilados"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
                onChange={(e)=> setNuevos(e.target.checked ? 1 : 0 )}
              />
              Nuevos
            </label>
          </div>

          <div>
            <label htmlFor="calidadSuperior" className="">
              <input
                type="checkbox"
                id="remember1"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
                onChange={(e)=> setCalidadSuperior(e.target.checked ? 1 : 0 )}
              />
              Calidad Superior
            </label>
          </div>

          <div>
            <label htmlFor="financiado" className="">
              <input
                type="checkbox"
                id="remember2"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
                onChange={(e)=> setFinanciado(e.target.checked ? 1 : 0 )}
              />
              Financiado
            </label>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Area Total m2
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Area Total m2"
              onChange={(e)=> setAreaTotal(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Antiguedad Años
            </label>
            <select onChange={(e)=> setAntiguedad(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
            <option> Antiguedad</option>
              <option value={5}> menos de 5 años</option>
              <option value={9}> menos de 10 años</option>
              <option value={15}>mas de 10 años</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              caracteristicas adicionales
            </label>
            <select onChange={(e)=> setCaracteristicasAdicionales(e.target.value)} className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
            <option> Caracteristicas adicionales</option>
               <option value={1}> 1</option>
              <option value={2}> 2</option>
              <option value={0}>no tiene</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            descripcion adicional
          </label>
          <textarea
            className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            type="text"
            placeholder="descripcion adicional"
            onChange={(e)=> setDescripcionAdicional(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Logo
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          type="file"
          onChange={handleLogoFileChange}
        />
          </div>
          <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Foto Destacada
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          type="file"
          onChange={handleFotosDestacadaFileChange}
        />
          </div>
          <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Galeria de Fotos
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          type="file"
          multiple
          onChange={handleGaleriaFotosFilesChange}
        />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
          Video
        </label>
        <input
          className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          type="file"
          onChange={handleVideosFileChange}
        />
          </div>
        
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Web Inmueble
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Web Inmueble"
              onChange={(e)=> setVerInmueble(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Redes Sociales
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Redes Sociales"
              onChange={(e)=> setRedSocial(e.target.value)}
            />
          </div>
        </div>
     
        <div className="flex">
          <h3 className="text-gray-600 font-bold mt-7 md:text-l text-md ml-7">
            informacion de contacto (propietarios)
          </h3>
        </div>


        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              e-mail
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="email"
              placeholder="email"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              whatsapp
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="phone"
              placeholder="whatsapp"
              onChange={(e)=> setWhatsapp(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Redes Sociales
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Redes Sociales"
              onChange={(e)=> setRedSocial(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
          <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Cancel
          </button>
          <button type="button" onClick={manejarEnvioFormulario} className="w-auto bg-orange-500 hover:bg-orange-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
    Publicar
  </button>
        </div>
       
      </div>
      <div className="flex justify-center w-[20%]">
      <Link
          to="/"
          type="button"
          className=" flex justify-center  inlineBlock rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
         
        >
          Volver
        </Link>
      </div>

      <div className='text-orange-500'>
      {mensaje}
      </div>
     
    </div>
  );
};
export default InmuebleFormPersona;

