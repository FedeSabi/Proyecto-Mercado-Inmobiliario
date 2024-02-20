import express from "express";
import { pool } from "../src/db.js";

const router = express.Router();

//tabla constructora
router.post("/constructora", async (req, res) => {
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
});

export default router;
