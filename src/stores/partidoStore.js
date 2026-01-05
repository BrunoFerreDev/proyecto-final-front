import { defineStore } from 'pinia';
import { ref } from 'vue';
import partidoApi from '@/api/partidoApi';

export const usePartidoStore = defineStore('partido', () => {
  const partidos = ref([]);
  const partidoSeleccionado = ref(null);
  const loading = ref(false);

  // Cargar lista de partidos
  const fetchPartidos = async () => {
    loading.value = true;
    try {
      const { data } = await partidoApi.getPartidos();
      partidos.value = data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  // Cargar una incidencia (Ej: Gol)
  const registrarIncidencia = async (idPartido, incidenciaData) => {
    try {
      await partidoApi.cargarIncidencia(idPartido, incidenciaData);
      // Opcional: Recargar los detalles del partido para ver el cambio reflejado
      await fetchDetallesPartido(idPartido);
    } catch (error) {
      console.error('Error cargando incidencia', error);
      throw error;
    }
  };

  // Ver detalles de un partido específico
  const fetchDetallesPartido = async (id) => {
    loading.value = true;
    try {
      const { data } = await partidoApi.getDetallesPartido(id);
      partidoSeleccionado.value = data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return {
    partidos,
    partidoSeleccionado,
    loading,
    fetchPartidos,
    registrarIncidencia,
    fetchDetallesPartido
  };
});