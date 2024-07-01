import service from "../services/services.js";

const getDatos = async (req, res) => {
  try {
    const lista = await service.getDatos();
    res.json(lista);
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Lista vacía" });
  }
};

const postAgregarMedicion = async (req, res) => {
  try {
    const { id, temperatura } = req.body;
    const idNumerico = parseInt(id, 10);
    const temperaturaNumerica = parseFloat(temperatura);
    const esIdValido = idNumerico >= 1 && idNumerico <= 5;
    const esTemperaturaValida = temperaturaNumerica >= -20 && temperaturaNumerica <= 100;
    if (!esIdValido && !esTemperaturaValida) {
      res.send("id no válido y temperatura no válida");
    } else if (!esIdValido) {
      res.send("id no válido");
    } else if (!esTemperaturaValida) {
      res.send("temperatura no válida");
    } else {
      const nuevaMedicion = await service.postAgregarMedicion({
        id: idNumerico,
        temperatura: temperaturaNumerica,
      });
      res.json(nuevaMedicion);
    }
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Error al agregar medición" });
  }
};

const getMedicionById = async (req, res) => {
  try {
    const { id } = req.params;
    const idNumerico = parseInt(id, 10);
    const medicion = await service.getMedicionById(idNumerico);
    res.json(medicion);
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Número de sonda incorrecto" });
  }
};
const getEstadisticas = async (req, res) => {
  try {
    const estadisticas = await service.getEstadisticas();
    res.json(estadisticas);
  } catch (error) {
    console.log("error :" + error);
    res.status(401).json({ message: "Error al obtener estadísticas" });
  }
};

export default {
  getDatos,
  postAgregarMedicion,
  getMedicionById,
  getEstadisticas,
};
