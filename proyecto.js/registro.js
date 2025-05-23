/* .........................SCRIPT DE REGISTRO.HTML....................... */
document.addEventListener("DOMContentLoaded", function () {
  const formRegistro = document.getElementById("formRegistro");
  const registrarBtn = document.getElementById("registrarBtn");
  const limpiarBtn = document.getElementById("limpiarBtn");

  // Inicializar array de productos si no existe
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  // Función para validar el código del producto
  function validarCodigo(codigo) {
    const tieneMinMayusculas = /(?=.*[a-z])(?=.*[A-Z])/;
    const tieneDosNumeros = /(?:.*\d.*\d)/;
    return (
      codigo.length >= 8 &&
      tieneMinMayusculas.test(codigo) &&
      tieneDosNumeros.test(codigo)
    );
  }

  // Registrar nuevo producto
  formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const codigo = document.getElementById("codigo").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value) || 0;
    const descripcion = document.getElementById("descripcion").value.trim();

    // Validaciones
    if (nombre.length === 0 || nombre.length > 20) {
      alert("El nombre debe tener entre 1 y 20 caracteres.");
      return;
    }

    if (!categoria) {
      alert("Debe seleccionar una categoría.");
      return;
    }

    if (!imagen) {
      alert("Debe seleccionar una imagen.");
      return;
    }

    if (!validarCodigo(codigo)) {
      alert(
        "El código debe tener mínimo 8 caracteres, una mayúscula, una minúscula y dos números."
      );
      return;
    }

    if (isNaN(precio) || precio <= 0) {
      alert("El precio debe ser un número mayor a 0.");
      return;
    }

    // Validar que el código no esté repetido
    const codigoExistente = productos.some((p) => p.codigo === codigo);
    if (codigoExistente) {
      alert("¡Error! El código de producto ya existe.");
      return;
    }

    // Crear el nuevo producto
    const nuevoProducto = {
      nombre,
      categoria,
      imagen,
      codigo,
      // Guardar el precio formateado en pesos
      precio: `$${precio.toLocaleString("es-CO")}`,
      cantidad,
      descripcion,
      fechaRegistro: new Date().toISOString(),
    };

    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));

    alert("Producto registrado correctamente 🚀");
    formRegistro.reset();

    // Redireccionar después de 1 segundo
    setTimeout(() => {
      window.location.href = "productos.html";
    }, 1000);
  });

  //  Agregar validación en tiempo real
  document.getElementById("codigo").addEventListener("input", function () {
    if (this.value.length > 0 && !validarCodigo(this.value)) {
      this.setCustomValidity(
        "El código debe tener mínimo 8 caracteres, una mayúscula, una minúscula y dos números."
      );
    } else {
      this.setCustomValidity("");
    }
  });

  // Botón limpiar
  limpiarBtn.addEventListener("click", function () {
    formRegistro.reset();
  });
});