const InmuebleFormPersona = () => {
  return (
    <div className="flex h-screen items-center justify-center mt-40 mb-64">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold mt-7 md:text-2xl text-xl">
              PUBLICAR UNA PROPIEDAD
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
              Barrio
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Tipo de inmueble
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Presentacion
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
            </select>
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Cuartos
            </label>
            <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
              <option> 1</option>
              <option> 2</option>
              <option>no tiene</option>
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

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Selection
          </label>
          <select className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          
        </div>
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-start">
  <div>
    <label htmlFor="lanzamientos" className="">
      <input
        type="checkbox"
        id="lanzamientos"
        className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mt-4 "
      />
      Lanzamientos
    </label>
  </div>
  <div>
    <label htmlFor="nuevos" className="">
      <input
        type="checkbox"
        id="nuevos"
        className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mt-4"
      />
      Nuevos
    </label>
  </div>
  <div>
    <label htmlFor="alquilados" className="">
      <input
        type="checkbox"
        id="alquilados"
        className="w-4 h-4 border-slate-200 focus:bg-orange-600 mt-4"
      />
      Alquilados
    </label>
  </div>
  <div>
    <label htmlFor="remember1" className="">
      <input
        type="checkbox"
        id="remember1"
        className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mt-4"
      />
      Alto Padrao
    </label>
  </div>
  <div>
    <label htmlFor="remember2" className="">
      <input
        type="checkbox"
        id="remember2"
        className="w-4 h-4 border-slate-200 focus:bg-indigo-600 mt-4"
      />
      Financiado
    </label>
  </div>
</div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Another Input
          </label>
          <input
            className="py-2 px-3 rounded-lg border-2 border-orange-300 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
            type="text"
            placeholder="Another Input"
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
            Upload Photo
          </label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-orange-300 group">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="w-10 h-10 text-orange-400 group-hover:text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="lowercase text-sm text-gray-400 group-hover:text-orange-600 pt-1 tracking-wider">
                  Select a photo
                </p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
          <button className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Cancel
          </button>
          <button className="w-auto bg-orange-500 hover:bg-orange-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default InmuebleFormPersona;
