// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

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
  titulo.innerHTML = "¿Cómo influye el Océano Austral en el clima global?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_01.jpg');
  texto.innerHTML = "El Océano Antártico es la principal conexión entre las cuencas oceánicas de la Tierra, conectando los Océanos Pacífico, Atlántico e Índico, y sumado a la presencia de la Corriente Circumpolar Antártica, es el nexo de unión para el intercambio de distintas masas de agua desde la zona superficial hasta el fondo marino. Es por ello que sus masas de agua almacenan vastas cantidades de dióxido de carbono, nutrientes y energía en forma de calor, ayudando a conducir la circulación oceánica global a través de una serie de corrientes guiadas por vientos, o por diferencias de densidad del agua, o giros.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo influye el Océano Austral en el clima global?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_01.jpg');
      texto.innerHTML = "El Océano Antártico es la principal conexión entre las cuencas oceánicas de la Tierra, conectando los Océanos Pacífico, Atlántico e Índico, y sumado a la presencia de la Corriente Circumpolar Antártica, es el nexo de unión para el intercambio de distintas masas de agua desde la zona superficial hasta el fondo marino. Es por ello que sus masas de agua almacenan vastas cantidades de dióxido de carbono, nutrientes y energía en forma de calor, ayudando a conducir la circulación oceánica global a través de una serie de corrientes guiadas por vientos, o por diferencias de densidad del agua, o giros.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Sabías que el agua de mar se congela?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_02.jpg');
  		texto.innerHTML = "La formación de hielo marino es uno de los mayores cambios físicos del océano en todo el planeta. Cada invierno gran parte de la superficie del Océano Austral se congela debido a las bajas temperaturas que alcanza la superficie, proceso influenciado por la temperatura del aire y el mar en calma. La extensión del hielo marino varía estacionalmente, pasando de unos 3 millones de km<sup>2</sup> en verano a más de 18 millones de km<sup>2</sup> en invierno.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué efecto tiene el hielo en la diversidad de organismos bentónicos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_03.jpg');
    	texto.innerHTML = "El hielo marino tiene profundos y diversos efectos en el ecosistema oceánico, resultando en una baja diversidad de especies en la zona intermareal y submareal somero, debido a que la capa de hielo remueve los organismos bentónicos sésiles que allí habitan. Existen además procesos de formación de hielo en el fondo marino que atrapa organismos a su paso y removiéndolos del fondo cuando el hielo se desprende y alcanza la superficie.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cuál es la diferencia entre el invierno y el verano antártico?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_04.jpg');
    	texto.innerHTML = "El Océano Antártico presenta grandes diferencias estacionales: en invierno hay menor radiación solar, por lo tanto se alcanzan bajas temperaturas que inducen a la formación de hielo marino. Esto aumenta el albedo (proporción entre el calor absorbido y el calor reflejado) generado sobre la superficie del hielo y nieve, por lo que se reduce el flujo de calor entre el aire y agua, y se potencia la formación de hielo en la superficie.<br>En verano, con el aumento de la radiación solar y, por ende, el aumento de la temperatura, disminuye la extensión de hielo marino. Se forman bloques de hielo a la deriva que pueden o no derretirse.<br>Debido a la gran diferencia en la extensión de la plataforma de hielo marino entre invierno y verano, el océano Austral corresponde al océano del planeta con los mayores cambios estacionales en las condiciones superficiales del agua.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Qué podría pasar en el océano Austral si cambia drásticamente el clima?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/02_05.jpg');
    	texto.innerHTML = "El cambio climático en la Antártica puede expresarse de diferentes formas, la más clara es el aumento de la temperatura del aire y la superficie del mar, y sus efectos en la duración, espesor y extensión del hielo marino. Sin embargo, cambios a escala de tiempo mayor como décadas o siglos, pueden no ser tan claros.<br>Estudios sugieren que algunas áreas del océano Austral pueden ser las de mayor vulnerabilidad de los ecosistemas marinos alrededor del mundo, y considerando su conectividad con el resto del mundo, se piensa que los impactos aquí pueden tener efectos a escala global.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Clima en la Antártica";