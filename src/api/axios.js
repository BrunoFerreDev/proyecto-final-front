import axios from "axios";

// Usamos variables de entorno para la URL (Best Practice)
// Crea un archivo .env en la raíz con: VITE_API_URL=http://localhost:8080/api
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

const apiClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor opcional (útil para manejo de errores global o tokens)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;
