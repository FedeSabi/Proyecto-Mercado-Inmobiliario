// En el archivo AdmUsuario.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);

  //const [idRegistrarseEliminar, setIdRegistrarseEliminar] = useState(null)
  //const [nombreActualizar, setNombreActualizar] = useState("");
  //const [apellidoActualizar, setApellidoActualizar] = useState("");
  //const [emailActualizar, setEmailActualizar] = useState("");
  //const [telefonoActualizar, setTelefonoActualizar] = useState("");

  //funcion para obtener los datos de la base de datos
  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:4000/registrarse");
        setUsuarios(response.data); // establece los usuarios en el estado
      } catch (error) {
        console.error("Error al obtener usuarios: ", error);
      }
    };
    //llamada a la funcion para obtener los usuarios al cargar el componente
    obtenerUsuarios();
  }, []);

  // funcion para eliminar un usuario de la base de datos
  const eliminarUsuario = async (id) => {
    console.log("ID del usuario a eliminar:", id); // Verificar el valor de id
    if (!id) {
      console.error("ID del usuario es undefined");
      return;
    }
    try {
      await axios.delete(`http://localhost:4000/registrarse/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario._id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario: ", error);
    }
  };

  return (
    <div className="pt-[119px] pb-10 ">
      <table className=" min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group ">
          <tr className="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Id
            </th>
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Nombre
            </th>
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Apellido
            </th>
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Email
            </th>
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Telefono
            </th>
            <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">
              Modificaciones
            </th>
          </tr>
        </thead>
        <tbody className=" block md:table-row-group">
          {usuarios.map((usuario) => (
            <tr
              key={usuario.id}
              className="bg-gray-100 border border-grey-500 md:border-none block md:table-row"
            >
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                {usuario.id}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                {usuario.nombre}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                {usuario.apellido}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                {usuario.email}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                {usuario.telefono}
              </td>
              <td className="p-2 md:border md:border-grey-500 text-center block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold"></span>
                <button
                  onClick={() => eliminarUsuario(usuario.id)}
                  className="ml-4 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded"
                >
                  Delete
                </button>

                <button className="ml-4 hover:bg-green-500 hover:text-white text-green-500 font-bold py-1 px-2 border border-green-500 rounded">
                  Modificar
                </button>
                <Link to={"/FormUsuario"}>
                  <button className="ml-4 hover:bg-gray-500 hover:text-white text-gray-500 font-bold py-1 px-2 border border-gray-500 rounded">
                    Agregar
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdmUsuario;
