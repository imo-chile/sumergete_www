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
  titulo.innerHTML = "¿Qué son y cómo se forma un fiordo?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_01.gif');
  texto.innerHTML = "Los fiordos son zonas estuarinas, es decir áreas donde desembocan ríos y hay mezcla de agua dulce con el agua salada del mar. Los fiordos se encuentran a altas latitudes (lejos del ecuador) y suelen ser más largos que anchos, relativamente profundos y con paredes empinadas. Los fiordos fueron formados por el movimiento de las placas tectónicas (en el caso de Chile, donde se juntan las placas de Nazca, Antártica y Sudamericana) y por la erosión o desgaste que ocurre debido al avance (cuando crecen) y retroceso (cuando se derriten) de glaciares durante el último periodo glacial, ocurrido hace 11.000 - 10.000 años atrás. Durante el periodo interglacial subió el nivel del mar y los fiordos se llenaron de agua.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  imagen.children[0].style.width = "59.5vw";  // por gif de menor tamaño.

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Qué son y cómo se forma un fiordo?";
			imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_01.gif');
  		texto.innerHTML = "Los fiordos son zonas estuarinas, es decir áreas donde desembocan ríos y hay mezcla de agua dulce con el agua salada del mar. Los fiordos se encuentran a altas latitudes (lejos del ecuador) y suelen ser más largos que anchos, relativamente profundos y con paredes empinadas. Los fiordos fueron formados por el movimiento de las placas tectónicas (en el caso de Chile, donde se juntan las placas de Nazca, Antártica y Sudamericana) y por la erosión o desgaste que ocurre debido al avance (cuando crecen) y retroceso (cuando se derriten) de glaciares durante el último periodo glacial, ocurrido hace 11.000 - 10.000 años atrás. Durante el periodo interglacial subió el nivel del mar y los fiordos se llenaron de agua.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    imagen.children[0].style.width = "59.5vw";  // por gif de menor tamaño.
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué fiordos existen en nuestro país?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_02.jpg');
  		texto.innerHTML = "La Patagonia chilena es una de las regiones de fiordos más grandes del mundo. Se extiende desde el fiordo de Reloncaví, en la Región de Los Lagos, al Cabo de Hornos en la Región de Magallanes, cubriendo 240.000 km2 (Esto equivale a 275 veces el área de Santiago). Esta zona presenta muchos fiordos y canales, como por ejemplo: Los Fiordos: Reloncaví, Comau, Quintupeu, Cahuelmo, Jacaf,  Aysén, Elefantes, Quitralco, Cupquelan, Marinelli, Eyre,  Falcon, Pingüino, Europa,  Peel, Otway, Almirantazgo. Los canales: de Chacao, Moraleda,  Puyuhuapi Ballena, Darwin, Costa, Fallos, Messier, Ladrillero, Picton, Concepción, Smith, Cockburn, Ballenero, de Beagle. (Palma & Silva, 2004)";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo son las aguas de los fiordos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_03.jpg');
    	texto.innerHTML = "En el sistema de fiordos y canales de la Patagonia ocurre la mezcla de aguas con distintas características. Por el lado del Océano llegan aguas Antárticas (tanto del Pacífico como del Atlántico) y Subecuatoriales, que al mezclarse con el agua dulce proveniente de ríos, de la lluvia (escorrentía superficial y flujos subterráneos) y del deshielo de glaciares, generan agua con características propias de los fiordos, llamada Agua Estuarina.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo es la circulación dentro de un fiordo?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_04.jpg');
    	texto.innerHTML = "Debido al alto aporte de agua dulce en los fiordos, existe una capa superficial de agua con baja salinidad, que contrasta con la capa profunda de mayor salinidad y más densa. Estas diferencias de salinidad y densidad de las aguas que se encuentran en los fiordos, producen un fenómeno llamado estratificación: esto significa que el agua menos densa y menos salada de la superficie se mantiene separada y por sobre el agua más densa y salada del fondo, sin mezclarse (como el agua con el aceite). Producto de esta estratificación y de la topografía del fondo, la circulación horizontal varía en las distintas profundidades de un fiordo: el agua menos salada, menos densa y más fría sale hacia el océano por la superficie. Por el contrario, el agua de mar, salada, más densa y cálida, entra hacia el fiordo por el fondo de este. A esto se le llama circulación estuarina.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cómo son las mareas en un fiordo?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/01_05.jpg');
    	texto.innerHTML = "Debido a la marcada estratificación del agua en los fiordos, la energía que da lugar a las mareas (energía que viene desde el océano) tiene un impacto distinto en las dos capas de agua (la de superficie y la del fondo), generando mareas internas, es decir, olas por debajo de la superficie. Las mareas internas permiten que se mezcle el agua dulce proveniente de ríos, glaciares y lluvia, con el agua de mar de la capa inferior. Esta mezcla vertical, permite que los nutrientes que están a mayor profundidad, lleguen hasta las algas y microalgas de las capas superiores y así se estimule su crecimiento.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Origen";