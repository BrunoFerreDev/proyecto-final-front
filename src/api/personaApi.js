import apiClient from "./axios";

export default {
  getPersonas(params) {
    return apiClient.get("/personas", { params });
  },

  crearPersona(data) {
    return apiClient.post("/personas", data);
  },

  getPersonaById(personaId) {
    return apiClient.get(`/personas/${personaId}`);
  },

  // CORRECCIÓN: El 2do argumento es el body (null), el 3ro es la config ({ params })
  actualizarPersona(tipoPersona, personaId) {
    return apiClient.put("/personas/actualizar", null, {
      params: { tipoPersona, personaId },
    });
  },
};
