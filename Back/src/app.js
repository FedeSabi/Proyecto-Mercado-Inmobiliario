//ultimo probado que no funciona

import express from 'express';
import { pool } from './db.js';
import { PORT } from './config.js';
import cors from 'cors'

const app = express();
// Middleware para permitir solicitudes desde otros dominios
app.use(cors())

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

app.post('/api/login', (req, res) =>{
    const { email, password } = req.body;
    const values = [email, password];
    pool.query("SELECT * FROM login WHERE email = ? AND password = ?", values, (err, result) =>{
        if(err){
            res.status(500).send(err);
        } else {
            if(result.length > 0){
               res.status(200).send({
                "id": result[0].id,
                "email": result[0].email,
                "password": result[0]
               });
            } else {
                res.status(400).send('usuario no existe');
            }
        }
    });
});

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta para manejar las solicitudes de inicio de sesión
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Consultar la base de datos para verificar las credenciales del usuario
        const [user] = await pool.query('SELECT * FROM login WHERE email = ? AND password = ?', [email, password]);

        if (user.length > 0) {
            // Credenciales válidas, iniciar sesión
            res.status(200).json({ message: 'Inicio de sesión exitoso', user: user[0] });
        } else {
            // Credenciales inválidas
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error al iniciar sesión: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta GET para obtener todos los usuarios de la tabla de login
app.get('/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM login');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta GET para realizar un ping al servidor
app.get('/ping', async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hello world" as RESULT`);
        res.json(result[0]);
    } catch (error) {
        console.error('Error en la ruta ping: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta GET para crear un nuevo usuario (solo para fines de demostración)
app.get('/create-user', async (req, res) => {
    try {
        const result = await pool.query('INSERT INTO login(email, password) VALUES ("ramonCalderon@gmail.com", "ramon23454")');
        res.json(result);
    } catch (error) {
        console.error('Error al crear usuario: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


// Puerto en el que se ejecutará el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
