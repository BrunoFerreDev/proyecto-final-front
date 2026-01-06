import { defineStore } from "pinia";
import { ref } from "vue";
import personaApi from "../api/personaApi.js";

export const usePersonaStore = defineStore("persona", () => {
  const personas = ref([]);
  const loading = ref(false);

  // Paginación
  const page = ref(0); // Página actual (Spring empieza en 0)
  const size = ref(5); // Elementos por página
  const totalElements = ref(0); // Total de clubes en la DB
  const totalPages = ref(0); // Cantidad total de páginas calculadas por el back
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

      // --- LOGICA DE PAGINACIÓN ---
      if (data.content) {
        // OPCIÓN A: El Backend devuelve un objeto Page (Spring Boot estándar)
        // Estructura: { content: [...], totalElements: 20, totalPages: 4, ... }
        personas.value = data.content;
        totalElements.value = data.totalElements;
        totalPages.value = data.totalPages;
      } else {
        // OPCIÓN B: El Backend devuelve un Array plano (Fallback)
        // Esto evita que la tabla muestre "0 de 0" si el back aun no esta listo
        personas.value = data;
        totalElements.value = data.length || 0;
        totalPages.value = 1; // Asumimos 1 sola página si viene todo junto
      }
    } catch (error) {
      console.error("❌ Error cargando personas:", error);
    } finally {
      loading.value = false;
    }
  };
  // Acción para cambiar de página directamente (usada por los numeritos de la tabla)
  const setPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages.value) {
      page.value = newPage;
      fetchPersonas();
    }
  };

  // Acciones de Siguiente/Anterior
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

  return {
    personas,
    loading,
    page,
    size,
    totalElements,
    totalPages,
    tipo,
    // Acciones
    fetchPersonas,
    setPage,
    nextPage,
    prevPage,
    resetPagination,
    crearPersona,
  };
});
