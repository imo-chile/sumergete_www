// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

/*
// 4 niveles solamente.
document.getElementById("numero-1").style.left = "13%";
document.getElementById("numero-2").style.left = "26%";
document.getElementById("numero-3").style.left = "39%";
document.getElementById("numero-4").style.left = "52%";
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

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Por qué se desarrolla la salmonicultura en la zona de fiordos y canales de nuestra Patagonia?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_01.jpg');
  texto.innerHTML = "El cultivo de salmones ha sido el principal acuicultivo en Chile durante las últimas tres décadas. La industria de la salmonicultura crece continuamente desde 1978, lo que ha posicionado a Chile como el segundo mayor productor de salmones en el mundo. Esto, gracias a nuestras extensa Patagonia. Los fiordos son lugares relativamente protegidos para instalar balsas jaulas de salmones. Las aguas de los fiordos y canales tienen características especiales (baja temperatura y limpias) que favorecen el crecimiento de las principales especies de Salmones que se cultivan: el salmón del Atlántico (<i>Salmo salar</i>), el Salmón del Pacífico o coho (<i>Oncorhynchus kisutch</i>) y la Trucha arcoíris (<i>Oncorhynchus mykiss</i>).";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Por qué se desarrolla la salmonicultura en la zona de fiordos y canales de nuestra Patagonia?";
			imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_01.jpg');
  		texto.innerHTML = "El cultivo de salmones ha sido el principal acuicultivo en Chile durante las últimas tres décadas. La industria de la salmonicultura crece continuamente desde 1978, lo que ha posicionado a Chile como el segundo mayor productor de salmones en el mundo. Esto, gracias a nuestras extensa Patagonia. Los fiordos son lugares relativamente protegidos para instalar balsas jaulas de salmones. Las aguas de los fiordos y canales tienen características especiales (baja temperatura y limpias) que favorecen el crecimiento de las principales especies de Salmones que se cultivan: el salmón del Atlántico (<i>Salmo salar</i>), el Salmón del Pacífico o coho (<i>Oncorhynchus kisutch</i>) y la Trucha arcoíris (<i>Oncorhynchus mykiss</i>).";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué otros cultivos se desarrollan en los fiordos?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_02.jpg');
  		texto.innerHTML = "La alta productividad de microalgas permite que una gran cantidad de organismos filtradores (que se alimentan de las microalgas) habiten la zona de fiordos. Bivalvos filtradores como los choritos y ostras, son cultivados principalmente por cooperativas de pescadores artesanales en la zona del fiordo de Reloncaví en la X región. Estos cultivos proveen fuentes de trabajo y alimento para un importante número de familias de la zona Austral de Chile. Uno de los principales problemas que afectan el cultivo de bivalvos es la ocurrencia de eventos de marea roja o floraciones algales nocivas. Generalmente los bivalvos no se mueren por la marea roja, si no que las toxinas que se generan se acumulan en sus tejidos y son un peligro para el consumo humano. También se pueden encontrar cultivos de macroalgas como la luga roja.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué otras actividades económicas se realizan?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_03.jpg');
    	texto.innerHTML = "La ganadería y la extracción de madera, principalmente Ciprés de las Guaitecas, han sido las principales actividades económicas desarrolladas en la zona de fiordos y canales australes. Lamentablemente, la explotación indiscriminada, sin una planificación y controles adecuados, ha significado el casi agotamiento de estos recursos naturales lo que ha tenido un importante impacto en el litoral de Aysén. El desarrollo de la acuicultura y las actividades de turismo (especialmente turismo aventura) han permitido reactivar la economía de poblados costeros que estaban siendo abandonados.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Por qué existen hidroeléctricas en estas zonas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_04.jpg');
    	texto.innerHTML = "Debido a la gran cantidad de ríos y lagos, la región de Aysén tiene un enorme potencial de producción de energía eléctrica (hidroelectricidad). La hidroelectricidad es una energía limpia que no produce emisiones de CO<sub>2</sub> y por lo tanto ayuda a mitigar el cambio climático. Pero implica construir represas en grandes ríos, lo cual tiene otro tipo de impactos ecológicos:  el paisaje, los cambios en  la geomorfología así como el flujo natural de los ríos se ven afectados. Lo anterior puede a su vez afectar los ecosistemas de los fiordos pues la cantidad, y la calidad, del agua dulce constituyen elementos fundamentales  que regulan procesos físicos, químicos y biológicos.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Qué especies se pueden pescar en los fiordos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/03_05.jpg');
    	texto.innerHTML = "La pesca recreativa en la zona de fiordos está sustentada por especies exóticas introducidas, es decir, que originalmente no eran parte de la fauna del lugar y que el humano introdujo con el fin de cultivarlas para su consumo o para fomentar la pesca deportiva. Estas especies naturalmente no forman parte del ecosistema y pueden depredar y competir con especies nativas, poniéndolas en peligro.<br><br> Las especies de peces que se pueden pescar son: <br>- Trucha Marrón Residente (<i>Salmo trutta</i>): introducida por primera vez desde Europa entre 1865 y 1888<br>- Salmón del Atlántico (<i>Salmo salar</i>): introducida desde Alemania en 1906<br>- Trucha de Arroyo (<i>Salvelinus fontinalis</i>): introducida desde Estados Unidos en 1907<br>- Salmón Chinook (<i>Oncorhynchus tshawytshcha</i>): introducida desde Estados Unidos en 1921<br>-  Salmón Coho (<i>Oncorhynchus kisutch</i>): introducida desde Estados Unidos en 1921";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Recursos";