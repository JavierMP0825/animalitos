# AdoptaYA - Plataforma de Adopción de Mascotas

AdoptaYA es una aplicación web front-end diseñada para facilitar el proceso de adopción de mascotas. Permite a los usuarios ver un catálogo de animales, filtrar según sus preferencias, ver detalles de cada mascota y enviar un formulario de postulación para adoptar.

La aplicación también incluye un panel de administración para visualizar y gestionar las postulaciones recibidas.

#Características Principales

- **Catálogo Dinámico:** Visualiza todas las mascotas disponibles con tarjetas informativas.
- **Filtros y Búsqueda:** Filtra mascotas por especie, edad, tamaño o busca por nombre.
- **Vista de Detalle:** Haz clic en una mascota para ver su descripción completa, fotos y requisitos de adopción.
- **Formulario de Postulación:** Un formulario validado para que los usuarios interesados puedan postularse, con preselección de mascota desde la página de detalle.
- **Persistencia de Datos:** Las postulaciones se guardan localmente en el navegador usando `localStorage`.
- **Panel de Postulaciones:**
    - Muestra todas las postulaciones en una tabla responsiva.
    - Permite cambiar el estado de cada postulación (En revisión, Aprobada, Rechazada).
    - Contadores de adopciones aprobadas por especie.
    - Funcionalidad para exportar todas las postulaciones a un archivo `.txt`.
- **Diseño Responsivo:** La interfaz se adapta a dispositivos de escritorio, tablets y móviles, transformando las tablas en tarjetas para una mejor UX en pantallas pequeñas.

#Tecnologías Utilizadas

- **HTML5:** Para la estructura semántica del contenido.
- **CSS3:** Para los estilos personalizados y el diseño responsivo con Media Queries.
- **JavaScript (ES6+):** Para toda la lógica de la aplicación, incluyendo manipulación del DOM, eventos, filtrado de datos y persistencia en `localStorage`.
- **Bootstrap 5:** Como framework principal de CSS para un diseño rápido, moderno y responsivo (Grid System, Componentes, Utilidades).

#Estructura del Proyecto

/
├── css/
│   └── estilos.css              # Estilos personalizados y media queries
│
├── html/
│   ├── contacto.html
│   ├── detalle.html
│   ├── postulacion.html
│   └── postulaciones.html
│
├── img/
│   └── ...                      # Imágenes de las mascotas
│
├── js/
│   ├── catalogo.js              # Lógica para el catálogo y filtros
│   ├── detalle.js               # Lógica para la página de detalle
│   ├── postulacion.js           # Lógica del formulario de postulación
│   └── postulaciones.js         # Lógica del panel de administración
│
├── index.html                   # Página principal (Catálogo)
└── README.md                    # Documentación del proyecto



#Cómo Ejecutar el Proyecto

Dado que es un proyecto puramente front-end, no requiere un servidor. Simplemente sigue estos pasos:

1.  Clona o descarga este repositorio.
2.  Abre el archivo `index.html` en tu navegador web preferido (ej. Google Chrome, Firefox).
3.  ¡Listo! Ya puedes navegar por la aplicación.