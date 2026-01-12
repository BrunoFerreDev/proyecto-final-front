<template>
  <div class="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-slate-200 bg-slate-50">
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 w-16 text-center">
              #
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Jugador
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              DNI / F.Identificación
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contacto
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Estado
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
              Categoria
            </th>
            <th class="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Ver Jugador
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
                <div class="size-10 rounded-full bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100"
                  data-alt="Portrait of Lionel Messi" style="
                    background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDovp7mxYQkLqGwCsAbie74xiTSXOg4W9U8UgO-Ux0pK6x-LqHEe4fvyOuXLAH615FUJcVO_zhLknnnxwCehjwNMIVQ8cjKK23D7G77Q004P_4CSkUaNhBpepIcf11YeXNoKd_ZBUsvow2gYn31zs5_hMexIzLdxOhZB-KUQXIY5DL3rIpczygGxoJj2tJAx8c8nItzfWOCNn4q4pc0wbkPLvbWOVo52-7PDMQhmL9yVwZVf5aIVI6VJALDXGlBmMWVdCmQiWspdVY');
                  "></div>
                <div>
                  <p class="font-bold text-slate-900 text-sm">
                    {{ jugador.apellido }}
                  </p>
                  <p class="text-xs text-slate-500">{{ jugador.nombre }}</p>
                </div>
              </div>
            </td>
            <td class="py-4 px-6">
              <span class="inline-flex items-center px-2.5 py-1 rounded-md text-md font-medium border border-slate-200">
                {{ new Intl.NumberFormat("es-AR").format(jugador.dni) }}
              </span>
            </td>
            <td class="py-4 px-6">
              <span class="text-sm text-slate-600">{{ jugador.telefono }}</span>
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center gap-2">
                <span class="size-2 rounded-full bg-emerald-500"></span>
                <span class="text-sm font-medium text-emerald-700">Activo</span>
              </div>
            </td>
            <td class="py-4 px-6 text-right">
              {{ categoria }}
            </td>
            <td class="py-4 px-6 mx-auto w-12 text-center">
              <button @click="navigateTo(jugador.idPersona)"
                class="text-blue-600 hover:text-blue-800">Ver</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination -->
    <Pagination :page="page" :totalPages="totalPages" :totalElements="totalElements" :size="size" :tipo="'Jugadores'"
      @page-change="(n) => $emit('page-change', n)" />
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import Pagination from "../Pagination.vue";
const router = useRouter();
const props = defineProps({
  jugadores: {
    type: Array,
    required: true,
  },
  categoria: {
    type: String,
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
const navigateTo = (idJugador) => {
    router.push({
        name: `ficha-jugador`,
        params: { idPersona: idJugador }
    });
}
</script>
