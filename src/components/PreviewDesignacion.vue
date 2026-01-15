<template>
    <div class="lg:col-span-4 space-y-6">
        <div class="bg-[#516dfb] text-white rounded-xl p-6 shadow-lg shadow-[#516dfb]/20 relative overflow-hidden">
            <div class="relative z-10">
                <p class="text-white/70 text-sm font-medium mb-1">Resumen del Costo Total</p>
                <h3 class="text-4xl font-black mb-6">$ 2,800.00</h3>
                <div class="space-y-3 mb-6 border-t border-white/20 pt-4">
                    <div class="flex justify-between items-center text-xs opacity-90">
                        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                            Total Honorarios</span>
                        <span class="font-bold">$ 1,400.00</span>
                    </div>
                    <div class="flex justify-between items-center text-xs opacity-90">
                        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                            Total Logística</span>
                        <span class="font-bold">$ 450.00</span>
                    </div>
                    <div class="flex justify-between items-center text-xs opacity-90">
                        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                            Total Viáticos</span>
                        <span class="font-bold">$ 800.00</span>
                    </div>
                    <div class="flex justify-between items-center text-xs opacity-90">
                        <span class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-white"></span>
                            Gastos Operativos</span>
                        <span class="font-bold">$ 150.00</span>
                    </div>
                </div>
                <div class="flex flex-col gap-3">
                    <button
                        class="w-full bg-white text-[#516dfb] hover:bg-gray-100 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-lg">verified</span>
                        Confirmar Programación
                    </button>
                    <button
                        class="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg font-bold text-sm transition-all">
                        Guardar Cambios
                    </button>
                </div>
            </div>
            <div class="absolute -right-10 -bottom-10 opacity-10">
                <span class="material-symbols-outlined text-[160px]">payments</span>
            </div>
        </div>
        <div class="bg-yellow-50 border-yellow-200 rounded-xl p-4 flex gap-3">
            <span class="material-symbols-outlined text-yellow-600">warning</span>
            <div>
                <p class="text-xs font-bold text-yellow-800 uppercase mb-1">Nota de Validación</p>
                <p class="text-sm text-yellow-700">Los costos individuales impactan
                    directamente en las liquidaciones mensuales de cada árbitro federado.</p>
            </div>
        </div>
        <div class="bg-white rounded-xl border border-[#dbdde6] p-6 shadow-sm">
            <h4 class="text-sm font-bold mb-4 flex items-center gap-2 uppercase text-gray-400 tracking-wider">
                <span class="material-symbols-outlined text-sm">settings</span>
                Ajustes de Facturación
            </h4>
            <div class="space-y-4">
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input class="rounded border-gray-300 text-[#516dfb] focus:ring-[#516dfb] h-5 w-5"
                        type="checkbox" />
                    <span class="text-sm text-gray-600  group-hover:text-[#516dfb] transition-colors">Generar
                        órdenes de pago automáticas</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer group">
                    <input class="rounded border-gray-300 text-[#516dfb] focus:ring-[#516dfb] h-5 w-5"
                        type="checkbox" />
                    <span class="text-sm text-gray-600  group-hover:text-[#516dfb] transition-colors">Retención
                        de impuestos aplicable (10%)</span>
                </label>
            </div>
        </div>
    </div>
</template>
<style scoped>
input,
select {
    background-color: transparent;
    border: 1px solid #dbdde6;
}
</style>