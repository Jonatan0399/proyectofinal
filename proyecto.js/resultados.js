// Variables para la paginación
let currentPage = 1;
const resultsPerPage = 10;
let resultados = [];

// Elementos del DOM
const tablaResultados = document.getElementById('tabla-resultados');
const resultadosBody = document.getElementById('resultados-body');
const totalResultadosSpan = document.getElementById('total-resultados');
const contenedorTabla = document.getElementById('contenedor-tabla');
const mensajeNoResultados = document.getElementById('mensaje-no-resultados');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const btnLimpiar = document.getElementById('btn-limpiar');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarResultados();
  mostrarResultados();

  btnLimpiar.addEventListener('click', limpiarBusqueda);
  prevPageBtn.addEventListener('click', irPaginaAnterior);
  nextPageBtn.addEventListener('click', irPaginaSiguiente);
});

// Cargar resultados desde localStorage
function cargarResultados() {
  const resultadosGuardados = localStorage.getItem('resultadosBusqueda');
  
  if (resultadosGuardados) {
    resultados = JSON.parse(resultadosGuardados);
  } else {
    resultados = [];
  } 
}

// Mostrar resultados en la tabla
function mostrarResultados() {
  // Actualizar contador de resultados
  totalResultadosSpan.textContent = resultados.length;

  //verificar si hay resultados
  if (resultados.length === 0) {
    contenedorTabla.style.display = 'none';
    mensajeNoResultados.style.display = 'block';
    return;
  }

  // Mostrar tabla de resultados
  contenedorTabla.style.display = 'block';
  mensajeNoResultados.style.display = 'none';

  // Calcular los índices de inicio y fin para la paginación
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, resultados.length);
  const currentResults = resultados.slice(startIndex, endIndex);

  // limpiar tabla de resultados
  resultadosBody.innerHTML = '';

  // Generar filas de resultados
  currentResults.forEach(servicio => {
    const row = document.createElement('tr');
    const formattedPrice = formatCurrency(servicio.precio);

    row.innerHTML = `
      <td><img src="img/${servicio.imagen}" alt="${servicio.nombre}" onerror="this.src='img/placeholder.jpg'"></td>
      <td>${servicio.nombre}</td>
      <td>${servicio.categoria}</td>
      <td>${servicio.precio}</td>
      <td>${servicio.codigo}</td>
      <td>${servicio.stock}</td>
    `;

    resultadosBody.appendChild(row);
  });

  actualizarControlesPaginacion();
}

// Actualizar controles de paginación
function actualizarControlesPaginacion() {
  const totalPages = Math.ceil(resultados.length / resultsPerPage);

  // Actualizar texto informativo de la página
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

  // Habilitar o deshabilitar botones de paginación
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;


  // Añadir/quitar clase visual para botones deshabilitados
  if (prevPageBtn.disabled) {
    prevPageBtn.classList.add('disabled');
  } else {
    prevPageBtn.classList.remove('disabled');
  }
  
  if (nextPageBtn.disabled) {
    nextPageBtn.classList.add('disabled');
  } else {
    nextPageBtn.classList.remove('disabled');
  }
}


// Ir a página anterior
function irPaginaAnterior() {
  if (currentPage > 1) {
    currentPage--;
    mostrarResultados();
  }
}

// Ir a página siguiente
function irPaginaSiguiente() {
  const totalPages = Math.ceil(resultados.length / resultsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    mostrarResultados();
  }
}

// Limpiar búsqueda
function limpiarBusqueda() {
  // eliminar resultados guardados
  localStorage.removeItem('resultadosBusqueda');

  // Redirigir a la pagina de busqueda
  window.location.href = 'busqueda.html';
}

// Formatear número como moneda (COP)
function formatCurrency(value) {
  return '$ ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
