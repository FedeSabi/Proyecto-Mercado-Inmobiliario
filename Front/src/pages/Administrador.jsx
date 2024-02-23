import { Link } from "react-router-dom";

const Administrador = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center mt-40">
        <label className="font-light text-4xl mb-4">Mercado<span className="font-bold text-orange-400">Inmobiliario</span></label>
        
        <p className="text-right mb-4 text-xl font-bold">Ingrese a una Base de Datos</p>
        <Link to='/administrador/AdmLogin' className="block w-full h-12 rounded-lg bg-orange-400 text-gray-200 uppercase font-semibold hover:bg-orange-600 text-gray-100 transition mb-4 text-center" style={{ lineHeight: "2.5rem" }}>
  Base de datos usuarios
</Link>

<Link to='/administrador/AdmLogin' className="block w-full h-12 rounded-lg bg-orange-600 text-gray-200 uppercase font-semibold hover:bg-orange-700 text-gray-100 transition mb-4 text-center" style={{ lineHeight: "2.5rem" }}>
  Base de datos corredores
</Link>
<Link to='/administrador/AdmLogin' className="block w-full h-12 rounded-lg bg-orange-700 text-gray-200 uppercase font-semibold hover:bg-orange-800 text-gray-100 transition mb-4 text-center" style={{ lineHeight: "2.5rem" }}>
  Base de datos Constructoras
</Link>
      </div>
    </div>
  );
}

export default Administrador;

