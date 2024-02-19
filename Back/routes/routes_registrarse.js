import express from "express";
import { pool } from "../src/db.js";

const router = express.Router();

//tabla registrarse
router.post("/registrarse", async (req, res) => {
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
});

export default router;

