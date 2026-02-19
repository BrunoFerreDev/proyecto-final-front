<script setup>
import { defineProps } from 'vue';

// Definimos las props esperando un Array
const props = defineProps({
    sanciones: {
        type: Array,
        required: true,
        default: () => []
    }
});

// Función para formatear la fecha (Ej: 18 Feb 2026)
const formatearFecha = (fechaString) => {
    if (!fechaString) return '';
    const fecha = new Date(fechaString + 'T00:00:00'); // Asegura compatibilidad zona horaria
    return new Intl.DateTimeFormat('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(fecha);
};

// Determina el color del icono (tarjeta) según el texto
const getColorTarjeta = (tipo) => {
    if (!tipo) return 'bg-slate-400';
    const t = tipo.toLowerCase();
    if (t.includes('roja')) return 'bg-red-500';
    if (t.includes('amarilla')) return 'bg-yellow-400';
    return 'bg-slate-400';
};

// Determina los estilos del badge de estado
const getClasesEstado = (estado) => {
    if (estado === 'ACTIVA') {
        return 'bg-red-50 text-red-600 border-red-100';
    }
    if (estado === 'CUMPLIDA') {
        return 'bg-green-50 text-green-600 border-green-100';
    }
    return 'bg-slate-50 text-slate-600 border-slate-100';
};

// Determina el color del punto dentro del estado
const getClasePuntoEstado = (estado) => {
    if (estado === 'ACTIVA') return 'bg-red-600';
    if (estado === 'CUMPLIDA') return 'bg-green-600';
    return 'bg-slate-400';
}
</script>

<template>
    <div class="overflow-x-auto rounded-lg border border-slate-200">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-slate-50 border-b border-slate-200">
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Codigo Sancion
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Fecha Hecho
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Tipo Sancion
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Duración
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Descripcion
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Estado
                    </th>
                    <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                        Acciones
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 bg-white">

                <tr v-for="sancion in sanciones" :key="sancion.id" class="hover:bg-slate-50 transition-colors group">

                    <td class="py-4 px-6 text-sm text-slate-600">
                        <div class="flex flex-col">
                            <span class="text-xs font-mono bg-slate-100 px-1 rounded w-fit text-slate-500 mb-1">
                                {{ sancion.codigo.slice(0, 20) }}{{ sancion.codigo.length > 20 ? '...' : '' }}
                            </span>
                            <span class="text-xs text-slate-500">{{ sancion.tipoEntidad }}</span>
                        </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-slate-900 whitespace-nowrap">
                        {{ formatearFecha(sancion.fechaHecho) }}
                    </td>

                    <td class="py-4 px-6 text-sm text-slate-600">
                        <div class="flex flex-col">
                            <span class="font-medium text-slate-900">{{ sancion.tipoSancion }}</span>
                            <!-- <span class="text-xs text-slate-400">{{ sancion.subtitulo }}</span> -->
                        </div>
                    </td>

                    <td class="py-4 px-6 text-sm font-medium text-slate-900">
                        {{ sancion.cantidad }}
                    </td>
                    
                    <td class="py-4 px-6">
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-4 rounded-sm shadow-sm" :class="getColorTarjeta(sancion.tipoSancion)"
                                :title="sancion.tipoSancion">
                            </div>
                            <span class="text-sm text-slate-700 capitalize">
                                {{ sancion.descripcionGeneral }}
                            </span>
                        </div>
                    </td>
                    <td class="py-4 px-6">
                        <span
                            class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold border"
                            :class="getClasesEstado(sancion.estado)">
                            <span class="size-1.5 rounded-full" :class="getClasePuntoEstado(sancion.estado)"></span>
                            {{ sancion.estado }}
                        </span>
                    </td>

                    <td class="py-4 px-6 text-right">
                        <button
                            class="text-slate-400 hover:text-[#0d7ff2] transition-colors p-2 rounded-full hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                        </button>
                    </td>
                </tr>

                <tr v-if="sanciones.length === 0">
                    <td colspan="7" class="py-8 text-center text-slate-400 text-sm">
                        No se encontraron sanciones registradas.
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>