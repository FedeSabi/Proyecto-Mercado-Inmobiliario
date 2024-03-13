import express from "express";
import {user_corredor, get_corredor} from '../controllers/controller_corredor.js'

const router = express.Router();

// registro de corredor en BD
router.post("/corredor", user_corredor)

// obtener usuarios de BD
router.get('/corredor', get_corredor )

export default router;
