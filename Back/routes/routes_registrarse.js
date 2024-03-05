import express  from "express";
import { user_registrarse } from '../controllers/controller_registrarse.js'

const router = express.Router()

// registro nuevo de usuario en BD
router.post("/registrarse", user_registrarse)



