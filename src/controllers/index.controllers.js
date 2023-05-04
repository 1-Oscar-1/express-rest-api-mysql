// Importamos la conexion a la db ---------------------
import { pool } from '../db.js'

export const ping = async (req, res) => {
    // Ejecutamos una sentencia query y como es asincrono usamos una funcion asincrona
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result);
}