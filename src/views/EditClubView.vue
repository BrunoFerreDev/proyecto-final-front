<template>
    <form v-if="loading" @submit.prevent="verificarGuardado"
        class="flex flex-col gap-8 p-8 bg-white rounded-xl shadow-sm max-w-7xl mx-auto">
        <section class="flex flex-col gap-6">
            <h3 class="text-[#111218] text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Identidad Visual
            </h3>
            <div class="flex flex-col items-center gap-4 text-center">
                <div class="relative group">
                    <div v-if="cargandoImg"
                        class="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 transition-all group-hover:border-[#1f44f9]">

                        <img v-if="imagePreview" :src="imagePreview" class=" object-contain" alt="Escudo del club" />

                        <div v-else class="text-gray-400 flex flex-col items-center">
                            <span class="material-symbols-outlined !text-4xl">shield</span>
                            <span class="text-[10px] mt-1 font-bold uppercase">Sin Escudo</span>
                        </div>
                    </div>
                    <span v-else class="material-symbols-outlined !text-4xl animate-spin">donut_large</span>
                </div>

                <div class="flex flex-col gap-2 w-full max-w-md">
                    <label class="text-[#111218] text-sm font-semibold">Subir Escudo</label>
                    <input type="file" @change="handleImageUpload" accept="image/png, image/jpeg"
                        class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1f44f9]/10 file:text-[#1f44f9] hover:file:bg-[#1f44f9]/20" />
                    <p class="text-[#5f668c] text-xs font-normal">
                        Sube una imagen (JPG, PNG). Tamaño máximo recomendado: 2MB.
                    </p>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-5">
            <h3 class="text-[#111218] text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Información General
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Nombre de la Institución</label>
                    <div class="relative">
                        <input :value="club.nombre"
                            class="w-full rounded-lg border-gray-300 focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4"
                            type="text" readonly="" />
                    </div>
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Fecha de Fundación</label>
                    <div class="relative">
                        <input :value="club.fundacion" readonly=""
                            class="w-full rounded-lg border-gray-300 focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11 px-4"
                            type="date" />
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-5">
            <h3 class="text-[#111218] text-xl font-bold leading-tight border-b border-gray-50 pb-3">
                Ubicación y Estado
            </h3>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2">

                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Ciudad</label>
                    <div class="relative">
                        <span
                            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-xl">location_on</span>
                        <input :value="club.ciudad" readonly=""
                            class="w-full pl-10 rounded-lg border-gray-300 focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11"
                            placeholder="Ej: Buenos Aires" type="text" />
                    </div>
                </div>
                <div class="flex flex-col gap-1.5">
                    <label class="text-sm font-bold text-[#111218] ">Estado</label>
                    <div class="relative">
                        <span
                            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 !text-xl">location_on</span>
                        <input :value="club.estado"
                            class="w-full pl-10 rounded-lg border-gray-300 focus:ring-[#1f44f9] focus:border-[#1f44f9] h-11"
                            placeholder="Ej: Buenos Aires" type="text" readonly="" />
                    </div>
                </div>
            </div>
        </section>

        <div
            class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 mt-4 pt-6 border-t border-slate-200">
            <button type="button" @click="verificarCancelacion"
                class="w-full sm:w-auto px-8 h-12 rounded-full border border-slate-200 text-gray-700 font-bold hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-slate-200">
                Cancelar
            </button>
            <button type="submit"
                class="w-full sm:w-auto px-10 h-12 rounded-full bg-[#3b82f6] text-white font-bold hover:bg-[#2563eb] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2">
                <IconDeviceFloppy class="text-xl" />
                Guardar Club
            </button>
        </div>
    </form>
</template>

<script setup>
import { IconDeviceFloppy } from '@tabler/icons-vue';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const idClub = route.params.idClub;
const API_BASE_URL = `http://localhost:8080/api`;
const club = ref({});

// Variables reactivas para el manejo de la imagen
const imagePreview = ref(null);
const selectedFile = ref(null);
const loading = ref(false);
const cargandoImg = ref(true);
const fetchClub = async () => {
    // TODO: Implementar llamada a API para obtener club
    try {
        const response = await axios.get(
            `${API_BASE_URL}/clubes/informacion`, {
            params: {
                idClub: idClub
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        );
        club.value = response.data;
        console.log(response.data);
        imagePreview.value = club.value.escudo;
        loading.value = true;
    } catch (error) {
        console.error(error);
    }
};
onMounted(() => {
    fetchClub();
});
// Método para capturar el archivo y generar la vista previa
const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        selectedFile.value = file;
        // Crea una URL temporal en memoria para previsualizar la imagen
        imagePreview.value = URL.createObjectURL(file);
    } else {
        selectedFile.value = null;
        imagePreview.value = null;
    }
};

const guardarClub = async () => {
    try {
        cargandoImg.value = false;
        // 1. Preparamos el FormData solo para el archivo binario
        const formData = new FormData();

        if (selectedFile.value) {
            // El nombre 'escudo' debe ser idéntico al que definiste en @RequestPart("escudo")
            formData.append('escudo', selectedFile.value);
        }

        // 2. Construimos la URL con el idClub como RequestParam
        // Agregamos '/actualizar-imagen' que es el valor definido en tu @PutMapping
        const url = `http://localhost:8080/api/clubes/actualizar-imagen?idClub=${club.value.idClub}`;

        // 3. Realizamos la petición PUT
        const response = await axios.put(url, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                // No hace falta setear 'Content-Type': 'multipart/form-data', 
                // Axios lo hace automáticamente al detectar el FormData.
            }
        });

        console.log("Escudo actualizado:", response.data);
        resetForm();

    } catch (error) {
        console.error("Error al cargar la imagen:", error);
    } finally {
        cargandoImg.value = true;
        location.reload();
    }
};
const resetForm = () => {
    club.nombre = '';
    club.ciudad = '';
    club.fundacion = '';
    club.isActivo = true;
    club.estado = 'ACTIVO';

    // Limpiamos la imagen
    selectedFile.value = null;
    if (imagePreview.value) {
        URL.revokeObjectURL(imagePreview.value); // Liberamos memoria
        imagePreview.value = null;
    }

    // Limpiar el input file visualmente si es necesario
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
};

const verificarGuardado = () => {
    if (confirm("¿Estás seguro de guardar el club?")) {
        guardarClub();
    }
};

const verificarCancelacion = () => {
    if (confirm("¿Estás seguro de cancelar? Se perderán los datos.")) {
        resetForm();
    }
};
</script>

<style scoped>
input[type="text"],
input[type="date"],
select {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
}
</style>