import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FormConstrutora = () => {
  const [constructora, setConstructora] = useState({
    telefono: "",
    email: "",
    password: "",
    direccion_web: "",
    cuit: "",
    matricula_constructora: "",
    ciudad: "",
    direccion: "",
    descripcion: "",
    nombre_empresa: "",
    imagenes: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setConstructora({
      ...constructora,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/constructora", constructora)
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
            Constructora
          </h1>
          <p className="text-black-700 dark:text-orange-700 mb-6">
            Utiliza una dirección permanente donde puedas recibir correo.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.email}
                onChange={inputChange}
              />
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.password}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Cuit"
                name="cuit"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.cuit}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Matricula_constructora"
                name="matricula_constructora"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.matricula_constructora}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Ciudad"
                name="ciudad"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.ciudad}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Direccion"
                name="direccion"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.direccion}
                onChange={inputChange}
              />

              <input
                type="text"
                placeholder="Descripcion"
                name="descripcion"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.descripcion}
                onChange={inputChange}
              />
              <input
                type="phone"
                placeholder="Telefono"
                name="telefono"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.telefono}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Nombre Empresa"
                name="nombre_empresa"
                className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                value={constructora.nombre_empresa}
                onChange={inputChange}
              />
              <input
                type="text"
                placeholder="Direccion_web"
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
                Autorizo a mostrar sus datos de contratro en las redes
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
        <Link to={'/'}
          className=" flex justify-center inlineBlock rounded bg-orange-500 mt-[50px] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

        >
          Volver
        </Link>
      </div>
    </div>
  );
};
export default FormConstrutora;
