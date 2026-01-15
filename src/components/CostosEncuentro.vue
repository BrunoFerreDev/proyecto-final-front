<template>
    <div class="bg-white rounded-xl border border-[#dbdde6]  overflow-hidden shadow-sm">
        <div class="bg-[#516dfb]/5 px-6 py-4 border-b border-[#dbdde6] ">
            <h2 class="text-lg font-bold flex items-center gap-2">
                <span class="material-symbols-outlined text-[#516dfb]">payments</span>
                3. Desglose de Costos por Oficial
            </h2>
        </div>
        <div class="p-0 overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-gray-50 border-b border-[#dbdde6] ">
                        <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Oficial</th>
                        <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Honorarios</th>
                        <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Traslado</th>
                        <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Viáticos</th>
                        <th class="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                            Subtotal</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#dbdde6]">
                    <tr class="hover:bg-[#516dfb]/5 transition-colors">
                        <td class="px-3 py-2">
                            <div class="flex items-center gap-3">
                                <div
                                    class="size-8 rounded-full bg-[#516dfb] flex items-center justify-center text-white text-[10px] font-bold">
                                    AP</div>
                                <div>
                                    <p class="text-sm font-bold">Principal</p>
                                    <p class="text-[10px] text-gray-500 truncate max-w-[120px]">A. Mateu
                                        Lahoz</p>
                                </div>
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="relative">
                                <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                                <input
                                    class="w-24 pl-5 py-1 text-sm border-gray-300 rounded focus:ring-[#516dfb] focus:border-[#516dfb] border border-solid"
                                    type="number" value="600" />
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="relative">
                                <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                                <input
                                    class="w-24 pl-5 py-1 text-sm border-gray-300 rounded focus:ring-[#516dfb] focus:border-[#516dfb] border border-solid"
                                    type="number" value="150" />
                            </div>
                        </td>
                        <td class="px-6 py-4">
                            <div class="relative">
                                <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                                <input
                                    class="w-24 pl-5 py-1 text-sm border-gray-300 rounded focus:ring-[#516dfb] focus:border-[#516dfb] border border-solid"
                                    type="number" value="200" />
                            </div>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <span class="text-sm font-bold text-[#516dfb]">$ 950.00</span>
                        </td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr class="bg-[#516dfb]/5 font-bold">
                        <td class="px-6 py-4 text-xs uppercase text-gray-500">Otros Operativos</td>
                        <td class="px-6 py-4 text-right text-xs text-gray-400 italic font-normal" colspan="3">Gastos
                            administrativos y varios</td>
                        <td class="px-6 py-4 text-right">
                            <div class="relative inline-block">
                                <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                                <input
                                    class="w-24 pl-5 py-1 text-sm border-gray-300 rounded focus:ring-[#516dfb] focus:border-[#516dfb] border border-solid"
                                    type="number" value="150" />
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
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