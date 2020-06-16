// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón Basura Océano.
document.getElementById("btn_basuraoceano").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "22%";
  detalleIcono.style.top = "23%";
  detalleIcono.style.left = "71%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/POP_basura_en_el_oceano.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/islasoceanicas/esquema_islasoceanicas_contaminacion.html');
  
  detalleTitulo.innerHTML = "Contaminación";
  detalleContenido.innerHTML = "Uno de los mayores problemas ambientales en islas oceánicas es la producción de basura y el plástico que llega a sus playas arrastrado por las corrientes.";
}
// Botón de Cómo se Forman.
document.getElementById("btn_comoseforman").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "37%";
  detalleIcono.style.top = "12%";
  detalleIcono.style.left = "63%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/POP_como_se_forman.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/islasoceanicas/esquema_islasoceanicas_origen.html');
  detalleTitulo.innerHTML = "Origen";
  detalleContenido.innerHTML = "En la inmensidad del Océano abierto, donde el fondo alcanza miles de metros de profundidad, pueden aparecer en el paisaje, como espejismos, islas alejadas cientos a miles de kilómetros de cualquier continente.";
}
// Botón de Montes.
document.getElementById("btn_montes").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "32%";
  detalleIcono.style.top = "24%";
  detalleIcono.style.left = "65%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/POP_montes_submarinos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/islasoceanicas/esquema_islasoceanicas_montes.html');
  detalleTitulo.innerHTML = "Montes Submarinos";
  detalleContenido.innerHTML = "En pleno océano abierto, en ese “Desierto marino”, puede aparecer de pronto, un monte sumergido cercano a la superficie, que con su sola presencia cambia completamente el ecosistema que lo rodea.";
}

// Botón de Protegiendo.
document.getElementById("btn_protegiendo").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "30%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/POP_protegiendo_recursos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/islasoceanicas/esquema_islasoceanicas_conservacion.html');
  detalleTitulo.innerHTML = "Conservación";
  detalleContenido.innerHTML = "Dado a la importante diversidad de especies que se encuentran en estos ecosistemas, es fundamental conocerlas, cuidarlas y generar áreas de protección de estas, con el fin de preservarlas.";

}
// Botón de Vidas Isla.
document.getElementById("btn_vidaisla").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "22%";
  detalleIcono.style.top = "33%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/POP_vida_en_la_isla.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/islasoceanicas/esquema_islasoceanicas_evolucion.html');
  detalleTitulo.innerHTML = "Evolución";
  detalleContenido.innerHTML = "Estos ecosistemas presentan el más alto grado de endemismo del mundo, esto quiere decir, que existen aquí especies que se encuentran de forma natural, sólo en ese lugar y en ningún otro.";
  }

/*
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == detalle) {
    detalle.style.display = "none";
  }
}*/
detalle.onclick = function() {
	detalle.style.display = "none";
}


// Obtenemos el id del padre de la img, y vemos qué imagen poner dependiendo de cuál es.

function hover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn_basuraoceano':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/glow_ISLAS_boton_basuraoceano.png');
      break;
    case 'btn_comoseforman':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/glow_ISLAS_boton_comoseforman.png');
      break;
    case 'btn_montes':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/glow_ISLAS_boton_montes.png');
      break;
    case 'btn_protegiendo':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/glow_ISLAS_boton_protegiendo.png');
      break;
    case 'btn_vidaisla':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/glow_ISLAS_boton_vidaisla.png');
      break;
  }
  /*
  if(element.parentElement.getAttribute('id').valueOf() === 'btn-mareas') {
    element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_mareas.png');
  }
  */
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn_basuraoceano':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/out_ISLAS_boton_basuraoceano.png');
      break;
    case 'btn_comoseforman':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/out_ISLAS_boton_comoseforman.png');
      break;
    case 'btn_montes':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/out_ISLAS_boton_montes.png');
      break;
    case 'btn_protegiendo':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/out_ISLAS_boton_protegiendo.png');
      break;
    case 'btn_vidaisla':
      element.setAttribute('src', '/../imagenes/sala_islasoceanicas/out_ISLAS_boton_vidaisla.png');
      break;
  }
  /*
  if(element.parentElement.getAttribute('id').valueOf() === 'btn-mareas') {
    element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_mareas.png');
  }
  */
}


var patternFondo = document.getElementById('fondo-pattern-olas');

// Obtener en vivo, cambios en el tamaño de la ventana del navegador.

function jsUpdateSize(){
  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width <= 980) {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_islasoceanicas/50_ISLAS_cielo.png');
    document.getElementById('mar').setAttribute('src', '/../imagenes/sala_islasoceanicas/50_ISLAS_mar.png');
  }
  else {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_islasoceanicas/ISLAS_cielo.png');
    document.getElementById('mar').setAttribute('src', '/../imagenes/sala_islasoceanicas/ISLAS_mar.png');
  }
}
//window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;     // When the browser changes size

