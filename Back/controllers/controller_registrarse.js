import { pool } from "../src/db.js";

//tabla registrarse autenticacion de usuario registrado en la BD
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

// obtener todos los usuarios registrados en la base de datos
export const get_registrarse = async (req, res) => {
  try{
    //establece la conexion con la base de datos
    const connection = await pool.getConnection()

    //ejecuta la consulta SQL para seleccionar todos los usuarios
    const [results, fields] = await connection.query("SELECT * FROM  registrarse")

    //libera la conexion con la base de datos
    connection.release()

    //devuelve los resultados obtenidos como respuesta al cliente en formato JSON
    res.json(results)
  } catch (error){
    //maneja los errores en caso de que ocurran durante la ejecucion de la consulta 
  console.error("error al obtener usuarios: ", error)
  res.status(500).send("error interno del servidor")
  }
}

//editar un usuario de la base de datos

// Eliminar un usuario de la base de datos "registrarse"
export const delete_registrarse = async (req, res) => {
  const { id } = req.params;
  try {
    // Construye la consulta SQL para eliminar el usuario
    const sql = `DELETE FROM registrarse WHERE id = ?`;
    const values = [id];

    // Ejecuta la consulta SQL
    const [result] = await pool.query(sql, values);

    // Verifica si el usuario fue eliminado correctamente
    if (result.affectedRows > 0) {
      res.json({ message: "Usuario eliminado exitosamente" });
    } else {
      // Si el usuario no se encontró, devuelve un mensaje de error
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
