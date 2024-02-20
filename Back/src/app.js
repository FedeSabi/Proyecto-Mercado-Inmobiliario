// En src/app.js

import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import registrarse from "../routes/routes_registrarse.js"
import corredor from "../routes/routes_corredor.js"
import constructora from "../routes/routes_constructora.js"

const app = express();

app.use(cors());
app.use(express.json());

// enrutador "registrarse" en la ruta principal de la aplicación
app.use("/", registrarse);

// enrutador "corredor" en la ruta principal de la aplicacion
app.use("/", corredor);

// enrutador "corredor" en la ruta principal de la aplicacion
app.use("/", constructora);

const puerto = PORT;
app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});

