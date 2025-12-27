# Landing Page - Clases de Inglés

Este proyecto es una Landing Page moderna y responsiva desarrollada con **React** y **Vite**.
Fue creada como parte de un proceso de aprendizaje durante el curso de RollingCode para dominar los fundamentos de React.

## Tecnologías Utilizadas

-   **React** (v18+): Biblioteca para la interfaz de usuario.
-   **Vite**: Entorno de desarrollo.
-   **Bootstrap 5**: Framework CSS para el diseño responsivo y componentes (Navbar, Cards).
-   **CSS Modules / Custom CSS**: Estilos personalizados para detalles específicos.

## Características Aprendidas e Implementadas

Durante el desarrollo de este proyecto se aplicaron los siguientes conceptos clave:

1.  **Componentes**: Estructuración de la UI en piezas reutilizables (`Header`, `Hero`, `About`, etc.).
2.  **Props**: Comunicación de datos entre componentes (ej: pasar títulos y subtítulos al Hero).
3.  **List Rendering**: Uso de `.map()` para renderizar listas dinámicas (Secciones de "About" y "Testimonios").
4.  **State (useState)**: Gestión de la memoria del componente (Formulario de contacto).
5.  **Event Handling**: Manejo del envío de formularios (`onSubmit`).
6.  **Renderizado Condicional**: Mostrar mensajes de éxito dinámicamente.

## Instalación y Uso Local

Si deseas clonar y correr este proyecto en tu máquina:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/LECod3/clases-ingles.git
    cd clases-ingles
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Correr servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre tu navegador en `http://localhost:5173`.

## Despliegue

El proyecto está configurado para ser desplegado fácilmente en **Netlify** o **Vercel** arrastrando la carpeta `dist` generada por el comando:
```bash
npm run build
```

---
Desarrollado por **Luciano Ezequiel Caro** - 2025
