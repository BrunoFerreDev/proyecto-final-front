<template>
    <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h3 class="text-base font-bold text-[#111218] flex items-center gap-2">
            <IconLineDashed />
            Tabla de Posiciones
        </h3>
        <button class="text-sm text-[#0d7ff2] font-medium hover:underline">
            Ver Reglas
        </button>
    </div>
    <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
            <thead class="bg-gray-50 text-xs uppercase font-semibold">
                <tr>
                    <th class="px-4 py-3 text-center w-12">#</th>
                    <th class="px-4 py-3 w-64">Club</th>
                    <th class="px-4 py-3 text-center" title="Partidos Jugados">
                        PJ
                    </th>
                    <th class="px-4 py-3 text-center" title="Ganados">G</th>
                    <th class="px-4 py-3 text-center" title="Empatados">E</th>
                    <th class="px-4 py-3 text-center" title="Perdidos">P</th>
                    <th class="px-4 py-3 text-center hidden sm:table-cell" title="Goles Favor">
                        GF
                    </th>
                    <th class="px-4 py-3 text-center hidden sm:table-cell" title="Goles Contra">
                        GC
                    </th>
                    <th class="px-4 py-3 text-center" title="Diferencia de Gol">
                        DG
                    </th>
                    <th class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/50 dark:bg-blue-900/10">
                        Pts
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                <!-- Row 1 -->
                <tr class="hover:bg-gray-50transition-colors">
                    <td class="px-4 py-3 text-center border-l-4 border-green-500 font-medium">
                        1
                    </td>
                    <td class="px-4 py-3 font-semibold text-gray-900 flex items-center gap-3">
                        Real Madrid FC
                    </td>
                    <td class="px-4 py-3 text-center">5</td>
                    <td class="px-4 py-3 text-center">4</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center">0</td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        12
                    </td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        3
                    </td>
                    <td class="px-4 py-3 text-center text-green-600 font-medium">
                        +9
                    </td>
                    <td class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                        13
                    </td>
                </tr>
                <!-- Row 2 -->
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-4 py-3 text-center border-l-4 border-green-500 font-medium">
                        2
                    </td>
                    <td class="px-4 py-3 font-semibold text-gray-900 flex items-center gap-3">
                        Atlético Sur
                    </td>
                    <td class="px-4 py-3 text-center">5</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        10
                    </td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        5
                    </td>
                    <td class="px-4 py-3 text-center text-green-600 font-medium">
                        +5
                    </td>
                    <td class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                        10
                    </td>
                </tr>
                <!-- Row 3 -->
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-4 py-3 text-center border-l-4 border-transparent font-medium text-gray-500">
                        3
                    </td>
                    <td class="px-4 py-3 font-medium text-gray-700 flex items-center gap-3">
                        Dep. Libertad
                    </td>
                    <td class="px-4 py-3 text-center">5</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        8
                    </td>
                    <td class="px-4 py-3 text-center hidden sm:table-cell text-gray-500">
                        6
                    </td>
                    <td class="px-4 py-3 text-center text-green-600 font-medium">
                        +2
                    </td>
                    <td class="px-4 py-3 text-center font-bold text-[#0d7ff2] bg-blue-50/30 dark:bg-blue-900/10">
                        8
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>