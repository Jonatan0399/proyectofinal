// --- PASO 1: Insertar productos en localStorage si no existen ---
if (!localStorage.getItem("productos")) {
  const productosIniciales = [

  ];
  localStorage.setItem("productos", JSON.stringify(productosIniciales));
}

// --- PASO 2: Lógica del buscador ---
document.addEventListener("DOMContentLoaded", function () {
  const buscarBtn = document.getElementById("buscar");
  const limpiarBtn = document.getElementById("limpiar");
  const loadingElement = document.getElementById("loading");
  const resultsElement = document.getElementById("results");

  function buscarProductos(filtros) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productos = JSON.parse(localStorage.getItem("productos")) || [];
        const resultados = productos.filter((producto) => {
          if (
            filtros.nombre &&
            !producto.nombre
              .toLowerCase()
              .includes(filtros.nombre.toLowerCase())
          ) {
            return false;
          }
          if (filtros.categoria && producto.categoria !== filtros.categoria) {
            return false;
          }
          if (
            filtros.precioMin &&
            parseFloat(producto.precio) < parseFloat(filtros.precioMin)
          ) {
            return false;
          }
          return true;
        });
        resolve(resultados);
      }, 2000);
    });
  }

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

  buscarBtn.addEventListener("click", function () {
    const filtros = {
      nombre: document.getElementById("nombre").value,
      categoria: document.getElementById("categoria").value,
      precioMin: document.getElementById("precio-min").value,
    };

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
        loadingElement.style.display = "none";
      });
  });

  limpiarBtn.addEventListener("click", function () {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio-min").value = "";
    resultsElement.innerHTML = "";
  });
});