import { Link } from "react-router-dom";

const CorredorPass = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center mt-44">
        <label className="font-light text-4xl mb-4">
          Mercado<span className="font-bold text-orange-400">Inmobiliario</span>
        </label>

        <p className="text-right mb-4 text-xl font-bold">
          Ingrese a una Seccion
        </p>
        <Link
          to="/FormBusquedaUser"
          className="block w-full h-12 rounded-lg bg-orange-500 text-gray-200 uppercase font-semibold hover:bg-orange-700 transition mb-4 text-center"
          style={{ lineHeight: "2.5rem" }}
        >
          publicar Inmuebles
        </Link>
        <Link
          to="/CardsPropiedades"
          className="block w-full h-12 rounded-lg bg-orange-600 text-gray-200 uppercase font-semibold hover:bg-orange-800  transition mb-4 text-center"
          style={{ lineHeight: "2.5rem" }}
        >
          Busqueda de propiedades
        </Link>
      
      </div>
    </div>
  );
};
export default CorredorPass;
