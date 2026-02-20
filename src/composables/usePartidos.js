import { ref } from 'vue';
import apiClient from '../api/axios';
import { useApi } from './useApi';

export function usePartidos() {
  const { loading, error, execute: executeUltimos } = useApi((page, size) => 
    apiClient.get('/partidos/ultimos-7-dias', { params: { page, size } })
  );

  const { loading: loadingAll, error: errorAll, execute: executeAll } = useApi((page, size) => 
    apiClient.get('/partidos', { params: { page, size } })
  );

  const partidos = ref([]);
  const totalElements = ref(0);
  const totalPages = ref(0);

  const fetchUltimaJornada = async (page = 0, size = 10) => {
    try {
      const result = await executeUltimos(page, size);
      partidos.value = result?.content || [];
      totalElements.value = result?.totalElements || 0;
      totalPages.value = result?.totalPages || 0;
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPartidos = async (page = 0, size = 10) => {
    try {
      const result = await executeAll(page, size);
      partidos.value = result?.content || [];
      totalElements.value = result?.totalElements || 0;
      totalPages.value = result?.totalPages || 0;
    } catch (err) {
      console.error(err);
    }
  };

  return { 
    partidos, 
    loading, 
    error, 
    loadingAll,
    errorAll,
    totalElements, 
    totalPages, 
    fetchPartidos, 
    fetchUltimaJornada 
  };
}
