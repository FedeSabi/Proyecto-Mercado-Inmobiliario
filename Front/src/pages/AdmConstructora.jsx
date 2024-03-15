import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


const AdmConstructora = () => {

const [constructora, setConstructora] = useState ([])
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

//funcion para obtener los datos de la base de datos contructora
useEffect(() => {
    const obtenerContructora = async () =>{
        try {
            const response = await axios.get("http://localhost:4000/constructora")
            setActualizarCiudad(response.data)
        } catch (error) {
            console.error("error al obtener constructora", error)
        }
    }
    obtenerContructora()
}, [])


  return (
    <div className="pt-[119px] pb-10 ">
        <table className=" min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group ">
                <tr className="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
                </tr>
            </thead>
            <tbody className=" block md:table-row-group">
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
              
            </tbody>
        </table>
        </div>
  )
}
export default AdmConstructora