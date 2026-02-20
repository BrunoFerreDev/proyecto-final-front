<template>
    <div class="bg-white rounded-xl border border-[#dbdde6] overflow-hidden">
        <div class="bg-[#516dfb]/5 px-6 py-4 border-b border-[#dbdde6] flex items-center justify-between">
            <h2 class="text-lg font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-[#516dfb]">sports</span>
                Designación Arbitral
            </h2>
            <button @click.prevent="guardarDesignacion" type="button"
                class="cursor-pointer px-6 py-2.5 bg-[#516dfb] text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 ">Guardar
                Designacion</button>
        </div>
        <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-lg border-2 border-[#516dfb]/20 bg-[#516dfb]/5">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-[#516dfb] flex items-center justify-center text-white text-xs font-bold">AP</span>
                    <p class="text-sm font-bold">Árbitro Principal</p>
                </div>
                <select @change="pushArbitro($event.target.value, 'ARBITRO_PRINCIPAL')"
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option value="" disabled selected="">Seleccionar Árbitro</option>
                    <option v-for="arbitro in arbitrosPrimera" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A1</span>
                    <p class="text-sm font-bold">Asistente 1</p>
                </div>
                <select @change="pushArbitro($event.target.value, 'ASISTENTE_1')"
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option value="" disabled selected="">Seleccionar Asistente 1</option>
                    <option v-for="arbitro in arbitrosSegunda" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">A2</span>
                    <p class="text-sm font-bold">Asistente 2</p>
                </div>
                <select @change="pushArbitro($event.target.value, 'ASISTENTE_2')"
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option value="" disabled selected="">Seleccionar Asistente 2</option>
                    <option v-for="arbitro in arbitrosAsistentes" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
            <div class="p-4 rounded-lg border border-[#dbdde6] hover:border-[#516dfb]/50 transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span
                        class="size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">4A</span>
                    <p class="text-sm font-bold">Cuarto Árbitro</p>
                </div>
                <select @change="pushArbitro($event.target.value, 'CUARTO')"
                    class="w-full rounded-lg border-[#dbdde6] focus:border-[#516dfb] focus:ring-[#516dfb] h-10 text-sm">
                    <option value="" disabled selected="">Seleccionar Cuarto Árbitro</option>
                    <option v-for="arbitro in cuartoArbitros" :key="arbitro.idPersona" :value="arbitro.idPersona">
                        {{ arbitro.nombre }} {{ arbitro.apellido }} -{{ arbitro.rol }}
                    </option>
                </select>
            </div>
        </div>
    </div>


</template>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>
<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
const props = defineProps({
    idPartido: Number,
    required: true
})
const dataAenviar = ref({
    arbitros: []
})
const arbitros = ref([]);
// 1. Definición de la función de búsqueda
const fetchArbitros = async (page, size) => {
    try {
        const response = await axios.get('http://localhost:8080/api/personas', {
            params: {
                page: page,
                size: size,
                tipo: 2
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        // Retornamos el contenido o un array vacío por seguridad
        return response.data.content || [];
    } catch (error) {
        console.error(`Error cargando página ${page}:`, error);
        return []; // Retorna array vacío en caso de error para no romper la UI
    }
}
const guardarDesignacion = async () => {

    try {
        console.log(arbitros.value);

        // 1. Hacemos la petición
        const response = await axios.post("http://localhost:8080/api/designaciones/cargar", {
            idPartido: props.idPartido,
            arbitros: arbitros.value
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        // 2. Si llega aquí, es un código 2xx (Éxito)
        if (response.status === 200 || response.status === 201) {
            // Aquí podrías redirigir o limpiar el formulario
            alert("Designación guardada exitosamente");
        }

    } catch (error) {
        console.error("Error en la petición:", error);

        // 3. Verificamos si el error viene del Backend (respuesta HTTP con error)
        if (error.response) {
            // Spring Boot suele enviar el mensaje en: error.response.data.message
            // O a veces directamente en: error.response.data (si devolviste solo un String)
            const mensajeError = error.response.data.message || error.response.data || "Error desconocido en el servidor";
            // Opcional: Lógica específica si quieres validar por texto
            if (mensajeError.includes("MAXIMA DE ARBITROS")) {
                console.warn("Límite de árbitros excedido");
            }
        } else if (error.request) {
            // El servidor no respondió (problema de red)
        } else {
            // Error en la configuración de la petición
        }
    } finally {
        // Código que se ejecuta siempre, haya error o no (opcional)
        location.reload(); // Recarga la página para mostrar cambios o limpiar el formulario, según tu necesidad
    }
};
const pushArbitro = (idArbitro, rol) => {
    // 1. Buscamos si ya existe una designación para este ROL específico (ej. 'ARBITRO_PRINCIPAL')
    const index = arbitros.value.findIndex(a => a.rol === rol);

    // 2. Si el usuario selecciona la opción vacía/por defecto, eliminamos el rol del array
    if (!idArbitro) {
        if (index !== -1) arbitros.value.splice(index, 1);
        return;
    }

    if (index !== -1) {
        // CASO A: El rol ya existe en el array.
        // "Eliminamos el que estaba" simplemente sobrescribiendo su idArbitro con el nuevo.
        arbitros.value[index].idArbitro = idArbitro;
    } else {
        // CASO B: El rol no existe en el array.
        // Verificamos que no superemos el límite de 4 antes de agregar.
        if (arbitros.value.length < 4) {
            arbitros.value.push({
                idArbitro: idArbitro,
                rol: rol,
            });
        } else {
        }
    }

}
// 2. Variables reactivas
const arbitrosPrimera = ref([]);
const arbitrosSegunda = ref([]);
const arbitrosAsistentes = ref([]);
const cuartoArbitros = ref([]);
// 3. Ejecución al montar el componente
onMounted(async () => {
    // Opción A: Ejecución secuencial (una tras otra)
    arbitrosPrimera.value = await fetchArbitros(0, 10);
    arbitrosSegunda.value = await fetchArbitros(1, 10);
    arbitrosAsistentes.value = await fetchArbitros(2, 10);
    cuartoArbitros.value = await fetchArbitros(3, 10);
    // NOTA: Ver la opción optimizada abajo si quieres que carguen más rápido
});
</script>