import { pool } from "../src/db.js"; // importar pool de db.js

//tabla constructora se da de alta en usuario registrado en la BD
export const user_constructora = async (req, res) => {
  const corredor = req.body;
  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "INSERT INTO constructora SET ?",
      [corredor]
    );
    connection.release();
    console.log("Constructora registrado con éxito");
    res.send("Constructora registrado con éxito");
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
};
