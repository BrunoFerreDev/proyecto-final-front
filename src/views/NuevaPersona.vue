<script setup>
import { IconEdit } from '@tabler/icons-vue';
import { IconCheck } from '@tabler/icons-vue';
import { IconPhoto } from '@tabler/icons-vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { IconBallFootball } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';
import { IconPlayFootball } from '@tabler/icons-vue';
import { IconFileDownload } from '@tabler/icons-vue';
import { IconChevronRight } from '@tabler/icons-vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { usePersonaStore } from '../stores/personaStore'; // Asegura la ruta correcta
import PersonaForm from '../components/forms/PersonaForm.vue';

const activePersona = ref('JUGADOR');
const selectedTipo = ref('JUGADOR'); // Iniciado con un valor por defecto
const personaNueva = ref({
    nombre: 'Bruno Marcos',
    apellido: 'Ferreira',
    dni: '42273555',
    email: 'pittanaferreira@gmail.com',
    telefono: '3743614796',
    fechaNacimiento: '2000-01-01',
});

const personaStore = usePersonaStore();
const { crearPersona, actualizarPersona } = personaStore;
const { loading } = storeToRefs(personaStore);

const nuevaPersona = async () => {
    try {
        // 1. Intentamos crear la persona
        const response = await crearPersona(personaNueva.value);

        if (response && response.data) {
            // 2. Extraemos el id generado por el Backend (idPersona según Swagger)
            const idGenerado = response.data.idPersona;
            const tipoSeleccionado = selectedTipo.value;
            console.log(idGenerado, tipoSeleccionado);

            // 3. Ejecutamos la actualización/asignación de tipo
            await actualizarPersona(tipoSeleccionado, idGenerado);

            alert("¡Persona creada y asignada correctamente!");
            resetForm();
        }
    } catch (error) {
        // Gracias al 'throw error' en el store, este bloque ahora sí captura el fallo
        console.error("Fallo en el flujo de creación:", error);
    }
}
const resetForm = () => {
    personaNueva.value = {
        nombre: '',
        apellido: '',
        dni: '',
        email: '',
        telefono: '',
        fechaNacimiento: '',
    };
};
</script>

