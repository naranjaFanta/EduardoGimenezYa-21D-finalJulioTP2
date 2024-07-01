// si o si se importa express en rutas
import express from 'express'
// si o si importar el controlador para luego usarlo en la ruta y llamar al controlador.get/path
import controller from '../controller/controller.js'

//crear route y exportarlo abajo
const route = express.Router()

// declaro las rutas get,puth path


route.get("/verDatos",controller.getDatos)
route.post("/agregarMedicion",controller.postAgregarMedicion)
route.get("/medicion/:id", controller.getMedicionById); 
route.get("/estadisticas", controller.getEstadisticas);
// aca exporto
export default route