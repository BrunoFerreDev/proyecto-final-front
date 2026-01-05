import apiClient from './axios';

export default {
  // GET /sanciones
  getSanciones() {
    return apiClient.get('/sanciones');
  },

  // POST /sanciones
  crearSancion(data) {
    return apiClient.post('/sanciones', data);
  },

  // PUT /sanciones/{codigo}/actualizar
  actualizarSancion(codigo, data) {
    return apiClient.put(`/sanciones/${codigo}/actualizar`, data);
  }
};