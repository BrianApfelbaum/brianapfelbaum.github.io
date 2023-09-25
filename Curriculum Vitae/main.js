const btnToggleLeft = document.querySelector("#sidebar .toggle-btn");
const btnToggleRight = document.querySelector("#sidebar2 .toggle-btn");
const sidebarLeft = document.getElementById("sidebar");
const sidebarRight = document.getElementById("sidebar2");

btnToggleLeft.addEventListener("click", function() {
  sidebarLeft.classList.toggle("active");
});

btnToggleRight.addEventListener("click", function() {
  sidebarRight.classList.toggle("active");
});

function mostrarArticulo(num) {
  // Ocultar todos los artículos
  var articulos = document.querySelectorAll('div[id^="articulo"]');
  for (var i = 0; i < articulos.length; i++) {
    articulos[i].style.display = "none";
  }

  // Mostrar el artículo seleccionado
  var articuloMostrado = document.getElementById("articulo" + num);
  articuloMostrado.style.display = "block";
}

function ocultarSidebar() {
  sidebarLeft.classList.remove("active");
  sidebarRight.classList.remove("active");
}
