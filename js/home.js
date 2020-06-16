//ocultamos el div de menu izquierdo con titulo sumergete, luego mostramos el otro menu desplegable.
var flotador = document.getElementById('home-menu-flotador');
var poste = document.getElementById('home-menu-poste');
var banderaProyectos = document.getElementById('home-menu-bandera-proyectos');
var banderaNosotros = document.getElementById('home-menu-bandera-nosotros');
var banderaParticipa = document.getElementById('home-menu-bandera-participa');
var buttonSwitch = 0;

flotador.onclick = function() {
  if(buttonSwitch == 0) {
    poste.style.display = "block";
    //poste.classList.remove('home-menu-poste-abajo');
    //banderaProyectos.classList.remove('bandera-proyectos-abajo');
    //banderaNosotros.classList.remove('bandera-nosotros-abajo');
    //banderaParticipa.classList.remove('bandera-participa-abajo');

    //necesario para que el display block y este add no se atraganten y no funcione la transición.
    setTimeout(function() {
      // start transition
      //poste.classList.add('home-menu-poste-arriba');
      poste.style.top ="-100%";
      poste.style.opacity = "1";
    }, 50);

    // Esperamos un poco por el poste y agregamos el efecto de las banderas.
    setTimeout(function(){
      //banderaProyectos.classList.add('bandera-proyectos-arriba');
      banderaProyectos.style.opacity = "1";
      banderaProyectos.style.display = "block";
      //banderaNosotros.classList.add('bandera-nosotros-arriba');
      banderaNosotros.style.opacity = "1";
      banderaNosotros.style.display = "block";
      //banderaParticipa.classList.add('bandera-participa-arriba');
      banderaParticipa.style.opacity = "1";
      banderaParticipa.style.display = "block";

      // "removemos" para evitar cambio en tamaño de ventana y que salga el efecto
      // Agregamos transiciones.
      poste.style.transition = "none";
      poste.style.MozTransition = "none";
      poste.style.OTransition = "none";
      poste.style.MsTransition = "none";
      poste.style.WebkitTransition = "none";

      banderaProyectos.style.transition = "none";
      banderaProyectos.style.MozTransition = "none";
      banderaProyectos.style.OTransition = "none";
      banderaProyectos.style.MsTransition = "none";
      banderaProyectos.style.WebkitTransition = "none";

      banderaNosotros.style.transition = "none";
      banderaNosotros.style.MozTransition = "none";
      banderaNosotros.style.OTransition = "none";
      banderaNosotros.style.MsTransition = "none";
      banderaNosotros.style.WebkitTransition = "none";
      banderaNosotros.style.MozTransition = "none";

      banderaParticipa.style.transition = "none";
      banderaParticipa.style.MozTransition = "none";
      banderaParticipa.style.OTransition = "none";
      banderaParticipa.style.MsTransition = "none";
      banderaParticipa.style.WebkitTransition = "none";

    }, 300);

    buttonSwitch = 1;
  }
  
  else if(buttonSwitch == 1) {
    //banderaProyectos.classList.add('bandera-proyectos-abajo');
    //banderaNosotros.classList.add('bandera-nosotros-abajo');
    //banderaParticipa.classList.add('bandera-participa-abajo');

    // Agregamos transiciones.
    // Agregamos transiciones.
    poste.style.transition = "0.3s";
    poste.style.MozTransition = "0.3s";
    poste.style.OTransition = "0.3s";
    poste.style.MsTransition = "0.3s";
    poste.style.WebkitTransition = "0.3s";

    banderaProyectos.style.transition = "0.3s";
    banderaProyectos.style.MozTransition = "0.3s";
    banderaProyectos.style.OTransition = "0.3s";
    banderaProyectos.style.MsTransition = "0.3s";
    banderaProyectos.style.WebkitTransition = "0.3s";

    banderaNosotros.style.transition = "0.3s";
    banderaNosotros.style.MozTransition = "0.3s";
    banderaNosotros.style.OTransition = "0.3s";
    banderaNosotros.style.MsTransition = "0.3s";
    banderaNosotros.style.WebkitTransition = "0.3s";
    banderaNosotros.style.MozTransition = "0.3s";

    banderaParticipa.style.transition = "0.3s";
    banderaParticipa.style.MozTransition = "0.3s";
    banderaParticipa.style.OTransition = "0.3s";
    banderaParticipa.style.MsTransition = "0.3s";
    banderaParticipa.style.WebkitTransition = "0.3s";

    setTimeout(function(){
      //banderaProyectos.classList.remove('bandera-proyectos-arriba');
      banderaProyectos.style.opacity = "0";
      banderaProyectos.style.display = "none";
      //banderaNosotros.classList.remove('bandera-nosotros-arriba');
      banderaNosotros.style.opacity = "0";
      banderaNosotros.style.display = "none";
      //banderaParticipa.classList.remove('bandera-participa-arriba');
      banderaParticipa.style.opacity = "0";
      banderaParticipa.style.display = "none";
    }, 50);

    setTimeout(function() {
      //poste.classList.add('home-menu-poste-abajo');
      poste.style.top ="0%";
      poste.style.opacity = "0";
      setTimeout(function() {
        poste.style.display = "none";
        //poste.classList.remove('home-menu-poste-arriba');  
      }, 50);
    }, 300);
    
    //poste.style.display = "none";
    buttonSwitch = 0;
  };
}

