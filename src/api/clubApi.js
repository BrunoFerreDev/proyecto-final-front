import apiClient from "./axios";

export default {
  // GET /clubes - Obtener todos
  getClubes(params) {
    return apiClient.get("/club", { params });
  },

  // GET /club/{id} - Obtener uno por ID
  traerJugadoresPorClub(id, params) {
    return apiClient.get(`/club/${id}`, { params });
  },
  traerPorId(id) {
    return apiClient.get(`/club/${id}/informacion`);
  },
  // POST /club - Crear uno nuevo
  crearClub(data) {
    return apiClient.post("/club", data);
  },

  // PUT /club/{id} - Actualizar
  actualizarClub(id, data) {
    return apiClient.put(`/club/${id}`, data);
  },

  // DELETE /club/{id} - Eliminar (si tu API lo permite)
  eliminarClub(id) {
    return apiClient.delete(`/club/${id}`);
  },
};
