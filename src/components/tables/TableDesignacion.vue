<template>
    <table class="w-full text-left border-collapse bg-white">
        <caption class="font-bold text-slate-800 py-2 px-2  text-left text-lg">Designaciones de Arbitros</caption>
        <thead class="bg-slate-50">
            <tr>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500">Árbitro / Rol</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Arancel
                </th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Traslado
                </th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Subtotal
                </th>
            </tr>
        </thead>
        <tbody class="divide-y divide-slate-100" v-if="designaciones.length > 0">
            <tr class="hover:bg-slate-50/50 transition-colors" v-for="designado in designaciones"
                :key="designado.idDesignacion">
                <td class="px-6 py-4">
                    <div class="flex items-center gap-4">
                        <div class="relative shrink-0">
                            <img :src="designado.arbitro.fotoUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxgEGM_7CmcvM68t3zJCpKJgrJdVTY3XUn1b4NuU04rw4DlEANkpSdWdJUVJLuO5XUkDN5e3NltC90DdWXMOiFiriKlenRnjd-rLLx7AGDJIlldcDpg0qtKquY3ch4RRUJvtS1nM9cZYiy6P5gfWH7cT4PcsiQt0IxljFo0PGIxNpR0cIz-KL07TG8hFd55iFoEsg3-JLxrJ9WktnxJdlAcIGFFjZes788dkfB03RQvWZoRzSFiH3xoSJxNfSGeFQtY7-6nDs1bBw'"
                                alt="Referee Avatar"
                                class="w-10 h-10 rounded-full border border-slate-200 object-cover" />
                            <div
                                class="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-slate-100">
                                <span
                                    class="material-symbols-outlined text-[#1f44f9] text-[12px] font-bold">verified</span>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-900 leading-tight">
                                {{ designado.arbitro.nombre }} {{ designado.arbitro.apellido }}
                            </h4>
                            <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                {{ designado.rol }}
                            </p>
                        </div>
                    </div>
                </td>

                <td class="px-6 py-4 text-right">
                    <span class="font-medium text-slate-700">
                        {{ designado.costoArancel.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' }) }}
                    </span>
                </td>

                <td class="px-6 py-4 text-right">
                    <span class="font-medium text-slate-700">
                        {{ designado.costoTraslado.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' }) }}
                    </span>
                </td>

                <td class="px-6 py-4 text-right">
                    <span class="font-black text-[#1f44f9]">
                        {{ (designado.costoArancel + designado.costoTraslado).toLocaleString('es-Ar', {
                            style: 'currency', currency:
                                'ARS'
                        }) }}
                    </span>
                </td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="4" class="px-6 py-4 text-center text-slate-500">
                    No hay designaciones para este partido.
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
const props = defineProps({
    designaciones: {
        type: Array,
        required: true
    }
})
</script>