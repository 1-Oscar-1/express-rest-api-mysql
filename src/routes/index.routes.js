// Se importa express ---------------------------------
import { Router } from 'express';

// Se importan los controllers
import { ping } from '../controllers/index.controllers.js';

// Creamos un router ----------------------------------
const router = Router();

// Creamos las rutas ----------------------------------
router.get('/ping', ping);

// Exportamos -----------------------------------------
export default router;