<template>
    <main class=" w-full max-w-5xl mx-auto px-6 py-8 md:py-12" v-show="false">
        <!-- Page Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 text--white text-sm font-medium mb-1">
                    <a class="hover:underline" href="#">Personas</a>
                    <IconChevronRight />
                    <span>Nuevo Registro</span>
                </div>
                <h2 class="text-4xl font-black tracking-tight text-[#1c1c0d]">Crear Nueva Persona</h2>
                <p class="text--white text-lg max-w-2xl">Complete el formulario para registrar un nuevo integrante
                    en la base de datos de la liga.</p>
            </div>

        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <!-- Left Column: Image Upload & Type Selector -->
            <div class="lg:col-span-4 flex flex-col gap-6">
                <!-- Profile Image Upload -->
                <div class="bg-surface-light p-6 rounded-lg border  shadow-sm flex flex-col items-center text-center">
                    <div class="relative group cursor-pointer mb-4">
                        <div
                            class="size-32 rounded-full bg-background-light border-2 border-dashed border-text-white/40 flex items-center justify-center overflow-hidden group-hover:border-[#1f44f9] transition-colors">
                            <IconPhoto />
                            <!-- Hidden actual image if uploaded -->
                        </div>
                        <button
                            class="absolute bottom-0 right-0 size-8 bg-[#1c1c0d] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1f44f9] hover:text-[#1c1c0d] transition-colors">
                            <IconEdit />
                        </button>
                    </div>
                    <h3 class="text-base font-bold text-[#1c1c0d]">Foto de Perfil</h3>
                    <p class="text-sm text-[#6b7280] mt-1">Soporta PNG, JPG hasta 5MB</p>
                </div>
                <!-- Role Selector -->
                <div class="bg-surface-light p-6 rounded-lg border  shadow-sm">
                    <h3 class="text-lg font-bold mb-4">Tipo de Registro</h3>
                    <div class="flex flex-col gap-2">
                        <label @click="() => { activePersona = 'JUGADOR', selectedTipo = 'JUGADOR' }"
                            class="relative flex items-center p-3 rounded-xl border  cursor-pointer has-[:checked]:bg-[#1f44f9]/10 has-[:checked]:border-[#1f44f9] transition-colors group">
                            <input checked class="peer sr-only" name="role" type="radio" value="JUGADOR" />
                            <div
                                class="size-10 rounded-full bg-background-light flex items-center justify-center text--white peer-checked:bg-[#1f44f9] peer-checked:text-[#1c1c0d] mr-3 transition-colors">
                                <IconPlayFootball />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-[#1c1c0d]">Jugador</span>
                                <span class="text-xs ">Participante activo de club</span>
                            </div>
                            <div class="absolute right-4 hidden peer-checked:block text-[#1f44f9]">
                                <IconCheck />
                            </div>
                        </label>
                        <label @click="() => { activePersona = 'ARBITRO', selectedTipo = 'ARBITRO' }"
                            class="relative flex items-center p-3 rounded-xl border  cursor-pointer has-[:checked]:bg-[#1f44f9]/10 has-[:checked]:border-[#1f44f9] transition-colors group">
                            <input class="peer sr-only" name="role" type="radio" value="ARBITRO" />
                            <div
                                class="size-10 rounded-full bg-background-light flex items-center justify-center text--white peer-checked:bg-[#1f44f9] peer-checked:text--[#1c1c0d] mr-3 transition-colors">
                                <IconUser />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold text-[#1c1c0d]">Árbitro</span>
                                <span class="text-xs ">Oficial de partido</span>
                            </div>
                            <div class="absolute right-4 hidden peer-checked:block text-[#1f44f9]">
                                <IconCheck />
                            </div>
                        </label>
                        <label @click="() => { activePersona = 'CT', selectedTipo = 'CT' }"
                            class="relative flex items-center p-3 rounded-xl border  cursor-pointer has-[:checked]:bg-[#1f44f9]/10 has-[:checked]:border-[#1f44f9] transition-colors group">
                            <input class="peer sr-only" name="role" type="radio" value="CT" />
                            <div
                                class="size-10 rounded-full bg-background-light flex items-center justify-center text--white peer-checked:bg-[#1f44f9] peer-checked:text-[#1c1c0d] mr-3 transition-colors">
                                <IconUser />
                            </div>
                            <div class="flex flex-col">
                                <span class="font-bold">Cuerpo Técnico</span>
                                <span class="text-xs">Staff y soporte</span>
                            </div>
                            <div class="absolute right-4 hidden peer-checked:block text-[#1f44f9]">
                                <IconCheck />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <!-- Right Column: Form Fields -->
            <div class="lg:col-span-8">
                <form class="flex flex-col gap-6" @submit.prevent="nuevaPersona">
                    <!-- Section: Datos Personales -->
                    <div class="bg-surface-light p-6 md:p-8 rounded-lg border  shadow-sm">
                        <div class="flex items-center gap-2 mb-6 border-b  pb-4">
                            <IconUser class="text--white" />
                            <h3 class="text-lg font-bold text-[#1c1c0d]">Datos Personales</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <label class="flex flex-col gap-2">
                                <span class="text-sm font-semibold text-[#1c1c0d]">Nombre <span
                                        class="text-red-500">*</span></span>
                                <input
                                    class="w-full rounded-xl  border py-3 px-4 text-[#1c1c0d] placeholder-text-white/60 transition-shadow"
                                    placeholder="Ej. Lionel Andrés" type="text" required
                                    v-model="personaNueva.nombre" />
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-sm font-semibold text--[#1c1c0d]">Apellido <span
                                        class="text-red-500">*</span></span>
                                <input
                                    class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text-[#1c1c0d] placeholder-text-white/60 transition-shadow"
                                    placeholder="Ej. Messi" type="text" required v-model="personaNueva.apellido" />
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-sm font-semibold text--[#1c1c0d]">Documento (DNI/Pasaporte)</span>
                                <input
                                    class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text-[#1c1c0d] placeholder-text-white/60 transition-shadow"
                                    placeholder="12.345.678" type="text" v-model="personaNueva.dni" required />
                            </label>
                            <label class="flex flex-col gap-2">
                                <span class="text-sm font-semibold text--[#1c1c0d]">Fecha de Nacimiento</span>
                                <div class="relative">
                                    <input
                                        class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text--[#1c1c0d] transition-shadow"
                                        type="date" v-model="personaNueva.fechaNacimiento" required />
                                </div>
                            </label>
                            <label class="flex flex-col gap-2 md:col-span-2">
                                <span class="text-sm font-semibold text--[#1c1c0d]">Email de Contacto</span>
                                <input
                                    class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text--[#1c1c0d] placeholder-text-white/60 transition-shadow"
                                    placeholder="usuario@ejemplo.com" type="email" v-model="personaNueva.email"
                                    required />
                            </label>
                            <label class="flex flex-col gap-2 md:col-span-2">
                                <span class="text-sm font-semibold text--[#1c1c0d]">Tel&eacute;fono</span>
                                <input
                                    class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text--[#1c1c0d] placeholder-text-white/60 transition-shadow"
                                    placeholder="Ej. +54 9 11 2345-6789" type="tel" v-model="personaNueva.telefono"
                                    required />
                            </label>
                        </div>
                    </div>
                    <!-- Section: Datos Deportivos (Dynamic Content) -->
                    <!-- This section simulates the dynamic nature requested. In a real app, JS would toggle visibility. Here we show the "Player" fields as default since it's checked. -->
                    <div class="bg-surface-light p-6 md:p-8 rounded-lg border  shadow-sm relative overflow-hidden"
                        v-if="activePersona == 'JUGADOR' || activePersona == 'CUERPO_TECNICO'">
                        <!-- Decorative bg element -->
                        <div
                            class="absolute -top-10 -right-10 size-40 bg-[#1f44f9]/5 rounded-full blur-3xl pointer-events-none">
                        </div>
                        <div class="flex items-center justify-between mb-6 border-b  pb-4">
                            <div class="flex items-center gap-2">
                                <IconBallFootball />
                                <h3 class="text-lg font-bold text--[#1c1c0d]">Ficha Deportiva</h3>
                            </div>
                            <span
                                class="text-xs font-medium px-2 py-1 bg-[#1f44f9]/20 text--[#1c1c0d] rounded-md">Perfil
                                Jugador</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <!-- Team Selection -->
                            <div class="md:col-span-12">
                                <label class="flex flex-col gap-2">
                                    <span class="text-sm font-semibold text-[#1c1c0d]">Club Actual</span>
                                    <div class="relative">
                                        <select
                                            class="w-full rounded-xl  border   focus:border-transparent py-3 pl-4 pr-10 text-[#1c1c0d] appearance-none cursor-pointer transition-shadow">
                                            <option disabled="" selected="" value="">Seleccione un club...</option>
                                            <option value="fc_barcelona">Inter Miami CF</option>
                                            <option value="real_madrid">Manchester City</option>
                                            <option value="boca_juniors">Boca Juniors</option>
                                            <option value="river_plate">River Plate</option>
                                        </select>
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text--white">
                                            <IconChevronDown />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <!-- Position -->
                            <div class="md:col-span-6">
                                <label class="flex flex-col gap-2">
                                    <span class="text-sm font-semibold text-[#1c1c0d]">Posición en Campo</span>
                                    <div class="relative">
                                        <select
                                            class="w-full rounded-xl  border   focus:border-transparent py-3 pl-4 pr-10 text-[#1c1c0d] appearance-none cursor-pointer transition-shadow">
                                            <option disabled="" selected="" value="">Seleccione posición...</option>
                                            <option value="gk">Arquero (GK)</option>
                                            <option value="df">Defensor (DF)</option>
                                            <option value="mf">Mediocampista (MF)</option>
                                            <option value="fw">Delantero (FW)</option>
                                        </select>
                                        <div
                                            class="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text--white">
                                            <IconChevronDown />
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <!-- Shirt Number -->
                            <div class="md:col-span-3">
                                <label class="flex flex-col gap-2">
                                    <span class="text-sm font-semibold text-[#1c1c0d]">Dorsal</span>
                                    <input
                                        class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text-[#1c1c0d] placeholder-text-white/60 transition-shadow font-mono text-center"
                                        placeholder="#" type="number" />
                                </label>
                            </div>
                            <!-- Preferred Foot -->
                            <div class="md:col-span-3">
                                <label class="flex flex-col gap-2">
                                    <span class="text-sm font-semibold text--[#1c1c0d]">Pie Hábil</span>
                                    <div class="flex border rounded-xl border  p-1 h-[50px]">
                                        <label class=" cursor-pointer">
                                            <input class="peer sr-only" name="foot" type="radio" value="left" />
                                            <div
                                                class="w-full h-full flex items-center justify-center rounded-lg text--white text-sm font-medium peer-checked:bg-white peer-checked:text--[#1c1c0d] peer-checked:shadow-sm transition-all">
                                                Izquierdo</div>
                                        </label>
                                        <label class=" cursor-pointer">
                                            <input checked="" class="peer sr-only" name="foot" type="radio"
                                                value="right" />
                                            <div
                                                class="w-full h-full flex items-center justify-center rounded-lg text--white text-sm font-medium peer-checked:bg-white peer-checked:text--[#1c1c0d] peer-checked:shadow-sm transition-all">
                                                Derecho</div>
                                        </label>
                                    </div>
                                </label>
                            </div>
                            <!-- Additional Notes -->
                            <div class="md:col-span-12">
                                <label class="flex flex-col gap-2">
                                    <span class="text-sm font-semibold text--[#1c1c0d]">Notas Médicas /
                                        Observaciones</span>
                                    <textarea
                                        class="w-full rounded-xl  border   focus:border-transparent py-3 px-4 text--[#1c1c0d] placeholder-text-white/60 transition-shadow resize-none"
                                        placeholder="Alergias, lesiones previas, etc..." rows="3"></textarea>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-3 justify-end">
                        <button
                            class="px-5 py-2 rounded-lg border  font-medium hover:bg-white transition-colors bg-transparent">
                            Cancelar
                        </button>
                        <button type="submit"
                            class="px-5 py-2 rounded-lg bg-[#4257c2] text-white font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-y-0.5 transition-all flex items-center gap-2">
                            <IconFileDownload />
                            Guardar Persona
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <main class=" w-full max-w-5xl mx-auto px-6 py-8 md:py-12">

        <PersonaForm />
    </main>
</template>