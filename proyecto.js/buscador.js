// --- PASO 1: Insertar productos en localStorage si no existen ---
if (!localStorage.getItem("productos")) {
  const productosIniciales = [
    {
      nombre: "Mancuerna de manos",
      categoria: "equipo",
      precio: 150000,
      codigo: "EQ001",
      imagen: "",
    },
    {
      nombre: "Proteína Whey",
      categoria: "suplemento",
      precio: 120000,
      codigo: "SUP001",
      imagen: "",
    },
    {
      nombre: "Membresía Premium",
      categoria: "membresia",
      precio: 300000,
      codigo: "MEM001",
      imagen: "",
    },
    {
      nombre: "Camiseta deportiva",
      categoria: "ropa",
      precio: 50000,
      codigo: "ROP001",
      imagen: "",
    },
    {
      nombre: "Cinturón de pesas",
      categoria: "accesorios",
      precio: 80000,
      codigo: "ACC001",
      imagen: "",
    },
  ];
  localStorage.setItem("productos", JSON.stringify(productosIniciales));
}

// --- PASO 2: Lógica del buscador ---
document.addEventListener("DOMContentLoaded", function () {
  const buscarBtn = document.getElementById("buscar");
  const limpiarBtn = document.getElementById("limpiar");
  const loadingElement = document.getElementById("loading");
  const resultsElement = document.getElementById("results");

  // Función que simula buscar productos
  function buscarProductos(filtros) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        const resultados = productos.filter((producto) => {
          // Filtro por nombre
          if (
            filtros.nombre &&
            !producto.nombre
              .toLowerCase()
              .includes(filtros.nombre.toLowerCase())
          ) {
            return false;
          }
          // Filtro por categoría
          if (filtros.categoria && producto.categoria !== filtros.categoria) {
            return false;
          }
          // Filtro por precio mínimo
          if (
            filtros.precioMin &&
            parseFloat(producto.precio) < parseFloat(filtros.precioMin)
          ) {
            return false;
          }
          return true;
        });
        resolve(resultados);
      }, 2000); // 2 segundos para simular demora
    });
  }

  // Función para mostrar los resultados
  function mostrarResultados(productos) {
    if (productos.length === 0) {
      resultsElement.innerHTML =
        "<p>No se encontraron productos con los filtros seleccionados.</p>";
      return;
    }

    let html = '<div class="product-grid">';

    productos.forEach((producto) => {
      const defaultImage =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5TaW4gaW1hZ2VuPC90ZXh0Pjwvc3ZnPg==";
      const imagenSrc = producto.imagen || defaultImage;

      html += `
                <div class="product-card">
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
                    </div>
                </div>
            `;
    });

    html += "</div>";
    resultsElement.innerHTML = html;
  }

  // Evento para buscar productos
  buscarBtn.addEventListener("click", function () {
    const filtros = {
      nombre: document.getElementById("nombre").value,
      categoria: document.getElementById("categoria").value,
      precioMin: document.getElementById("precio-min").value,
    };

    // Mostrar spinner de carga
    loadingElement.style.display = "block";
    resultsElement.innerHTML = "";

    buscarProductos(filtros)
      .then((resultados) => {
        mostrarResultados(resultados);
      })
      .catch((error) => {
        console.error("Error en la búsqueda:", error);
        resultsElement.innerHTML =
          "<p>Ocurrió un error al buscar los productos.</p>";
      })
      .finally(() => {
        loadingElement.style.display = "none"; // Siempre ocultar loading
      });
  });

  // Evento para limpiar filtros
  limpiarBtn.addEventListener("click", function () {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio-min").value = "";
    resultsElement.innerHTML = "";
  });
});
