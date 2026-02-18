<script setup>
import { IconEdit } from "@tabler/icons-vue";
import { IconCheck } from "@tabler/icons-vue";
import { IconPhoto } from "@tabler/icons-vue";
import { IconChevronDown } from "@tabler/icons-vue";
import { IconBallFootball } from "@tabler/icons-vue";
import { IconUser } from "@tabler/icons-vue";
import { IconPlayFootball } from "@tabler/icons-vue";
import { IconFileDownload } from "@tabler/icons-vue";
import { IconChevronRight } from "@tabler/icons-vue";
import { ref } from "vue";

import PersonaForm from "../components/forms/PersonaForm.vue";
import axios from "axios";

const activePersona = ref("JUGADOR");
const selectedTipo = ref("JUGADOR"); // Iniciado con un valor por defecto
const personaNueva = ref({
  nombre: "Bruno Marcos",
  apellido: "Ferreira",
  dni: "42273555",
  email: "pittanaferreira@gmail.com",
  telefono: "3743614796",
  fechaNacimiento: "2000-01-01",
});

// ...existing code...
const nuevaPersona = async () => {
  try {
    // 1. Intentamos crear la persona
    const response = await axios.post(
      "http://localhost:8080/api/personas",
      personaNueva.value,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      }
    );

    if (response && response.data) {
      // 2. Extraemos el id generado por el Backend (idPersona según Swagger)
      const idGenerado = response.data.idPersona;
      const tipoSeleccionado = selectedTipo.value;
      console.log(idGenerado, tipoSeleccionado);

      // 3. Ejecutamos la actualización/asignación de tipo
      await axios.put(
        `http://localhost:8080/api/personas/${idGenerado}`,
        { tipo: tipoSeleccionado },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      resetForm();
    }
  } catch (error) {
    console.error("Fallo en el flujo de creación:", error);
  }
};
// ...existing code...
const resetForm = () => {
  personaNueva.value = {
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
  };
};
</script>

<template>
  <main class="w-full max-w-6xl mx-auto px-6 py-8 md:py-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div class="flex flex-col gap-2">
        <h2 class="text-4xl font-black tracking-tight text-[#1c1c0d]">
          Crear Nueva Persona
        </h2>
        <p class="text-[#1c1c0d] text-lg ">
          Complete el formulario para registrar un nuevo usuario en la base
          de datos de la liga.
        </p>
        <p>Luego de crear el usuario, puede vincularlo a un club en la sección de clubes en caso de ser neceseario.</p>
      </div>
    </div>
    <PersonaForm />
  </main>
</template>
