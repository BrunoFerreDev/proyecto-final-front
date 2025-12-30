<script setup lang="ts">
import { IconTrash } from '@tabler/icons-vue';
import { IconEdit } from '@tabler/icons-vue';

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
        <tbody class="divide-y divide-[#e7edf4]">
            <!-- Row 1 -->
            <tr class="hover:bg-gray-50  transition-colors group">
                <td class="py-4 px-6">
                    <div class="flex items-center gap-3">
                        <div class="size-10 rounded-full bg-cover bg-center shrink-0"
                            data-alt="Portrait of referee Carlos Ruiz"
                            style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9tzs7IDvSusm8KXJvJPequESfqQBJiTTbgeAPkib2R7Nv9t9ai5jKHERbStBCCrlt_87Z_kZRJvFdDCGEf7LDhCoZYD2tQOJP3T-4AavZGGHc5kaYEokrMWXCZcbyit5KZl9ZSWkMG32m5XPDyCAf4VSjwMBmyEAFqMKEPa_PdD_arf742OgZq7Hvdi6G73iPukbePV3DV1nPFjf7o73KyIQjiIRo4JLCSSS3Ojq-3xgkp_xPU8jP1Th9M-Xu1v7rjRb6PWgYINY");'>
                        </div>
                        <div>
                            <p class="font-bold text-[#0d141c]">Carlos Ruiz</p>
                            <p class="text-xs text-[#49739c] ">Madrid, ES</p>
                        </div>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-[#0d141c]">FIFA Pro</span>
                        <span class="text-xs text-[#49739c] ">ID: 884-219</span>
                    </div>
                </td>
                <td class="py-4 px-6">
                    <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-2 text-sm text-[#0d141c]">
                            <IconMail />
                            carlos.ruiz@liga.com
                        </div>
                        <div class="flex items-center gap-2 text-sm text-[#0d141c]">
                            <IconPhone />
                            +34 654 999 123
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
                        <button
                            class="size-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-[#49739c] hover:text-[#0d7ff2] transition-colors"
                            title="Editar">
                            <IconEdit />
                        </button>
                        <button
                            class="size-8 flex items-center justify-center rounded-lg hover:bg-red-50  text-[#49739c] hover:text-red-600 transition-colors"
                            title="Eliminar">
                            <IconTrash />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- Pagination Footer -->
    <div class="flex items-center justify-between px-6 py-4 border-t border-[#e7edf4] bg-white ">
        <p class="text-sm text-[#49739c] ">
            Mostrando <span class="font-bold text-[#0d141c]">1-4</span> de <span
                class="font-bold text-[#0d141c]">24</span> árbitros
        </p>
        <div class="flex gap-2">
            <button
                class="h-9 px-3 rounded-lg border border-[#e7edf4] flex items-center text-sm font-medium text-[#0d141c] hover:bg-gray-50  disabled:opacity-50 disabled:cursor-not-allowed">
                Anterior
            </button>
            <button
                class="h-9 w-9 rounded-lg bg-[#0d7ff2] text-white text-sm font-bold flex items-center justify-center">1</button>
            <button
                class="h-9 w-9 rounded-lg border border-[#e7edf4] text-[#0d141c] text-sm font-medium flex items-center justify-center hover:bg-gray-50 ">2</button>
            <button
                class="h-9 w-9 rounded-lg border border-[#e7edf4] text-[#0d141c] text-sm font-medium flex items-center justify-center hover:bg-gray-50 ">3</button>
            <button
                class="h-9 px-3 rounded-lg border border-[#e7edf4] flex items-center text-sm font-medium text-[#0d141c] hover:bg-gray-50 ">
                Siguiente
            </button>
        </div>
    </div>
</template>