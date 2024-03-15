import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const AdmConstructora = () => {

const [constructoras, setConstructoras] = useState ([])
const [actualizarTelefono, setActualizarTelefono] = useState("")
const [actualizarEmail, setActualizarEmail] = useState("")
const [actualizarCuit, setActualizarcuit] = useState("")
const [actualizarMatriculaConstructora, setActualizarMatriculaConstructora] = useState("")
const [actualizarCiudad, setActualizarCiudad] = useState("")
const [actualidadDireccion, setActualizarDireccion] = useState("")
const [actualizarDescripcion, setActualizarDescripcion] = useState("")
const [actualizarNombreEmpresa, setActualizarNombreEmpresa] = useState("")
const [actualizarDireccionWeb, setActualizarDireccionWeb] = useState("")
const [idActualizarConstructora, setIdActualizarConstructora] = useState(null)
const [mostrarFormulario, setMostrarFormulario] = useState(true)

//funcion para modificar constructora de la base de datos
const handleUpdateClick = async (id) => {
    console.log(handleUpdateClick)
    try {
        setIdActualizarConstructora(id)

        const updateConstructora={
            Telefono: actualizarTelefono,
            email: actualizarEmail,
            cuit: actualizarCuit,
            matricula_constructora: actualizarMatriculaConstructora,
            ciudad: actualizarCiudad,
            direccion: actualidadDireccion,
            descripcion: actualizarDescripcion,
            nombre_empresa: actualizarNombreEmpresa,
            direccion_web: actualizarDireccionWeb
        }
        await axios.put(`{http://localhost:4000/constructora/$[idActualizarConstructora}`, updateConstructora)

        setIdActualizarConstructora(null)
        setMostrarFormulario(true)

        setActualizarTelefono("");
        setActualizarEmail("");
        setActualizarcuit("");
        setActualizarMatriculaConstructora("");
        setActualizarCiudad("");
        setActualizarDireccion("");
        setActualizarDescripcion("");
        setActualizarNombreEmpresa("");
        setActualizarDireccionWeb("");
    } catch (error) {
        console.error("Error al preparar o realizar la actualizacion", error)
    }
}

//funcion para obtener los datos de la base de datos contructora
useEffect(() => {
    const obtenerConstructora = async () => {
        try {
            const response = await axios.get("http://localhost:4000/constructora");
            setConstructoras(response.data)
        } catch (error) {
            console.error("error al obtener constructora", error)
        }
    }
    obtenerConstructora()
}, [])

//funcion para eliminar una constructora de la base de datos
const eliminarConstructora = async (id) => {
    console.log("ID del constructora a eliminar: ", id)
    if (!id) {
        console.error("ID de la constructora es undefined")
        return
    } try {
        await axios.delete(`http://localhost:4000/constructora/${id}`)
        setConstructoras(constructoras.filter((constructora) => constructora. id !==id))
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
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Id</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Telefono</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Cuit</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Matricula Constructora</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ciudad</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Direccion</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Descripcion</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nombre Empresa</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Direccion Web</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody className=" block md:table-row-group">
            {constructoras.map((constructora) => (
                <tr key={constructora.id} className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.id}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.telefono}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.cuit}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.matricula_constructora}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.ciudad}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.direccion}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.descripcion}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.nombre_empresa}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{constructora.direccion_web}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span> 
                        <button className="flex mb-2 justify-items-center hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-1 border border-red-500 rounded"
                        onClick={() => {
                            eliminarConstructora(constructora.id)
                        }}>Delete</button>
                        <button className="flex mb-2 hover:bg-green-500 hover:text-white text-green-500 font-bold py-1 px-1 border border-green-500 rounded"
                        onClick={() => {
                            handleUpdateClick(constructora.id)
                            setMostrarFormulario(false)
                        }}>Modificar</button>
                        <Link to={"/FormConstrutora"}>
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
        {!mostrarFormulario && idActualizarConstructora && (
            <div className="flex-col p-4 justify-center">
          <h2 className="mb-[26px] flex h-[50px] w-[200px] items-center justify-center rounded-lg bg-orange-500 text-white">
            Modificar Constructora
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateClick(idActualizarConstructora);
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
              onChange={(e) => setActualizarcuit(e.target.value)}
            />
            <label className="mb-2">Matricula Constructora:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarMatriculaConstructora}
              onChange={(e) => setActualizarMatriculaConstructora(e.target.value)}
            />
            <label className="mb-2">Direccion:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualidadDireccion}
              onChange={(e) => setActualizarDireccion(e.target.value)}
            />
            <label className="mb-2">Ciudad:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarCiudad}
              onChange={(e) => setActualizarCiudad(e.target.value)}
            />
            <label className="mb-2">Nombre Empresa:</label>
            <input
              className="h-7 w-1/5 rounded-lg border border-solid border-orange-500 focus:outline-none"
              type="text"
              defaultValue={actualizarNombreEmpresa}
              onChange={(e) => setActualizarNombreEmpresa(e.target.value)}
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
  )
}
export default AdmConstructora