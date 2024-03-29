import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const FormUsuario = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleChange = (e) => {
    setOpcionSeleccionada(e.target.value);
  };

  const [persona, setPersona] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    password: "",
    confirmar_password: "",
    Telefono: "",
  });

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setPersona({
      ...persona,
      [name]: value,
    });
  };

  const onSubmit = () => {
    axios
      .post("http://localhost:4000/registrarse", persona)
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
    <>
      <div className=" h-[100vh] flex flex-colum items-center justify-center flex-col">
        <div className="bg-white dark:bg-orange-700 transition-colors duration-300 ">
          <div className="h-[10%]"></div>
          <div className="container mx-auto p-4 ">
            <div className="bg-white dark:bg-orange-700 shadow rounded-lg p-6">
              <h1 className="text-xl font-semibold mb-4 text-black-700 dark:text-white">
                <b>Si no esta Registrado:</b> registrarse
              </h1>
              <select
                className="bg-white border p-2 rounded w-[49%] border-orange-600 mb-4"
                onChange={handleChange}
                value={opcionSeleccionada}
              >
                <option value="opcion1">Persona</option>
                <option value="opcion2">Corredor</option>
                <option value="opcion3">Constructora</option>
              </select>
              {opcionSeleccionada === "opcion1" && (
                <Navigate to="/FormUsuario" />
              )}
              {opcionSeleccionada === "opcion2" && (
                <Navigate to="/FormCorretor" />
              )}
              {opcionSeleccionada === "opcion3" && (
                <Navigate to="/FormConstrutora" />
              )}

              <p className="text-black-700 dark:text-orange-700 mb-6 focus:outline-none">
                Utiliza una dirección permanente donde puedas recibir correo.
              </p>

              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="Nombre"
                    placeholder="Nombre"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.Nombre}
                    onChange={inputChange}
                  />
                  <input
                    type="text"
                    name="Apellido"
                    placeholder="Apellido"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.Apellido}
                    onChange={inputChange}
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.Email}
                    onChange={inputChange}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.contraseña}
                    onChange={inputChange}
                  />
                  <input
                    type="password"
                    name="confirmar_password"
                    placeholder="Confirmar Contraseña"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.confirmar_contraseña}
                    onChange={inputChange}
                  />
                  <input
                    type="phone"
                    name="Telefono"
                    placeholder="Telefono"
                    className="border p-2 rounded w-full border-orange-600 focus:outline-none"
                    value={persona.Telefono}
                    onChange={inputChange}
                  />
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
        </div>
        <div className="flex justify-center ">
          <Link
            to={"/formLogin"}
            type="button"
            className=" flex justify-center  inlineBlock rounded bg-orange-500 mt-[70px]  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Volver
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormUsuario;
