import { useState } from "react";
import axios from "axios";

const FormCorretor = () => {

  const [corredor, setCorredor] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    contraseña: "",
    confirmar_contraseña: "",
    telefono: "",
    instagram: "",
    facebook: "",
    cuit: "",
    matricula_corredor: "",
    ciudad: "",
    direccion: "",
    descripcion: "",
    inmobiliaria: "",
    web:""
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setCorredor({
      ...corredor,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/corredor", corredor)
      .then((response) => {
        if (response && response.data) {
          console.log(response.data);
        } else {
          console.log("Error: No se recibió una respuesta del servidor.");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      });
  };

  return (
    <div className="bg-white dark:bg-orange-700 transition-colors duration-300">
      <div className="h-[15vh]"></div>
      <div className="container mx-auto p-4 ">
      <div className="bg-white dark:bg-orange-700 shadow rounded-lg p-6 ">
  <h1 className="text-xl font-semibold mb-4 text-black-700 dark:text-white ">
            Corredor
          </h1>
          <p className="text-black-700 dark:text-orange-700 mb-6">
            Utiliza una dirección permanente donde puedas recibir correo.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              <input
                type="text"
                name="instagram"
                placeholder="Instagram"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.instagram}
                onChange={inputChange}
              />
              <input
                type="text"
                name="facebook"
                placeholder="Facebook"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none" 
                value={corredor.facebook}
                onChange={inputChange}
              />
              <input
                type="text"
                name="cuit"
                placeholder="Cuit"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.cuit}
                onChange={inputChange}
              />
              <input
                type="text"
                name="matricula_corredor"
                placeholder="Matricula Corredor"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.matricula_corredor}
                onChange={inputChange}
              />
              <input
                type="text"
                name="ciudad"
                placeholder="Ciudad"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.ciudad}
                onChange={inputChange}
              />
              <input
                type="text"
                name="direccion"
                placeholder="Direccion"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.direccion}
                onChange={inputChange}
              />
              <input
                type="text"
                name="descripcion"
                placeholder="Descripcion"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.descripcion}
                onChange={inputChange}
              />
              <input
                type="phone"
                name="telefono"
                placeholder="Telefono"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.telefono}
                onChange={inputChange}
              />
              <input
                type="text"
                name="inmobilaria"
                placeholder="Inmobiliaria"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.inmobiliaria}
                onChange={inputChange}
              />
              <input
                type="text"
                name="web"
                placeholder="web"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={corredor.web}
                onChange={inputChange}
              />
              <div>
                <p className="mb-3 text-black-700 text-md">Subir Imagenes</p>
                <input
                  type="file"
                  name="imagenes"
                  placeholder="subir imagenes"
                  className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                  value={corredor.imagenes}
                  onChange={inputChange}
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
              onClick={onSubmit}
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
          className=" flex justify-center  inlineBlock rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Volver
        </a>
      </div>
    </div>
  );
};
export default FormCorretor;

