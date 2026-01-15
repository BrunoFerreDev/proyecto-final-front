<template>
    <form @submit.prevent="guardarPersona"
        class="p-6 md:p-10 flex flex-col gap-10 bg-white  rounded-xl shadow-sm border border-gray-200 ">

        <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="relative group">
                <div
                    class="size-32 rounded-xl bg-gray-100  flex items-center justify-center border-2 border-dashed border-gray-300  overflow-hidden">
                    <img v-if="persona.fotoUrl" :src="persona.fotoUrl" class="w-full h-full object-cover"
                        alt="Perfil" />
                    <span v-else class="material-symbols-outlined text-4xl text-gray-400">add_a_photo</span>
                </div>
            </div>
            <div class="text-center sm:text-left w-full">
                <h3 class="text-lg font-bold text-gray-800 ">Foto de Perfil</h3>
                <p class="text-sm text-[#5f668c] mb-2">URL de la imagen (JPG o PNG).</p>
                <input v-model="persona.fotoUrl" type="url" placeholder="https://..."
                    class="w-full rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm py-2" />
            </div>

        </div>

        <div>
            <div class="flex items-center gap-2 mb-6 text-blue-600">
                <span class="material-symbols-outlined">badge</span>
                <h2 class="text-lg font-bold">1. Información General</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Nombre</label>
                    <input v-model="persona.nombre" required
                        class="rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full"
                        placeholder="Ej. Lionel" type="text" />
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Apellido</label>
                    <input v-model="persona.apellido" required
                        class="rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full"
                        placeholder="Ej. Messi" type="text" />
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">DNI / Pasaporte</label>
                    <input v-model="persona.dni" required
                        class="rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full"
                        placeholder="Documento de identidad" type="text" />
                </div>

                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Fecha de Nacimiento</label>
                    <input v-model="persona.fechaNacimiento" required
                        class="rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full"
                        type="date" />
                </div>

                <div class="flex flex-col gap-2 md:col-span-2">
                    <label class="text-sm font-semibold text-gray-700 ">Nacionalidad</label>
                    <select v-model="persona.nacionalidad"
                        class="rounded-lg border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 w-full">
                        <option value="Argentina">Argentina</option>
                        <option value="España">España</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center gap-2 mb-6 text-blue-600">
                <span class="material-symbols-outlined">assignment_ind</span>
                <h2 class="text-lg font-bold">2. Rol en la Liga</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <label class="relative flex cursor-pointer rounded-xl border p-4 focus:outline-none transition-all"
                    :class="persona.tipoPersona === 'JUGADOR' ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'border-gray-200 :border-[#2a2d3d] hover:border-blue-300'">
                    <input v-model="persona.tipoPersona" class="sr-only" name="role" type="radio" value="JUGADOR" />
                    <div class="flex flex-col items-center justify-center w-full gap-2">
                        <span class="material-symbols-outlined text-3xl"
                            :class="persona.tipoPersona === 'JUGADOR' ? 'text-blue-600' : 'text-gray-400'">sports_soccer</span>
                        <span class="font-bold text-gray-700 ">Jugador</span>
                    </div>
                    <div v-if="persona.tipoPersona === 'JUGADOR'" class="absolute top-2 right-2">
                        <span class="material-symbols-outlined text-blue-600 text-lg">check_circle</span>
                    </div>
                </label>

                <label class="relative flex cursor-pointer rounded-xl border p-4 focus:outline-none transition-all"
                    :class="persona.tipoPersona === 'ARBITRO' ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'border-gray-200 :border-[#2a2d3d] hover:border-blue-300'">
                    <input v-model="persona.tipoPersona" class="sr-only" name="role" type="radio" value="ARBITRO" />
                    <div class="flex flex-col items-center justify-center w-full gap-2">
                        <span class="material-symbols-outlined text-3xl"
                            :class="persona.tipoPersona === 'ARBITRO' ? 'text-blue-600' : 'text-gray-400'">sports</span>
                        <span class="font-bold text-gray-700 ">Árbitro</span>
                    </div>
                    <div v-if="persona.tipoPersona === 'ARBITRO'" class="absolute top-2 right-2">
                        <span class="material-symbols-outlined text-blue-600 text-lg">check_circle</span>
                    </div>
                </label>

                <label class="relative flex cursor-pointer rounded-xl border p-4 focus:outline-none transition-all"
                    :class="persona.tipoPersona === 'CUERPO_TECNICO' ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600' : 'border-gray-200 :border-[#2a2d3d] hover:border-blue-300'">
                    <input v-model="persona.tipoPersona" class="sr-only" name="role" type="radio"
                        value="CUERPO_TECNICO" />
                    <div class="flex flex-col items-center justify-center w-full gap-2">
                        <span class="material-symbols-outlined text-3xl"
                            :class="persona.tipoPersona === 'CUERPO_TECNICO' ? 'text-blue-600' : 'text-gray-400'">engineering</span>
                        <span class="font-bold text-gray-700 ">Staff Técnico</span>
                    </div>
                    <div v-if="persona.tipoPersona === 'CUERPO_TECNICO'" class="absolute top-2 right-2">
                        <span class="material-symbols-outlined text-blue-600 text-lg">check_circle</span>
                    </div>
                </label>
            </div>
        </div>

        <div class="p-6 bg-gray-50 :bg-[#141724] rounded-xl border border-gray-100 :border-[#2a2d3d]">
            <div class="flex items-center gap-2 mb-6 text-blue-600">
                <span class="material-symbols-outlined">tune</span>
                <h2 class="text-lg font-bold">3. Datos Específicos</h2>
            </div>

            <div v-if="persona.tipoPersona === 'JUGADOR'" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Posición</label>
                    <select v-model="persona.jugadorPosicion" class="rounded-lg border-gray-300 focus:ring-blue-600">
                        <option value="PORTERO">Portero</option>
                        <option value="DEFENSA">Defensa</option>
                        <option value="MEDIOCAMPO">Mediocampo</option>
                        <option value="DELANTERO">Delantero</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Número de Dorsal</label>
                    <input v-model.number="persona.jugadorDorsal" class="rounded-lg border-gray-300 focus:ring-blue-600"
                        max="99" min="1" placeholder="Ej. 10" type="number" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Pie Dominante</label>
                    <div class="flex gap-4 mt-2">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="persona.jugadorPie" type="radio" value="DERECHO"
                                class="text-blue-600 focus:ring-blue-600" />
                            <span class="">Derecho</span>
                        </label>
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input v-model="persona.jugadorPie" type="radio" value="IZQUIERDO"
                                class="text-blue-600 focus:ring-blue-600" />
                            <span class="">Izquierdo</span>
                        </label>
                    </div>
                </div>
            </div>

            <div v-if="persona.tipoPersona === 'ARBITRO'" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Rol Arbitral</label>
                    <select v-model="persona.arbitroRol" class="rounded-lg border-gray-300 focus:ring-blue-600">
                        <option value="PRINCIPAL">Juez Principal</option>
                        <option value="ASISTENTE">Juez de Línea / Asistente</option>
                        <option value="CUARTO">Cuarto Árbitro</option>
                        <option value="VAR">VAR</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Categoría / Nivel</label>
                    <select v-model="persona.arbitroCategoria" class="rounded-lg border-gray-300 focus:ring-blue-600">
                        <option value="FIFA">FIFA Internacional</option>
                        <option value="NACIONAL">Nacional (AFA)</option>
                        <option value="REGIONAL">Regional</option>
                        <option value="AMATEUR">Amateur</option>
                    </select>
                </div>
            </div>

            <div v-if="persona.tipoPersona === 'CUERPO_TECNICO'"
                class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Cargo / Función</label>
                    <select v-model="persona.staffCargo" class="rounded-lg border-gray-300 focus:ring-blue-600">
                        <option value="DT">Director Técnico</option>
                        <option value="AYUDANTE">Ayudante de Campo</option>
                        <option value="PREPARADOR">Preparador Físico</option>
                        <option value="MEDICO">Cuerpo Médico</option>
                        <option value="UTILERO">Utilero</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Número de Licencia</label>
                    <input v-model="persona.staffLicencia" class="rounded-lg border-gray-300 focus:ring-blue-600"
                        type="text" placeholder="Licencia habilitante" />
                </div>
            </div>

        </div>

        <div>
            <div class="flex items-center gap-2 mb-6 text-blue-600">
                <span class="material-symbols-outlined">contact_mail</span>
                <h2 class="text-lg font-bold">4. Información de Contacto</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Correo Electrónico</label>
                    <input v-model="persona.email" class="rounded-lg border-gray-300 focus:ring-blue-600 w-full"
                        placeholder="email@ejemplo.com" type="email" />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-sm font-semibold text-gray-700 ">Teléfono de Contacto</label>
                    <input v-model="persona.telefono" class="rounded-lg border-gray-300 focus:ring-blue-600 w-full"
                        placeholder="+54 9 11..." type="tel" />
                </div>
            </div>
        </div>

        <div class="flex flex-col sm:flex-row justify-end gap-4 mt-4 pt-8 border-t border-gray-100 :border-[#2a2d3d]">
            <button type="button" @click="resetForm"
                class="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 :text-gray-300 font-bold hover:bg-gray-50 :hover transition-all">
                Cancelar
            </button>
            <button type="submit"
                class="px-10 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm">save</span>
                Registrar Persona
            </button>
        </div>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Estado inicial del formulario
