// server.js
import express from 'express';
import { pool } from "../src/db.js";
import jwt from 'jsonwebtoken';

const router = express.Router();

//tabla login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta a la tabla 1
    const [results1] = await pool.query('SELECT * FROM registrarse WHERE email = ? AND password = ?', [email, password]);
    if (results1.length > 0) {
      // Usuario encontrado en tabla 1
      const token = jwt.sign({ email }, 'secret_key');
      return res.json({ token });
    }

    // Si el usuario no está en la tabla 1, consulta la tabla 2
    const [results2] = await pool.query('SELECT * FROM corredor WHERE email = ? AND password = ?', [email, password]);
    if (results2.length > 0) {
      // Usuario encontrado en tabla 2
      const token = jwt.sign({ email }, 'secret_key');
      return res.json({ token });
    }

    // Si el usuario no está en la tabla 2, consulta la tabla 3
    const [results3] = await pool.query('SELECT * FROM constructora WHERE email = ? AND password = ?', [email, password]);
    if (results3.length > 0) {
      // Usuario encontrado en tabla 3
      const token = jwt.sign({ email }, 'secret_key');
      return res.json({ token });
    }

    // Si el usuario no está en ninguna tabla, devuelve un error de credenciales inválidas
    res.status(401).json({ error: 'Credenciales inválidas' });
  } catch (error) {
    console.error("Error interno del servidor:", error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;