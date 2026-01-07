import { defineStore } from "pinia";
import { ref } from "vue";
import torneoApi from "../api/torneoApi.js";

export const useTorneoStore = defineStore("torneo", () => {
  // --- STATE (Datos) ---
  const torneos = ref([]);
  const torneoActual = ref(null); // Para guardar el detalle de un torneo seleccionado
  const loading = ref(false);
  const error = ref(null);
  const idTorneo = ref(0);
  const competencias = ref([]);

  // --- ACTIONS (Funciones) ---

  // Cargar todos los torneos
  const fetchTorneos = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await torneoApi.getTorneos(idTorneo.value);
      torneos.value = data;
    } catch (err) {
      error.value = "Error al cargar los torneos";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  const fetchCompetencias = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await torneoApi.getCompetencias(idTorneo.value);
      competencias.value = [...data];
    } catch (err) {
      error.value = "Error al cargar los torneos";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };
  // Crear un nuevo torneo
  const agregarTorneo = async (nuevoTorneo) => {
    loading.value = true;
    try {
      const { data } = await torneoApi.crearTorneo(nuevoTorneo);
      // Lo agregamos a la lista local para que se vea instantáneamente
      torneos.value.push(data);
    } catch (err) {
      error.value = "Error al crear el torneo";
      throw err; // Lanzamos el error por si el componente quiere mostrar una alerta
    } finally {
      loading.value = false;
    }
  };

  // Traer Fixture de un torneo específico
  const fetchFixture = async (idCompetencia) => {
    loading.value = true;
    try {
      const { data } = await torneoApi.getFixture(idCompetencia);
      // Podrías guardar esto en una variable 'fixtureActual' si la creas en el state
      return data;
    } catch (err) {
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    torneos,
    competencias,
    torneoActual,
    loading,
    error,
    idTorneo,
    fetchTorneos,
    fetchCompetencias,
    agregarTorneo,
    fetchFixture,
  };
});