flotador.onmouseover = function () {
  if(buttonSwitch == 0) {
    this.style.width = "19%";
  }
  
}
flotador.onmouseout = function () {
  if(buttonSwitch == 0) {
    this.style.width = "18%";
  }
}

// Obtenemos el id del padre de la img, y vemos qué imagen poner dependiendo de cuál es.

function hover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-sala-islasoceanicas':
      element.setAttribute('src', '/../imagenes/home/sombra_islas_grande.png');
      //element.parentElement.classList.remove('btn-sala-islasoceanicas-achicar');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-islasoceanicas-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '3%';
        element.parentElement.style.left = '24%';
      }, 50);
      break;
    case 'btn-sala-intermareal':
      element.setAttribute('src', '/../imagenes/home/sombra_intermareal_grande.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-intermareal-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '37.2%';
        element.parentElement.style.right = '15%';
      }, 50);
      break;
    case 'btn-sala-oceanocostero':
      element.setAttribute('src', '/../imagenes/home/sombra_costero_grande.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '25%';
        element.parentElement.style.right = '25%';
      }, 50);
      break;
      case 'btn-sala-oceanoaustral':
      element.setAttribute('src', '/../imagenes/home/sombra_OAU_boton_grande.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '77%';
        element.parentElement.style.right = '38.5%';
      }, 50);
      break;
      case 'btn-sala-oceanoabierto':
      element.setAttribute('src', '/../imagenes/home/sombra_OA_boton_grande.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '27%';
        element.parentElement.style.right = '80%';
      }, 50);
      break;
      case 'btn-sala-canalesyfiordos':
      element.setAttribute('src', '/../imagenes/home/sombra_CF_boton_grande.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.add('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '12%';
        element.parentElement.style.top = '59%';
        element.parentElement.style.right = '12%';
      }, 50);
      break;
  }
}

function unhover(element) {
  switch(element.parentElement.getAttribute('id').valueOf()) {
    case 'btn-sala-islasoceanicas':
      element.setAttribute('src', '/../imagenes/home/sombra_islas_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-islasoceanicas-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '8%';
        element.parentElement.style.left = '28%';
      }, 50);
      //element.parentElement.classList.add('btn-sala-islasoceanicas-achicar');
      break;
    case 'btn-sala-intermareal':
      element.setAttribute('src', '/../imagenes/home/sombra_intermareal_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-intermareal-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '41%';
        element.parentElement.style.right = '18%';
      }, 50);
      break;
    case 'btn-sala-oceanocostero':
      element.setAttribute('src', '/../imagenes/home/sombra_costero_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '29%';
        element.parentElement.style.right = '27.5%';
      }, 50);
      break;
      case 'btn-sala-oceanoaustral':
      element.setAttribute('src', '/../imagenes/home/sombra_OAU_boton_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '82%';
        element.parentElement.style.right = '41%';
      }, 50);
      break;
      case 'btn-sala-oceanoabierto':
      element.setAttribute('src', '/../imagenes/home/sombra_OA_boton_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '32%';
        element.parentElement.style.right = '82%';
      }, 50);
      break;
      case 'btn-sala-canalesyfiordos':
      element.setAttribute('src', '/../imagenes/home/sombra_CF_boton_chico.png');
      setTimeout(function() {
        // start transition
        //element.parentElement.classList.remove('btn-sala-oceanocostero-agrandar');
        element.parentElement.style.width = '7%';
        element.parentElement.style.top = '64%';
        element.parentElement.style.right = '15%';
      }, 50);
      break;
  }
}