const persona = reactive({
    // Base
    nombre: '',
    apellido: '',
    dni: '',
    fechaNacimiento: '',
    nacionalidad: 'Argentina',
    fotoUrl: '',
    email: '',
    telefono: '',

    // Discriminador de Tipo (JUGADOR | ARBITRO | CUERPO_TECNICO)
    tipoPersona: 'JUGADOR',

    // Campos Jugador
    jugadorPosicion: 'MEDIOCAMPO',
    jugadorDorsal: null,
    jugadorPie: 'DERECHO',

    // Campos Arbitro
    arbitroRol: 'PRINCIPAL',
    arbitroCategoria: 'REGIONAL',

    // Campos Staff
    staffCargo: 'DT',
    staffLicencia: ''
});

const guardarPersona = async () => {
    // Aquí filtras los datos antes de enviar para no mandar "basura" de otros roles
    const payload = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        dni: persona.dni,
        fechaNacimiento: persona.fechaNacimiento,
        nacionalidad: persona.nacionalidad,
        fotoUrl: persona.fotoUrl,
        email: persona.email,
        telefono: persona.telefono,
        tipoPersona: persona.tipoPersona
    };

    // Agregamos solo los datos relevantes según el rol
    if (persona.tipoPersona === 'JUGADOR') {
        Object.assign(payload, {
            posicion: persona.jugadorPosicion,
            dorsal: persona.jugadorDorsal,
            pie: persona.jugadorPie
        });
    } else if (persona.tipoPersona === 'ARBITRO') {
        Object.assign(payload, {
            rol: persona.arbitroRol,
            categoria: persona.arbitroCategoria
        });
    } else if (persona.tipoPersona === 'CUERPO_TECNICO') {
        Object.assign(payload, {
            cargo: persona.staffCargo,
            licencia: persona.staffLicencia
        });
    }

    console.log("Enviando a Backend:", payload);
    // await personaApi.crear(payload);
};

const resetForm = () => {
    // Lógica de reseteo
    persona.nombre = '';
    persona.apellido = '';
    persona.tipoPersona = 'JUGADOR';
    // ... resto de campos
};
</script>

<style scoped>
/* Animación simple para que el cambio de tabs no sea brusco */
.animate-fadeIn {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

input {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
    padding: 1rem !important;
}

select {
    border: 1px solid #0a2150 !important;
    border-radius: 8px !important;
    padding: 1rem !important;
}
</style>