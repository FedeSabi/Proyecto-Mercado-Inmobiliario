const FormCorretor = () => {
  return (
    <div className="bg-green-100 dark:bg-green-800 transition-colors duration-300">
    <div className="container mx-auto p-4">
      <div className="bg-white dark:bg-green-700 shadow rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-100">Construtora</h1>
        <p className="text-green-600 dark:text-green-300 mb-6">Utiliza una dirección permanente donde puedas recibir correo.</p>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Instagram" className="border p-2 rounded w-full border-green-500" />
            <input type="text" placeholder="Facebook" className="border p-2 rounded w-full  border-green-500 "/>
            <input type="text" placeholder="CNPJ" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="Creci" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="Ciudad" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="Endereco" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="Descripcion" className="border p-2 rounded w-full border-green-500"/>
            <input type="number" placeholder="Telefono" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="Inmobiliaria" className="border p-2 rounded w-full border-green-500"/>
            <input type="text" placeholder="web" className="border p-2 rounded w-full border-green-500"/>
            <div>
            <p className="mb-3 text-green-600 text-md">Subir Imagenes</p>
            <input type="file" placeholder="subir imagenes" className="border p-2 rounded w-full border-green-500" />
            </div>
          </div>
          <button type="button" id="theme-toggle" className="px-4 py-2 rounded bg-green-900 text-white hover:bg-green-500 focus:outline-none transition-colors">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
export default FormCorretor