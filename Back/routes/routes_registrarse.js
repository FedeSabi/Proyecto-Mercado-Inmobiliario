import express  from "express";
import {user_registrarse} from '../controllers/controller_registrarse.js'

const router = express.Router()

router.post("/registrarse", user_registrarse)



export default router;

