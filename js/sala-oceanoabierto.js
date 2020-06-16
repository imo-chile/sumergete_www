// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón de procesos
document.getElementById("btn-procesos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "30%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "66%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_boton_procesos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_procesos.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Procesos oceánicos";
  detalleContenido.innerHTML = "El océano está en constante movimiento, modulando el clima del planeta a través de sus corrientes y patrones de circulación.";
}
// Botón de nosotros
document.getElementById("btn-nosotros").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "26%";
  detalleIcono.style.top = "34%";
  detalleIcono.style.left = "68%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_boton_nosotros.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_nosotros.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Nosotros";
  detalleContenido.innerHTML = "Desde tiempos inmemorables, el ser humano ha tenido una relación íntima con el mar, ya sea como fuente de recursos alimenticios, o un mecanismo de transporte entre países e islas distantes. Pero también, afectándolo de forma negativa.";
}
// Botón de ciclos
document.getElementById("btn-ciclos").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "20%";
  detalleIcono.style.top = "31%";
  detalleIcono.style.left = "73%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_boton_ciclos_elementos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_ciclos.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Ciclo de elementos";
  detalleContenido.innerHTML = "Todos los seres vivos estamos compuestos por moléculas que son fundamentales para el desarrollo de la vida. Estos están presentes en el océano, donde son utilizados, transformados y transportados, a largo de un ciclo continuo.";
}
/*
// Botón de cachalote
document.getElementById("btn-cachalote").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "21%";
  detalleIcono.style.top = "42%";
  detalleIcono.style.left = "72%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_boton_cachalote.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_cachalote.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Exploración Antártica";
  detalleContenido.innerHTML = "Los seres humanos hemos estado siempre asociados a la zona intermareal. Hoy, prácticamente el 60% de la humanidad vive a menos de 60 km de la costa, lo que implica un gran impacto en los ecosistemas costeros.";
}
*/
// Botón de profundidades
document.getElementById("btn-profundidades").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "23%";
  detalleIcono.style.top = "30%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_popup_profundidades.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_profundidades.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Hacia las profundidades";
  detalleContenido.innerHTML = "Se conoce menos del 5% de nuestros océanos. La zona más desconocida e inexplorada es la región del océano profundo, con profundidades de miles de metros, totalmente oscuro, frío y con altísimas presiones.";
}
// Botón de seres
document.getElementById("btn-seres").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "18%";
  detalleIcono.style.top = "35%";
  detalleIcono.style.left = "76%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/OA_boton_seres_vivos.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanoabierto/esquema_oceanoabierto_seres.html');
  //detalleSiguiente.children[0].setAttribute('href', '#');
  detalleTitulo.innerHTML = "Seres vivos";
  detalleContenido.innerHTML = "El mayor porcentaje del océano corresponde a océano abierto. A cientos de kilómetros de cualquier continente, y con miles de metros de profundidad, donde la vida a pesar de todo, se abre camino.";
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
    case 'btn-procesos':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_procesos.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_nosotros.png');
      break;
    case 'btn-ciclos':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_ciclos_elementos.png');
      break;
    case 'btn-cachalote':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_cachalote.png');
      break;
    case 'btn-profundidades':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_profundidades.png');
      break;
    case 'btn-seres':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/glow_OA_boton_seres_vivos.png');
      break;
  }
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-procesos':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_procesos.png');
      break;
    case 'btn-nosotros':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_nosotros.png');
      break;
    case 'btn-ciclos':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_ciclos_elementos.png');
      break;
    case 'btn-cachalote':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_cachalote.png');
      break;
    case 'btn-profundidades':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_profundidades.png');
      break;
    case 'btn-seres':
      element.setAttribute('src', '/../imagenes/sala_oceanoabierto/out_OA_boton_seres_vivos.png');
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