var tony = document.getElementById('tony-bienvenida');
var tony_2nd_text = document.getElementById('tony-texto');
tony.style.WebkitTransition = '0.8s';
tony.style.MozTransition = '0.8s';
tony.style.MsTransition = '0.8s';
tony.style.OTransition = '0.8s';
tony.style.transition = '0.8s';

function tony_movement(t_state) {
  if (t_state) {
    setTimeout(function() {
      setTimeout(function() {
        tony.style.left = '7%';
        tony.style.top = '79%';
      }, 1000);
      tony.style.left = '6%';
      tony.style.top = '82%';
      /*
      tony.style.WebkitTransform = "rotate(-5deg)"
      tony.style.MozTransform = "rotate(-5deg)"
      tony.style.MsTransform = "rotate(-5deg)"
      tony.style.OTransform = "rotate(-5deg)"
      tony.style.transform = "rotate(-5deg)"
      */
      tony_movement(false);
    }, 1000);
    
  }
  else {
    setTimeout(function() {
      tony.style.left = '8%';
      tony.style.top = '82%';
      /*
      tony.style.WebkitTransform = "rotate(5deg)"
      tony.style.MozTransform = "rotate(5deg)"
      tony.style.MsTransform = "rotate(5deg)"
      tony.style.OTransform = "rotate(5deg)"
      tony.style.transform = "rotate(5deg)"
      */
      tony_movement(true);
    }, 500);
    
  }
}

function tony_text(text_state){
  if (text_state) {
    
    setTimeout(function() {
      setTimeout(function() {
      tony_2nd_text.style.opacity = '1';
      tony_2nd_text.innerHTML = 'El Instituto Milenio de Oceanografía te invita a sumergirte en las curiosidades del Océano Pacífico. Navega y descubre nuestras salas.';
      }, 500);
      tony_2nd_text.style.opacity = '0';
      tony_text(false);
    }, 6000);
  }
  else {
    setTimeout(function() {
      setTimeout(function() {
      tony_2nd_text.style.opacity = '1';
      tony_2nd_text.innerHTML = 'Descubre otras salas subiendo o bajando en esta ventana para ver el mapa completo de Chile.';
      }, 500);
      tony_2nd_text.style.opacity = '0';
      tony_text(true);
    }, 6000);
  }
}

// Obtener en vivo, cambios en el tamaño de la ventana del navegador.
function jsUpdateSize(){
  var width = window.outerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width <= 600) {
    document.getElementById('fondo').setAttribute('src', '/../imagenes/home/50_home_fondo.png');
    document.getElementById('continente').setAttribute('src', '/../imagenes/home/50_home_continente.png');
    document.getElementById('antartica').setAttribute('src', '/../imagenes/home/home_antartica.png');
    document.getElementById('islas').setAttribute('src', '/../imagenes/home/50_home_islas.png');
  }
  else {
    document.getElementById('fondo').setAttribute('src', '/../imagenes/home/home_fondo.png');
    document.getElementById('continente').setAttribute('src', '/../imagenes/home/home_continente.png');
    document.getElementById('antartica').setAttribute('src', '/../imagenes/home/home_antartica.png');
    document.getElementById('islas').setAttribute('src', '/../imagenes/home/home_islas.png');
  }

}
//window.onload = jsUpdateSize;
window.onresize = jsUpdateSize;     // When the browser changes size

window.onload = tony_movement(false);
window.onload = tony_text(false);
window.onload = window.scroll(0,400);
