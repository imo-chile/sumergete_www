// Seteamos valores de barra barrometro.

if (document.getElementById('numero-5') != null) {
  var barometroVars = [
          {barra: "2vw", ola: "3.2%"},
          {barra: "15vw", ola: "15%"},
          {barra: "30vw", ola: "26%"},
          {barra: "41vw", ola: "38%"},
          {barra: "54vw", ola: "49%"}
         ];
 }
 else {
  var barometroVars = [
          {barra: "8vw", ola: "7%"},
          {barra: "23vw", ola: "22%"},
          {barra: "35vw", ola: "35%"},
          {barra: "50vw", ola: "49%"}
         ];
}

// Dejamos los casos para pantallas mayores al max de 1980 y cubrimos los anteriores menores.
function barometroBarraOverMaxWidth() {
  var n5 = document.getElementById('numero-5');
  var barra = document.getElementById('barra');
  var barra_vw_5 = ['2', '15', '30', '41', '54'];
  var barra_px_5 = ['40', '300', '600', '820', '1080'];
  var barra_vw_4 = ['8', '23', '35', '50'];
  var barra_px_4 = ['160', '460', '700', '1000'];
  // Vemos que la barra se adapte a width mayores que el max permitido de 1980px
  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 1980) {
      if (n5 != null) {
        barometroVars = [
          {barra: "2vw", ola: "3.2%"},
          {barra: "15vw", ola: "15%"},
          {barra: "30vw", ola: "26%"},
          {barra: "41vw", ola: "38%"},
          {barra: "54vw", ola: "49%"}
        ];
        // Cambiamos el actual en caso de resize, para que aparezca cambiado, sino se debe apretar el botón de número para tener el efecto de cambio.
        for (var i = 0; i <= 4; i++) {
          if (barra.style.width == barra_px_5[i] + 'px') barra.style.width = barra_vw_5[i] + 'vw';
        };
      }
      else {
        barometroVars = [
          {barra: "8vw", ola: "7%"},
          {barra: "23vw", ola: "22%"},
          {barra: "35vw", ola: "35%"},
          {barra: "50vw", ola: "49%"}
        ];
        for (var i = 0; i <= 3; i++) {
          if (barra.style.width == barra_px_4[i] + 'px') barra.style.width = barra_vw_4[i] + 'vw';
        };
      }
    }
    if (width > 1980) {
      if (n5 != null) {
        barometroVars = [
          {barra: "40px", ola: "3.2%"},
          {barra: "300px", ola: "15%"},
          {barra: "600px", ola: "26%"},
          {barra: "820px", ola: "38%"},
          {barra: "1080px", ola: "49%"}
         ];
        for (var i = 0; i <= 4; i++) {
          if (barra.style.width == barra_vw_5[i] + 'vw') barra.style.width = barra_px_5[i] + 'px';
        };
      }
      else {
        barometroVars = [
          {barra: "160px", ola: "7%"},
          {barra: "460px", ola: "22%"},
          {barra: "700px", ola: "35%"},
          {barra: "1000px", ola: "49%"}
        ];
        for (var i = 0; i <= 3; i++) {
          if (barra.style.width == barra_vw_4[i] + 'vw') barra.style.width = barra_px_4[i] + 'px';
        };
       }
    }
}
window.onload = barometroBarraOverMaxWidth;
window.onresize = barometroBarraOverMaxWidth;
