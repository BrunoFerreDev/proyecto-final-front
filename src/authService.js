import axios from "axios";

let refreshTimeout = null;

// 1. Función auxiliar para decodificar el JWT (Obtener el payload)
const parseJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

// 2. La función principal que programa la renovación
export const scheduleTokenRefresh = (token) => {
  // Limpiamos cualquier timer anterior para evitar duplicados
  if (refreshTimeout) clearTimeout(refreshTimeout);

  const decoded = parseJwt(token);
  if (!decoded || !decoded.exp) return;

  // 'exp' viene en segundos, convertimos a milisegundos
  const expMs = decoded.exp * 1000;
  const currentTime = Date.now();

  // Calculamos cuánto falta para que expire
  const timeLeft = expMs - currentTime;

  // DEFINIMOS EL "BUFFER": 2 minutos (120,000 ms) antes de que muera
  // Si el token dura 30 min, esto se ejecutará en el minuto 28.
  const bufferTime = 2 * 60 * 1000;

  // El tiempo de espera será: TiempoRestante - 2 minutos
  const delay = timeLeft - bufferTime;

  console.log(`Token expira en: ${timeLeft / 1000 / 60} minutos.`);
  console.log(
    `Renovación programada en: ${delay / 1000 / 60} minutos (Minuto 28).`,
  );

  if (delay > 0) {
    refreshTimeout = setTimeout(async () => {
      await refreshToken();
    }, delay);
  } else {
    // Si ya pasamos el minuto 28 pero el token sigue vivo, renovar ya.
    if (timeLeft > 0) {
      refreshToken();
    }
  }
};

// 3. La lógica para pedir el nuevo token al Backend
const refreshToken = async () => {
  try {
    console.log("⏳ Ejecutando renovación automática de token...");

    // Asumiendo que guardas el refresh token en localStorage
    const refreshTokenVal = localStorage.getItem("refreshToken");

    if (!refreshTokenVal) return;

    const response = await axios.post(
      "http://localhost:8080/api/auth/refresh-token",
      {
        refreshToken: refreshTokenVal,
      },
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    // Guardar nuevos tokens
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refreshToken", newRefreshToken); // Si el backend rota el refresh token

    console.log("✅ Token renovado exitosamente.");

    // IMPORTANTE: Volver a programar la siguiente renovación
    scheduleTokenRefresh(accessToken);
  } catch (error) {
    console.error("Error renovando token, cerrando sesión...", error);
    // Si falla la renovación (ej. refresh token vencido), desloguear usuario
    logout();
  }
};

export const logout = () => {
  if (refreshTimeout) clearTimeout(refreshTimeout);
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  window.location.href = "/login"; // O usar router.push
};
