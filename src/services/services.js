import model from '../model/model.js'


const getDatos = async () => {
    const lista = await model.getDatos()
    return lista
}

const postAgregarMedicion = async (medicionRecibida) => {
    const medicionAAgregar = await model.postAgregarMedicion(medicionRecibida)
    return medicionAAgregar
}

const getMedicionById = async (id) => {
    const medicion = await model.getMedicionById(id);
    return medicion;
  };

  const getEstadisticas = async () => {
    const estadisticas = await model.getEstadisticas();
    return estadisticas;
  };

export default {
    getDatos,
    postAgregarMedicion,
    getMedicionById,
    getEstadisticas
  };