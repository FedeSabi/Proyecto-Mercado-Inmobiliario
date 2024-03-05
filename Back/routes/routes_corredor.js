import express from "express";
import {user_corredor} from '../controllers/controller_corredor.js'

const router = express.Router();

// registro de corredor en BD
router.post("/corredor", user_corredor)



export default router;
