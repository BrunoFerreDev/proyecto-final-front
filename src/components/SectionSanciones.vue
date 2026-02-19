<script setup>
import SancionHeader from './SancionHeader.vue';
import TableSancion from './tables/TableSancion.vue';
import Pagination from './Pagination.vue';
import { ref, watch, onMounted } from 'vue'; // Importamos watch y onMounted
import axios from 'axios';

const props = defineProps({
    valor: {
        type: String,
        default: ''
    }
});

const page = ref(0);
const size = ref(5);
const totalElements = ref(0);
const totalPages = ref(0);
const sanciones = ref([]);
const sancionado = ref([]);
// Petición al Backend
const fetchSanciones = async () => {
    console.log(props.valor);

    if (props.valor === '') {
        sanciones.value = [];
        return;
    }
    try {
        const response = await axios.get(
            `http://localhost:8080/api/sanciones/buscar`, {
            params: {
                valor: props.valor, // Usamos el valor que viene del padre
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        sanciones.value = response.data
        sancionado.value = sanciones.value[0].sancionado; // Guardamos la sancionado para mostrar su nombre y tipo en el header

    } catch (error) {
        console.error('Error al cargar las sanciones:', error);
        sanciones.value = [];
    }
};

// 1. OBSERVADOR: Cuando cambia el texto de búsqueda (props.valor)
watch(() => props.valor, () => {
    page.value = 0; // Reiniciamos a la página 1 cuando buscamos algo nuevo
    fetchSanciones();
});

// 2. OBSERVADOR: Cuando cambia la página (paginación)
watch(page, () => {
    fetchSanciones();
});

// 3. Al cargar el componente por primera vez
onMounted(() => {
    fetchSanciones();
});

const handlePageChange = (newPage) => {
    page.value = newPage;
    // El watch(page) detectará el cambio y llamará a fetchSanciones automáticamente
};

</script>

<template>
    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mx-4">
        <SancionHeader v-if="sanciones.length > 0" :titulo="sancionado.nombre" :tipoEntidad="sancionado.tipoEntidad"
            :cantidad="sanciones.length" />

        <div class="overflow-x-auto">
            <TableSancion :sanciones="sanciones" />
        </div>

        <Pagination v-if="sanciones.length > 0" :page="page" :totalPages="totalPages" :totalElements="totalElements"
            :size="size" @page-change="handlePageChange" class="p-4" />

    </div>
</template>