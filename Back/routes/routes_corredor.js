import express from "express";
import {user_corredor, get_corredor, edit_corredor, delete_corredor} from '../controllers/controller_corredor.js'

const router = express.Router();

// registro de corredor en BD
router.post("/corredor", user_corredor)

// obtener listado corredores de BD
router.get('/corredor', get_corredor )

// modificar corredor en la BD
router.put('/corredor/:id', edit_corredor)

// delete corredor en la BD
router.delete('/corredor/:id', delete_corredor)

export default router;
