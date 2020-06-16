// Menú desplegable lado superior izquierdo.

//var divMenu = document.getElementById("menu-sala");
var flecha = document.getElementById('menu-btn-flecha');
var buttonSwitch = 0;

// Descuadre por problema de diseño conjunto de imagenes general (padding). D:!
if (document.getElementById("menu-sala-oceanoaustral") != null) {
	var divMenu = document.getElementById("menu-sala-oceanoaustral");
}
else if (document.getElementById("menu-sala") != null) {
	 var divMenu = document.getElementById("menu-sala");
}


//divMenu.onclick = function() {
flecha.onclick = function() {

  if(buttonSwitch == 0) {
    //divMenu.classList.add('verticalTranslate');
    // Necesario para que el display block y este add no se atraganten y no funcione la transición.
    divMenu.style.transition = "0.5s";
    divMenu.style.MozTransition = "0.5s";
    divMenu.style.OTransition = "0.5s";
    divMenu.style.MsTransition = "0.5s";
    divMenu.style.WebkitTransition = "0.5s";
    setTimeout(function() {
      // agregamos clase, luego dejamos el top final del efecto, para borrar la transicion después.
      divMenu.style.top = "0%";
      flecha.children[0].setAttribute('src', '/../imagenes/flecha_arriba.png');
    }, 50);

    setTimeout(function() {
      // borramos para evitar la transición al momento de agrandar o achicar pantalla.
      //divMenu.classList.remove('verticalTranslate');
      divMenu.style.transition = "none";
      divMenu.style.MozTransition = "none";
      divMenu.style.OTransition = "none";
      divMenu.style.MsTransition = "none";
      divMenu.style.WebkitTransition = "none";
    }, 900);

    buttonSwitch = 1;
  }
  else if (buttonSwitch == 1) {
   /* var computedStyle = window.getComputedStyle(divMenu);
    var bottom = computedStyle.getPropertyValue('bottom');
    var left = computedStyle.getPropertyValue('left');     */
    
    //divMenu.classList.add('verticalTranslateBack');
    divMenu.style.transition = "0.5s";
    divMenu.style.MozTransition = "0.5s";
    divMenu.style.OTransition = "0.5s";
    divMenu.style.MsTransition = "0.5s";
    divMenu.style.WebkitTransition = "0.5s";

    setTimeout(function() {
      // luego de agregar clase, lo dejamos con el top final, para remover después.
      if (divMenu.id == 'menu-sala-oceanoaustral') {
      	divMenu.style.top = "-27%";
      }
      else if (divMenu.id == 'menu-sala') {
      	divMenu.style.top = "-29%";
    	}
      flecha.children[0].setAttribute('src', '/../imagenes/flecha_abajo.png');
    }, 50);

    setTimeout(function() {
      // removemos clase después del periodo del efecto.
      //divMenu.classList.remove('verticalTranslateBack');
      divMenu.style.transition = "none";
      divMenu.style.MozTransition = "none";
      divMenu.style.OTransition = "none";
      divMenu.style.MsTransition = "none";
      divMenu.style.WebkitTransition = "none";
    }, 900);
    buttonSwitch = 0;
  };
}
