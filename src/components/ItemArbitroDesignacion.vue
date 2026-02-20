<template>
    <div class="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
        <table class="w-full text-left border-collapse bg-white">
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
            <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50/50 transition-colors">
                    <td class="px-6 py-4">
                        <div class="flex items-center gap-4">
                            <div class="relative flex-shrink-0">
                                <img :src="arbitro.fotoUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxgEGM_7CmcvM68t3zJCpKJgrJdVTY3XUn1b4NuU04rw4DlEANkpSdWdJUVJLuO5XUkDN5e3NltC90DdWXMOiFiriKlenRnjd-rLLx7AGDJIlldcDpg0qtKquY3ch4RRUJvtS1nM9cZYiy6P5gfWH7cT4PcsiQt0IxljFo0PGIxNpR0cIz-KL07TG8hFd55iFoEsg3-JLxrJ9WktnxJdlAcIGFFjZes788dkfB03RQvWZoRzSFiH3xoSJxNfSGeFQtY7-6nDs1bBw'"
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
                                    {{ arbitro.nombre }} {{ arbitro.apellido }}
                                </h4>
                                <p class="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                    {{ rol }}
                                </p>
                            </div>
                        </div>
                    </td>

                    <td class="px-6 py-4 text-right">
                        <span class="font-medium text-slate-700">
                            {{ costoArancel.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' }) }}
                        </span>
                    </td>

                    <td class="px-6 py-4 text-right">
                        <span class="font-medium text-slate-700">
                            {{ costoTraslado.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' }) }}
                        </span>
                    </td>

                    <td class="px-6 py-4 text-right">
                        <span class="font-black text-[#1f44f9]">
                            {{ (costoArancel + costoTraslado).toLocaleString('es-Ar', {
                                style: 'currency', currency:
                            'ARS' }) }}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
const props = defineProps({
    arbitro: {
        type: Object,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    costoArancel: {
        type: Number,
        required: true
    }, costoTraslado: {
        type: Number,
    },
})
</script>