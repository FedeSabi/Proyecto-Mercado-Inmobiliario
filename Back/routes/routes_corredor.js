import express from "express";
import { pool } from "../src/db.js";

const router = express.Router();

//tabla corredor
router.post("/corredor", async (req, res) => {
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
});

export default router;
