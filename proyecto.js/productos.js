// --- PASO 1: Insertar productos en localStorage si no existen ---
if (!localStorage.getItem("productos")) {
  const productosIniciales = [
    // EQUIPO
    { nombre: "Mancuerna de manos", categoria: "equipo", precio: 150000, codigo: "EQ001", imagen: "https://m.media-amazon.com/images/I/61V-74tQFfL._AC_SL1500_.jpg" },
    { nombre: "Colchoneta de yoga", categoria: "equipo", precio: 85000, codigo: "EQ002", imagen: "https://sportfitness.co/cdn/shop/products/38159-1.png?v=1649444812" },
    { nombre: "Banda elástica de resistencia", categoria: "equipo", precio: 60000, codigo: "EQ003", imagen: "https://sportfitness.co/cdn/shop/collections/set-de-bandas-elasticas-x5-sportfitness.jpg?v=1670008040" },
    { nombre: "Rueda abdominal", categoria: "equipo", precio: 70000, codigo: "EQ004", imagen: "https://walmartgt.vtexassets.com/arquivos/ids/467397/Rueda-de-Ejercicio-Atheltic-Works-1-42042.jpg?v=638419041971230000" },
    { nombre: "Balón medicinal 5kg", categoria: "equipo", precio: 130000, codigo: "EQ005", imagen: "https://realfitnessperu.com/wp-content/uploads/2023/08/4.webp" },
    { nombre: "Comba profesional", categoria: "equipo", precio: 45000, codigo: "EQ006", imagen: "https://lh3.googleusercontent.com/proxy/AMYxriGmWLCRby88E1h2XUlAKNvRfORHXrxhIeTbywlqa1mlSZYal9KttxucHLpfNH4spyK6r5kBCyZuMw0JXxGtDkcawxmRT5TAUlRXarauGm9EJ7sGYmKQSgI" },
    { nombre: "Disco olímpico 10kg", categoria: "equipo", precio: 120000, codigo: "EQ007", imagen: "https://fckfit.com/cdn/shop/files/10kg_03f09954-9e02-437c-baf3-871fc2b29bfa_1024x1024.png?v=1743101296" },
    { nombre: "Kettlebell 8kg", categoria: "equipo", precio: 110000, codigo: "EQ008", imagen: "https://cdn11.bigcommerce.com/s-p89g8w2tc9/products/333/images/1314/Kettlebell-Pesa-Rusa-8-kg-1__92760.1705499695.1280.1280.jpg?c=1" },
    { nombre: "Banco para pesas ajustable", categoria: "equipo", precio: 300000, codigo: "EQ009", imagen: "https://m.media-amazon.com/images/I/41VJcZfnjiL._AC_UF1000,1000_QL80_.jpg" },
    { nombre: "Soporte para barras", categoria: "equipo", precio: 250000, codigo: "EQ010", imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_714189-MPE70806556634_082023-T-soporte-de-mancuernas-rack-para-pesas-alta-resistencia-black.webp" },

    // SUPLEMENTOS
    { nombre: "Proteína Whey", categoria: "suplemento", precio: 120000, codigo: "SUP001", imagen: "https://www.optimumnutrition.com.co/wp-content/uploads/2023/08/gold-standard-5-lb-french-vanilla-800x800.jpg" },
    { nombre: "Creatina Monohidratada", categoria: "suplemento", precio: 95000, codigo: "SUP002", imagen: "https://fitnesspeople.com.co/cdn/shop/products/0006042_creatina-monohidrato-dragon-pharma-300gr.jpg?v=1695262790" },
    { nombre: "BCAA 2:1:1", categoria: "suplemento", precio: 78000, codigo: "SUP003", imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/bup/bup03234/y/8.jpg" },
    { nombre: "Pre-entrenamiento explosivo", categoria: "suplemento", precio: 89000, codigo: "SUP004", imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sst/sst71742/l/8.jpg" },
    { nombre: "Glutamina en polvo", categoria: "suplemento", precio: 72000, codigo: "SUP005", imagen: "https://locatelcolombia.vtexassets.com/arquivos/ids/231442/19962797767_1_L-GLUTAMINE-POLVO-6000MG-X-240G.jpg?v=637376782153400000" },
    { nombre: "Multivitamínico deportivo", categoria: "suplemento", precio: 65000, codigo: "SUP006", imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/msc/msc61017/y/24.jpg" },
    { nombre: "Proteína vegana", categoria: "suplemento", precio: 110000, codigo: "SUP007", imagen: "https://www.elmanjar.com.co/wp-content/uploads/2020/02/nutramerican-proteina-polvo-arveja-el-manjar-vegano.jpg" },
    { nombre: "Omega 3 alta concentración", categoria: "suplemento", precio: 58000, codigo: "SUP008", imagen: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/sol/sol02058/y/116.jpg" },
    { nombre: "Caseína nocturna", categoria: "suplemento", precio: 99000, codigo: "SUP009", imagen: "https://m.media-amazon.com/images/I/71s1H5xDoBL.jpg" },
    { nombre: "Gainer hipercalórico", categoria: "suplemento", precio: 135000, codigo: "SUP010", imagen: "https://media.falabella.com/falabellaCO/125134469_03/w=800,h=800,fit=pad" },

    // MEMBRESÍAS
    { nombre: "Membresía Premium", categoria: "membresia", precio: 300000, codigo: "MEM001", imagen: "https://construyendofutbol.com/wp-content/uploads/2023/11/Carteles-Home-2.0-1-1024x577.webp" },
    { nombre: "Membresía Básica", categoria: "membresia", precio: 150000, codigo: "MEM002", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSgGq-kV16fpO2PP8t18rGxsHDu2oOlDmOQ&s" },
    { nombre: "Membresía Estándar", categoria: "membresia", precio: 200000, codigo: "MEM003", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjl7Xjcf5HH132xXvnNcKW-8bnjKWcg9OuIA&s" },
    { nombre: "Membresía Familiar", categoria: "membresia", precio: 450000, codigo: "MEM004", imagen: "https://st3.depositphotos.com/9880800/15051/i/450/depositphotos_150513064-stock-photo-happy-family-exercising-with-dumbbells.jpg" },
    { nombre: "Membresía VIP", categoria: "membresia", precio: 500000, codigo: "MEM005", imagen: "https://us.123rf.com/450wm/mrhighsky/mrhighsky1601/mrhighsky160100075/51334828-membres%C3%ADa-vip-insignia-de-oro.jpg" },
    { nombre: "Membresía Estudiantil", categoria: "membresia", precio: 120000, codigo: "MEM006", imagen: "https://bodytech.imgix.net/landing/67ad27726a50a.jpg" },
    { nombre: "Membresía Corporativa", categoria: "membresia", precio: 600000, codigo: "MEM007", imagen: "https://media.istockphoto.com/id/512543272/es/foto/hombre-sosteniendo-una-pesa.jpg?s=612x612&w=0&k=20&c=xpZjCTs0O8qKpkmdVrG-StfMB7OGiiZyjABmwItUCSc=" },
    { nombre: "Membresía Mensual", categoria: "membresia", precio: 50000, codigo: "MEM008", imagen: "https://gymstart.co/wp-content/uploads/2024/04/plan-mensual.jpg" },
    { nombre: "Membresía Trimestral", categoria: "membresia", precio: 135000, codigo: "MEM009", imagen: "https://bodytech.imgix.net/landing/67ad2849e0efb.jpg" },
    { nombre: "Membresía Semestral", categoria: "membresia", precio: 250000, codigo: "MEM010", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlur0O4Hzix4Cvkxo698QorfkKMxDl7231Q&s" },

    // ROPA
    { nombre: "Camiseta deportiva", categoria: "ropa", precio: 50000, codigo: "ROP001", imagen: "https://vivimar.com.co/wp-content/uploads/2024/08/117-01-camiseta-deportiva-adidas.webp" },
    { nombre: "Pantaloneta de entrenamiento", categoria: "ropa", precio: 60000, codigo: "ROP002", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9lRuR0LNp17KlGlwdlcP_53k6aulIK22CMg&s" },
    { nombre: "Sudadera deportiva", categoria: "ropa", precio: 120000, codigo: "ROP003", imagen: "https://tiendasuniversalstreet.com/wp-content/uploads/2023/11/53008201-1-2.webp" },
    { nombre: "Chaqueta impermeable fitness", categoria: "ropa", precio: 180000, codigo: "ROP004", imagen: "https://contents.mediadecathlon.com/p1800875/k$d2dd03ff68657f71d8f293a097903a30/chaqueta-impermeable-de-senderismo-montana-mh150-hombre.jpg" },
    { nombre: "Top deportivo para mujer", categoria: "ropa", precio: 70000, codigo: "ROP005", imagen: "https://surtidoradepartamental.vteximg.com.br/arquivos/ids/549248/070000046614_1.jpg?v=638479008707200000" },
    { nombre: "Leggings de compresión", categoria: "ropa", precio: 85000, codigo: "ROP006", imagen: "https://media.falabella.com/falabellaCO/121567952_01/w=800,h=800,fit=pad" },
    { nombre: "Guantes de gimnasio", categoria: "ropa", precio: 40000, codigo: "ROP007", imagen: "https://wargosports.com/cdn/shop/files/guantes_para_gym_clasic.jpg?v=1726090173" },
    { nombre: "Calcetas deportivas antideslizantes", categoria: "ropa", precio: 25000, codigo: "ROP008", imagen: "https://www.arequipe.com.co/cdn/shop/files/ANTIDESLIZANTES-BLANCAS-FLECHAS-1.jpg?v=1737475697" },
    { nombre: "Gorra deportiva ajustable", categoria: "ropa", precio: 30000, codigo: "ROP009", imagen: "https://http2.mlstatic.com/D_NQ_NP_643056-MCO77093500275_062024-O.webp" },
    { nombre: "Camiseta sin mangas", categoria: "ropa", precio: 45000, codigo: "ROP010", imagen: "https://media.training-fit-es.es/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas_ic6945_9_apparel_zip_-_turntable_3d-8_white.jpg" },

    // ACCESORIOS
    { nombre: "Cinturón de pesas", categoria: "accesorios", precio: 80000, codigo: "ACC001", imagen: "https://m.media-amazon.com/images/I/91+ELSOw-qL._AC_SL1500_.jpg" },
    { nombre: "Muñequeras deportivas", categoria: "accesorios", precio: 35000, codigo: "ACC002", imagen: "https://ssrsportoficial.com.mx/cdn/shop/products/VACIO-2022-10-06T205636.401.png?v=1665107841&width=1445" },
    { nombre: "Rodilleras de compresión", categoria: "accesorios", precio: 65000, codigo: "ACC003", imagen: "https://www.thundra.co/wp-content/uploads/2021/02/rodillera-1-1.jpg" },
    { nombre: "Correa de levantamiento", categoria: "accesorios", precio: 40000, codigo: "ACC004", imagen: "https://http2.mlstatic.com/D_NQ_NP_788114-MLU74844145204_032024-O.webp" },
    { nombre: "Toalla deportiva", categoria: "accesorios", precio: 25000, codigo: "ACC005", imagen: "https://static-content-1.boomfit.com/23975-home_default/toalla-deportiva-negra-boomfit.jpg" },
    { nombre: "Bolso de gimnasio", categoria: "accesorios", precio: 95000, codigo: "ACC006", imagen: "https://tienda.clubdeportivotenerife.es/675-thickbox_default/bolso-de-gimnasio-pequeno.jpg" },
    { nombre: "Botella de agua deportiva", categoria: "accesorios", precio: 30000, codigo: "ACC007", imagen: "https://sportfitness.co/cdn/shop/files/807531_22_1080x.jpg?v=1723568724" },
    { nombre: "Protector bucal para deportes", categoria: "accesorios", precio: 20000, codigo: "ACC008", imagen: "https://www.ortodonciagonzalezdelrio.com/wp-content/uploads/2019/11/protector-dental.jpg" },
    { nombre: "Cuerda para estiramiento", categoria: "accesorios", precio: 28000, codigo: "ACC009", imagen: "https://i5.walmartimages.com/asr/b34c6391-e67c-41cc-aca6-098bf1c9e5e4.79f21d36378666b255dccde63a1f1d69.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
    { nombre: "Tobilleras con peso", categoria: "accesorios", precio: 50000, codigo: "ACC010", imagen: "https://www.suples.cl/images/productos/par_pesas_tobilleras_1kg_greatlhete_650x650.webp" }
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

// Función para mostrar productos
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

    let imagenSrc = defaultImage;
    if (producto.imagen) {
      if (producto.imagen.startsWith("data:image")) {
        imagenSrc = producto.imagen;
      } else {
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

// eliminar producto
function eliminarProducto(codigo) {
  const productosActualizados = productos.filter(p => p.codigo !== codigo);
  localStorage.setItem("productos", JSON.stringify(productosActualizados));
  location.reload(); // Recarga la página para actualizar la vista
}

// Actualiza el estado de los botones de paginación
function actualizarBotones() {
  btnAnterior.disabled = paginaActual === 1;
  btnSiguiente.disabled = paginaActual * productosPorPagina >= productos.length;
}

// Ir a la siguiente página
function siguientePagina() {
  if (paginaActual * productosPorPagina < productos.length) {
    paginaActual++;
    mostrarProductos();
  }
}

// Ir a la página anterior
function anteriorPagina() {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
}

// Event listeners para paginación
btnAnterior.addEventListener("click", anteriorPagina);
btnSiguiente.addEventListener("click", siguientePagina);

// Inicialización automática al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);