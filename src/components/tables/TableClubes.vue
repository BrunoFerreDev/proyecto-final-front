<template>
    <div class="bg-white  border border-slate-200  rounded-xl overflow-hidden shadow-sm">
        <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-slate-50  border-b border-slate-200 ">
                        <th class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider w-16">
                            Escudo</th>
                        <th class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider min-w-[200px]">
                            Equipo</th>
                        <th class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider min-w-[200px]">
                            Ciudad</th>
                        <th class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider min-w-[180px]">
                            Jugadores</th>
                        <th class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider w-32">
                            Estado</th>
                        <th
                            class="px-6 py-4 text-xs font-bold text-slate-500  uppercase tracking-wider w-32 text-right">
                            Acciones</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100" v-if="clubs.length > 0" v-for="club in clubs"
                    :key="club.idClub">
                    <!-- Row 1 -->
                    <tr class="hover:bg-slate-50  transition-colors group">
                        <td class="px-6 py-4">
                            <div
                                class="size-10 bg-white  rounded-full border border-slate-100  flex items-center justify-center overflow-hidden p-1">
                                <div class="w-full h-full bg-contain bg-center bg-no-repeat"
                                    data-alt="Blue and white shield crest for Atletico Central"
                                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD77RNV4qHuK7sDZ7QSqvPLKRpKSoQ6bXBeQd2GZCe0jRfP56TIKQnB8IaMG73pD4yxzXBJkKO9RaWgJ1ttT9rI-igdOzbPGIWq4gYHxbcsoizf6BCTvToPDHxk5L3w7q6f4rZVt4hr7hhZFo5L_cChA12vf5mhvlFYycbne9TqCqnsGTVFiWyntv81940ht434MmqLXf6k3g3GPd70Be2ampEpsoJLZoSBkF7srm_QhGecfnDYqmMxMhu6td31H_Ao4AmXJEvyKvo');">
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex flex-col">
                                <span class="text-sm font-bold text-slate-900 ">{{ club.nombre }}</span>
                                <span class="text-xs text-slate-400">ID: {{ club.idClub }}</span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-2">
                                <div class="size-6 rounded-full bg-slate-200  bg-cover bg-center"
                                    data-alt="Portrait of manager Juan Perez"
                                    style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaPki45_TNOnxsN26zmYRcuAOSwUpC2vD4KWih5i6dVGWTDwztnIsXBpUsiUzqnaqAGBL7U7dkcEby2NugShFSCjq1J2cfzvclaYR9Ldc-UpDNWAsP2UQ0q4hi1OiXOjNA-heRk9cO_Z-jTetA7Rvfh6XiUdEHUUp2PP68v0HFqcOCz_FlRbpWGvlpb5jt-lr3Zy3_SDuQAM-7GpCC52gwLYuwdvZqdMcd6g0OfQx35MIJns89sGYo--YIL1_sxJufAM4ODKcHtns')">
                                </div>
                                <span class="text-sm text-slate-600 ">{{ club.ciudad }}</span>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="w-full max-w-[140px]">
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="font-medium text-slate-700 ">22/25</span>
                                    <span class="text-emerald-600  font-bold">88%</span>
                                </div>
                                <div class="w-full bg-slate-100  rounded-full h-1.5">
                                    <div class="bg-emerald-500 h-1.5 rounded-full" style="width: 88%"></div>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <span
                                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800   border border-emerald-200 ">
                                {{ club.isActivo ? 'Activo' : 'Inactivo' }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <div
                                class="flex items-center justify-end gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    class="p-2 text-slate-400 hover:text-[#0d7ff2] hover:bg-[#0d7ff2]/5 rounded-lg transition-colors"
                                    title="Gestionar Jugadores">
                                    <IconUsersGroup />
                                </button>
                                <button
                                    class="p-2 text-slate-400 hover:text-[#0d7ff2] hover:bg-[#0d7ff2]/5 rounded-lg transition-colors"
                                    title="Editar Equipo">
                                    <IconEdit />
                                </button>
                                <button
                                    class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50  rounded-lg transition-colors"
                                    title="Eliminar">
                                    <IconTrash />
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>
                <tbody class="divide-y divide-gray-100 dark:divide-gray-700" v-else>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-6 py-4 text-center" colspan="7">
                            <span class="text-sm text-slate-500 ">No se encontraron resultados</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Pagination -->
        <div class="flex items-center justify-between px-6 py-4 bg-white border-t border-slate-200">

            <span class="text-sm text-slate-500">
                Mostrando
                <span class="font-bold text-slate-900">{{ rangeStart }}-{{ rangeEnd }}</span>
                de
                <span class="font-bold text-slate-900">{{ totalElements }}</span>
                Clubes
            </span>

            <div class="flex gap-2">
                <button @click="$emit('page-change', page - 1)" :disabled="page === 0"
                    class="flex items-center justify-center px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Anterior
                </button>

                <template v-for="(p, index) in visiblePages" :key="index">

                    <button v-if="p !== '...'" @click="$emit('page-change', p)"
                        class="flex items-center justify-center px-3 py-1.5 text-sm font-medium border rounded-lg transition-colors"
                        :class="[
                            p === page
                                ? 'text-white bg-[#0d7ff2] border-[#0d7ff2] hover:bg-blue-600'
                                : 'text-slate-600 bg-white border-slate-300 hover:bg-slate-50'
                        ]">
                        {{ p + 1 }}
                    </button>

                    <span v-else class="flex items-center justify-center px-2 py-1.5 text-sm text-slate-400">
                        ...
                    </span>

                </template>

                <button @click="$emit('page-change', page + 1)" :disabled="page >= totalPages - 1"
                    class="flex items-center justify-center px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Siguiente
                </button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { IconTrash } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';
import { IconUsersGroup } from '@tabler/icons-vue';
import { computed } from 'vue';
const props = defineProps({
    clubs: {
        type: Array,
        required: true,
    },
    // Nuevas props para paginación
    page: { type: Number, default: 0 },         // Página actual (0-indexed)
    totalPages: { type: Number, default: 0 },   // Total de páginas
    totalElements: { type: Number, default: 0 },// Total de items
    size: { type: Number, default: 10 }         // Items por página
});
// Definimos el evento para avisar al padre
const emit = defineEmits(['page-change']);

// Cálculos visuales para "Mostrando 1-10 de 50"
const rangeStart = computed(() => {
    if (props.totalElements === 0) return 0;
    return (props.page * props.size) + 1;
});

const rangeEnd = computed(() => {
    const end = (props.page + 1) * props.size;
    return end > props.totalElements ? props.totalElements : end;
});

// Lógica inteligente para mostrar botones limitados
const visiblePages = computed(() => {
    const total = props.totalPages;
    const current = props.page;
    const delta = 1; // Cuántos botones mostrar a los lados del actual
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 0; i < total; i++) {
        // Siempre mostramos:
        // 1. La primera página (0)
        // 2. La última página (total - 1)
        // 3. El rango alrededor de la página actual (current - delta a current + delta)
        if (i === 0 || i === total - 1 || (i >= current - delta && i <= current + delta)) {
            range.push(i);
        }
    }

    // Insertar los puntos suspensivos (...) donde haya huecos
    range.forEach(i => {
        if (l) {
            if (i - l === 2) {
                // Si el hueco es de 1 solo número (ej: 1 y 3), metemos el 2 en vez de puntos
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                // Si el hueco es grande, metemos el marcador de puntos
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    });

    return rangeWithDots;
});
</script>
