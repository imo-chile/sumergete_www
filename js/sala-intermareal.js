// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón de Habitat
document.getElementById("btn-habitat").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "30%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "67%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_habitat.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_habitat.html');
  detalleTitulo.innerHTML = "Hábitat";
  detalleContenido.innerHTML = "Los organismos que habitan el intermareal responden a un ordenado patrón de distribución, en respuesta a las condiciones ambientales.";
}
// Botón de Mareas
document.getElementById("btn-mareas").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "10%";
  detalleIcono.style.top = "15%";
  detalleIcono.style.left = "75%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_mareas.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_mareas.html');
  detalleTitulo.innerHTML = "Mareas";
  detalleContenido.innerHTML = "La altura del mar en la playa cambia constantemente. Sube y baja dos veces al día y todos los días. Cuando el agua sube, se le denomina marea alta, y cuando baja, es una marea baja.";
}
// Botón de Seres vivos
document.getElementById("btn-seresvivos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "18%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_seresvivos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_seresvivos.html');
  detalleTitulo.innerHTML = "Seres Vivos";
  detalleContenido.innerHTML = "El intermareal está habitado por una gran diversidad de organismos, que se han adaptado a la influencia de las mareas y del oleaje.";
}

// Botón de Nosotros
document.getElementById("btn-nosotros").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "30%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_nosotrosenelmar.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_nosotros.html');
  detalleTitulo.innerHTML = "Nosotros en la Playa";
  detalleContenido.innerHTML = "Los seres humanos hemos estado siempre asociados a la zona intermareal. Hoy, prácticamente el 60% de la humanidad vive a menos de 60 km de la costa, lo que implica un gran impacto en los ecosistemas costeros.";
}
// Botón de Playas
document.getElementById("btn-playas").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "27%";
  detalleIcono.style.top = "38%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_playasdearena.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_playas.html');
  detalleTitulo.innerHTML = "Playas de Arena";
  detalleContenido.innerHTML = "El intermareal no solo está formado por rocas, también existe intermareal arenoso o más conocido como playas de arena.";
}
// Botón de Recursos
document.getElementById("btn-recursos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "25%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_recursosrelevantes.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_recursos.html');
  detalleTitulo.innerHTML = "Recursos Relevantes";
  detalleContenido.innerHTML = "Chile posee una extensa costa con una inmensa riqueza de recursos marinos que debemos aprender a reconocer y cuidar.";
}
// Botón de Quién Come
document.getElementById("btn-quiencome").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "25%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_quiencomeaquien.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_quiencome.html');
  detalleTitulo.innerHTML = "Quién come a quién";
  detalleContenido.innerHTML = "Todos los organismos se relacionan entre sí, en una compleja trama de transferencia de energía.";
}
// Botón de Olas
document.getElementById("btn-olas").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "30%";
  detalleIcono.style.top = "32%";
  detalleIcono.style.left = "65%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_olas.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_olas.html');
  detalleTitulo.innerHTML = "Olas";
  detalleContenido.innerHTML = "El viento sopla sobre un mar en calma y aparecen pequeñas irregularidades, estas son ondas de energía que se desplazan por la superficie.";
}
// Botón de Ciclos
document.getElementById("btn-ciclos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "25%";
  detalleIcono.style.left = "65%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_intermareal/POP_ciclosdevida.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/intermareal/esquema_intermareal_ciclos.html');
  detalleTitulo.innerHTML = "Ciclos de vida";
  detalleContenido.innerHTML = "Todos los organismos vivos pasan por un ciclo. El organismo se alimenta, se reproduce y se desarrolla. El ciclo finaliza para dar paso a otros ciclos.";
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
    case 'btn-habitat':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_habitat.png');
      break;
    case 'btn-mareas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_mareas.png');
      break;
    case 'btn-seresvivos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_seresvivos.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_nosotros.png');
      break;
    case 'btn-playas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_playas.png');
      break;
    case 'btn-recursos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_recursos.png');
      break;
    case 'btn-quiencome':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_quiencome.png');
      break;
    case 'btn-olas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_olas.png');
      break;
    case 'btn-ciclos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/glow_INTER_boton_ciclos.png');
      break;
  }
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-habitat':
      element.setAttribute('src', '/../imagenes/sala_intermareal/INTER_boton_habitat.png');
      break;
    case 'btn-mareas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_mareas.png');
      break;
    case 'btn-seresvivos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_seresvivos.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_nosotros.png');
      break;
    case 'btn-playas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_playas.png');
      break;
    case 'btn-recursos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_recursos.png');
      break;
    case 'btn-quiencome':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_quiencome.png');
      break;
    case 'btn-olas':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_olas.png');
      break;
    case 'btn-ciclos':
      element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_ciclos.png');
      break;
  }
}


//var patternFondo = document.getElementById('fondo-pattern-olas');

// Obtener en vivo, cambios en el tamaño de la ventana del navegador.
function jsUpdateSize(){
  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (width <= 600) {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_intermareal/50_INTER_cielo.png');
    document.getElementById('playa').setAttribute('src', '/../imagenes/sala_intermareal/50_INTER_playa.png');
    document.getElementById('mar').setAttribute('src', '/../imagenes/sala_intermareal/50_INTER_mar.png');
    document.getElementById('ciudad').setAttribute('src', '/../imagenes/sala_intermareal/50_INTER_ciudad.png');
  }
  else {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_intermareal/INTER_cielo.png');
    document.getElementById('playa').setAttribute('src', '/../imagenes/sala_intermareal/INTER_playa.png');
    document.getElementById('mar').setAttribute('src', '/../imagenes/sala_intermareal/INTER_mar.png');
    document.getElementById('ciudad').setAttribute('src', '/../imagenes/sala_intermareal/INTER_ciudad.png');
  }

}
//window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;     // When the browser changes size
//window.onload = function () {console.log('Página cargada.');}
