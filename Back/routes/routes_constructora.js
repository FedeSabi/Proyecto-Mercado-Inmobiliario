import express from "express";
import { get_constructora, user_constructora, edit_constructora, delete_constructora } from "../controllers/controller_constructora.js";
const router = express.Router();

//registro de constructora en BD
router.post("/constructora", user_constructora);

// obtener listado constructora de BD
router.get('/constructora', get_constructora )

// modificar constructora de BD
router.put('/constructora/:id', edit_constructora )

//eliminar constructora de BD
router.delete('/constructora/:id', delete_constructora)

export default router;
