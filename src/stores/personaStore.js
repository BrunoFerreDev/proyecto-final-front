import { defineStore } from 'pinia';
import { ref } from 'vue';
import personaApi from '@/api/personaApi';

export const usePersonaStore = defineStore('persona', () => {
  const personas = ref([]);
  const loading = ref(false);

  const fetchPersonas = async () => {
    loading.value = true;
    try {
      const { data } = await personaApi.getPersonas();
      personas.value = data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  const crearPersona = async (personaData) => {
    loading.value = true;
    try {
      const { data } = await personaApi.crearPersona(personaData);
      personas.value.push(data);
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };

  return { personas, loading, fetchPersonas, crearPersona };
});