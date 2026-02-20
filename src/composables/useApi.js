import { ref } from 'vue';

export function useApi(apiFunc) {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const execute = async (...args) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await apiFunc(...args);
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'Error en la petición';
      console.error("API Error:", err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return { data, loading, error, execute };
}
