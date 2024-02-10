const FormConstrutora = () => {
  return (
    <div className="bg-white dark:bg-orange-700 transition-colors duration-300">
      <div className="h-[15vh]"></div>
    <div className="container mx-auto p-4 ">
    <div className="bg-white dark:bg-orange-700 shadow rounded-lg p-6 ">
<h1 className="text-xl font-semibold mb-4 text-black-700 dark:text-white ">
          Constructora
        </h1>
        <p className="text-black-700 dark:text-orange-700 mb-6">
          Utiliza una dirección permanente donde puedas recibir correo.
        </p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
            <input
              type="text"
              placeholder="Instagram"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Facebook"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none" 
            />
            <input
              type="text"
              placeholder="CNPJ"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Creci"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Ciudad"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Endereco"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Descripcion"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="phone"
              placeholder="Telefono"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Inmobiliaria"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="web"
              className="border p-2 rounded w-full border-orange-600 focus:outline-none"
            />
            <div>
              <p className="mb-3 text-black-700 text-md">Subir Imagenes</p>
              <input
                type="file"
                placeholder="subir imagenes"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="remember" className="">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-slate-200 accent-orange-600 "
              />
              Autorizo a mostrar sus datos de contaro en las redes
            </label>
          </div>
          <button
            type="button"
            id="theme-toggle"
            className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-300 focus:outline-none transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
    <div className="flex justify-center mb-[80px]">
               <a
          href="/FormUsuario"
          type="button"
          className=" flex justify-center  inline-block rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Volver
        </a>
      </div>
  </div>
  )
}
export default FormConstrutora