# 💰 Crypto Dashboard v2

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

Un panel moderno, dinámico y en tiempo real para visualizar los datos más relevantes del mercado de criptomonedas.  
Construido con **React + Vite**, alimentado por la **API de CoinGecko** y diseñado con **TailwindCSS** para lograr una interfaz oscura, elegante y profesional.

---

## 🌐 Demo en Vivo

🔗 **[Ver v2 en GitHub Pages](https://xzapperdev.github.io/crypto-dashboard/v2/)**

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

---

## ⚙️ Configuración del Proyecto

### 📄 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/crypto-dashboard/v2/',
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

![Vista previa](https://github.com/xZapperDev/crypto-dashboard/blob/473c3f1a105f7fe5a7ec6510b2983fcbf1835913/main/preview.png)

---

## 👨‍💻 Autores


### ✍️ Desarrolladores Principales

| Nombre | Rol | GitHub |
|---------|-----|--------|
| 🧑‍🚀 **ZapperDev** | Desarrollador Principal | [@xZapperDev](https://github.com/xZapperDev) |

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
Puedes leer aqui: [Mit Licence](https://github.com/xZapperDev/crypto-dashboard/blob/73fcf165ce271e7bb9d8177828dbc6164600f3b5/LICENSE.txt)

---

## 💼 Créditos

- 📡 **Datos** proporcionados por [CoinGecko API](https://www.coingecko.com/en/api)  
- 🧠 **Inspiración visual** basada en interfaces tipo TradingView  
- 💻 **Diseñado y mantenido** por el equipo de [@xZapperDev](https://github.com/xZapperDev)

---

## 🚀 Crypto Dashboard

© **2025 CryptoDash** — Todos los derechos reservados.  
Desarrollado con ❤️ por **ZapperDev**
