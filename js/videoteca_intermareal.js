// Ventana "modal" para los detalles de cada botón.

var detalleVTC = document.getElementById("vtc-detalle");
var detalleVtcCerrar = document.getElementById("menu-btn-vtc-cerrar");
var detalleMainVideo = document.getElementById("vtc-detalle-main-vid-frame");
var video = document.getElementById("video-principal");
var detalleSecondaryVideo1 = document.getElementById("video-secundario-1");
var detalleSecondaryVideo2 = document.getElementById("video-secundario-2");
var detalleSecondaryVideo3 = document.getElementById("video-secundario-3");
var detalleSecondaryVideo4 = document.getElementById("video-secundario-4");

// Botón de videoteca, muestra la videoteca al ser apretado.
document.getElementById("menu-btn-vtc").onclick = function() {
  detalleVTC.style.display = "block";
}

// Cerrar el modal desaparece.
detalleVtcCerrar.onclick = function() {
	detalleVTC.style.display = "none";
	video.data = 'http://www.youtube.com/embed/wbbTzM9P3Is';
}

// Ponemos en variables los videos iniciales (4 primeros, 1er bloque), ya que van a cambiar dependiendo de los botones del slider. Básicamente, esta es la opción 1 del slider.
detalleSecondaryVideo1.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_1.jpg';
var videoSecundario1 = 'http://www.youtube.com/embed/BIe-_eIZUWo';
detalleSecondaryVideo2.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_2.jpg';
var videoSecundario2 = 'http://www.youtube.com/embed/k79Fn1DvKlM';
detalleSecondaryVideo3.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_3.jpg';
var videoSecundario3 = 'http://www.youtube.com/embed/uhCG5xlk9qA';
detalleSecondaryVideo4.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_4.jpg';
var videoSecundario4 = 'http://www.youtube.com/embed/UmC1QZpWTvc';
video.data = 'http://www.youtube.com/embed/wbbTzM9P3Is'; // El inicial, nombre de la sala.

// Le entrega el link del video secundario elegido a la sección del video principal, cuando se haga click en la imagen del video secundario en el slider.
function videoDisplay(element) {
	switch(element.getAttribute('id').valueOf()) {
		case 'video-secundario-1':
	    video.data = videoSecundario1;
    break;

  	case 'video-secundario-2':
  		video.data = videoSecundario2;
  	break;

  	case 'video-secundario-3':
  		video.data = videoSecundario3;
  	break;

  	case 'video-secundario-4':
  		video.data = videoSecundario4;
  	break;
	}
}

// Cada bloque son 4 videos, 
var bloqueActualSlider = 1; // 2 porque ya se empieza mostrando lo del bloque 1.

// Cambiamos los datos para cada sala o los campos siguientes del data con el enlace a cada video, y el src de la imagen a mostrar. Se agregan if si se tienen más bloques y así.
function sliderButton(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'flecha-izq-slider':
	    if (bloqueActualSlider == 1) {
	    	mostrarBloque3();
	    	bloqueActualSlider = 3;
	    }
	    else if (bloqueActualSlider == 2) {
	    	mostrarBloque1();
	    	bloqueActualSlider--;
	    }
	    else if (bloqueActualSlider == 3) {
	    	mostrarBloque2();
	    	bloqueActualSlider--;
	    }
    break;

  	case 'flecha-der-slider':
  		if (bloqueActualSlider == 1) {
  			mostrarBloque2();
	    	bloqueActualSlider++;
	    }
	    else if (bloqueActualSlider == 2) {
	    	mostrarBloque3();
	    	bloqueActualSlider++;
	    }
	    else if (bloqueActualSlider == 3) {
	    	mostrarBloque1();
	    	bloqueActualSlider = 1;
	    }
  	break;
  	
	}
}

function mostrarBloque1() {
	detalleSecondaryVideo1.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_1.jpg';
	videoSecundario1 = 'http://www.youtube.com/embed/BIe-_eIZUWo';
	detalleSecondaryVideo2.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_2.jpg';
	videoSecundario2 = 'http://www.youtube.com/embed/k79Fn1DvKlM';
	detalleSecondaryVideo3.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_3.jpg';
	videoSecundario3 = 'http://www.youtube.com/embed/uhCG5xlk9qA';
	detalleSecondaryVideo4.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_4.jpg';
	videoSecundario4 = 'http://www.youtube.com/embed/UmC1QZpWTvc';
}
function mostrarBloque2() {
	detalleSecondaryVideo1.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_5.jpg';
	videoSecundario1 = 'http://www.youtube.com/embed/tmLebS8VZ2s';
	detalleSecondaryVideo2.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_6.jpg';
	videoSecundario2 = 'http://www.youtube.com/embed/N6MjBG3guKo';
	detalleSecondaryVideo3.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_7.jpg';
	videoSecundario3 = 'http://www.youtube.com/embed/ygJd-of99bQ';
	detalleSecondaryVideo4.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_8.jpg';
	videoSecundario4 = 'http://www.youtube.com/embed/VoexPny7pEY';
}
function mostrarBloque3() {
	detalleSecondaryVideo1.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_04tip_9.jpg';
	videoSecundario1 = 'http://www.youtube.com/embed/GwoX0lPOhPg';
	detalleSecondaryVideo2.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_02videosala.png';
	videoSecundario2 = 'http://www.youtube.com/embed/wbbTzM9P3Is';
	detalleSecondaryVideo3.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_02videosala.png';
	videoSecundario3 = 'http://www.youtube.com/embed/wbbTzM9P3Is';
	detalleSecondaryVideo4.src = '/../imagenes/sala_intermareal/img_videoteca/INTERMAREAL_02videosala.png';
	videoSecundario4 = 'http://www.youtube.com/embed/wbbTzM9P3Is';	
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