// Importamos la aplicacion
import app from './app.js'

// Importamos variables de entorno
import { PORT } from './config.js'

// Hacemos que el servdiro escuche ---------------------
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en ${PORT}...`);
})