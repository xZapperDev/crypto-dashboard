# 💰 Crypto Dashboard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-181717?style=for-the-badge&logo=github)

Un panel moderno, dinámico y en tiempo real para visualizar los datos más relevantes del mercado de criptomonedas.  
Construido con **React + Vite**, alimentado por la **API de CoinGecko** y diseñado con **TailwindCSS** para lograr una interfaz oscura, elegante y profesional.

---

## 🌐 Demo en Vivo

🔗 **[Ver Demo en GitHub Pages](https://xzapperdev.github.io/crypto-dashboard)**

---

## 🧠 Características Principales

- 📊 **Gráficas interactivas** (estilo profesional como TradingView)
- 💹 **Datos en tiempo real** del mercado cripto
- 🪙 **Tabla avanzada** con información clave:
  - Precio actual  
  - Cambio porcentual (24h)  
  - Market Cap  
  - Volumen (24h)  
  - Máximos y mínimos del día
- 🌗 **Modo oscuro por defecto**
- ⚡ **Actualización automática cada 60 segundos**
- 💎 **Diseño responsive y animaciones suaves**

---

## 🧰 Tecnologías Utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| ⚛️ **React + Vite** | Framework y entorno de desarrollo rápido |
| 🎨 **TailwindCSS** | Estilos modernos, responsive y personalizables |
| 📈 **Chart.js / Recharts** | Librería de visualización de datos |
| 🌐 **CoinGecko API** | Fuente gratuita de datos en tiempo real |
| 🚀 **GitHub Pages** | Hosting estático del proyecto |

---

## 🛠️ Instalación y Ejecución Local

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/xZapperDev/crypto-dashboard.git
   cd crypto-dashboard
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

4. **Construye la versión de producción:**

   ```bash
   npm run build
   ```

5. **Despliega en GitHub Pages:**

   ```bash
   npm run deploy
   ```

---

## ⚙️ Configuración del Proyecto

### 📄 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/crypto-dashboard/',
})
```

### 📄 `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 🖼️ Captura de Pantalla

> *(Reemplaza esta imagen con una captura real de tu panel actual.)*

![Vista previa del panel](https://raw.githubusercontent.com/xZapperDev/crypto-dashboard/main/public/preview.png)

---

## 👨‍💻 Autores

### 🧩 **Leptive Dev Organization**

Proyecto desarrollado bajo la organización **[Leptive Dev](https://github.com/LeptiveDev)**.  
Nos especializamos en desarrollo web moderno, herramientas para desarrolladores y proyectos **open-source**.

### ✍️ Desarrolladores Principales

| Nombre | Rol | GitHub |
|---------|-----|--------|
| 🧑‍🚀 **ZapperDev** | Desarrollador Principal, UI/UX, Integración API | [@xZapperDev](https://github.com/xZapperDev) |
| 🧠 **LeptiveDev** | Organización, diseño, supervisión técnica | [@LeptiveDev](https://github.com/LeptiveDev) |

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! 💡  
Si deseas colaborar:

1. Haz un **fork** del repositorio  
2. Crea una nueva rama:  

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y haz commit:  

   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```

4. Envía un **Pull Request** 🚀

---

## 📜 Licencia

Este proyecto está bajo la **Licencia MIT**.  
Puedes usarlo, modificarlo y distribuirlo libremente, siempre mencionando la autoría original.

---

## 💼 Créditos

- 📡 **Datos** proporcionados por [CoinGecko API](https://www.coingecko.com/en/api)  
- 🧠 **Inspiración visual** basada en interfaces tipo TradingView  
- 💻 **Diseñado y mantenido** por el equipo de [Leptive Dev](https://github.com/LeptiveDev)

---

## 🚀 Crypto Dashboard

© **2025 Leptive Dev** — Todos los derechos reservados.  
Desarrollado con ❤️ por **ZapperDev** y **Leptive Dev**.
