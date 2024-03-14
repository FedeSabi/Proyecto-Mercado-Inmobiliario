import { pool } from "../src/db.js"; //importar pool de db.js

/// tabla corredor se da de alta de usuario registrado en la BD ///

export const user_corredor = async (req, res) => {
  const corredor = req.body;
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "INSERT INTO corredor SET ?",
      [corredor]
    );
    connection.release();
    console.log("Corredor registrado con éxito");
    res.send("Corredor registrado con éxito");
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

/// obtener todos los usuarios registrados en la base de datos  ///
export const get_corredor = async (req, res) => {
  try {
    //establece la conexion con la base de datos
    const connection = await pool.getConnection();

    //ejecuta la consulta SQL para seleccionar todos los usuarios
    const [results, fields] = await connection.query(
      "SELECT * FROM  corredor"
    );

    //libera la conexion con la base de datos
    connection.release();

    //devuelve los resultados obtenidos como respuesta al cliente en formato JSON
    res.json(results);
  } catch (error) {
    //maneja los errores en caso de que ocurran durante la ejecucion de la consulta
    console.error("error al obtener usuarios: ", error);
    res.status(500).send("error interno del servidor");
  }
};

/// tabla de modificacion de corredores en la base de datos ///

export const edit_corredor = async (req, res) => {
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
    const query = "UPDATE corredor SET telefono = ?, email = ?, cuit = ?, matricula_corredor = ?, ciudad = ?, direccion = ?, descripcion = ?, nombre_completo = ?, direccion_web = ? WHERE id = ?";
    const values = [
      updateData.telefono,
      updateData.email,
      updateData.cuit,
      updateData.matricula_corredor,
      updateData.ciudad,
      updateData.direccion,
      updateData.descripcion,
      updateData.nombre_completo,
      updateData.direccion_web,
      id
    ]
    //ejecuta la consulta SQL
    const [result] = await connection.query(query,values)
    connection.release() // libera la conexion

    if ( result.affectedRows > 0 ) {
      res.json({ message: "Usuario actualizado correctamente"})
    } else {
      res.status(404).json({ message: "usuario no encontrado" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Error al actualizar usuario"})
  }
}

/// borrar un corredor de la base de datos ///
export const delete_corredor = async (req,res) => {
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
    const [result] = await connection.query("DELETE FROM corredor WHERE id = ?", [id]);
    // ejecutar la consulta SQL para seleccionar todos los usuarios actualizados
    const [results,fields] = await connection.query("SELECT * FROM corredor");

    //liberar la conexion con la base de datos
    connection.release();

    //enviar una respuesta al cliente con la lista actualizada de usuarios
    res.json(results);
  } catch (error) {
    // Manejar los errores en caso de que ocurran durante la ejecución de la consulta
    console.error("Error al eliminar corredor:", error)
    res.status(500).send("error interno del servidor")
  }
};