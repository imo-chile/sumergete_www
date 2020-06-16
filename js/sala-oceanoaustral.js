// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón de Habitat
document.getElementById("btn-gigante").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "30%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "66%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_gigante_blanco.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_gigante.html');
  detalleTitulo.innerHTML = "Gigante Blanco";
  detalleContenido.innerHTML = "Es considerado el mayor ecosistema marino del planeta. Con una larga historia evolutiva, este sistema aislado del resto de los océanos, se considera un sistema semi-cerrado, especialmente por la presencia del Frente Polar Antártico.";
}
// Botón de Mareas
document.getElementById("btn-clima").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "26%";
  detalleIcono.style.top = "21%";
  detalleIcono.style.left = "68%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_clima_en_la_antartica.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_clima.html');
  detalleTitulo.innerHTML = "Clima en la Antártica";
  detalleContenido.innerHTML = "El océano austral es clave en la regulación del clima de nuestro planeta. Sus masas de agua conducen la circulación oceánica global, transportando y distribuyendo energía y nutrientes hacia los otros océanos.";
}
// Botón de Seres vivos
document.getElementById("btn-protegiendo").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "8%";
  detalleIcono.style.top = "30%";
  detalleIcono.style.left = "78%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_protegiendo_especies.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_protegiendo.html');
  detalleTitulo.innerHTML = "Protegiendo Especies";
  detalleContenido.innerHTML = "Debido a la gran riqueza que esconde el continente antártico y el océano austral, el ser humano ha reconocido la importancia de estudiarlo para conocerlo, protegerlo y preservarlo.";
}

// Botón de Nosotros
document.getElementById("btn-exploracion").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "21%";
  detalleIcono.style.top = "46%";
  detalleIcono.style.left = "72%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_exploracion_antartica.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_exploracion.html');
  detalleTitulo.innerHTML = "Exploración Antártica";
  detalleContenido.innerHTML = "Hace siglos comenzó a escribirse la historia de la exploración antártica. Cientos de navegantes se han aventurado en las aguas del océano austral y hoy científicos de todo el mundo colaboran para estudiar este gran ecosistema.";
}
// Botón de Playas
document.getElementById("btn-vida").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "19%";
  detalleIcono.style.top = "28%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_vida_bajo_el_hielo.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_vida.html');
  detalleTitulo.innerHTML = "Vida Bajo el Hielo";
  detalleContenido.innerHTML = "El océano austral parece un ambiente frío e inhóspito, pero alberga una importante diversidad de organismos clave para los ecosistemas marinos, con características únicas para desarrollarse y sobrevivir.";
}
// Botón de Recursos
document.getElementById("btn-aves").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "14%";
  detalleIcono.style.top = "32%";
  detalleIcono.style.left = "76%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/OAU_boton_aves_y_mamiferos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoaustral/esquema_oceanoaustral_aves.html');
  detalleTitulo.innerHTML = "Aves y Mamíferos";
  detalleContenido.innerHTML = "El océano austral es fundamental para una gran cantidad de especies de aves y mamíferos que habitan de forma permanente o que llegan todos los años a estas latitudes a alimentarse.";
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
    case 'btn-gigante':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_gigante_blanco.png');
      break;
    case 'btn-clima':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_clima_en_la_antartica.png');
      break;
    case 'btn-protegiendo':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_protegiendo_especies.png');
      break;
    case 'btn-exploracion':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_exploracion_antartica.png');
      break;
    case 'btn-vida':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_vida_bajo_el_hielo.png');
      break;
    case 'btn-aves':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/glow_OAU_boton_aves_y_mamiferos.png');
      break;
  }
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-gigante':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_gigante_blanco.png');
      break;
    case 'btn-clima':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_clima_en_la_antartica.png');
      break;
    case 'btn-protegiendo':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_protegiendo_especies.png');
      break;
    case 'btn-exploracion':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_exploracion_antartica.png');
      break;
    case 'btn-vida':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_vida_bajo_el_hielo.png');
      break;
    case 'btn-aves':
      element.setAttribute('src', '/../imagenes/sala_oceanoaustral/out_OAU_boton_aves_y_mamiferos.png');
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