<script setup>
import { IconTrash } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';
import Pagination from '../Pagination.vue';
import { IconTrashFilled } from '@tabler/icons-vue';
import { IconPhone } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    arbitros: {
        type: Array,
        required: true,
    },
    // Items por página
    // Nuevas props para paginación
    page: { type: Number, default: 0 },         // Página actual (0-indexed)
    totalPages: { type: Number, default: 0 },   // Total de páginas
    totalElements: { type: Number, default: 0 },// Total de items
    size: { type: Number, default: 10 },

});

// Definimos el evento para avisar al padre
const emit = defineEmits(['page-change']);
const navigateTo = (idArbitro) => {
    router.push({
        name: 'ficha-arbitro', // Asegúrate de que este nombre coincida en tu router
        params: {
            idPersona: idArbitro
        }
    });
}
</script>

<template>
    <table class="w-full text-left border-collapse">
        <thead>
            <tr class="border-b border-[#e7edf4] bg-gray-50/50/50">
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c] ">
                    Árbitro</th>
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c] ">
                    Licencia / ID</th>
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c] ">
                    Contacto</th>
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c] ">
                    Exp.</th>
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c] ">
                    Estado</th>
                <th class="py-4 px-6 text-xs font-bold uppercase tracking-wider text-[#49739c]  text-right">
                    Acciones</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-[#e7edf4]" v-if="arbitros.length > 0" v-for="arbitro in arbitros"
            :key="arbitro.idPersona">
            <!-- Row 1 -->
            <tr class="hover:bg-gray-50  transition-colors group">
                <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                        <div class="size-10 rounded-full bg-cover bg-center shrink-0"
                            data-alt="Portrait of referee Carlos Ruiz"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9tzs7IDvSusm8KXJvJPequESfqQBJiTTbgeAPkib2R7Nv9t9ai5jKHERbStBCCrlt_87Z_kZRJvFdDCGEf7LDhCoZYD2tQOJP3T-4AavZGGHc5kaYEokrMWXCZcbyit5KZl9ZSWkMG32m5XPDyCAf4VSjwMBmyEAFqMKEPa_PdD_arf742OgZq7Hvdi6G73iPukbePV3DV1nPFjf7o73KyIQjiIRo4JLCSSS3Ojq-3xgkp_xPU8jP1Th9M-Xu1v7rjRb6PWgYINY");'>
                        </div>
                        <div>
                            <p class="font-bold text-[#0d141c]">{{ arbitro.apellido }}</p>
                            <p class="text-xs text-[#49739c] ">{{ arbitro.nombre }}</p>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-[#0d141c]">D.N.I - {{ arbitro.dni }}</span>
                        <span class="text-xs text-[#49739c] ">Fecha de Nacimiento: {{ arbitro.fechaNacimiento }}</span>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-2 text-sm text-[#0d141c]">
                            <IconMail />
                            {{ arbitro.email ? arbitro.email : 'Sin Email' }}
                        </div>
                        <div class="flex items-center gap-2 text-sm text-[#0d141c]">
                            <IconPhone />
                            {{ arbitro.telefono }}
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <span class="text-sm font-medium text-[#0d141c]">12 años</span>
                </td>
                <td class="py-4 px-6">
                    <span
                        class="inline-flex items-center gap-1.5 rounded-full bg-green-50  px-2 py-1 text-xs font-medium text-green-700 border border-green-100 ">
                        <span class="size-1.5 rounded-full bg-green-600"></span>
                        Activo
                    </span>
                </td>
                <td class="py-4 px-6 text-right">
                    <div
                        class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button @click="navigateTo(arbitro.idPersona)"
                            class="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-[#49739c] hover:text-[#0d7ff2] transition-colors"
                            title="Editar">
                            <IconEdit />
                        </button>
                        <button
                            class="size-8 flex items-center justify-center rounded-lg hover:bg-red-50  text-[#49739c] hover:text-red-600 transition-colors"
                            title="Eliminar">
                            <IconTrashFilled />
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
    <Pagination :page="page" :totalPages="totalPages" :totalElements="totalElements" :size="size" :tipo="'Arbitros'"
        @page-change="(n) => $emit('page-change', n)" />
</template>