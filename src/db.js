// Debemos importar el modulo de mysql2
import { createPool } from 'mysql2/promise';

// Importamos el archivo de config
import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'

// Usamos la funcion createPool para pasar los parametros de la conexion como un objeto
// Exportamos el resultado de llamar a la funcion
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})