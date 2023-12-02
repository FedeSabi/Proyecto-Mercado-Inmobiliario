const FormUsuario = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto p-4">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Construtora</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Use a permanent address where you can receive mail.</p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Instagram" className="border p-2 rounded w-full" />
                <input type="text" placeholder="Facebook" className="border p-2 rounded w-full" />
                <input type="text" placeholder="CNPJ" className="border p-2 rounded w-full" />
                <input type="text" placeholder="Endereco" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email address" className="border p-2 rounded w-full" />
              </div>
              <div className="mb-4">
                <select className="border p-2 rounded w-full">
                  <option>United States</option>
                </select>
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Street address" className="border p-2 rounded w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <input type="text" placeholder="City" className="border p-2 rounded w-full" />
                <input type="text" placeholder="State / Province" className="border p-2 rounded w-full" />
                <input type="text" placeholder="ZIP / Postal code" className="border p-2 rounded w-full" />
              </div>
              <button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-green-900 text-white hover:bg-green-500 focus:outline-none transition-colors">
                Toggle Theme
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default FormUsuario;
  