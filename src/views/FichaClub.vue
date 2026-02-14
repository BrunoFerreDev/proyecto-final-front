<template>
  <div class="flex-1 overflow-y-auto p-8 space-y-8 max-w-7xl mx-auto w-full">
    <div class="bg-white p-8 rounded-xl border border-[#e5e7eb] shadow-sm">
      <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div
          class="h-40 w-40 bg-slate-50  rounded-2xl border border-[#e5e7eb]  flex items-center justify-center p-6 shadow-inner">
          <img alt="Escudo del Club" class="w-full h-full object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxlq6EZlzWasE7aUPSMJQbqxxfr3KZJZV70uItMt5Y-ukJMnkD5AOcnMxUe06PhwBFH_xV1tl3AdqKWCkeUOz6qxPbZ3_ej_yKggMEH1IqBie_C4JBbm-gZPz6dB40DUSdMGNHxcagUxvv3qQyFgJp9x3fJC1CtY6qkrxfQpvVoZrtMrzMJVSPxuY2KOoZfUttnl2E3th0UiVvsCtjEznK6FMCLzx9T68432snD6KTv8awFhjf-M4qWq52WkHIWU2qbVQmpKOIrU" />
        </div>
        <div class="flex-1 text-center md:text-left">
          <div class="flex flex-col md:flex-row md:items-center gap-4 mb-2">
            <h2 class="text-4xl font-extrabold text-[#111218] ">
              {{ club.nombre }}
            </h2>
            <span
              class="px-3 py-1 bg-[#516dfb]/10 text-[#516dfb] text-xs font-bold rounded-full border border-[#516dfb]/20 self-center md:self-auto">CLUB
              PROFESIONAL</span>
          </div>
          <p class="text-[#5f668c] text-lg font-medium italic mb-6">
            "El Rayo de la Ciudad" • Fundado: {{ club.fundacion }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
            <div class="flex items-center gap-3 px-4 py-3 bg-background-light  rounded-lg border border-[#e5e7eb] ">
              <span class="material-symbols-outlined text-[#516dfb]">location_on</span>
              <div>
                <p class="text-[10px] uppercase font-bold text-[#5f668c] leading-none mb-1">
                  Ubicación
                </p>
                <p class="text-sm font-bold">{{ club.ciudad }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 shrink-0">
          <button
            class="w-full px-6 py-2.5 bg-[#516dfb] text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#516dfb]/20">
            <span class="material-symbols-outlined text-sm">edit</span> Editar
            Perfil
          </button>
          <button
            class="w-full px-6 py-2.5 bg-white  text-[#5f668c] text-sm font-bold rounded-lg border border-[#e5e7eb]  flex items-center justify-center gap-2 hover:bg-background-light ">
            <span class="material-symbols-outlined text-sm">share</span>
            Compartir
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div class="lg:col-span-5 flex flex-col gap-6">
        <div class="bg-white  rounded-xl border border-[#e5e7eb] overflow-hidden h-full">
          <div class="p-6 border-b border-[#e5e7eb] flex justify-between items-center bg-slate-50/50 /50">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[#516dfb]">assignment_ind</span>
              <h3 class="font-bold text-[#111218]  uppercase tracking-wider text-sm">
                Cuerpo Técnico
              </h3>
            </div>
            <span class="text-[10px] font-bold text-[#5f668c] bg-white  px-2 py-1 rounded border border-[#e5e7eb] ">5
              MIEMBROS</span>
          </div>
          <div class="p-6 space-y-6">
            <div class="flex items-center gap-4 group p-3 -m-3 hover:bg-[#516dfb]/5 rounded-xl transition-colors">
              <div class="h-16 w-16 rounded-full border-2 border-[#516dfb]/20 p-0.5 overflow-hidden">
                <img class="w-full h-full object-cover rounded-full bg-slate-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoG-GnLfc0bJ8aQ9N6Nt-8loAV-dBRbmy8ogRXvnrY8dwAUdy2rChwE94xsPSyh69qATdqWhP-Z7rq0xH1mpi1vLtqi92OZFNk-jv86RBUJdX0sUNHVoi-m37uyAUhbhNBs6bOJEKV_RQ6aGLnwY4tdl519Yy1FIgZEtptqcNAzltWFviBhUpQ69IoIKb6pnlsnmy9x0j-k_ecF9xMXD8Fo6fDmixV17pNVscKENVGy28hx0sWKC-c9EC1992NAYv6d6sg8RIVGCs" />
              </div>
              <div>
                <p class="text-base font-bold text-[#111218]  group-hover:text-[#516dfb] transition-colors">
                  Marco Rivera
                </p>
                <p class="text-xs font-bold text-[#516dfb] uppercase tracking-wide">
                  Director Técnico
                </p>
                <p class="text-[10px] text-[#5f668c] mt-1">
                  Desde 2022 • Nacionalidad: Argentina
                </p>
              </div>
            </div>
            <div class="space-y-4 pt-4 border-t border-[#e5e7eb] ">
              <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full overflow-hidden">
                  <img class="w-full h-full object-cover bg-slate-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_DYVeaLdsY6PRENQWu6eUMqPjgY-Byt3AV69iABmIq-YXnr243W41ot2JySYAjPdjI5rWijdvcZ0ZfGygAFU3GBmeO1vUtehRzaT8Kdvc8L6equgDu1H7YHLLzDPxFLl9NUIZ83gFIdYVAqCPwFPVIzHGD1OmtpCPTPsHVsEElvlnbwj2VuqoN1_qCxAJEL7yFP7G_EmS-5amcGardONhxJJsswxi1-WUhDQuFKAsBOtEljs592ug4W2Hlr73ky0BYHlP4at15U" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-[#111218] ">
                    Adrián Lopez
                  </p>
                  <p class="text-xs text-[#5f668c]">Asistente Técnico</p>
                </div>
                <span class="material-symbols-outlined text-[#e5e7eb] ">info</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full overflow-hidden">
                  <img class="w-full h-full object-cover bg-slate-100"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzxkWV3Iz0Ge7gjbDvoD_bsqPSZ0L-TRa4bEOZPV_coiZSZuIsoOrF1mnk7O5wQ5Oq0esCikfvWkB4cgIQPrk0l45xeGkzoxnsZrO6usGPPe7Sevf2NjCsRsjZOM3D01g9ueSthLovbEsdzE7NU_GD83WTvTloeA1chi_x36MBS_29a3rLdby-4u8Nuclga5szurtB4J5xVA_r8urNrThMYObkaxCN6OftukoTi5qGmyRMNx6OCAH6Tuvkryuey8eJuLOEVU7OVyw" />
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-[#111218] ">
                    Luis Llopis
                  </p>
                  <p class="text-xs text-[#5f668c]">Prep. de Porteros</p>
                </div>
                <span class="material-symbols-outlined text-[#e5e7eb] ">info</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 ">
                  <span class="material-symbols-outlined text-[#5f668c]">person</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-bold text-[#111218] ">
                    Dra. Clara Méndez
                  </p>
                  <p class="text-xs text-[#5f668c]">Servicios Médicos</p>
                </div>
                <span class="material-symbols-outlined text-[#e5e7eb] ">info</span>
              </div>
            </div>
            <button
              class="w-full py-3 text-xs font-bold text-[#5f668c] hover:text-[#516dfb] border-t border-dashed border-[#e5e7eb] mt-2">
              Ver organigrama completo
            </button>
          </div>
        </div>
      </div>
      <div class="lg:col-span-7 space-y-8">
        <div class="bg-white  rounded-xl border border-[#e5e7eb] overflow-hidden">
          <div class="p-6 border-b border-[#e5e7eb] flex justify-between items-center bg-slate-50/50 /50">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[#516dfb]">military_tech</span>
              <h3 class="font-bold text-[#111218]  uppercase tracking-wider text-sm">
                Palmarés Histórico
              </h3>
            </div>
            <a class="text-[#516dfb] text-xs font-bold hover:underline flex items-center gap-1" href="#">
              Galería completa
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
          <div class="p-8">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div class="flex flex-col items-center group">
                <div
                  class="h-24 w-24 bg-yellow-50  rounded-2xl flex items-center justify-center text-yellow-500 mb-4 border border-yellow-200/50 group-hover:scale-105 transition-transform shadow-sm">
                  <span class="material-symbols-outlined text-5xl">emoji_events</span>
                </div>
                <p class="text-3xl font-extrabold text-[#111218]  leading-none">
                  15
                </p>
                <p class="text-[10px] uppercase font-bold text-[#5f668c] mt-2 text-center">
                  Liga Nacional
                </p>
              </div>
              <div class="flex flex-col items-center group">
                <div
                  class="h-24 w-24 bg-slate-50  rounded-2xl flex items-center justify-center text-slate-500 mb-4 border border-slate-200/50 /50 group-hover:scale-105 transition-transform shadow-sm">
                  <span class="material-symbols-outlined text-5xl">rewarded_ads</span>
                </div>
                <p class="text-3xl font-extrabold text-[#111218]  leading-none">
                  8
                </p>
                <p class="text-[10px] uppercase font-bold text-[#5f668c] mt-2 text-center">
                  Copas Locales
                </p>
              </div>
              <div class="flex flex-col items-center group">
                <div
                  class="h-24 w-24 bg-[#516dfb]/5  rounded-2xl flex items-center justify-center text-[#516dfb] mb-4 border border-[#516dfb]/10 group-hover:scale-105 transition-transform shadow-sm">
                  <span class="material-symbols-outlined text-5xl">public</span>
                </div>
                <p class="text-3xl font-extrabold text-[#111218]  leading-none">
                  3
                </p>
                <p class="text-[10px] uppercase font-bold text-[#5f668c] mt-2 text-center">
                  Torneos Continentales
                </p>
              </div>
              <div class="flex flex-col items-center group">
                <div
                  class="h-24 w-24 bg-orange-50  rounded-2xl flex items-center justify-center text-orange-500 mb-4 border border-orange-200/50 group-hover:scale-105 transition-transform shadow-sm">
                  <span class="material-symbols-outlined text-5xl">workspace_premium</span>
                </div>
                <p class="text-3xl font-extrabold text-[#111218]  leading-none">
                  12
                </p>
                <p class="text-[10px] uppercase font-bold text-[#5f668c] mt-2 text-center">
                  Supercopas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white  rounded-xl border border-[#e5e7eb] overflow-hidden">
          <div class="p-6">
            <h4 class="text-xs font-bold text-[#5f668c] uppercase mb-4">
              Últimos Éxitos
            </h4>
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-4 bg-background-light  rounded-lg border-l-4 border-[#516dfb]">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[#516dfb]">stars</span>
                  <div>
                    <p class="text-sm font-bold">Liga de Campeones</p>
                    <p class="text-[10px] text-[#5f668c]">
                      Temporada 2023/2024
                    </p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#516dfb]">Ganador</span>
              </div>
              <div
                class="flex items-center justify-between p-4 bg-background-light  rounded-lg border-l-4 border-slate-300">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-[#5f668c]">emoji_events</span>
                  <div>
                    <p class="text-sm font-bold">Copa del Rey</p>
                    <p class="text-[10px] text-[#5f668c]">
                      Temporada 2022/2023
                    </p>
                  </div>
                </div>
                <span class="text-xs font-bold text-[#5f668c]">Finalista</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const API_BASE_URL = `http://localhost:8080/api`;
const router = useRouter();
const idClub = router.currentRoute.value.params.idClub;
const club = ref({});
onMounted(() => {
  console.log(idClub);
  fetchClub();
})
const fetchClub = async () => {
  // TODO: Implementar llamada a API para obtener club
  try {
    const { data } = await axios.get(
      `${API_BASE_URL}/club/informacion`, {
      params: {
        idClub: idClub
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }
    );
    club.value = data;
    console.log(club.value);

  } catch (error) {
    console.error(error);
  }
};
</script>