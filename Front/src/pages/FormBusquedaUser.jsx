const FormBusquedaUser = () => {
  return (
    <div className="flex h-full items-center justify-center mt-4 mb-24">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold mt-7 md:text-2xl text-xl ">
              Publicar Propiedad (propietarios)
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            caracteristicas de Ubicacion del Inmueble
          </label>
          <textarea
            className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            type="text"
            placeholder="caracteristicas de Ubicacion del Inmueble"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Ciudad
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> Rosario</option>
              <option> La Plata</option>
              <option>Capital Federal</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Tipo de inmueble
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> Departamento</option>
              <option> Duplex</option>
              <option> Cabaña</option>
              <option> Casa</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Presentacion
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option>1</option>
              <option>2</option>
              <option>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Cuartos
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Baños
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Garage
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Precio Minimo
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Precio Minimo"
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Precio Maximo
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Condominio u$a"
            />
          </div>
         
        </div>
        {/*empieza checkbox */}

        <div className="grid grid-cols-1 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-center">
          <div>
            <label htmlFor="lanzamientos" className="">
              <input
                type="checkbox"
                id="lanzamientos"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4 "
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
              />
              Amuebladas
            </label>
          </div>
          <div>
            <label htmlFor="alquilados" className="">
              <input
                type="checkbox"
                id="alquilados"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
              />
              Nuevos
            </label>
          </div>
          <div>
            <label htmlFor="remember1" className="">
              <input
                type="checkbox"
                id="remember1"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
              />
              Calidad Superior
            </label>
          </div>
          <div>
            <label htmlFor="remember2" className="">
              <input
                type="checkbox"
                id="remember2"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
              />
              Financiado
            </label>
          </div>
        </div>
        {/*area caracteristicas de la propiedad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Area Minima m2
            </label>
            <input
              className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              type="text"
              placeholder="Area minima m2"
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Antiguedad maxima
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> menos de 5 años</option>
              <option> menos de 10 años</option>
              <option>mas de 10 años</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              caracteristicas adicionales
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
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
          />
        </div>
        <div className="grid grid-cols-1 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 justify-center">
          <div>
            <label htmlFor="lanzamientos" className="">
              <input
                type="checkbox"
                id="lanzamientos"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4 "
              />
              Mostrar Unicamente a Inmobiliarias o Constructoras atraves de email
            </label>
          </div>
          <div>
            <label htmlFor="nuevos" className="">
              <input
                type="checkbox"
                id="nuevos"
                className="w-4 h-4 border-slate-200 focus:bg-orange-600  accent-orange-600 mt-4"
              />
              Reservar Ofertas Similares
            </label>
          </div>
          </div>
        
        <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
          <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Cancel
          </button>
          <button className="w-auto bg-orange-500 hover:bg-orange-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Solicitar
          </button>
        </div>
      </div>
    </div>
  )
}
export default FormBusquedaUser