<template>
    <div class="space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
                <h3 class="text-lg font-bold text-slate-900 ">Tabla de Posiciones</h3>
                <span
                    class="px-2 py-0.5 rounded bg-slate-100  text-[10px] font-bold text-slate-500 uppercase">Actualizado
                    hace 2h</span>
            </div>

        </div>
        <div class="overflow-x-auto scrollbar-hide">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr
                        class="text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 ">
                        <th class="py-3 pl-4 w-12 text-center">Pos</th>
                        <th class="py-3">Equipo</th>
                        <th class="py-3 text-center w-12">PJ</th>
                        <th class="py-3 text-center w-12">G</th>
                        <th class="py-3 text-center w-12">E</th>
                        <th class="py-3 text-center w-12">P</th>
                        <th class="py-3 text-center w-12">GF</th>
                        <th class="py-3 text-center w-12">GC</th>
                        <th class="py-3 text-center w-12">DG</th>
                        <th class="py-3 text-center w-16 text-[#1f44f9]">PTS</th>
                        <th class="py-3 pr-4 text-center w-32">Forma</th>
                    </tr>
                </thead>
                <tbody class="text-sm font-medium">
                    <!-- Top Team -->
                    <tr class="border-b border-slate-50 /50 hover:bg-slate-50/50  transition-colors">
                        <td class="py-4 pl-4 text-center">
                            <div
                                class="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-bold mx-auto">
                                1</div>
                        </td>
                        <td class="py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-100 p-1 flex items-center justify-center">
                                    <img class="w-full h-full object-contain" data-alt="Team crest of FC Los Galacticos"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOAi8eY8SilXYxufx251XWXDiIIOFO2LgrNd_-5oEIIoGivB7pESm51KZ7ja-kIgFGvUmV0lQ_SZOWffk3xvGO5ccmg8ljhZh9QPbV6W6sBau3OgBD1OdkQiUe95FwM4-tzbJ50S9U93rONnYzPrNJ7_aJfhuclU-ZBqCjpVMFlVguVlNDTLdK1GtcCLemqIKFGaY8BImBYaMxzy9YuBh2GSpoWnfs9jtY85lcnJbnfmLK6xgY4t9Cifd5DTw0lgCNSyi7EjtdBgU" />
                                </div>
                                <span class="font-bold text-slate-900 ">FC Los
                                    Galácticos</span>
                            </div>
                        </td>
                        <td class="py-4 text-center text-slate-600 ">12</td>
                        <td class="py-4 text-center text-slate-600 ">10</td>
                        <td class="py-4 text-center text-slate-600 ">1</td>
                        <td class="py-4 text-center text-slate-600 ">1</td>
                        <td class="py-4 text-center text-slate-600 ">28</td>
                        <td class="py-4 text-center text-slate-600 ">8</td>
                        <td class="py-4 text-center font-bold text-emerald-500">+20</td>
                        <td class="py-4 text-center font-black text-[#1f44f9] text-lg">31</td>
                        <td class="py-4 pr-4">
                            <div class="flex justify-center gap-1">
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-slate-300 text-[9px] text-white flex items-center justify-center font-bold">E</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                            </div>
                        </td>
                    </tr>
                    <!-- Second Team -->
                    <tr class="border-b border-slate-50 /50 hover:bg-slate-50/50  transition-colors">
                        <td class="py-4 pl-4 text-center">
                            <div
                                class="w-6 h-6 rounded-full bg-slate-200  text-slate-600  flex items-center justify-center text-[11px] font-bold mx-auto">
                                2</div>
                        </td>
                        <td class="py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-100 p-1 flex items-center justify-center">
                                    <img class="w-full h-full object-contain" data-alt="Team crest of Athletic City FC"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZLGOm99K6LjDfi0hSnlMG8K32XJv1EmqhSe1C3Mc9nAOKf9UCceqU5fASkde3XdjZgYMYO5tTMrLleghoaefMmtIJ_ULF8N1N7hGE4-vaP3IO6hWDeBuebxr4q8-t3ai23Ga_YuQFgivHAs2QelSBeVl74ll10E7tqYf0Gv2bjggBplbPeQbyiiQyEDBJz54tZjNAvVEVp5PqbcJmdmy5RWLdxc6suThgpA_K9FQVX7GfFHMJJ-OPsfOzAukapSx7GiwfwS0kX78" />
                                </div>
                                <span class="font-bold text-slate-900 ">Athletic City
                                    FC</span>
                            </div>
                        </td>
                        <td class="py-4 text-center text-slate-600 ">12</td>
                        <td class="py-4 text-center text-slate-600 ">9</td>
                        <td class="py-4 text-center text-slate-600 ">2</td>
                        <td class="py-4 text-center text-slate-600 ">1</td>
                        <td class="py-4 text-center text-slate-600 ">24</td>
                        <td class="py-4 text-center text-slate-600 ">10</td>
                        <td class="py-4 text-center font-bold text-emerald-500">+14</td>
                        <td class="py-4 text-center font-black text-[#1f44f9] text-lg">29</td>
                        <td class="py-4 pr-4">
                            <div class="flex justify-center gap-1">
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-slate-300 text-[9px] text-white flex items-center justify-center font-bold">E</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                            </div>
                        </td>
                    </tr>
                    <!-- Third Team -->
                    <tr class="border-b border-slate-50 /50 hover:bg-slate-50/50  transition-colors">
                        <td class="py-4 pl-4 text-center">
                            <div
                                class="w-6 h-6 rounded-full bg-slate-200  text-slate-600  flex items-center justify-center text-[11px] font-bold mx-auto">
                                3</div>
                        </td>
                        <td class="py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-100 p-1 flex items-center justify-center">
                                    <img class="w-full h-full object-contain" data-alt="Team crest of Sportivo del Este"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXFHljFQT9oCeezw4PLh2eNTC83EiTiFEgRPknQVozOi0FAYcHu4BbaCb16uASdDqqujICVmtOMmuZ2ILTxkBUCS1rg3darm50-F4u-fh-YFBy-2VhU_bcU0cFkPUPrbK_hgDkGzuqgwVWrhL38ki9no20bRIjzV-2w3RRZwN8y52oFW3YBoyRL30g4lgya0RyezF3biVoQutUxsOajD6DJGAaScYOl6XWnRpL_MVVznAkVNaGaABJS8Gqm3JSBs6pEVZ57sx43o4" />
                                </div>
                                <span class="font-bold text-slate-900 ">Sportivo del
                                    Este</span>
                            </div>
                        </td>
                        <td class="py-4 text-center text-slate-600 ">12</td>
                        <td class="py-4 text-center text-slate-600 ">8</td>
                        <td class="py-4 text-center text-slate-600 ">2</td>
                        <td class="py-4 text-center text-slate-600 ">2</td>
                        <td class="py-4 text-center text-slate-600 ">21</td>
                        <td class="py-4 text-center text-slate-600 ">12</td>
                        <td class="py-4 text-center font-bold text-emerald-500">+9</td>
                        <td class="py-4 text-center font-black text-[#1f44f9] text-lg">26</td>
                        <td class="py-4 pr-4">
                            <div class="flex justify-center gap-1">
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">G</span>
                            </div>
                        </td>
                    </tr>
                    <!-- Last Team (Example for zone) -->
                    <tr class="border-b border-slate-50 /50 hover:bg-slate-50/50  transition-colors">
                        <td class="py-4 pl-4 text-center">
                            <div
                                class="w-6 h-6 rounded-full bg-red-100  text-red-600 flex items-center justify-center text-[11px] font-bold mx-auto">
                                20</div>
                        </td>
                        <td class="py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-full bg-slate-100 p-1 flex items-center justify-center">
                                    <img class="w-full h-full object-contain"
                                        data-alt="Team crest of Rayo Vallecano Juniors"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNoYLB7_Va8tzVyWDo1d4ZYMHL5Vp_IxKsRWhvLL8yolCP3HUF2q0kKR92Qp_O7xWB-MLGwf5GNNlDkW7XAnvQiwMdzxQDo8HJ5-dWH77YOJjdQXyAURoahhmrojoiY03L_JDGSClwb-ljsNxJtlvWitmOWE5fB6WUTvR2vwk2WJCGUFBCz-QXlDCQRKAH8rl6oY-_GGfMjFPftH4PO2QNUZxRObQfmLpwjjDUzOz6543hdjNWU56b62EpC39Yn3gjWx2XwQJ7Z8" />
                                </div>
                                <span class="font-bold text-slate-900 ">Rayo Juniors</span>
                            </div>
                        </td>
                        <td class="py-4 text-center text-slate-600 ">12</td>
                        <td class="py-4 text-center text-slate-600 ">1</td>
                        <td class="py-4 text-center text-slate-600 ">2</td>
                        <td class="py-4 text-center text-slate-600 ">9</td>
                        <td class="py-4 text-center text-slate-600 ">6</td>
                        <td class="py-4 text-center text-slate-600 ">29</td>
                        <td class="py-4 text-center font-bold text-red-500">-23</td>
                        <td class="py-4 text-center font-black text-[#1f44f9] text-lg">5</td>
                        <td class="py-4 pr-4">
                            <div class="flex justify-center gap-1">
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-slate-300 text-[9px] text-white flex items-center justify-center font-bold">E</span>
                                <span
                                    class="w-5 h-5 rounded-full bg-red-500 text-[9px] text-white flex items-center justify-center font-bold">P</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-between items-center pt-4 border-t border-slate-100 ">
            <div class="flex gap-4">
                <div class="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    Clasificación Liguilla
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span class="w-3 h-3 rounded-full bg-red-400"></span>
                    Descenso
                </div>
            </div>

        </div>
    </div>
</template>