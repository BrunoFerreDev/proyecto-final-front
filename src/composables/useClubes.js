import { ref } from 'vue';
import apiClient from '../api/axios';
import { useApi } from './useApi';

export function useClubes() {
  const { loading, error, execute } = useApi((page, size) => apiClient.get('/club', { params: { page, size } }));
  
  const clubes = ref([]);
  const totalElements = ref(0);
  const totalPages = ref(0);

  const fetchClubes = async (page = 0, size = 10) => {
    try {
      const result = await execute(page, size);
      clubes.value = result?.content || [];
      totalElements.value = result?.totalElements || 0;
      totalPages.value = result?.totalPages || 0;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    clubes,
    loading,
    error,
    totalElements,
    totalPages,
    fetchClubes
  };
}
