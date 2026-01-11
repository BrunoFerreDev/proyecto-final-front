<template>
  <div
    class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
  >
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-slate-200 bg-slate-50">
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 w-16 text-center"
            >
              #
            </th>
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Jugador
            </th>
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Posición
            </th>
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Nacionalidad
            </th>
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500"
            >
              Estado
            </th>
            <th
              class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right"
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="jugador in jugadores" :key="jugador.idPersona">
            <td class="py-4 px-6 text-slate-900 font-bold text-center text-lg">
              #
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center gap-3">
                <div
                  class="size-10 rounded-full bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100"
                  data-alt="Portrait of Lionel Messi"
                  style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDovp7mxYQkLqGwCsAbie74xiTSXOg4W9U8UgO-Ux0pK6x-LqHEe4fvyOuXLAH615FUJcVO_zhLknnnxwCehjwNMIVQ8cjKK23D7G77Q004P_4CSkUaNhBpepIcf11YeXNoKd_ZBUsvow2gYn31zs5_hMexIzLdxOhZB-KUQXIY5DL3rIpczygGxoJj2tJAx8c8nItzfWOCNn4q4pc0wbkPLvbWOVo52-7PDMQhmL9yVwZVf5aIVI6VJALDXGlBmMWVdCmQiWspdVY');
                  "
                ></div>
                <div>
                  <p class="font-bold text-slate-900 text-sm">
                    {{ jugador.apellido }}
                  </p>
                  <p class="text-xs text-slate-500">{{ jugador.nombre }}</p>
                </div>
              </div>
            </td>
            <td class="py-4 px-6">
              <span
                class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-rose-100 text-rose-700 border border-rose-200"
              >
                {{ new Intl.NumberFormat("es-AR").format(jugador.dni) }}
              </span>
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center gap-2">
                <div
                  class="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm"
                  data-alt="Argentina Flag"
                >
                  <div
                    class="absolute inset-x-0 top-0 h-1/3 bg-[#75AADB]"
                  ></div>
                  <div
                    class="absolute inset-x-0 bottom-0 h-1/3 bg-[#75AADB]"
                  ></div>
                  <div
                    class="absolute inset-x-0 top-1/3 h-1/3 bg-white flex items-center justify-center"
                  >
                    <div class="size-1 bg-[#F4B32E] rounded-full"></div>
                  </div>
                </div>
                <span class="text-sm text-slate-600">{{
                  jugador.telefono
                }}</span>
              </div>
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-emerald-500"></span>
                <span class="text-sm font-medium text-emerald-700">Activo</span>
              </div>
            </td>
            <td class="py-4 px-6 text-right">
              <div
                class="flex items-center justify-end gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <button
                  class="p-2 text-slate-400 hover:text-[#0d7ff2] hover:bg-[#0d7ff2]/10 rounded-lg transition-colors"
                  title="Editar"
                >
                  <span class="material-symbols-outlined text-[20px]"
                    >edit</span
                  >
                </button>
                <button
                  class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Eliminar"
                >
                  <span class="material-symbols-outlined text-[20px]"
                    >delete</span
                  >
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <Pagination
      :page="page"
      :totalPages="totalPages"
      :totalElements="totalElements"
      :size="size"
      :tipo="'Jugadores'"
      @page-change="(n) => $emit('page-change', n)"
    />
  </div>
</template>
<script setup>
import Pagination from "../Pagination.vue";

const props = defineProps({
  jugadores: {
    type: Array,
    required: true,
  },
  // Items por página
  // Nuevas props para paginación
  page: { type: Number, default: 0 }, // Página actual (0-indexed)
  totalPages: { type: Number, default: 0 }, // Total de páginas
  totalElements: { type: Number, default: 0 }, // Total de items
  size: { type: Number, default: 10 },
});

// Definimos el evento para avisar al padre
const emit = defineEmits(["page-change"]);
</script>
