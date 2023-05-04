// Se importa express ---------------------------------
import { Router } from 'express';

// Se importan las funciones/controladores ------------
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controllers.js';

// Creamos un router ----------------------------------
const router = Router();

// Creamos las rutas ----------------------------------
router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);

router.post('/employees', createEmployee);

//router.put('/employees/:id', updateEmployee);
router.patch('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

// Exportamos -----------------------------------------
export default router;