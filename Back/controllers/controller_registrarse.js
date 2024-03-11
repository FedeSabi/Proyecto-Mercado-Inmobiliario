import { pool } from "../src/db.js";

/// tabla registrarse autenticacion de usuario registrado en la BD ///
export const user_registrarse = async (req, res) => {
  //se modifico y se envio router al routes_registrarse
  const persona = req.body;
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "INSERT INTO registrarse SET ?",
      [persona]
    );
    connection.release();
    console.log("Usuario registrado con éxito");
    res.send("Usuario registrado con éxito");
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};

/// obtener todos los usuarios registrados en la base de datos  ///
export const get_registrarse = async (req, res) => {
  try {
    //establece la conexion con la base de datos
    const connection = await pool.getConnection();

    //ejecuta la consulta SQL para seleccionar todos los usuarios
    const [results, fields] = await connection.query(
      "SELECT * FROM  registrarse"
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
/*
/// editar un usuario de la base de datos  ///
export const edit_registrarse = async (req, res) => {
try{
  const { nombre, apellido, email, telefono, id } = req.body
  const [item] = await user_registrarse(id)
  if (!item) {
    return res.status(200).json({ message: "No fue encontrado un usuario con este ID"})
  }
  await connection.execute(`UPDATE registrarse SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE registrarse_id = ?;`, [nombre, apellido, email, telefono, id])
  return res.status(200).json(item)
}catch (error) {
  return res.status(200).json({ message: `Ocurrio un error: ${error.message}`})
}
}*/

export const edit_registrarse = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    // Crea la conexión a la base de datos utilizando el pool
    const connection = await pool.getConnection();

    // Validar que el ID sea un número entero
    const id = Number(req.params.id, 10);

    if (isNaN(id)) {
      res.status(400).json({ message: "ID inválido" });
      return;
    }

    // Crea la consulta SQL para actualizar los datos del usuario
    const query =
      "UPDATE registrarse SET nombre = ?, apellido = ?, email = ?, telefono = ? WHERE id = ?";
    const values = [
      updateData.nombre,
      updateData.apellido,
      updateData.email,
      updateData.telefono,
      id,
    ];

    // Ejecuta la consulta SQL
    const [result] = await connection.query(query, values);
    connection.release(); // Libera la conexión

    if (result.affectedRows > 0) {
      res.json({ message: "Usuario actualizado correctamente" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

///  borrar un usuario de la base de datos ///
export const delete_registrarse = async (req, res) => {
  const { id } = req.params; // Obtener el id del usuario a eliminar desde los parámetros de la solicitud

  // Verificar si el ID es undefined o nulo
  if (!id) {
    console.error("ID del usuario a eliminar no válido");
    return res.status(400).send("ID del usuario a eliminar no válido");
  }

  try {
    // Establecer la conexión con la base de datos
    const connection = await pool.getConnection();

    // Ejecutar la consulta SQL para eliminar el usuario con el id proporcionado
    const [result] = await connection.query(
      "DELETE FROM registrarse WHERE id = ?",
      [id]
    );
    // Ejecutar la consulta SQL para seleccionar todos los usuarios actualizados
    const [results, fields] = await connection.query(
      "SELECT * FROM registrarse"
    );

    // Liberar la conexión con la base de datos
    connection.release();

    // Enviar una respuesta al cliente con la lista actualizada de usuarios
    res.json(results);
  } catch (error) {
    // Manejar los errores en caso de que ocurran durante la ejecución de la consulta
    console.error("Error al eliminar usuario:", error);
    res.status(500).send("Error interno del servidor");
  }
};
