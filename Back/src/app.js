// En src/app.js

import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import registrarse from "../routes/routes_registrarse.js"

const app = express();

app.use(cors());
app.use(express.json());

// Monta el enrutador "registrarse" en la ruta principal de la aplicación
app.use("/", registrarse);

const puerto = PORT;
app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});

