
// server.js

import express from 'express';
import { pool } from "../src/db.js";

const router = express.Router();

//tabla login
router.post('/login', async (req, res) => {
  const { email, password, nombre} = req.body;

  try {
    //consulta a la tabla de administradores
    const [adminResults] = await pool.query('SELECT * FROM administradores WHERE email = ? AND password =?', [email, password])
    if (adminResults.length > 0) {
      // Si es un administrador
      return res.json({ isAdmin: true });
    }

    // Consulta a la tabla 1
    const [results1] = await pool.query('SELECT * FROM registrarse WHERE email = ? AND password = ?', [email, password]);
    console.log(results1)
    if (results1.length > 0) {
      // Usuario encontrado en tabla 1
      return res.json({ isRegistrarse: true,  nombre:results1[0].nombre });
    }

    // Si el usuario no está en la tabla 1, consulta la tabla 2
    const [results2] = await pool.query('SELECT * FROM corredor WHERE email = ? AND password = ?', [email, password]);
    if (results2.length > 0) {
      // Usuario encontrado en tabla 2
      return res.json({ isCorredor: true });
    }

    // Si el usuario no está en la tabla 2, consulta la tabla 3
    const [results3] = await pool.query('SELECT * FROM constructora WHERE email = ? AND password = ?', [email, password]);
    if (results3.length > 0) {
      // Usuario encontrado en tabla 3
      return res.json({ isConstructora: true });
    }

    // Si el usuario no está en ninguna tabla, devuelve un error de credenciales inválidas
    res.status(401).json({ error: 'Credenciales inválidas' });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;
