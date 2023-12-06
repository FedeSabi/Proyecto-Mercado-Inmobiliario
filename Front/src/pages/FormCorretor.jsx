
const FormCorretor = () => {
  return (
    <div className="bg-white dark:bg-orange-700 transition-colors duration-300">
      <div className="container mx-auto p-4">
        <div className="bg-white dark:bg-orange-700 shadow rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4 text-black-700 dark:text-white">
            Construtora
          </h1>
          <p className="text-black-700 dark:text-orange-700 mb-6">
            Utiliza una dirección permanente donde puedas recibir correo.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
    </div>
  );
};
export default FormCorretor;

