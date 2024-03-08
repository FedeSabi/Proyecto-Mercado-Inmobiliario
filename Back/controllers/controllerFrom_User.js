import {pool} from '../src/db.js'

import { v2 as cloudinary } from 'cloudinary';






          
cloudinary.config({ 
  cloud_name: 'dhdbrjfyc', 
  api_key: '837954229415486', 
  api_secret: 'M8AxP1qEs17uxGTMcSmwGdAz3kc' 
});




export const publicarInmuebles= async (req, res) => {
    try {
    
      const formData = req.body;
      console.log('FormData:', formData);
     
  
      const logoResult = await cloudinary.uploader.upload(req.files['logo'][0].path);
      const fotoDestacadaResult = await cloudinary.uploader.upload(req.files['fotosDestacada'][0].path);
  
     
      const galeriaFotosResults = await cloudinary.uploader.upload(req.files['galeriaFotos'][0].path);
          
       
  
      const videosResult = await cloudinary.uploader.upload(req.files['videos'][0].path);
      const connection = await pool.getConnection();
      const [results] = await connection.query(
        'INSERT INTO publicacionInmueble (titulo, ciudad, tipoInmueble, presentacion, cuartos, banos, garage, precios, condominio, inpuesto, lanzamientos, amuebladas, nuevos, calidadSuperior, financiado, areaTotal, antiguedad, caracteristicasAdicionales, descripcionAdicional, verInmueble, redSocial, email, whatsapp, logo, fotosDestacada, galeriaFotos, videos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,? ,?)',
        [
          formData.titulo,
          formData.ciudad,
          formData.tipoInmueble,
          formData.presentacion,
          formData.cuartos,
          formData.banos,
          formData.garage,
          formData.precios,
          formData.condominio,
          formData.inpuesto,
          formData.lanzamientos,
          formData.amuebladas,
          formData.nuevos,
          formData.calidadSuperior,
          formData.financiado,
          formData.areaTotal,
          formData.antiguedad,
          formData.caracteristicasAdicionales,
          formData.descripcionAdicional,
          formData.verInmueble,
          formData.redSocial,
          formData.email,
          formData.whatsapp,
          logoResult.secure_url,
          fotoDestacadaResult.secure_url,
          galeriaFotosResults.secure_url,
          videosResult.secure_url
        ]
      );
  
      res.json({ success: true, message: 'Inmueble guardado con éxito.' });
    } catch (error) {
      console.error('Error al guardar el inmueble:', error);
      res.status(500).json({ success: false, message: 'Error al procesar la solicitud.' });
    }
  };


 export const inmuebles = async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const [results] = await connection.query('SELECT * FROM publicacionInmueble');
      connection.release();
      res.json(results);
    } catch (error) {
      console.error('Error al obtener datos de la base de datos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  