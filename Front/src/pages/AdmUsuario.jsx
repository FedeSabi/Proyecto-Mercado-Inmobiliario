// En el archivo AdmUsuario.jsx

const AdmUsuario = () => {

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
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
                <tr className="bg-gray-100 border border-grey-500 md:border-none block md:table-row">
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                        <button className=" hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-1 px-2 border border-blue-500 rounded">Edit</button>
                        <button className=" ml-2 hover:bg-red-500 hover:text-white text-red-500 font-bold py-1 px-2 border border-red-500 rounded">Delete</button>
                    </td>
                </tr>
                {/* Otras filas */}
            </tbody>
        </table>
        </div>
    );
};

export default AdmUsuario;
