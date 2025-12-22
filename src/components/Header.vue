<script setup>
import { IconUsersGroup } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';
import { IconBan } from '@tabler/icons-vue';
import { IconTrophy } from '@tabler/icons-vue';
import { IconCalendar } from '@tabler/icons-vue';
import { IconLayoutDashboard,IconBell, IconSearch } from '@tabler/icons-vue';

</script>

<template>
    <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e9e8ce] :border-[#3a3928] bg-background-light :bg-background- px-8 py-4 shrink-0 z-20">
        <div class="flex items-center gap-12">
            <div class="flex items-center gap-3">
                <div class="bg-center bg-no-repeat bg-cover rounded-full size-10 flex-shrink-0"
                    data-alt="Abstract soccer ball logo design"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXdMDFebob232Jvpxzh6DyfpL6brj2_do9ycliOBPD16NxxiwdSfPYMNmDJ7HttCbCFOsXmP2JjEAsypfFTNGK9ObO4WggE_W4vm_MPZPIGVGH6O36faJJVVqO9_GfX0rHxutmMq1jhxsMrzM3T85O6xuKypF6sHMVCOZARJh5EYbCb9Y8vayfZZyeAqbtL5UiYvAXW0Pi-NJh1nsZFyWc9ZC5eeIVbvKB_QA8TCp4JzaSMhc0rdcQuejrIK8F5IEC4Rb_arvo8ao");'>
                </div>
                <div class="flex flex-col">
                    <h1 class="text-base font-bold leading-tight">Admin Panel</h1>
                    <p class="text-[#9e9d47] text-sm font-normal">Gestión de Fútbol 11</p>
                </div>
            </div>
            <nav class="hidden lg:flex items-center gap-2">
                <a class="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-[#1c1c0d]" href="#">
                    <IconLayoutDashboard />
                    <span class="text-sm font-bold">Dashboard</span>
                </a>
                <RouterLink to="/torneo" class="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#f4f4e6] :hover:bg-[#3a3928] transition-colors text-[#1c1c0d] :text-white"
                    href="#">
                    <IconTrophy />
                    <span class="text-sm font-medium">Torneos</span>
                </RouterLink>
                <a class="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#f4f4e6] :hover:bg-[#3a3928] transition-colors text-[#1c1c0d] :text-white"
                    href="#">
                    <IconUsersGroup />
                    <span class="text-sm font-medium">Equipos</span>
                </a>
                <a class="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#f4f4e6] :hover:bg-[#3a3928] transition-colors text-[#1c1c0d] :text-white"
                    href="#">
                    <IconUser />
                    <span class="text-sm font-medium">Arbitros</span>
                </a>
                <a class="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-[#f4f4e6] :hover:bg-[#3a3928] transition-colors text-[#1c1c0d] :text-white"
                    href="#">
                    <IconBan />
                    <span class="text-sm font-medium">Sanciones</span>
                </a>
            </nav>
        </div>
        <div class="flex items-center gap-6">
            <label class="hidden md:flex flex-col w-full max-w-xs h-10">
                <div
                    class="flex w-full flex-1 items-stretch rounded-full h-full border border-[#e9e8ce] :border-[#3a3928] bg-white :bg-[#1a1a0b] overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-shadow">
                    <div class="text-[#9e9d47] flex items-center justify-center pl-3 bg-transparent">
                        <IconSearch />
                    </div>
                    <input
                        class="flex w-full min-w-0 flex-1 resize-none bg-transparent border-none focus:ring-0 text-[#1c1c0d] :text-white placeholder:text-[#9e9d47] px-3 h-full text-sm font-normal leading-normal"
                        placeholder="Buscar..." value="" />
                </div>
            </label>
            <div class="flex items-center gap-3">
                <button
                    class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#f4f4e6] :bg-[#3a3928] text-[#1c1c0d] :text-white hover:bg-[#e9e8ce] :hover:bg-[#4a4938] transition-colors">
                    <IconBell />
                </button>
                <div class="flex items-center gap-2 pl-2 border-l border-[#e9e8ce] :border-[#3a3928]">
                    <div class="size-9 rounded-full bg-gray-200 overflow-hidden"
                        data-alt="User profile picture placeholder"
                        style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCa1-cZYPR9gKwXCSNGvUiaC_JFndu5jphSFZTQqF1YLnYpzUjCZgfEw971KH_-TpPmslg4WdW814Uk49QVCLHVAts7qVtM5WSZtea1_xHJEna9w8wpEbJExYpxlW-R5lrPpHRci7qkZSN1y-WkFBXPCVA-eCow12RLsG6xYdc0TVJsyhhESmrdVwkWtLz5NaD4H20RB8VsGjBT90-cLTE2EbvoO3YFq-l_-S7uxyaq4CX3Bwtf779XNtp58XT6PwtNPIv_zBiCyrc'); background-size: cover;">
                    </div>
                    <div class="hidden sm:flex flex-col">
                        <span class="text-sm font-bold leading-none mb-0.5">Admin User</span>
                        <span class="text-xs text-[#9e9d47] leading-none">Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>