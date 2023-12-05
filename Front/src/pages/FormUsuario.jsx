const FormUsuario = () => {
  return (
    <>
      <div className="bg-white dark:bg-orange-700 transition-colors duration-300">
        <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-orange-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-black-700 dark:text-white">
              <b>Si no esta Registrado:</b> registrarse
            </h1>
                  <select className="bg-white border p-2 rounded w-[49%] border-orange-600 mb-4">
                  <option value="opcion1">Persona</option>
                  <option value="opcion2">Inmobiliaria</option>
                  <option value="opcion3">Constructora</option>
                </select>
            <p className="text-black-700 dark:text-orange-700 mb-6">
              Utiliza una dirección permanente donde puedas recibir correo.
            </p>
      
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="number"
                  placeholder="WhatsApp"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="password"
                  placeholder="Confirmar Contraseña"
                  className="border p-2 rounded w-full border-orange-600"
                />
                <input
                  type="number"
                  placeholder="Telefono"
                  className="border p-2 rounded w-full border-orange-600"
                />
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
    </>
  );
};

export default FormUsuario;
