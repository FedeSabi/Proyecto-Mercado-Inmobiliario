import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/registrarse", async (req, res) => {
  const persona = req.body;

  try {
    const connection = await pool.getConnection();
    const [results, fields] = await connection.query(
      "INSERT INTO registrarse SET ?",
      persona
    );
    connection.release();
    console.log("Usuario registrado con éxito");
    res.send("Usuario registrado con éxito");
  } catch (error) {
    console.error("Error al insertar en la base de datos:", error);
    res.status(500).send("Error interno del servidor");
  }
});

const puerto = PORT;
app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});
