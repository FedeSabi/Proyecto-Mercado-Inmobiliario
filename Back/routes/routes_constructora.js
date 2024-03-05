import express from "express";
import { user_constructora } from "../controllers/controller_constructora.js";
const router = express.Router();

//registro de constructora en BD
router.post("/constructora", user_constructora);

export default router;
