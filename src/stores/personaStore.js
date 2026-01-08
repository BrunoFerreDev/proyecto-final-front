import { defineStore } from "pinia";
import { ref } from "vue";
import personaApi from "../api/personaApi.js";

export const usePersonaStore = defineStore("persona", () => {
  const personas = ref([]);
  const loading = ref(false);

  // Estado de Paginación
  const page = ref(0);
  const size = ref(5);
  const totalElements = ref(0);
  const totalPages = ref(0);
  const tipo = ref(0);

  const fetchPersonas = async () => {
    loading.value = true;
    try {
      const params = {
        page: page.value,
        size: size.value,
        tipo: tipo.value,
      };
      const { data } = await personaApi.getPersonas(params);

      if (data.content) {
        personas.value = data.content;
        totalElements.value = data.totalElements;
        totalPages.value = data.totalPages;
      } else {
        personas.value = data;
        totalElements.value = data.length || 0;
        totalPages.value = 1;
      }
    } catch (error) {
      console.error("❌ Error cargando personas:", error);
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const crearPersona = async (personaData) => {
    loading.value = true;
    try {
      const { data } = await personaApi.crearPersona(personaData);
      console.log(data);
      // Después de crear, refrescamos la lista para actualizar la paginación
      return { data };
    } catch (error) {
      console.error("❌ Error en Store (Crear):", error);
      throw error; // Permite que el catch del componente funcione
    } finally {
      loading.value = false;
    }
  };

  const actualizarPersona = async (tipoPersona, personaId) => {
    loading.value = true;
    try {
      // Asegúrate de pasar los argumentos por separado si cambiaste el API
      const { data } = await personaApi.actualizarPersona(
        tipoPersona,
        personaId
      );
      return { data };
    } catch (error) {
      console.error("❌ Error en Store (Actualizar):", error);
      throw error;
    } finally {
      loading.value = false;
    }
  };
  // --- LÓGICA DE NAVEGACIÓN ---
  const setPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages.value) {
      page.value = newPage;
      fetchPersonas();
    }
  };

  const nextPage = () => {
    if (page.value < totalPages.value - 1) {
      page.value++;
      fetchPersonas();
    }
  };

  const prevPage = () => {
    if (page.value > 0) {
      page.value--;
      fetchPersonas();
    }
  };

  const resetPagination = () => {
    page.value = 0;
    fetchPersonas();
  };

  return {
    personas,
    loading,
    page,
    size,
    totalElements,
    totalPages,
    tipo,
    fetchPersonas,
    crearPersona,
    actualizarPersona,
    setPage,
    nextPage,
    prevPage,
    resetPagination,
  };
});
