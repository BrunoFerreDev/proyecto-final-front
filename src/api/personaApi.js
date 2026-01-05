import apiClient from './axios';

export default {
  // GET /personas
  getPersonas() {
    return apiClient.get('/personas');
  },

  // POST /personas
  crearPersona(data) {
    return apiClient.post('/personas', data);
  },

  // GET /personas/{personaId}
  getPersonaById(personaId) {
    return apiClient.get(`/personas/${personaId}`);
  },

  // PUT /personas/actualizar
  actualizarPersona(data) {
    return apiClient.put('/personas/actualizar', data);
  }
};