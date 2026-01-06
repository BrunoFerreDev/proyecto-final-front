import { defineStore } from "pinia";
import { ref } from "vue";
import clubApi from "../api/clubApi.js";

export const useClubStore = defineStore("club", () => {
  // --- STATE ---
  const clubes = ref([]);
  const loading = ref(false);

  // Paginación
  const page = ref(0); // Página actual (Spring empieza en 0)
  const size = ref(5); // Elementos por página
  const totalClubes = ref(0); // Total de clubes en la DB
  const totalPages = ref(0); // Cantidad total de páginas calculadas por el back

  // --- ACTIONS ---

  const fetchClubes = async () => {
    loading.value = true;
    try {
      const params = { page: page.value, size: size.value };
      const { data } = await clubApi.getClubes(params);

      // --- LOGICA DE PAGINACIÓN ---
      if (data.content) {
        // OPCIÓN A: El Backend devuelve un objeto Page (Spring Boot estándar)
        // Estructura: { content: [...], totalClubes: 20, totalPages: 4, ... }
        clubes.value = data.content;
        totalClubes.value = data.totalElements;
        totalPages.value = data.totalPages;
      } else {
        // OPCIÓN B: El Backend devuelve un Array plano (Fallback)
        // Esto evita que la tabla muestre "0 de 0" si el back aún no está listo
        clubes.value = data;
        totalClubes.value = data.length || 0;
        totalPages.value = 1; // Asumimos 1 sola página si viene todo junto
      }
    } catch (error) {
      console.error("❌ Error cargando clubes:", error);
    } finally {
      loading.value = false;
    }
  };

  // Acción para cambiar de página directamente (usada por los numeritos de la tabla)
  const setPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages.value) {
      page.value = newPage;
      fetchClubes();
    }
  };

  // Acciones de Siguiente/Anterior
  const nextPage = () => {
    if (page.value < totalPages.value - 1) {
      page.value++;
      fetchClubes();
    }
  };

  const prevPage = () => {
    if (page.value > 0) {
      page.value--;
      fetchClubes();
    }
  };

  const resetPagination = () => {
    page.value = 0;
    fetchClubes();
  };

  // Agregar club (Ejemplo simple)
  const agregarClub = async (payload) => {
    loading.value = true;
    try {
      await clubApi.crearClub(payload);
      fetchClubes(); // Recargamos la lista para ver el nuevo
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  };

  const borrarClub = async (id) => {
    try {
      await clubApi.eliminarClub(id);
      fetchClubes(); // Recargamos
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // State
    clubes,
    loading,
    page,
    size,
    totalClubes,
    totalPages,
    // Actions
    fetchClubes,
    setPage, // Nueva acción útil para saltar a una página específica
    nextPage,
    prevPage,
    resetPagination,
    agregarClub,
    borrarClub,
  };
});
