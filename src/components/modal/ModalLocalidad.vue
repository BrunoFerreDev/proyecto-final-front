<template>
    <!-- Modal Background Overlay -->
    <div class="fixed inset-0 modal-overlay z-40 flex items-center justify-center p-4 ">
        <div class="bg-white  w-full max-w-130 rounded-xl shadow-2xl overflow-hidden flex flex-col">
            <!-- Modal Header -->
            <div class="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-[#506dfb]/10 flex items-center justify-center text-[#506dfb]">
                        <span class="material-symbols-outlined">location_on</span>
                    </div>
                    <h2 class="text-[#111218]  text-xl font-bold leading-tight">Añadir Nueva Localidad
                    </h2>
                </div>
                <button @click="closeModalLocalidad" class="text-gray-400 hover:text-gray-600  transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <!-- Modal Content (Form) -->
            <div class="p-6 flex flex-col gap-6">
                <!-- TextField: Name -->
                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-semibold leading-normal">
                        Nombre de la Localidad
                    </label>
                    <div class="relative">
                        <input
                            class="form-input flex w-full rounded-lg text-[#111218]  focus:ring-2 focus:ring-[#506dfb]/20 border border-[#dbdde6] bg-white  focus:border-[#506dfb] h-12 placeholder:text-[#5f668c] px-4 text-base font-normal transition-all"
                            placeholder="Ej. Madrid Central" type="text" value="" />
                    </div>
                    <p class="text-xs text-gray-500 ">Introduce el nombre descriptivo del campo o
                        pabellón.</p>
                </div>
                <!-- SelectField: Province -->
                <div class="flex flex-col gap-2">
                    <label class="text-[#111218] text-sm font-semibold leading-normal">
                        Provincia
                    </label>
                    <div class="relative">
                        <select
                            class="form-select flex w-full rounded-lg text-[#111218]  focus:ring-2 focus:ring-[#506dfb]/20 border border-[#dbdde6]  bg-white focus:border-[#506dfb] h-12 px-4 text-base font-normal appearance-none transition-all">
                            <option disabled selected value="">Seleccionar provincia...</option>
                            <option value="madrid">Madrid</option>
                            <option value="barcelona">Barcelona</option>
                            <option value="valencia">Valencia</option>
                            <option value="sevilla">Sevilla</option>
                            <option value="zaragoza">Zaragoza</option>
                            <option value="malaga">Málaga</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <span class="material-symbols-outlined">keyboard_arrow_down</span>
                        </div>
                    </div>
                </div>
                <!-- Information Box -->
                <div class="bg-[#506dfb]/5 rounded-lg p-4 border border-[#506dfb]/10 flex gap-3">
                    <span class="material-symbols-outlined text-[#506dfb] text-xl">info</span>
                    <p class="text-xs text-gray-600 leading-relaxed">
                        Esta localidad estará disponible para asignar partidos y entrenamientos de la liga de Fútbol 11.
                    </p>
                </div>
            </div>
            <!-- Modal Footer (Button Group) -->
            <div class="flex items-center justify-end gap-3 px-6 py-5 bg-gray-50 border-t border-gray-100 ">
                <button @click="closeModalLocalidad"
                    class="flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-white border border-gray-200 dark:border-gray-700 text-[#111218]  text-sm font-bold transition-all hover:bg-gray-100 ">
                    <span>Cancelar</span>
                </button>
                <button
                    class="flex min-w-35 cursor-pointer items-center justify-center rounded-lg h-11 px-6 bg-[#506dfb] text-white text-sm font-bold shadow-lg shadow-[#506dfb]/20 transition-all hover:bg-[#506dfb]/90 active:scale-95">
                    <span>Guardar Localidad</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    showModalLocalidad: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits(['closeModalLocalidad']);
const closeModalLocalidad = () => {
    emit('closeModalLocalidad');
};

</script>