// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón de investigacion (04, casa)
document.getElementById("btn-investigacion").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "23%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_investigacion.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/canalesyfiordos/esquema_canalesyfiordos_investigacion.html');
  detalleTitulo.innerHTML = "Problemáticas";
  detalleContenido.innerHTML = "El manejo de cualquier cultivo en estos ambientes se debe llevar a cabo cuidando la naturaleza, el entorno y a su vez, el bienestar de los organismos cultivados. Aún así, existen fenómenos, como las mareas rojas, complejos de predecir y mitigar.";
}
// Botón de nosotros (05, canoa)
document.getElementById("btn-nosotros").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "30%";
  detalleIcono.style.top = "41%";
  detalleIcono.style.left = "66%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_nosotros.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/canalesyfiordos/esquema_canalesyfiordos_nosotros.html');
  detalleTitulo.innerHTML = "Historia e investigación";
  detalleContenido.innerHTML = "Desde siempre el ser humano ha tenido una estrecha relación con los Canales y fiordos patagónicos, desde los primeros habitantes que surcaban sus aguas, hasta los científicos que hoy en día investigan este ambiente, para conocer su biodiversidad y evaluar el impacto que nuestras acciones tienen sobre él.";
}
// Botón de Seres (02, delfín)
document.getElementById("btn-seres").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "21%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "71%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_seres_vivos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/canalesyfiordos/esquema_canalesyfiordos_seres.html');
  detalleTitulo.innerHTML = "Seres vivos";
  detalleContenido.innerHTML = "Los fiordos y canales australes albergan una importante y altísima biodiversidad de especies marinas, que habitan en ambientes con condiciones idóneas para su desarrollo.";
}

// Botón de recursos (03, jaula)
document.getElementById("btn-recursos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "27%";
  detalleIcono.style.top = "46%";
  detalleIcono.style.left = "69%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_recursos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/canalesyfiordos/esquema_canalesyfiordos_recursos.html');
  detalleTitulo.innerHTML = "Nosotros en los fiordos";
  detalleContenido.innerHTML = "Los canales y fiordos del sur de Chile son ambientes ideales para el cultivo y explotación de recursos marinos, al ser zonas relativamente protegidas, libres de contaminantes y muy productivas.";
}
// Botón de origen (01, glaciar)
document.getElementById("btn-origen").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "34%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_origen.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/canalesyfiordos/esquema_canalesyfiordos_origen.html');
  detalleTitulo.innerHTML = "Origen y procesos";
  detalleContenido.innerHTML = "La geografía del sur de Chile es una compleja red de estrechos canales, fiordos, cientos de islas, glaciares y campos de hielo. Un verdadero laberinto que irrumpe en el paisaje, uniendo el Océano Pacífico y la cordillera de Los Andes.";
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
    case 'btn-investigacion':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/glow_CF_boton_investigacion.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/glow_CF_boton_nosotros.png');
      break;
    case 'btn-recursos':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/glow_CF_boton_recursos.png');
      break;
    case 'btn-seres':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/glow_CF_boton_seres_vivos.png');
      break;
    case 'btn-origen':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/glow_CF_boton_origen.png');
      break;
  }
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-investigacion':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_investigacion.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_nosotros.png');
      break;
    case 'btn-recursos':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_recursos.png');
      break;
    case 'btn-seres':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_seres_vivos.png');
      break;
    case 'btn-origen':
      element.setAttribute('src', '/../imagenes/sala_canalesyfiordos/out_CF_boton_origen.png');
      break;
  }
}

/*
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
*/