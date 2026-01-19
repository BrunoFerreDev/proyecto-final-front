<template>
    <main class="flex-1 overflow-y-auto px-4 md:px-10 py-8">
        <div class="max-w-7xl mx-auto space-y-8">
            <!-- Page Heading -->
            <div class="flex flex-col gap-2">
                <h1 class="text-[#111218]  text-3xl font-black leading-tight tracking-tight">
                    Actualización de Aranceles Arbitrales</h1>
                <p class="text-[#5f668c]  text-base">Gestione y actualice los honorarios del cuerpo
                    arbitral por categoría o torneo.</p>
            </div>
            <!-- Main Action Form Card -->
            <section class="bg-white  border   rounded-xl overflow-hidden shadow-sm">
                <div class="p-6 border-b  ">
                    <h2 class="text-[#111218]  text-lg font-bold">1. Selección de Competencia</h2>
                    <div class="mt-4 max-w-md">
                        <label class="block text-[#111218]  text-sm font-medium mb-2">Categoría o
                            Competencia</label>
                        <select
                            class="form-input w-full rounded-lg  border  focus:border-[#516dfb] focus:ring-[#516dfb] h-12 text-sm">
                            <option value="">Seleccione una categoría (ej. Primera División, Sub-20...)</option>
                            <option value="1">Primera División - Apertura 2024</option>
                            <option value="2">Primera División - Reservas</option>
                            <option value="3">Categoría Sub-20</option>
                            <option value="4">Categoría Sub-17</option>
                            <option value="5">Liga Femenina A</option>
                        </select>
                    </div>
                </div>
                <div class="p-6">
                    <h2 class="text-[#111218]  text-lg font-bold mb-6">2. Definición de Montos (ARS)</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- Referee Input -->
                        <div class="space-y-2" v-for="arancel in aranceles" :key="arancel.idArancelArbitral">
                            <label class="block text-xs font-bold uppercase tracking-wider text-[#5f668c] ">{{
                                arancel.rol }}
                            </label>
                            <div class="relative">
                                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-[#516dfb] font-bold">$</span>
                                <input
                                    class="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#516dfb]/20 focus:border-[#516dfb] focus:ring-0 bg-[#516dfb]/5 text-lg font-bold text-[#111218] "
                                    placeholder="0.00" step="0.01" type="number" />
                            </div>
                            <p class=" text-xs text-[#5f668c] ">Monto actual:{{ arancel.monto.toLocaleString('es-AR', {
                                style: 'currency', currency: 'ARS'
                            }) }}</p>
                        </div>

                    </div>
                </div>
                <div class="p-6 bg-[#f8f9fc] flex justify-end gap-3">
                    <button
                        class="px-6 py-2.5 rounded-lg border   text-[#111218]  font-bold text-sm hover:bg-white transition-colors">Descartar</button>
                    <button
                        class="bg-[#516dfb] text-white px-8 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg shadow-[#516dfb]/20">
                        <span class="material-symbols-outlined text-xl">save</span>
                        Actualizar Aranceles
                    </button>
                </div>
            </section>
        </div>
    </main>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const aranceles = ref(null)

const fetchAranceles = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/costos/obtener/aranceles')
        const data = response.data;
        console.log(data);
        const orderByRol = data.sort((a, b) => {
            const rolOrder = {
                "PRINCIPAL": 1,
                "ASISTENTE_1": 2,
                "ASISTENTE_2": 3,
                "CUARTO":4
                // Agrega más roles si es necesario
            };
            return rolOrder[a.rol] - rolOrder[b.rol];
        });
        aranceles.value = orderByRol
    } catch (error) {
        throw error
    }
}
onMounted(() => {
    fetchAranceles()
})

</script>