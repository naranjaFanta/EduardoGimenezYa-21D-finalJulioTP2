import express from 'express'
import controller from '../controller/controller.js'
const route = express.Router()
route.get("/verDatos",controller.getDatos)
route.post("/agregarMedicion",controller.postAgregarMedicion)
route.get("/medicion/:id", controller.getMedicionById); 
route.get("/estadisticas", controller.getEstadisticas);
export default route