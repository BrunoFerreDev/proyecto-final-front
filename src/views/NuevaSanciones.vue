<script setup lang="ts">
import { IconShirtSport } from '@tabler/icons-vue';
import { IconSearch } from '@tabler/icons-vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { IconHash } from '@tabler/icons-vue';
import { IconFileDownloadFilled } from '@tabler/icons-vue';
import { IconInfoCircle } from '@tabler/icons-vue';
import { IconCurrencyDollar } from '@tabler/icons-vue';
import { IconLock } from '@tabler/icons-vue';
import { IconShieldCheckeredFilled } from '@tabler/icons-vue';
import { IconUsersGroup } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';

</script>

<template>
    <div class="flex-1 flex flex-col h-full overflow-y-auto bg-background-light relative">
        <div class="max-w-[1200px] w-full mx-auto px-6 py-8 md:px-12 flex flex-col flex-1">
            <!-- Page Heading -->
            <div class="flex flex-col gap-2 mb-8">
                <h1 class="text-[#0d141c]  text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                    Registrar Nueva Sanción</h1>
                <p class="text-[#49739c] text-base font-normal leading-normal max-w-2xl">Complete el formulario para
                    registrar una infracción disciplinaria. La información se actualizará automáticamente en la tabla de
                    posiciones y perfiles.</p>
            </div>
            <!-- Content Card -->
            <div class="bg-white rounded-xl shadow-sm border border-[#e7edf4] flex flex-col overflow-hidden">
                <!-- Tabs -->
                <div class="border-b border-[#cedbe8] px-6">
                    <div class="flex gap-8 overflow-x-auto">
                        <button
                            class="group flex flex-col items-center justify-center border-b-[3px] border-primary text-[#0d141c]  gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px]">
                            <IconUser />
                            <span class="text-sm font-bold tracking-wide">Jugador</span>
                        </button>
                        <button
                            class="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-[#cedbe8] text-[#49739c] hover:text-[#0d141c]  gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <IconShieldCheckeredFilled />
                            <span class="text-sm font-medium tracking-wide">Club</span>
                        </button>
                        <button
                            class="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-[#cedbe8] text-[#49739c] hover:text-[#0d141c]  gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <IconUsersGroup />
                            <span class="text-sm font-medium tracking-wide">Cuerpo Técnico</span>
                        </button>
                        <button
                            class="group flex flex-col items-center justify-center border-b-[3px] border-transparent hover:border-[#cedbe8] text-[#49739c] hover:text-[#0d141c]  gap-2 pb-3 pt-4 px-2 focus:outline-none min-w-[80px] transition-all">
                            <IconShirtSport />
                            <span class="text-sm font-medium tracking-wide">Árbitro</span>
                        </button>
                    </div>
                </div>
                <!-- Form Section -->
                <div class="p-6 md:p-8 flex flex-col gap-6">
                    <!-- Entity Search Section -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Buscar Jugador</span>
                            <div class="relative group">
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg pl-4 pr-12 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-[#49739c]"
                                    placeholder="Nombre, apellido o ID..." type="text" />
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c]">
                                    <IconSearch />
                                </div>
                            </div>
                            <p class="text-xs text-[#49739c]">Seleccione el jugador de la lista desplegable</p>
                        </label>
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Equipo
                                (Lectura)</span>
                            <div class="relative">
                                <input
                                    class="w-full bg-[#e7edf4]/50 text-[#49739c] border border-[#cedbe8] rounded-lg px-4 h-12 cursor-not-allowed"
                                    disabled type="text" value="Seleccionar jugador para ver equipo..." />
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c]">
                                    <IconLock />
                                </div>
                            </div>
                        </label>
                    </div>
                    <hr class="border-[#e7edf4] my-2" />
                    <!-- Incident Details -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Fecha del
                                Incidente</span>
                            <div class="relative">
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                    type="date" />
                            </div>
                        </label>
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Tipo de
                                Infracción</span>
                            <div class="relative">
                                <select
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                                    <option disabled selected value="--">Seleccionar motivo...</option>
                                    <option value="yellow">Acumulación Amarillas</option>
                                    <option value="red_direct">Roja Directa</option>
                                    <option value="red_double">Doble Amarilla</option>
                                    <option value="conduct">Conducta Antideportiva</option>
                                    <option value="aggression">Agresión</option>
                                </select>
                                <div
                                    class="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-[#49739c] pointer-events-none">
                                    <IconChevronDown />
                                </div>
                            </div>
                        </label>
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Sanción
                                (Partidos)</span>
                            <div class="relative">
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg px-4 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    min="0" placeholder="0" type="number" />
                            </div>
                        </label>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">Multa Económica
                                (Opcional)</span>
                            <div class="relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-[#49739c]">
                                    <IconCurrencyDollar />
                                </div>
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg pl-10 pr-4 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="0.00" type="number" />
                            </div>
                        </label>
                        <label class="flex flex-col gap-2">
                            <span class="text-[#0d141c] text-sm font-semibold">ID del Partido
                                (Opcional)</span>
                            <div class="relative">
                                <div
                                    class="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-[#49739c]">
                                    <IconHash />
                                </div>
                                <input
                                    class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg pl-10 pr-4 h-12 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="#12345" type="text" />
                            </div>
                        </label>
                    </div>
                    <!-- Description Area -->
                    <label class="flex flex-col gap-2">
                        <span class="text-[#0d141c] text-sm font-semibold">Descripción /
                            Observaciones</span>
                        <textarea
                            class="w-full bg-[#f8fafc] text-[#0d141c]  border border-[#cedbe8] rounded-lg p-4 h-32 resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm leading-relaxed"
                            placeholder="Describa los detalles del incidente para el informe oficial..."></textarea>
                    </label>
                    <!-- Action Buttons -->
                    <div
                        class="flex flex-col-reverse md:flex-row justify-end gap-4 pt-4 mt-2 border-t border-[#e7edf4]">
                        <button
                            class="px-6 py-3 rounded-lg border border-[#cedbe8]  text-[#49739c] font-bold text-sm hover:bg-[#f0f4f8] transition-colors">
                            Cancelar
                        </button>
                        <button
                            class="px-8 py-3 rounded-lg bg-[#0d7ff2] hover:bg-blue-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                            <IconFileDownloadFilled />
                            Registrar Sanción
                        </button>
                    </div>
                </div>
            </div>
            <!-- Helper Note -->
            <div class="mt-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 ">
                <IconInfoCircle />
                <div class="flex flex-col gap-1">
                    <p class="text-sm font-bold text-[#0d141c] ">Nota Importante</p>
                    <p class="text-sm text-[#49739c]">Las sanciones registradas se aplicarán
                        inmediatamente a los partidos siguientes. Asegúrese de verificar el número de partidos antes de
                        guardar.</p>
                </div>
            </div>
        </div>
    </div>
</template>