import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


const AdmCorredor = () => {
const [corredores, setCorredores] = useState([])
const [actualizarTelefono, setActualizarTelefono] = useState("")
const [actualizarEmail, setActualizarEmail] = useState("")
const [actualizarPassword, setActualizarPassword] = useState("")
const [actualizarDireccionWeb, setActualizarDireccionWeb] = useState("")
const [actualizarCuit, setActualizarCuit] = useState("")
const [actualizarMatricula_corredor, setActualizarMatricula_corredor] = useState("")
const [actualizarCiudad, setActuliazarCiudad] = useState("")
const [actualizarDireccion, setActualizarDireccion] = useState("")
const [actualizarDescripcion, setActualizarDescripcion] = useState("")
const [actualizarNombre_completo, setNombre_completo] = useState("")
const [actualizarImagenes, setActualizarImagenes] = useState("")
const [mostrarFormulario, setMostrarFormulario] = useState(true) //muestra y oculta formulario de modificaciones

//funcion para obtener los datos de la base de datos corredores
useEffect(() => {
    const obtenerCorredores = async () => {
        try{
            const response = await axios.get("http://localhost:4000/corredor")
            setCorredores(response.data)//establece los corredores en el estado 
        } catch (error) {
            console.error("error al obtener corredores", error)
        }
    }
    //llamada a la funcion para obtener los corredores al xargar el componente y se deja el array vacio para que lo cargue una sola vez
    obtenerCorredores()
}, [])


  return (
    <div className="pt-[119px] pb-10 ">
        <table className=" min-w-full border-collapse block md:table">
            <thead className="block md:table-header-group ">
                <tr className="border border-gray-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Nombre Completo</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Telefono</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Direccion Web</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Cuit</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Matricula Corredor</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Direccion</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ciudad</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Descripcion</th>
                    <th className="bg-orange-400 p-2 text-white font-bold md:border md:border-grey-500 text-center block md:table-cell">Modificaciones</th>
                </tr>
            </thead>
            <tbody className=" block md:table-row-group">
            {corredores.map((corredor) => 
                <tr key={corredor.id} className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.nombre_completo}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.email}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.telefono}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.direccion_web}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.cuit}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.matricula_corredor}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.direccion}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.ciudad}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{corredor.descripcion}</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className="flex mb-2 justify-items-center hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-1 border border-red-500 rounded">Delete</button>
                        <button className="flex mb-2 hover:bg-green-500 hover:text-white text-green-500 font-bold py-1 px-1 border border-green-500 rounded">Modificar</button>
                        <button className="flex hover:bg-gray-500 hover:text-white text-gray-500 font-bold py-1 px-1 border border-gray-500 rounded">Agregar</button>
                    </td>
                </tr>
               )}
            </tbody>
        </table>
        </div>
  )
}
export default AdmCorredor