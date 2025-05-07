# App Banca Móvil (Concepto Front-end)

Este proyecto es una implementación front-end simple de un concepto de aplicación de banca móvil, incluyendo una página de aterrizaje (landing page) y una interfaz básica para la sesión del usuario. El diseño sigue un estilo moderno y simplificado, utilizando una paleta de colores azul y blanco.

**Nota:** Este es un proyecto **puramente front-end**. No incluye ninguna lógica de backend, autenticación de usuarios, manejo real de datos bancarios ni procesamiento de transacciones. Es una demostración visual de la interfaz de usuario.

## Tecnologías Utilizadas

* **HTML5:** Estructura del contenido.
* **CSS3:** Estilos y diseño, incluyendo layout responsivo, animaciones y efectos visuales.
* **JavaScript Vanilla:** Para la inicialización básica de la interfaz de la app.
* **Vite:** Herramienta de construcción y servidor de desarrollo rápido.
* **Font Awesome:** Librería de iconos.
* **Google Fonts (Roboto):** Tipografía.

## Estructura del Proyecto

* `index.html`: La página de aterrizaje (Landing Page). Es la página principal que se carga por defecto.
* `app.html`: La interfaz de usuario de la aplicación de banca móvil (página de sesión/dashboard).
* `src/`: Contiene los archivos fuente.
    * `src/landing.css`: Archivo CSS con los estilos para la landing page (`index.html`).
    * `src/style.css`: Archivo CSS con los estilos para la interfaz de la app (`app.html`).
    * `src/main.js`: Script JavaScript utilizado para inicializar la interfaz de la app (inyecta el HTML inicial).
* `package.json`: Archivo de configuración de npm/yarn/pnpm con las dependencias del proyecto y scripts para desarrollo y construcción.
* `/vite.svg`: Icono predeterminado de Vite.

## Configuración y Ejecución

Sigue estos pasos para poner el proyecto en funcionamiento localmente:

**Prerrequisitos:**

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina. Esto incluye npm (Node Package Manager). Puedes usar yarn o pnpm si lo prefieres.

**Pasos:**

1.  Clona este repositorio o descarga los archivos del proyecto.
2.  Navega hasta la carpeta raíz del proyecto en tu terminal.
3.  Instala las dependencias:

    ```bash
    npm install
    # o si usas yarn
    # yarn install
    # o si usas pnpm
    # pnpm install
    ```

4.  Inicia el servidor de desarrollo con Vite:

    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    # o si usas pnpm
    # pnpm dev
    ```

5.  Abre tu navegador y visita la dirección `http://localhost:5173/` (o el puerto que indique Vite) para ver la landing page.
6.  Haz clic en los enlaces de "Abrir tu Cuenta Ahora" o "Iniciar Sesión" en la landing page para navegar a la interfaz de la aplicación (`app.html`).

## Construcción para Producción

Para generar una versión optimizada del proyecto lista para desplegar:

```bash
npm run build
# o si usas yarn
# yarn build
# o si usas pnpm
# pnpm build
