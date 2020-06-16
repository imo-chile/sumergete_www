// Ventana "modal" para los detalles de cada botón.

var detalle = document.getElementById("btn-detalle");
var detalleIcono = document.getElementById("btn-detalle-icono");
var detalleTitulo = document.getElementById("btn-detalle-texto-titulo");
var detalleContenido = document.getElementById("btn-detalle-texto-contenido");
var detalleSiguiente = document.getElementById("btn-detalle-siguiente");

// Botón de impacto
document.getElementById("btn-impacto").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "27%";
  detalleIcono.style.top = "31%";
  detalleIcono.style.left = "67%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_nosotros_en_el_oceano.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_impacto.html');
  detalleTitulo.innerHTML = "Nosotros en el océano";
  detalleContenido.innerHTML = "La vida del ser humano ha estado siempre asociada al océano, hace milenios que nuestra especie conquistó y utiliza el mar y sus recursos, por lo que el impacto de nosotros en el océano es significativo.";
}
// Botón de interaccion (circulo de dos flechas con cosas raras al medio)
document.getElementById("btn-interaccion").onclick = function() { 
  detalle.style.display = "block";
  detalleIcono.style.width = "22%";
  detalleIcono.style.top = "24%";
  detalleIcono.style.left = "69%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_como_se_mueve_el_mar.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_procesos.html');
  detalleTitulo.innerHTML = "Cómo se mueve el mar";
  detalleContenido.innerHTML = "Al observar el océano vemos muy poco de lo que realmente está ocurriendo en él: procesos y fenómenos físicos que son fundamentales para el desarrollo del clima y de la vida sobre la Tierra.";
}
// Botón de interes
document.getElementById("btn-interes").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "22%";
  detalleIcono.style.top = "25%";
  detalleIcono.style.left = "69%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_importancia_cientifica.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_interes.html');
  detalleTitulo.innerHTML = "Importancia Científica";
  detalleContenido.innerHTML = "Observar y analizar nuestro entorno, para comprender lo que nos rodea, es algo innato de los seres humanos. El Océano es hoy nuestro más grande laboratorio natural, y se hace fundamental estudiarlo, conocerlo y comprenderlo.";
}
// Botón de procesos (Nube!)
document.getElementById("btn-procesos").onclick = function() { // Esto es: Nube que es Mar y Aire, esquemas de proceso son de interaccion.
  detalle.style.display = "block";
  detalleIcono.style.width = "27%";
  detalleIcono.style.top = "27%";
  detalleIcono.style.left = "65%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_importancia_del_oceano.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_interaccion.html');
  detalleTitulo.innerHTML = "Mar y Aire";
  detalleContenido.innerHTML = "El océano y la atmósfera no son cajas cerrada, de hecho, entre los dos forman un solo gran sistema. Lo que ocurre en el océano, afecta a la atmósfera, y viceversa.";
}
// Botón de riquezas
document.getElementById("btn-riquezas").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "25%";
  detalleIcono.style.top = "25%";
  detalleIcono.style.left = "65%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_riquezas_del_mar.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_riquezas.html');
  detalleTitulo.innerHTML = "Riquezas del mar";
  detalleContenido.innerHTML = "A lo largo de la historia del ser humano, el océano ha representado la mayor fuente alimentación y de recursos naturales sobre el planeta.";
}
// Botón de vidabajo
document.getElementById("btn-vidabajo").onclick = function() {
  detalle.style.display = "block";
  detalleIcono.style.width = "20%";
  detalleIcono.style.top = "30%";
  detalleIcono.style.left = "70%";
  detalleIcono.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/POP_vida_bajo_el_mar.png');
  detalleSiguiente.children[0].setAttribute('href', '/../paginas/salas/oceanocostero/esquema_oceanocostero_vidabajo.html');
  detalleTitulo.innerHTML = "Vida bajo el mar";
  detalleContenido.innerHTML = "Los seres vivos que aquí habitan son absolutamente marinos, es decir, siempre están en el mar. Estos se ubican entre la superficie y aproximadamente los 200 metros de profundidad, que es la máxima profundidad del océano costero.";
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
    case 'btn-impacto':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_impacto.png');
      break;
    case 'btn-interaccion':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_interaccion.png');
      break;
    case 'btn-interes':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_interes.png');
      break;
    case 'btn-procesos':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_procesos.png');
      break;
    case 'btn-riquezas':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_riquezas.png');
      break;
    case 'btn-vidabajo':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/glow_COSTERO_boton_vidabajo.png');
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
    case 'btn-impacto':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_impacto.png');
      break;
    case 'btn-interaccion':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_interaccion.png');
      break;
    case 'btn-interes':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_interes.png');
      break;
    case 'btn-procesos':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_procesos.png');
      break;
    case 'btn-riquezas':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_riquezas.png');
      break;
    case 'btn-vidabajo':
      element.setAttribute('src', '/../imagenes/sala_oceanocostero/out_COSTERO_boton_vidabajo.png');
      break;
  }
  /*
  if(element.parentElement.getAttribute('id').valueOf() === 'btn-mareas') {
    element.setAttribute('src', '/../imagenes/sala_intermareal/out_INTER_boton_mareas.png');
  }
  */
}


// Obtener en vivo, cambios en el tamaño de la ventana del navegador.

function jsUpdateSize(){
	var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width <= 980) {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_oceanocostero/50_COSTERO_cielo.png');
    document.getElementById('oceano').setAttribute('src', '/../imagenes/sala_oceanocostero/50_COSTERO_océano.png');
    document.getElementById('tierra').setAttribute('src', '/../imagenes/sala_oceanocostero/50_COSTERO_tierra.png');
    //document.getElementById('rocasmar').setAttribute('src', '/../imagenes/sala_oceanocostero/50_COSTERO_rocasmar.png');
  }
  else {
    document.getElementById('cielo').setAttribute('src', '/../imagenes/sala_oceanocostero/COSTERO_cielo.png');
    document.getElementById('oceano').setAttribute('src', '/../imagenes/sala_oceanocostero/COSTERO_océano.png');
    document.getElementById('tierra').setAttribute('src', '/../imagenes/sala_oceanocostero/COSTERO_tierra.png');
    //document.getElementById('rocasmar').setAttribute('src', '/../imagenes/sala_oceanocostero/COSTERO_rocasmar.png');
  }
}
//window.onload = jsUpdateSize;       // When the page first loads
window.onresize = jsUpdateSize;     // When the browser changes size

