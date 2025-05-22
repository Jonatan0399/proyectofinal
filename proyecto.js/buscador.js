// --- PASO 1: Insertar productos en localStorage si no existen ---
if (!localStorage.getItem("productos")) {
  const productosIniciales = [
   

    // SUPLEMENTOS
    { nombre: "Proteína Whey", categoria: "suplemento", precio: 120000, codigo: "SUP001", imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Creatina Monohidratada", categoria: "suplemento", precio: 95000, codigo: "SUP002", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { nombre: "BCAA 2:1:1", categoria: "suplemento", precio: 78000, codigo: "SUP003", imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Pre-entrenamiento explosivo", categoria: "suplemento", precio: 89000, codigo: "SUP004", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Glutamina en polvo", categoria: "suplemento", precio: 72000, codigo: "SUP005", imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Multivitamínico deportivo", categoria: "suplemento", precio: 65000, codigo: "SUP006", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Proteína vegana", categoria: "suplemento", precio: 110000, codigo: "SUP007", imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Omega 3 alta concentración", categoria: "suplemento", precio: 58000, codigo: "SUP008", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Caseína nocturna", categoria: "suplemento", precio: 99000, codigo: "SUP009", imagen: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Gainer hipercalórico", categoria: "suplemento", precio: 135000, codigo: "SUP010", imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },

    // MEMBRESÍAS
    { nombre: "Membresía Premium", categoria: "membresia", precio: 300000, codigo: "MEM001", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Básica", categoria: "membresia", precio: 150000, codigo: "MEM002", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Estándar", categoria: "membresia", precio: 200000, codigo: "MEM003", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Familiar", categoria: "membresia", precio: 450000, codigo: "MEM004", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía VIP", categoria: "membresia", precio: 500000, codigo: "MEM005", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Estudiantil", categoria: "membresia", precio: 120000, codigo: "MEM006", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Corporativa", categoria: "membresia", precio: 600000, codigo: "MEM007", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Mensual", categoria: "membresia", precio: 50000, codigo: "MEM008", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Trimestral", categoria: "membresia", precio: 135000, codigo: "MEM009", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Membresía Semestral", categoria: "membresia", precio: 250000, codigo: "MEM010", imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" },

    // ROPA
    { nombre: "Camiseta deportiva", categoria: "ropa", precio: 50000, codigo: "ROP001", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Pantaloneta de entrenamiento", categoria: "ropa", precio: 60000, codigo: "ROP002", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Sudadera deportiva", categoria: "ropa", precio: 120000, codigo: "ROP003", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Chaqueta impermeable fitness", categoria: "ropa", precio: 180000, codigo: "ROP004", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Top deportivo para mujer", categoria: "ropa", precio: 70000, codigo: "ROP005", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Leggings de compresión", categoria: "ropa", precio: 85000, codigo: "ROP006", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Guantes de gimnasio", categoria: "ropa", precio: 40000, codigo: "ROP007", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Calcetas deportivas antideslizantes", categoria: "ropa", precio: 25000, codigo: "ROP008", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Gorra deportiva ajustable", categoria: "ropa", precio: 30000, codigo: "ROP009", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Camiseta sin mangas", categoria: "ropa", precio: 45000, codigo: "ROP010", imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" },

    // ACCESORIOS
    { nombre: "Cinturón de pesas", categoria: "accesorios", precio: 80000, codigo: "ACC001", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Muñequeras deportivas", categoria: "accesorios", precio: 35000, codigo: "ACC002", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Rodilleras de compresión", categoria: "accesorios", precio: 65000, codigo: "ACC003", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Correa de levantamiento", categoria: "accesorios", precio: 40000, codigo: "ACC004", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Toalla deportiva", categoria: "accesorios", precio: 25000, codigo: "ACC005", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Bolso de gimnasio", categoria: "accesorios", precio: 95000, codigo: "ACC006", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Botella de agua deportiva", categoria: "accesorios", precio: 30000, codigo: "ACC007", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Protector bucal para deportes", categoria: "accesorios", precio: 20000, codigo: "ACC008", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Cuerda para estiramiento", categoria: "accesorios", precio: 28000, codigo: "ACC009", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" },
    { nombre: "Tobilleras con peso", categoria: "accesorios", precio: 50000, codigo: "ACC010", imagen: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" }
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