<script setup>
import { IconBallFootball } from "@tabler/icons-vue";
import { IconEye } from "@tabler/icons-vue";
import { IconCalendar } from "@tabler/icons-vue";
import { IconCardsFilled } from "@tabler/icons-vue";
import { IconPlus } from "@tabler/icons-vue";
import { IconUser } from "@tabler/icons-vue";
import { IconUsersGroup } from "@tabler/icons-vue";
import { IconTrophyFilled } from "@tabler/icons-vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tipo = ref(1);
onMounted(() => {
  tipo.value = 1;
});

const navigateTo = (path) => {
  router.push(path);
};
</script>

<template>
  <div class="flex-1 overflow-hidden">
    <main class="flex flex-col h-full overflow-hidden relative">
      <div class="overflow-y-auto p-8 pt-6">
        <div class="max-w-350 mx-auto flex flex-col gap-8">
          <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              class="flex flex-col gap-2 rounded-2xl p-6 border border-gray-50 bg-white shadow-sm hover:/50 transition-colors"
            >
              <div class="flex justify-between items-start">
                <p class="text-[#1c1c0d] text-base font-medium leading-normal">
                  Ligas Activas
                </p>
                <IconTrophyFilled />
              </div>
              <div class="flex items-end gap-2 mt-2">
                <p
                  class="text-[#1c1c0d] tracking-tight text-3xl font-bold leading-tight"
                >
                  12
                </p>
                <p
                  class="text-[#078816] text-sm font-bold mb-1 bg-[#078816]/10 px-2 py-0.5 rounded-full"
                >
                  +2%
                </p>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 rounded-2xl p-6 border border-gray-50 bg-white shadow-sm hover:/50 transition-colors"
            >
              <div class="flex justify-between items-start">
                <p class="text-[#1c1c0d] text-base font-medium leading-normal">
                  Clubes Totales
                </p>
                <IconUsersGroup />
              </div>
              <div class="flex items-end gap-2 mt-2">
                <p
                  class="text-[#1c1c0d] tracking-tight text-3xl font-bold leading-tight"
                >
                  {{ totalClubes }}
                </p>
                <p
                  class="text-[#078816] text-sm font-bold mb-1 bg-[#078816]/10 px-2 py-0.5 rounded-full"
                >
                  +5%
                </p>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 rounded-2xl p-6 border border-gray-50 bg-white shadow-sm hover:/50 transition-colors"
            >
              <div class="flex justify-between items-start">
                <p class="text-[#1c1c0d] text-base font-medium leading-normal">
                  Partidos Jugados
                </p>
                <IconBallFootball />
              </div>
              <div class="flex items-end gap-2 mt-2">
                <p
                  class="text-[#1c1c0d] tracking-tight text-3xl font-bold leading-tight"
                >
                  856
                </p>
                <p
                  class="text-[#078816] text-sm font-bold mb-1 bg-[#078816]/10 px-2 py-0.5 rounded-full"
                >
                  +12%
                </p>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 rounded-2xl p-6 border border-gray-50 bg-white shadow-sm hover:/50 transition-colors"
            >
              <div class="flex justify-between items-start">
                <p class="text-[#1c1c0d] text-base font-medium leading-normal">
                  Jugadores
                </p>
                <IconUser />
              </div>
              <div class="flex items-end gap-2 mt-2">
                <p
                  class="text-[#1c1c0d] tracking-tight text-3xl font-bold leading-tight"
                >
                  {{ totalElements }}
                </p>
                <p
                  class="text-[#078816] text-sm font-bold mb-1 bg-[#078816]/10 px-2 py-0.5 rounded-full"
                >
                  +8%
                </p>
              </div>
            </div>
          </section>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div class="xl:col-span-2 flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <h2 class="text-[#1c1c0d] text-2xl font-bold leading-tight">
                    Resultados Última Jornada
                  </h2>
                  <span
                    class="px-3 py-1 bg-[#9e9d47]/20 text-black text-xs font-bold rounded-full"
                    >Jornada 12</span
                  >
                </div>
                <button
                  class="text-sm font-bold text-[#1c1c0d] hover:text-black transition-colors"
                >
                  Ver histórico
                </button>
              </div>
              <div
                class="overflow-hidden rounded-3xl border-gray-50 bg-white shadow-sm"
              >
                <div class="overflow-x-auto">
                  <table class="w-full min-w-175">
                    <thead class="bg-[#f8f8f5] border-b">
                      <tr>
                        <th
                          class="px-6 py-4 text-left text-black text-sm font-semibold uppercase tracking-wider w-24"
                        >
                          Fecha
                        </th>
                        <th
                          class="px-6 py-4 text-center text-black text-sm font-semibold uppercase tracking-wider"
                        >
                          Encuentro
                        </th>
                        <th
                          class="px-6 py-4 text-center text-black text-sm font-semibold uppercase tracking-wider w-32"
                        >
                          Marcador
                        </th>
                        <th
                          class="px-6 py-4 text-right text-black text-sm font-semibold uppercase tracking-wider w-32"
                        >
                          Detalles
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[#3b82f6]">
                      <tr class="group hover:bg-[#fcfcf8] transition-colors">
                        <td class="px-6 py-4 text-sm font-medium text-black">
                          12 Oct
                        </td>
                        <td class="px-6 py-4">
                          <div class="flex items-center justify-center gap-4">
                            <div
                              class="flex items-center gap-3 justify-end w-[40%]"
                            >
                              <span class="text-[#1c1c0d] font-bold text-base"
                                >Leones FC</span
                              >
                              <div
                                class="size-10 rounded-full bg-gray-100 bg-center bg-cover border border-gray-200"
                                style="
                                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPCdho_hO7ZmbqTyw73T0ndNCoT3Md4GGdASf1Szhv044k_l7vYBJEWYQEDfcb8eu-YDtBJraVyp_QLKTu0ddnicq5fq5oS_Q_TchsjWb3DzWO7mIpGhtHAjcezFGu4s3GrYAsTrDuAZEi3_Q7CIj7y6DebnjCRm5a44-YqkpmAo9-vcqfz8yfI-07-xA__hgUlQBcCVRHTnNwOk3RQrg6WbZxNC1HVqxfnn--uSCmHn5jskfOxYNK8GbtE-NlDesqJwmEPIdfK5g');
                                "
                              ></div>
                            </div>
                            <span class="text-black text-xs font-bold">VS</span>
                            <div class="flex items-center gap-3 w-[40%]">
                              <div
                                class="size-10 rounded-full bg-gray-100 bg-center bg-cover border border-gray-200"
                                style="
                                  background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiSmQcOSg7ocnqxLlASBaJXndbbs49HSUTPt8WEiPCs2Fvu1R4aQGNJtNwW_BA3Tf5suOZoqAXEgriJEUY0VXayE64Uuw7aZy9pcNEYe-V-T7JwFUUdcTAFtqzoKqL-UPU0b6oR1tXSM8cS-ML9MlZSw0FtO_EerKckUCqzSCcD2h2cVgdyM7R0ct3iSGdKv0pvBfonowcmOjVGsmhroJP9xtezmNbLIncyjyjtsDtvrpPjtNoCzRIjLae0MWvz4DsaS3GAmSxIVs');
                                "
                              ></div>
                              <span class="text-[#1c1c0d] font-bold text-base"
                                >Tigres</span
                              >
                            </div>
                          </div>
                        </td>
                        <td class="px-6 py-4 text-center">
                          <span
                            class="inline-block px-4 py-2 bg-primary/20 rounded-lg text-xl font-bold text-[#1c1c0d]"
                            >3 - 1</span
                          >
                        </td>
                        <td class="px-6 py-4 text-right">
                          <button
                            class="text-black hover:text-primary transition-colors"
                          >
                            <IconEye />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <h2 class="text-[#1c1c0d] text-xl font-bold leading-tight">
                  Acciones Rápidas
                </h2>
                <div class="grid grid-cols-2 gap-3">
                  <button
                    @click.prevent="navigateTo('/nuevo-club')"
                    class="flex flex-col items-center justify-center p-4 rounded-2xl bg-white border-gray-50 hover:border-primary transition-all group shadow-sm h-32"
                  >
                    <div
                      class="size-10 rounded-full bg-[#f4f4e6] flex items-center justify-center mb-2 group-hover:bg-primary transition-colors"
                    >
                      <IconPlus />
                    </div>
                    <span class="text-sm font-bold text-[#1c1c0d] text-center"
                      >Registrar club</span
                    >
                  </button>
                  <button
                    @click.prevent="navigateTo('/nuevo-partido')"
                    class="flex flex-col items-center justify-center p-4 rounded-2xl border-gray-50 bg-white border hover:border-primary transition-all group shadow-sm h-32"
                  >
                    <div
                      class="size-10 rounded-full bg-[#f4f4e6] flex items-center justify-center mb-2 group-hover:bg-primary transition-colors"
                    >
                      <IconCalendar />
                    </div>
                    <span class="text-sm font-bold text-[#1c1c0d] text-center"
                      >Programar Partido</span
                    >
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                  <h2 class="text-[#1c1c0d] text-xl font-bold leading-tight">
                    Expulsiones Recientes
                  </h2>
                  <span
                    class="text-[#d32f2f] text-xs font-bold bg-[#d32f2f]/10 px-2 py-1 rounded-full"
                    >Jornada 12</span
                  >
                </div>
                <div
                  class="flex flex-col gap-3 rounded-3xl bg-white p-4 border border-gray-50 shadow-sm min-h-75"
                >
                  <div
                    class="flex items-start gap-4 p-3 bg-red-50 rounded-2xl border border-red-100"
                  >
                    <div
                      class="size-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 border border-red-200"
                    >
                      <IconCardsFilled />
                    </div>
                    <div class="flex flex-col">
                      <div class="flex justify-between items-start">
                        <p class="text-sm text-[#1c1c0d] font-bold">
                          Carlos Ruiz
                        </p>
                        <span
                          class="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full"
                          >Roja Directa</span
                        >
                      </div>
                      <p class="text-xs text-black mb-1">
                        Tigres (vs Leones FC)
                      </p>
                      <p class="text-xs text-[#1c1c0d] italic">
                        "Agresión a un contrario sin disputa del balón"
                      </p>
                    </div>
                  </div>

                  <button
                    class="mt-auto w-full py-3 text-center text-sm font-bold text-black hover:text-[#1c1c0d] transition-colors border-t border-[#f4f4e6]"
                  >
                    Ver acta completa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
