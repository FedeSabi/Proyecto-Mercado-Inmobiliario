import { Router } from "express";
import multer from 'multer';
import path from 'path';

import {inmuebles, publicarInmuebles} from '../controllers/controllerFrom_User.js'

const router = Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  

router.post('/guardarInmueble', upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'fotosDestacada', maxCount: 1 },
    { name: 'galeriaFotos', maxCount: 1 },
    { name: 'videos', maxCount: 1 }
  ]),publicarInmuebles)

  router.get('/inmuebles', inmuebles)


export default router;
