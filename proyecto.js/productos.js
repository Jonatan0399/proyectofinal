// --- PASO 1: Insertar productos en localStorage si no existen ---
if (!localStorage.getItem("productos")) {
  const productosIniciales = [
    // EQUIPO
    { nombre: "Mancuerna de manos", categoria: "equipo", precio: 150000, codigo: "EQ001", imagen: "" },
    { nombre: "Colchoneta de yoga", categoria: "equipo", precio: 85000, codigo: "EQ002", imagen: "" },
    { nombre: "Banda elástica de resistencia", categoria: "equipo", precio: 60000, codigo: "EQ003", imagen: "" },
    { nombre: "Rueda abdominal", categoria: "equipo", precio: 70000, codigo: "EQ004", imagen: "" },
    { nombre: "Balón medicinal 5kg", categoria: "equipo", precio: 130000, codigo: "EQ005", imagen: "" },
    { nombre: "Comba profesional", categoria: "equipo", precio: 45000, codigo: "EQ006", imagen: "" },
    { nombre: "Disco olímpico 10kg", categoria: "equipo", precio: 120000, codigo: "EQ007", imagen: "" },
    { nombre: "Kettlebell 8kg", categoria: "equipo", precio: 110000, codigo: "EQ008", imagen: "" },
    { nombre: "Banco para pesas ajustable", categoria: "equipo", precio: 300000, codigo: "EQ009", imagen: "" },
    { nombre: "Soporte para barras", categoria: "equipo", precio: 250000, codigo: "EQ010", imagen: "" },

    // SUPLEMENTOS
    { nombre: "Proteína Whey", categoria: "suplemento", precio: 120000, codigo: "SUP001", imagen: "" },
    { nombre: "Creatina Monohidratada", categoria: "suplemento", precio: 95000, codigo: "SUP002", imagen: "" },
    { nombre: "BCAA 2:1:1", categoria: "suplemento", precio: 78000, codigo: "SUP003", imagen: "" },
    { nombre: "Pre-entrenamiento explosivo", categoria: "suplemento", precio: 89000, codigo: "SUP004", imagen: "" },
    { nombre: "Glutamina en polvo", categoria: "suplemento", precio: 72000, codigo: "SUP005", imagen: "" },
    { nombre: "Multivitamínico deportivo", categoria: "suplemento", precio: 65000, codigo: "SUP006", imagen: "" },
    { nombre: "Proteína vegana", categoria: "suplemento", precio: 110000, codigo: "SUP007", imagen: "" },
    { nombre: "Omega 3 alta concentración", categoria: "suplemento", precio: 58000, codigo: "SUP008", imagen: "" },
    { nombre: "Caseína nocturna", categoria: "suplemento", precio: 99000, codigo: "SUP009", imagen: "" },
    { nombre: "Gainer hipercalórico", categoria: "suplemento", precio: 135000, codigo: "SUP010", imagen: "" },

    // MEMBRESÍAS
    { nombre: "Membresía Premium", categoria: "membresia", precio: 300000, codigo: "MEM001", imagen: "" },
    { nombre: "Membresía Básica", categoria: "membresia", precio: 150000, codigo: "MEM002", imagen: "" },
    { nombre: "Membresía Estándar", categoria: "membresia", precio: 200000, codigo: "MEM003", imagen: "" },
    { nombre: "Membresía Familiar", categoria: "membresia", precio: 450000, codigo: "MEM004", imagen: "" },
    { nombre: "Membresía VIP", categoria: "membresia", precio: 500000, codigo: "MEM005", imagen: "" },
    { nombre: "Membresía Estudiantil", categoria: "membresia", precio: 120000, codigo: "MEM006", imagen: "" },
    { nombre: "Membresía Corporativa", categoria: "membresia", precio: 600000, codigo: "MEM007", imagen: "" },
    { nombre: "Membresía Mensual", categoria: "membresia", precio: 50000, codigo: "MEM008", imagen: "" },
    { nombre: "Membresía Trimestral", categoria: "membresia", precio: 135000, codigo: "MEM009", imagen: "" },
    { nombre: "Membresía Semestral", categoria: "membresia", precio: 250000, codigo: "MEM010", imagen: "" },

    // ROPA
    { nombre: "Camiseta deportiva", categoria: "ropa", precio: 50000, codigo: "ROP001", imagen: "" },
    { nombre: "Pantaloneta de entrenamiento", categoria: "ropa", precio: 60000, codigo: "ROP002", imagen: "" },
    { nombre: "Sudadera deportiva", categoria: "ropa", precio: 120000, codigo: "ROP003", imagen: "" },
    { nombre: "Chaqueta impermeable fitness", categoria: "ropa", precio: 180000, codigo: "ROP004", imagen: "" },
    { nombre: "Top deportivo para mujer", categoria: "ropa", precio: 70000, codigo: "ROP005", imagen: "" },
    { nombre: "Leggings de compresión", categoria: "ropa", precio: 85000, codigo: "ROP006", imagen: "" },
    { nombre: "Guantes de gimnasio", categoria: "ropa", precio: 40000, codigo: "ROP007", imagen: "" },
    { nombre: "Calcetas deportivas antideslizantes", categoria: "ropa", precio: 25000, codigo: "ROP008", imagen: "" },
    { nombre: "Gorra deportiva ajustable", categoria: "ropa", precio: 30000, codigo: "ROP009", imagen: "" },
    { nombre: "Camiseta sin mangas", categoria: "ropa", precio: 45000, codigo: "ROP010", imagen: "" },

    // ACCESORIOS
    { nombre: "Cinturón de pesas", categoria: "accesorios", precio: 80000, codigo: "ACC001", imagen: "" },
    { nombre: "Muñequeras deportivas", categoria: "accesorios", precio: 35000, codigo: "ACC002", imagen: "" },
    { nombre: "Rodilleras de compresión", categoria: "accesorios", precio: 65000, codigo: "ACC003", imagen: "" },
    { nombre: "Correa de levantamiento", categoria: "accesorios", precio: 40000, codigo: "ACC004", imagen: "" },
    { nombre: "Toalla deportiva", categoria: "accesorios", precio: 25000, codigo: "ACC005", imagen: "" },
    { nombre: "Bolso de gimnasio", categoria: "accesorios", precio: 95000, codigo: "ACC006", imagen: "" },
    { nombre: "Botella de agua deportiva", categoria: "accesorios", precio: 30000, codigo: "ACC007", imagen: "" },
    { nombre: "Protector bucal para deportes", categoria: "accesorios", precio: 20000, codigo: "ACC008", imagen: "" },
    { nombre: "Cuerda para estiramiento", categoria: "accesorios", precio: 28000, codigo: "ACC009", imagen: "" },
    { nombre: "Tobilleras con peso", categoria: "accesorios", precio: 50000, codigo: "ACC010", imagen: "" }
  ];
  localStorage.setItem("productos", JSON.stringify(productosIniciales));
}

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