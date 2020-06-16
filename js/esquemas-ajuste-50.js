// Obtener en vivo, cambios en el tamaño de la ventana del navegador.
		function jsUpdateSize(){
	  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	    if (width <= 600) {
	      document.getElementById('caja-texto').setAttribute('src', '/../imagenes/esquemas/50_caja_texto.png');
	    }
	    else {
	      document.getElementById('caja-texto').setAttribute('src', '/../imagenes/esquemas/caja_texto.png');
	    }
		}
		//window.onload = jsUpdateSize;       // When the page first loads
		window.onresize = jsUpdateSize;     // When the browser changes size
		//window.onload = function () {console.log('Página cargada.');}
		