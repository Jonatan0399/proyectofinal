# PowerGym - Proyecto Final Fundamentos Web

## Descripción del Proyecto

**PowerGym** es una aplicación web estática para la gestión de productos y servicios de un gimnasio. Permite registrar nuevos productos (equipos, suplementos, membresías, ropa deportiva y accesorios), visualizar el catálogo completo con paginación, y realizar búsquedas filtradas según diferentes criterios. Este proyecto fue desarrollado como trabajo final para la asignatura de Fundamentos Web, aplicando conocimientos de HTML, CSS y JavaScript para crear una solución funcional y visualmente atractiva.

---

## Funcionalidades Principales

### Catálogo de Productos y Servicios
- Visualización de todos los productos y servicios disponibles en formato de tarjetas.
- Paginación con 10 productos por página.
- Diseño responsive que se adapta a diferentes dispositivos.

### Registro de Productos y Servicios
- Formulario completo para añadir nuevos productos o servicios.
- Validaciones para cada campo:
  - **Nombre:** máximo 20 caracteres.
  - **Categoría:** selector con opciones predefinidas (equipos, suplementos, membresías, ropa deportiva, accesorios).
  - **Código:** mínimo 8 caracteres, con al menos una mayúscula, una minúscula y dos números.
  - **Precio:** valor numérico mayor a 0.
  - **Stock:** cantidad disponible.
  - **Descripción:** breve descripción del producto o servicio.

### Sistema de Búsqueda
- Filtros por nombre, categoría y precio mínimo.
- Visualización de resultados en formato de tabla.
- Paginación de resultados con 10 elementos por página.

### Eliminación de Productos
- Opción para eliminar productos desde la vista de catálogo.

---

## Indicaciones de Uso

- **Registro:** Completa el formulario en la sección de registro para añadir un nuevo producto o servicio. Todos los campos son obligatorios y cuentan con validaciones.
- **Catálogo:** Navega por el catálogo para ver todos los productos y servicios registrados. Puedes eliminar productos desde esta vista.
- **Búsqueda:** Utiliza los filtros para buscar productos por nombre, categoría o precio mínimo. Los resultados se muestran en una tabla paginada.

---

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica del contenido.
- **CSS3:** Estilos visuales y diseño responsive.
- **JavaScript (Vanilla):** Interactividad y funcionalidades dinámicas.
- **localStorage:** Persistencia de datos en el navegador.

---

## Estructura del Proyecto


---

## Instalación y Uso

1. Clona este repositorio en tu máquina local o descárgalo como archivo ZIP.
2. Abre el archivo `index.html` en cualquier navegador web moderno.
3. Navega por las diferentes secciones usando la barra de navegación.

> **No se requieren dependencias externas ni servidores para ejecutar la aplicación.**

---

## Persistencia de Datos

La aplicación utiliza **localStorage** para mantener los datos de los productos y servicios entre sesiones. Al iniciar por primera vez, puedes cargar productos de ejemplo o comenzar con el catálogo vacío.

---

## Flujo de Interacción

- **Visualización de Productos:** La página principal muestra el catálogo completo con paginación.
- **Registro de Productos:** El usuario puede añadir nuevos productos o servicios usando el formulario.
- **Validación:** Al registrar un producto, se validan todos los campos según los criterios establecidos.
- **Búsqueda:** El usuario puede filtrar productos según diferentes criterios.
- **Resultados:** Los productos que coinciden con los filtros se muestran en una tabla paginada.
- **Eliminación:** Los productos pueden eliminarse desde la vista de catálogo.

---

## Características Adicionales

- **Diseño Responsive:** Se adapta a diferentes tamaños de pantalla.
- **Validaciones Robustas:** Control detallado de la entrada de datos.
- **Mensajes Informativos:** Retroalimentación clara para el usuario.
- **Interfaz Moderna:** Uso de estilos y componentes visuales atractivos.

---

## Línea de Negocio

Este proyecto se enfoca en la línea de negocio de **gimnasios**, ofreciendo una plataforma para la gestión de productos y servicios como equipos, suplementos, membresías, ropa deportiva y accesorios.

---

**PowerGym &copy; 2025**  
Desarrollado para la asignatura de Fundamentos Web.