import apiClient from "./axios";

export default {
  // GET /torneos
  getTorneos() {
    return apiClient.get("/torneos");
  },

  // POST /torneos
  crearTorneo(data) {
    return apiClient.post("/torneos", data);
  },

  // POST /torneos/competencia
  crearCompetencia(data) {
    return apiClient.post("/torneos/competencia", data);
  },

  // GET /torneos/{competencia}/fixture
  getFixture(competencia) {
    return apiClient.get(`/torneos/${competencia}/fixture`);
  },

  // PUT /torneos/{competencia}/fixture
  actualizarFixture(competencia, data) {
    return apiClient.put(`/torneos/${competencia}/fixture`, data);
  },

  // POST /torneos/competencia/{idCompetencia}/cargar-configuracion
  cargarConfiguracion(idCompetencia, configData) {
    return apiClient.post(
      `/torneos/competencia/${idCompetencia}/cargar-configuracion`,
      configData
    );
  },

  // GET /torneos/{idTorneo}/competencias
  getCompetenciasPorTorneo(idTorneo) {
    return apiClient.get(`/torneos/${idTorneo}/competencias`);
  },
};
