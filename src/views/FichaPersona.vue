<template>
    <main class="flex-1 flex flex-col items-center">
        <div class="w-full max-w-[1200px] px-6 py-6 space-y-6">
            <div class="flex flex-wrap items-center gap-2 text-sm">
                <RouterLink to="/"><a class="text-[#5f668c] hover:text-[#1f44f9]" href="#">Inicio</a></RouterLink>
                <span class="text-[#5f668c] material-symbols-outlined text-sm">chevron_right</span>
                <RouterLink :to="labelTipo === 'Cuerpo Técnico' ? '/cuerpo-tecnico' : labelTipo === 'Árbitro' ? '/arbitros' : '/jugadores'"> <a
                        class="text-[#5f668c] hover:text-[#1f44f9] capitalize" href="#">{{ labelTipo
                        }}s</a></RouterLink>
                <span class="text-[#5f668c] material-symbols-outlined text-sm">chevron_right</span>
                <span class="text-[#111218] font-semibold">Perfil de {{ labelTipo }}</span>
            </div>

            <div class="bg-white border border-[#dbdde6] rounded-xl p-6 shadow-sm">
                <div class="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div class="flex gap-6 items-center">
                        <div class="relative">
                            <div class="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-32 md:size-40 border-4 border-white shadow-md"
                                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLyYnA31-jT6l1XOmEXNwLJpAqMmsEnCw4k_SEVhqBkdsrIyQQVcRgJATikE5eC_LiCr1zWA-3AonpE_KWzR-ZZA9y_BemV_8PaVjpxg8KUa_yfFyavJ22quaDZ_SVGJ9zOFpHRcFK2xOV6Wq_3Ft3iDro6tXFYP__B7FSirOKujwEvOViA0Xieh7mI67QXJg2kuQypQsAj0x46eWnnOn-aqIdfh2EczTcc1xXzKKmajfVMTdsQd97_RK_kgpNrjdJHtGQnmT-5G4");'>
                            </div>
                            <div
                                class="absolute -bottom-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border-2 border-white">
                                Activo
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="text-[#111218] text-3xl font-bold leading-tight tracking-tight">
                                {{ persona.nombre }} {{ persona.apellido }}
                            </h1>
                            <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                <p class="text-[#1f44f9] font-semibold flex items-center gap-1">
                                    {{ subtituloDinamico }}
                                </p>
                                <p class="text-[#5f668c] flex items-center gap-1">
                                    <span class="material-symbols-outlined text-lg">shield</span>
                                    Comité Regional / Club
                                </p>
                            </div>
                            <div class="mt-3 flex gap-3">
                                <span class="bg-[#f0f1f5] text-[#5f668c] text-xs px-2 py-1 rounded">
                                    ID: {{ idPersona }}
                                </span>
                                <span class="bg-[#1f44f9]/10 text-[#1f44f9] text-xs px-2 py-1 rounded font-medium">
                                    Categoría A1
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full md:w-auto gap-3">
                        <button
                            class="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-lg h-11 px-6 bg-[#f0f1f5] text-[#111218] text-sm font-bold hover:bg-[#e4e6eb] transition-all">
                            <span class="material-symbols-outlined text-xl">edit</span>
                            Editar {{ labelTipo }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 space-y-6">
                    <div class="flex items-center justify-between">
                        <h2 class="text-[#111218] text-xl font-bold leading-tight tracking-[-0.015em]">
                            {{ tipo === 'jugador' ? 'Estadísticas de Temporada' : 'Historial de Actividad' }}
                        </h2>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="flex flex-col gap-2 rounded-xl p-5 bg-white border border-[#dbdde6]">
                            <div class="flex items-center gap-2 text-[#5f668c]">
                                <span class="material-symbols-outlined text-lg">calendar_today</span>
                                <p class="text-xs font-medium uppercase tracking-wider">Partidos</p>
                            </div>
                            <p class="text-[#111218] text-2xl font-bold">24</p>
                        </div>
                        <div v-if="tipo === 'jugador'"
                            class="flex flex-col gap-2 rounded-xl p-5 bg-white border border-[#dbdde6]">
                            <div class="flex items-center gap-2 text-[#5f668c]">
                                <span class="material-symbols-outlined text-lg">sports_score</span>
                                <p class="text-xs font-medium uppercase tracking-wider">Goles</p>
                            </div>
                            <p class="text-[#111218] text-2xl font-bold">18</p>
                        </div>
                        <div v-else class="flex flex-col gap-2 rounded-xl p-5 bg-white border border-[#dbdde6]">
                            <div class="flex items-center gap-2 text-[#5f668c]">
                                <span class="material-symbols-outlined text-lg">verified</span>
                                <p class="text-xs font-medium uppercase tracking-wider">Evaluación</p>
                            </div>
                            <p class="text-[#111218] text-2xl font-bold">8.5</p>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <h2 class="text-[#111218] text-xl font-bold leading-tight tracking-[-0.015em]">Información Personal
                    </h2>
                    <div class="bg-white border border-[#dbdde6] rounded-xl p-5 space-y-4">
                        <div class="flex flex-col gap-1">
                            <span class="text-[10px] font-bold uppercase text-[#5f668c] tracking-widest">Rol del
                                Sistema</span>
                            <p class="font-medium text-[#1f44f9] capitalize">{{ tipo }}</p>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span class="text-[10px] font-bold uppercase text-[#5f668c] tracking-widest">DNI /
                                Pasaporte</span>
                            <p class="font-medium text-[#111218]">{{ new Intl.NumberFormat("es-AR").format(persona.dni)
                            }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const idPersona = router.currentRoute.value.params.idPersona
const tipo = router.currentRoute.value.params.tipo
// Definimos las props que vienen desde el Router
const props = defineProps({
    idPersona: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        default: 'jugador'
    }
});
const persona = ref({});
// Lógica para etiquetas dinámicas
const labelTipo = computed(() => {
    if (props.tipo === 'arbitro') return 'Árbitro';
    if (props.tipo === 'cuerpo-tecnico') return 'Cuerpo Técnico';
    return 'Jugador';
});

const subtituloDinamico = computed(() => {
    if (props.tipo === 'jugador') return 'Delantero Centro';
    if (props.tipo === 'arbitro') return 'Árbitro Principal';
    return 'Director Técnico';
});

const fetchPersona = async () => {
    try {
        const { data } = await axios.get(`http://localhost:8080/api/personas/${props.idPersona}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        console.log(data);
        persona.value = data;
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    fetchPersona();
})
</script>