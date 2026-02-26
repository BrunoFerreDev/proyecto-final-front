import { ref } from 'vue';
import apiClient from '../api/axios';
import { useApi } from './useApi';

export function usePersonas() {
  const { loading, error, execute } = useApi((page, size, tipo) => 
    apiClient.get('/personas', { params: { page, size, tipo } })
  );

  const personas = ref([]);
  const totalElements = ref(0);
  const totalPages = ref(0);

  const fetchPersonas = async (page = 0, size = 10, tipo = null) => {
    try {
      const result = await execute(page, size, tipo);
      personas.value = result?.content || [];
      totalElements.value = result?.totalElements || 0;
      totalPages.value = result?.totalPages || 0;
      console.log(personas.value);
    } catch (err) {
      console.error(err);
    }
  };

  return { personas, loading, error, totalElements, totalPages, fetchPersonas };
}
