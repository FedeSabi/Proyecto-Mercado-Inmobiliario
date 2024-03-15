import { pool } from "../src/db.js"; // importar pool de db.js

//tabla constructora se da de alta en usuario registrado en la BD
export const user_constructora = async (req, res) => {
  const constructora = req.body;
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "INSERT INTO constructora SET ?",
      [constructora]
    );
    connection.release();
    console.log("Constructora registrado con éxito");
    res.send("Constructora registrado con éxito");
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

//obtener todas las constructoras registradas en la base de datos
export const get_constructora = async (req, res) => {
  try {
    //establece la conexion con la base de datos
    const connection = await pool.getConnection()

    //ejecuta la consulta SQL para seleccionar todas las constructoras
    const [results, fields] = await connection.query(
      "SELECT * FROM constructora"
    )
    //libera la conexion con la base de datos
    connection.release();
    //devuelve los resultados obtenidos como respuesta al cliente en formato JSON
    res.json(results)
  } catch (error) {
    //maneja los errores en caso de que ocurran durante la ejecucion de la consulta
    console.error("error al obtener constructoras: ", error)
    res.status(500).send("error interno del servidor")
  }
}

/// tabla de modificacion de corredores en la base de datos ///

export const edit_constructora = async (req, res) => {
  const { id } = req.params
  const updateData = req.body
console.log(id)
console.log(updateData)
  try{
    //crea la conexion con la base de datos utilizando el  {pool}
    const connection = await pool.getConnection(); 
    
    //Validar que el ID sea un numero entero
    const id = Number(req.params.id, 10)
    console.log(id)
    if(isNaN(id)){
      res.status(400).json({ message: "ID invalido" })
      return;
    }

    //crea la consulta SQL para actualizar los datos del usuario
    const query = "UPDATE constructora SET telefono = ?, email = ?, cuit = ?, matricula_constructora = ?, ciudad = ?, direccion = ?, descripcion = ?, nombre_empresa = ?, direccion_web = ? WHERE id = ?";
    const values = [
      updateData.telefono,
      updateData.email,
      updateData.cuit,
      updateData.matricula_constructora,
      updateData.ciudad,
      updateData.direccion,
      updateData.descripcion,
      updateData.nombre_empresa,
      updateData.direccion_web,
      id,
    ];
    //ejecuta la consulta SQL
    const [result] = await connection.query(query,values)
    connection.release() // libera la conexion

    if ( result.affectedRows > 0 ) {
      res.json({ message: "Constructora actualizado correctamente"})
    } else {
      res.status(404).json({ message: "Constructora no encontrada" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al actualizar constructora"})
  }
}


/// borrar un corredor de la base de datos ///
export const delete_constructora = async (req,res) => {
  const { id } = req.params; //obtener el id del corredor a eliminar desde los parametros de la solucitud

  //verificar si el ID es undefined o nulo
  if (!id) {
    console.error("ID del usuario a eliminar es valido");
    return res.status(400).send('ID del usuario a eliminar no valido')
  }

  try {
    //establecer la conexion con la base de datos
    const connection = await pool.getConnection();

    // ejecutar la consulta SQL para eliminar el usuario con el id proporcionado
    const [result] = await connection.query("DELETE FROM constructora WHERE id = ?", [id]);
    // ejecutar la consulta SQL para seleccionar todos los usuarios actualizados
    const [results,fields] = await connection.query("SELECT * FROM constructora");

    //liberar la conexion con la base de datos
    connection.release();

    //enviar una respuesta al cliente con la lista actualizada de usuarios
    res.json(results);
  } catch (error) {
    // Manejar los errores en caso de que ocurran durante la ejecución de la consulta
    console.error("Error al eliminar constructora:", error)
    res.status(500).send("error interno del servidor")
  }
};