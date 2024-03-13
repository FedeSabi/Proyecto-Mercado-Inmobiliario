import { pool } from "../src/db.js"; //importar pool de db.js

//tabla corredor se da de alta de usuario registrado en la BD

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