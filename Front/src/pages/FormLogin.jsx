
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const FormLogin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // estado para el mensaje de error

  const inputChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", login);
      if (response && response.data) {
        if (response.data.isAdmin) {
          navigate("/administrador"); // Redirige al componente Administrador
        } else if (response.data.isRegistrarse) {
          //navigate('/componente-registrarse');
          navigate("/UserPass") // Redirige a otro componente
        } else if (response.data.isCorredor) {
          navigate('/CorredorPass'); // Redirige al componente de Corredor
        } else if (response.data.isConstructora) {
          navigate('/ConstructoraPass'); // Redirige al componente de Constructora
        } else {
          setError("Credenciales inválidas");
        }
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  return (
    <div className="flex items-center flex-col mb-10">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-orange-300 mt-40">
        <h1 className="text-4xl font-medium mb-3">Login</h1>
        <p className="text-orange-500">
          Hola, Bienvenido a Mercado Inmobiliario 👋
        </p>

        <div className="my-5">
          <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-black-700 hover:border-orange-400 hover:text-orange-700 hover:shadow transition duration-150">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />{" "}
            <span>Login con Google</span>
          </button>
        </div>
        <form onSubmit={onSubmit} className="my-10">
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-orange-700 pb-2">
                Ingrese su Email
              </p>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                placeholder="Ingrese su Email"
                value={login.email}
                onChange={inputChange}
              />
            </label>
            <label htmlFor="password">
              <p className="font-medium text-orange-700 pb-2">Contraseña</p>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-orange-500 hover:shadow"
                placeholder="Ingrese su Contraseña"
                value={login.password}
                onChange={inputChange}
              />
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 border-slate-200 focus:ring-orange-700 accent-orange-600"
                  />
                  Recordar Contraseña
                </label>
              </div>
              <div>
                <Link to={"#"} className="font-medium text-orange-500">
                  Olvide Contraseña?
                </Link>
              </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-orange-600 hover:bg-orange-400 rounded-lg border-orange-400 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Login</span>
            </button>
            <p className="text-center">
              Todavía no estás Registrado?{" "}
              <Link
                to={"/FormUsuario"}
                className="text-orange-700 font-medium inline-flex space-x-1 items-center"
              >
                <span>Regístrese Ahora </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <Link
          to={"/"}
          className="flex justify-center w-full inlineBlock rounded bg-orange-500 mt-[51px] mb-4 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0 4px 9px -4px #3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2)] dark:shadow-[0 4px 9px -4px rgba(59,113,202,0.5)] dark:hover:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:focus:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)] dark:active:shadow-[0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default FormLogin;
