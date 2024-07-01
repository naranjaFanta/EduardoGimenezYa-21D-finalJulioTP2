const mediciones = [
  { id: 1, temperatura: 90 },
  { id: 1, temperatura: 95 },
  { id: 1, temperatura: 85 },
  { id: 2, temperatura: 20 },
  { id: 2, temperatura: 30 },
  { id: 2, temperatura: 10 },
  { id: 3, temperatura: 27 }, // este array harcodeado es para probar el metodo estadistica
  { id: 3, temperatura: 27 }, // obviamente funciona para los demas endpoints. pero no tiene el timestamp
  { id: 4, temperatura: 10 },
  { id: 4, temperatura: 8 },
  { id: 4, temperatura: 12 },
  { id: 5, temperatura: -8 },
  { id: 5, temperatura: -20 },
  { id: 5, temperatura: -10 },
  { id: 5, temperatura: 0 },
];
const sondasPermitidas = [1, 2, 3, 4, 5];

const getDatos = () => {
  if (mediciones.length < 1) {
    throw new Error("lista vacia");
  }
  return mediciones;
};

const postAgregarMedicion = (medicion) => {
  const { id, temperatura } = medicion;

  if (
    !sondasPermitidas.includes(id) &&
    (temperatura < -20 || temperatura > 100)
  ) {
    throw new Error("id no válido y temperatura no válida");
  }
  if (!sondasPermitidas.includes(id)) {
    throw new Error("id no válido");
  }
  if (temperatura < -20 || temperatura > 100) {
    throw new Error("temperatura no válida");
  }

  const nuevaMedicion = { ...medicion, fecha: new Date().toISOString() };
  mediciones.push(nuevaMedicion);
  return nuevaMedicion;
};

const getMedicionById = (id) => {
  const medicion = mediciones.filter((medicion) => medicion.id === id);
  if (medicion.length === 0) {
    throw new Error("Número de sonda incorrecto");
  }
  return medicion;
};

const getEstadisticas = () => {
  const cantidadTotalMuestras = mediciones.length;

  const temperaturaSondas = sondasPermitidas.reduce((estadisticas, id) => {
    const medicionesSonda = mediciones.filter((medicion) => medicion.id === id);
    const cantidad = medicionesSonda.length;
    let promedio = 0;

    if (cantidad > 0) {
      const sumaTemperaturas = medicionesSonda.reduce(
        (sum, medicion) => sum + medicion.temperatura,
        0
      );
      promedio = sumaTemperaturas / cantidad;
    }

    estadisticas[id] = { cantidad, promedio };
    return estadisticas;
  }, {});

  return {
    estadisticas: {
      cantidadTotalMuestras,
      temperaturaSondas,
    },
  };
};
export default {
  getDatos,
  postAgregarMedicion,
  getMedicionById,
  getEstadisticas,
};
