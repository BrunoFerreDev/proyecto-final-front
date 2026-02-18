<template>
    <div class="max-h-dvh flex flex-col">
        <!-- Header Navigation (Minimal for Login) -->
        <header class="flex items-center justify-between px-10 py-6">
            <div class="flex items-center gap-3">
                <div class="size-10 bg-[#55a6f6] rounded-lg flex items-center justify-center text-white shadow-sm">
                    <span class="material-symbols-outlined text-2xl">sports_soccer</span>
                </div>
                <h2 class="text-[#111418]  text-xl font-bold tracking-tight">Gestión de Ligas</h2>
            </div>
            <div class="flex items-center gap-6">
                <a class="text-sm font-medium text-slate-500 hover:text-[#55a6f6] transition-colors"
                    href="#">Soporte</a>
                <a class="text-sm font-medium text-slate-500 hover:text-[#55a6f6] transition-colors" href="#">Ayuda</a>
            </div>
        </header>
        <!-- Main Content Container -->
        <main
            class="flex-1 flex items-center justify-center px-4 py-12 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#55a6f6]/10 via-background-light to-background-light  ">
            <div class="w-full max-w-[440px]">
                <!-- Login Card -->
                <div
                    class="bg-white  rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100  p-8 md:p-10">
                    <!-- Card Header -->
                    <div class="text-center mb-8">
                        <h1 class="text-2xl font-bold text-[#111418]  mb-2">Bienvenido de nuevo</h1>
                        <p class="text-slate-500  text-sm">Ingresa tus credenciales para gestionar tu
                            liga</p>
                    </div>
                    <!-- Login Form -->
                    <form @submit="verificarFormulario" class="space-y-6">
                        <!-- Username/Email Field -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-[#111418]  ml-1" for="username">
                                Nombre de usuario o Email
                            </label>
                            <div class="relative group">
                                <div
                                    class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#55a6f6] transition-colors">
                                    <span class="material-symbols-outlined text-xl">person</span>
                                </div>
                                <input
                                    class="block w-full pl-11 pr-4 py-3.5 bg-slate-50  border border-slate-200  rounded-lg text-slate-900  placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#55a6f6]/20 focus:border-[#55a6f6] transition-all text-sm"
                                    id="username" placeholder="ejemplo@correo.com" type="email" name="email"
                                    v-model="email" />
                            </div>
                        </div>
                        <!-- Password Field -->
                        <div class="space-y-2">
                            <label class="text-sm font-semibold text-[#111418]  ml-1" for="password">
                                Contraseña
                            </label>
                            <div class="relative group">
                                <div
                                    class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#55a6f6] transition-colors">
                                    <span class="material-symbols-outlined text-xl">lock</span>
                                </div>
                                <input
                                    class="block w-full pl-11 pr-12 py-3.5 bg-slate-50  border border-slate-200  rounded-lg text-slate-900  placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#55a6f6]/20 focus:border-[#55a6f6] transition-all text-sm"
                                    id="password" placeholder="••••••••" type="password" v-model="dni" />
                                <button
                                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 "
                                    type="button">
                                    <span class="material-symbols-outlined text-xl">visibility</span>
                                </button>
                            </div>
                        </div>
                        <!-- Extra Options -->
                        <div class="flex items-center justify-between">
                            <label class="flex items-center gap-2 cursor-pointer group">
                                <input
                                    class="w-4 h-4 rounded border-slate-300  text-[#55a6f6] focus:ring-[#55a6f6] bg-white "
                                    type="checkbox" />
                                <span
                                    class="text-xs font-medium text-slate-600  group-hover:text-slate-800  transition-colors">Recordarme</span>
                            </label>
                            <a class="text-xs font-semibold text-[#55a6f6] hover:underline underline-offset-4"
                                href="#">¿Olvidaste tu contraseña?</a>
                        </div>
                        <!-- Submit Button -->
                        <button @click.prevent="verificarFormulario"
                            class="w-full bg-[#55a6f6] hover:bg-[#55a6f6]/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-[#55a6f6]/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                            type="submit">
                            <span>Iniciar Sesión</span>
                            <span class="material-symbols-outlined text-lg">login</span>
                        </button>
                    </form>
                    <!-- Alternate Option -->
                    <div class="mt-8 pt-8 border-t border-slate-100  text-center">
                        <p class="text-sm text-slate-500 ">
                            ¿No tienes una cuenta de administrador?
                            <a class="font-bold text-[#55a6f6] hover:text-[#55a6f6]/80 transition-colors"
                                href="#">Solicitar
                                acceso</a>
                        </p>
                    </div>
                </div>
                <!-- Footer Text -->
                <div class="mt-8 text-center space-y-4">
                    <p class="text-xs text-slate-400 ">
                        © 2024 Sistema de Gestión de Ligas. Todos los derechos reservados.
                    </p>
                    <div class="flex justify-center gap-4 text-xs font-medium text-slate-400">
                        <a class="hover:text-[#55a6f6]" href="#">Términos</a>
                        <a class="hover:text-[#55a6f6]" href="#">Privacidad</a>
                        <a class="hover:text-[#55a6f6]" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </main>
        <!-- Visual Element: Decorative Background Images -->
        <div class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden opacity-50">
            <div class="absolute -top-24 -left-24 w-96 h-96 bg-[#55a6f6]/10 rounded-full blur-3xl"></div>
            <div class="absolute top-1/2 -right-24 w-64 h-64 bg-[#55a6f6]/5 rounded-full blur-2xl"></div>
        </div>
        <div v-if="showModal"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4 transition-all">

            <div class="absolute inset-0" @click="showModal = false"></div>

            <div class="relative z-10">
                <ModalMessage :showModal="showModal" @closeModal="showModal = false" :titulo="tituloError"
                    :mensaje="mensajeError" />
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ModalMessage from '../components/modal/ModalMessage.vue';
const showModal = ref(false)
const router = useRouter();
const email = ref('');
const dni = ref('');
const mensajeError = ref('');
const tituloError = ref('');
const login = async () => {

    try {
        const response = await axios.post('http://localhost:8080/api/auth/login', {
            email: email.value,
            dni: dni.value
        });
        console.log(response.data);
        if (response.data.jwt && response.data.status) {
            localStorage.setItem('token', response.data.jwt);
            router.push('/inicio');
        }
    } catch (error) {
        console.error(error);
        mensajeError.value = 'Credenciales incorrectas, por favor intente nuevamente';
        tituloError.value = 'Error';
        showModal.value = true;
        localStorage.removeItem('token');
        router.push("/")
    }
}
const verificarFormulario = () => {
    if (!email.value || !dni.value) {
        mensajeError.value = 'Por favor, complete todos los campos';
        tituloError.value = 'Error';
        showModal.value = true;

    } else {
        login()
    }
}
// ... después de recibir el token del backend en el login
// localStorage.setItem('token', token);
// localStorage.setItem('refreshToken', refreshToken);

// INICIAR EL RELOJ
//import { scheduleTokenRefresh } from '../authService.js'; // Asumiendo que tienes una función para programar la renovación/';
//scheduleTokenRefresh(token);
</script>