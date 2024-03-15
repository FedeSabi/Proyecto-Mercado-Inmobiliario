import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmCorredor = () => {
  const [corredores, setCorredores] = useState([]);
  const [actualizarTelefono, setActualizarTelefono] = useState("");
  const [actualizarEmail, setActualizarEmail] = useState("");
  const [actualizarDireccionWeb, setActualizarDireccionWeb] = useState("");
  const [actualizarCuit, setActualizarCuit] = useState("");
  const [actualizarMatricula_corredor, setActualizarMatricula_corredor] =
    useState("");
  const [actualizarCiudad, setActuliazarCiudad] = useState("");
  const [actualizarDireccion, setActualizarDireccion] = useState("");
  const [actualizarDescripcion, setActualizarDescripcion] = useState("");
  const [actualizarNombre_completo, setActualizarNombre_completo] =
    useState("");
  //const [actualizarImagenes, setActualizarImagenes] = useState("")
  const [idCorredorActualizar, setIdCorredorActualizar] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(true); //muestra y oculta formulario de modificaciones

  //funcion para modificar usuario de la base de datos
  const handleUpdateClick = async (id) => {
    console.log(handleUpdateClick);
    try {
      setIdCorredorActualizar(id);

      const updateCorredor = {
        telefono: actualizarTelefono,
        email: actualizarEmail,
        direccion_web: actualizarDireccionWeb,
        cuit: actualizarCuit,
        matricula_corredor: actualizarMatricula_corredor,
        ciudad: actualizarCiudad,
        direccion: actualizarDireccion,
        descripcion: actualizarDescripcion,
        nombre_completo: actualizarNombre_completo,
      };
      await axios.put(`http://localhost:4000/corredor/${idCorredorActualizar}`, updateCorredor); // poner direccion de back para modificar la BD

      setIdCorredorActualizar(null);
      setMostrarFormulario(true);

      setActualizarTelefono("");
      setActualizarEmail("");
      setActualizarDireccionWeb("");
      setActualizarCuit("");
      setActualizarMatricula_corredor("");
      setActualizarDireccion("");
      setActuliazarCiudad("");
      setActualizarDescripcion("");
      setActualizarNombre_completo("");
    } catch (error) {
      console.error("error al preparar o realizar la actualizacion", error);
    }
  };

  //funcion para obtener los datos de la base de datos corredores
  useEffect(() => {
    const obtenerCorredores = async () => {
      try {
        const response = await axios.get("http://localhost:4000/corredor");
        setCorredores(response.data); //establece los corredores en el estado
      } catch (error) {
        console.error("error al obtener corredores", error);
      }
    };
    //llamada a la funcion para obtener los corredores al xargar el componente y se deja el array vacio para que lo cargue una sola vez
    obtenerCorredores();
  }, []);

  //funcion para eliminar un corredor de la base de datos
  const eliminarCorredor = async (id) => {
    console.log("Id del corredor a eliminar:", id) //verificar el valor de id
    if (!id) {
      console.error("ID del corredor es undefined")
      return
    }
    try {
      await axios.delete(`http://localhost:4000/corredor/${id}`)
      setCorredores(corredores.filter((corredor) => corredor. id !==id))
    } catch (error) {
      console.error("error al eliminar corredor: ", error)
    }
  }

  return (
    <div className="pt-[119px] pb-10 ">
      {mostrarFormulario && (
        <table className=" min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group ">
            <tr className="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                id
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Nombre Completo
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Email
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Telefono
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Direccion Web
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Cuit
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Matricula Corredor
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Direccion
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Ciudad
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                Descripcion
              </th>
              <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
                Modificaciones
              </th>
            </tr>
          </thead>
          <tbody className=" block md:table-row-group">
            {corredores.map((corredor) => (
              <tr
                key={corredor.id}
                className="bg-gray-100 border border-grey-500 md:border-none block md:table-row"
              >
               <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.id}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.nombre_completo}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.email}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.telefono}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.direccion_web}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.cuit}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.matricula_corredor}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.direccion}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.ciudad}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold"></span>
                  {corredor.descripcion}
                </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Actions
                  </span>
                  <button className="flex mb-2 justify-items-center hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-1 border border-red-500 rounded"
                  onClick={() => {
                    eliminarCorredor(corredor.id)
                  }}>
                    Delete
                  </button>
                  <button
                    className="flex mb-2 hover:bg-green-500 hover:text-white text-green-500 font-bold py-1 px-1 border border-green-500 rounded"
                    onClick={() => {
                      handleUpdateClick(corredor.id); //entramos a la bd corredor atarves del id del corredor seleccionado
                      setMostrarFormulario(false); // le decimos que no muestre el formulario de modificar corredor
                    }}
                  >
                    Modificar
                  </button>
                  <Link to={"/FormCorretor"}>
                  <button className="flex hover:bg-gray-500 hover:text-white text-gray-500 font-bold py-1 px-1 border border-gray-500 rounded">
                    Agregar
                  </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!mostrarFormulario && idCorredorActualizar && (
        <div className="flex-col p-4 justify-center">
          <h2 className="mb-[26px] flex h-[40px] w-[150px] items-center justify-center rounded-lg bg-orange-500 text-white">
            Modificar Corredor
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateClick(idCorredorActualizar);
            }}
            className="flex flex-col"
          >
            <label className="mb-2">Telefono:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarTelefono}
              onChange={(e) => setActualizarTelefono(e.target.value)}
            />
            <label className="mb-2">Email:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarEmail}
              onChange={(e) => setActualizarEmail(e.target.value)}
            />
            <label className="mb-2">Direccion Web:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarDireccionWeb}
              onChange={(e) => setActualizarDireccionWeb(e.target.value)}
            />
            <label className="mb-2">Cuit:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarCuit}
              onChange={(e) => setActualizarCuit(e.target.value)}
            />
            <label className="mb-2">Matricula Corredor:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarMatricula_corredor}
              onChange={(e) => setActualizarMatricula_corredor(e.target.value)}
            />
            <label className="mb-2">Direccion:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarDireccion}
              onChange={(e) => setActualizarDireccion(e.target.value)}
            />
            <label className="mb-2">Ciudad:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarCiudad}
              onChange={(e) => setActuliazarCiudad(e.target.value)}
            />
            <label className="mb-2">Nombre Completo:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarNombre_completo}
              onChange={(e) => setActualizarNombre_completo(e.target.value)}
            />
            <label className="mb-2">Descripcion:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarDescripcion}
              onChange={(e) => setActualizarDescripcion(e.target.value)}
            />
            <button
              className="mt-[10px] h-10 w-[20%] rounded-lg bg-orange-500 text-white"
              type="submit"
            >
              Guardar cambios
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default AdmCorredor;
