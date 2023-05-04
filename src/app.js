// Importamos express
// const express = require('express');
import express from 'express';

// Importamos las rutas
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

// Creamos el servidor --------------------------------
const app = express();

// Hacemos que el servidor entienda el JSON
app.use(express.json());

// Usamos las rutas -----------------------------------
app.use(indexRoutes);
app.use('/api', employeesRoutes);

// Creamos un 404 -------------------------------------
app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    });
});

export default app;