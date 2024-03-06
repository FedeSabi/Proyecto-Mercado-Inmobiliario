import express  from "express";
import { delete_registrarse, user_registrarse, get_registrarse } from '../controllers/controller_registrarse.js'

const router = express.Router()

// registro nuevo de usuario en BD
router.post("/registrarse", user_registrarse)

// delete de usuario en BD
router.delete('/registrarse/:id', delete_registrarse);

// obtener usuarios de BD
router.get('/registrarse', get_registrarse )
export default router;
