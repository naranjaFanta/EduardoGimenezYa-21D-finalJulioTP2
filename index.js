
import express from 'express';


const app = express();
const PORT = 8080;

// Middleware para parsear JSON y datos de URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Inicialización del servidor en el puerto especificado
app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));

// Manejo de errores del servidor
app.on("error", (error) => console.log(`Error !!!!!!!!: ${error}`));
