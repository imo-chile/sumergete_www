// 50% imagenes adapt.
// Obtener en vivo, cambios en el tamaño de la ventana del navegador.
function jsUpdateSize(){
  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width <= 980) {
    document.getElementById('fondo').setAttribute('src', '/../imagenes/home-opciones/50_fondo.png');
  }
  else {
    document.getElementById('fondo').setAttribute('src', '/../imagenes/home-opciones/fondo.png');
  }
}
//window.onload = jsUpdateSize;
window.onresize = jsUpdateSize;     // When the browser changes size