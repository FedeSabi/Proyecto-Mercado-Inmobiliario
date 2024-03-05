import express from "express";
import { user_constructora } from "../controllers/controller_constructora.js";
const router = express.Router();

//tabla constructora
router.post("/constructora", user_constructora);

export default router;
