import apiClient from './axios';

export default {
  // GET /partidos
  getPartidos() {
    return apiClient.get('/partidos');
  },

  // POST /partidos
  crearPartido(data) {
    return apiClient.post('/partidos', data);
  },

  // GET /partidos/{id}
  getPartidoById(id) {
    return apiClient.get(`/partidos/${id}`);
  },

  // POST /partidos/{idPartido}/cargar-incidencia
  cargarIncidencia(idPartido, incidenciaData) {
    return apiClient.post(`/partidos/${idPartido}/cargar-incidencia`, incidenciaData);
  },

  // GET /partidos/{idPartido}/traer-detalles
  getDetallesPartido(idPartido) {
    return apiClient.get(`/partidos/${idPartido}/traer-detalles`);
  },

  // GET /partidos/page (Paginación)
  getPartidosPaginados(params) {
    // params puede ser { page: 0, size: 10, sort: 'fecha,desc' }
    return apiClient.get('/partidos/page', { params });
  },

  // GET /partidos/competencia
  getPartidosPorCompetencia(competenciaId) {
    return apiClient.get('/partidos/competencia', { params: { competenciaId } }); 
    // Nota: Asumí que 'competencia' se pasa como query param, verifica si es path variable
  }
};