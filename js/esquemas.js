// DEPRICATED, borrar

/* 
* Menú desplegable lado superior izquierdo.
*/

var divMenu = document.getElementById("menu-sala");
var flecha = document.getElementById('menu-btn-flecha');
var buttonSwitch = 0;

divMenu.onclick = function() {

  if(buttonSwitch == 0) {
    divMenu.classList.add('verticalTranslate');
    // Necesario para que el display block y este add no se atraganten y no funcione la transición.
    setTimeout(function() {
      // agregamos clase, luego dejamos el top final del efecto, para borrar la transicion después.
      divMenu.style.top = "0%";
      flecha.children[0].setAttribute('src', '/../imagenes/flecha_arriba.png');
    }, 50);

    setTimeout(function() {
      // borramos para evitar la transición al momento de agrandar o achicar pantalla.
      divMenu.classList.remove('verticalTranslate');
    }, 900);

    buttonSwitch = 1;
  }
  else if (buttonSwitch == 1) {
   /* var computedStyle = window.getComputedStyle(divMenu);
    var bottom = computedStyle.getPropertyValue('bottom');
    var left = computedStyle.getPropertyValue('left');     */
    
    divMenu.classList.add('verticalTranslateBack');
    setTimeout(function() {
      // luego de agregar clase, lo dejamos con el top final, para remover después.
      divMenu.style.top = "-29%";
      flecha.children[0].setAttribute('src', '/../imagenes/flecha_abajo.png');
    }, 50);

    setTimeout(function() {
      // removemos clase después del periodo del efecto.
      divMenu.classList.remove('verticalTranslateBack');
    }, 900);
    buttonSwitch = 0;
  };
}


/*
* Barómetro - Color de números (blaco/rojo).
*/

function hover(element) {
  if(element.getAttribute("id").valueOf() != elementAnterior.getAttribute("id").valueOf()) {
    element.style.color = "red";
  }
  
}
function unhover(element) {
  if(element.getAttribute("id").valueOf() != elementAnterior.getAttribute("id").valueOf()) {
    element.style.color = "white";
  }
}


/*
* Barómetro - función nivelBarometro() que fija lo que se muestra y cómo se comporta la barra 
* de agua que crece, todo al apretar un número.
*/

// Variables de cada esquema.
var oceanocostero_vidabajo = [
  { titulo: "¿Quiénes son los seres vivos mas pequeños que habitan en el océano?",
    imagen: "vida01.png",
    texto: "El grupo de organismos más pequeño en el océano es el llamado plancton, que son en su mayoría microscópicos y se caracterizan porque son arrastrados por las corrientes, sin poder nadar en contra de ellas. Se pueden encontrar desde la superficie del mar hasta algunos cientos de metros de profundidad. También se incluye dentro del plancton a organismos fácilmente visibles, como las medusas. El plancton se divide en: fitoplancton o plancton vegetal, zooplancton o plancton animal y bacterioplancton, bacterias y arqueas."
  },
  { titulo: "¿Cómo viven los organismos bajo el mar?",
    imagen: "vida02.png",
    texto: "Los organismos pueden vivir suspendidos en el agua (Pelágicos) o en relación al fondo del mar, con una escasa o ninguna capacidad de natación (Bentónicos). Por ejemplo, la mayoría de los peces pasan su vida suspendidos en el mar, o nadando libremente en este, mientras que otros, como el lenguado, no pueden alejarse del fondo marino, junto con las jaibas, esponjas y mantarrayas."
  },
  { titulo: "¿Existen mamíferos en el mar?",
    imagen: "vida03.png",
    texto: "Sí, dentro de los 5000 mamíferos del mundo, alrededor de 120 corresponden a mamíferos marinos, como especies que obtienen toda o al menos parte de su alimentación en el mar. Como mamíferos, tienen pulmones y necesitan oxígeno de la atmósfera, y aunque vivan todo el tiempo en el agua, necesitan asomarse a la superficie a respirar cada cierto rato. En Chile, se encuentran representantes en tres grupos: cetáceos, nutrias y pinnípedos."
  },
  { titulo: "¿Por qué los peces forman cardúmenes?",
    imagen: "vida04.png",
    texto: "Los peces se agrupan en bancos o cardúmenes por dos motivos principales: para protegerse y para migrar, minimizando las posibilidades de que los encuentre un depredador en la inmensidad del océano. Los cardúmenes son la formación más eficaz para viajar largas distancias. Como las aves en sus migraciones, los peces se mueven de manera sincronizada para viajar más rápido y gastar menos energía. Al ahorrar esfuerzo, los peces necesitan menos alimento y esto favorece su supervivencia."
  },
  { titulo: "¿Quiénes son los seres vivos mas pequeños que habitan en el océano?",
    imagen: "vida05.png",
    texto: "La base de la trama trófica en los océanos es el fitoplancton (microalgas), quien realiza fotosíntesis para crecer y reproducirse. Luego viene el zooplancton, de quien se alimenta la mayoría de los peces, incluso algunas ballenas. Existen peces más grandes que se alimentan de peces más pequeños, y grandes depredadores en el océano, como tiburones, y también representantes de los cefalópodos (pulpos, jibias y calamares), quienes se alimentan de peces. Finalmente, existen muchas bacterias en el océano, quienes consumen desechos orgánicos y liberan nutrientes para perpetuar el ciclo."
  }
 ];

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");


// Elementos iniciales, es decir de barómetro nivel 1.
titulo.innerHTML = inputActual[0]["titulo"];
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[0]["imagen"]);
texto.innerHTML = inputActual[0]["texto"];
barra.style.width = "2vw";
ola.style.left = "3.2%";
elementAnterior.style.color = "red";


function nivelBarometro(element) {

  switch(element.getAttribute('id').valueOf()) {

      case 'numero-1':
        titulo.innerHTML = inputActual[0]["titulo"];
        imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[0]["imagen"];);
        texto.innerHTML = inputActual[0]["texto"];
        barra.style.width = "2vw";
        ola.style.left = "3.2%";

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
      break;

      case 'numero-2':
        titulo.innerHTML = inputActual[1]["titulo"];
        imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[1]["imagen"];);
        texto.innerHTML = inputActual[1]["texto"];
        barra.style.width = "15vw";
        ola.style.left = "15%";

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
      break;

      case 'numero-3':
        titulo.innerHTML = inputActual[2]["titulo"];
        imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[2]["imagen"];);
        texto.innerHTML = inputActual[2]["texto"];
        barra.style.width = "30vw";
        ola.style.left = "26%";

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "block";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "block";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
      break;

      case 'numero-4':
        titulo.innerHTML = inputActual[3]["titulo"];
        imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[3]["imagen"]);
        texto.innerHTML = inputActual[3]["texto"];
        barra.style.width = "41vw";
        ola.style.left = "38%";

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
      break;

      case 'numero-5':
        titulo.innerHTML = inputActual[4]["titulo"];
        imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/'+inputActual[4]["imagen"];);
        texto.innerHTML = inputActual[4]["texto"];;
        barra.style.width = "54vw";
        ola.style.left = "49%";

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
      break;
  }
}

