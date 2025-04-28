/* ..................SCRIPT DE PRODUCTOS.HTML................... */

// Obtener productos de localStorage
const productos = JSON.parse(localStorage.getItem("productos")) || [];
const container = document.getElementById("productos-container");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");

let paginaActual = 1;
const productosPorPagina = 15;

// Función para mostrar productos con manejo forzado de Base64
function mostrarProductos() {
  container.innerHTML = "";

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  if (productosPagina.length === 0) {
    container.innerHTML =
      '<p class="no-products">No hay productos registrados aún.</p>';
    return;
  }

  productosPagina.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "product-card";

    // Imagen por defecto en Base64 (SVG simple)
    const defaultImage =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5TaW4gaW1hZ2VuPC90ZXh0Pjwvc3ZnPg==";

    // Forzar tratamiento como Base64
    let imagenSrc = defaultImage;
    if (producto.imagen) {
      // Si ya es Base64, usarla directamente
      if (producto.imagen.startsWith("data:image")) {
        imagenSrc = producto.imagen;
      }
      // Si es una URL, intentar cargarla con fallback a Base64
      else {
        imagenSrc = producto.imagen;
      }
    }

    card.innerHTML = `
      <div class="product-img-container">
        <img src="${imagenSrc}" 
             alt="${producto.nombre}" 
             class="product-img"
             onerror="this.src='${defaultImage}'">
      </div>
      <div class="product-info">
        <h3>${producto.nombre}</h3>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
        <p><strong>Código:</strong> ${producto.codigo}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Stock:</strong> ${producto.cantidad || 0} unidades</p>
        ${
          producto.descripcion
            ? `<p><strong>Descripción:</strong> ${producto.descripcion}</p>`
            : ""
        }
      </div>
    `;

    container.appendChild(card);
  });

  actualizarBotones();
}

function actualizarBotones() {
  btnAnterior.disabled = paginaActual === 1;
  btnSiguiente.disabled = paginaActual * productosPorPagina >= productos.length;
}

function siguientePagina() {
  if (paginaActual * productosPorPagina < productos.length) {
    paginaActual++;
    mostrarProductos();
  }
}

function anteriorPagina() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
}

// Event listeners
btnAnterior.addEventListener("click", anteriorPagina);
btnSiguiente.addEventListener("click", siguientePagina);

// Inicialización
document.addEventListener("DOMContentLoaded", mostrarProductos);
