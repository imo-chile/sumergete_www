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
  titulo.innerHTML = "¿Cuál es el impacto de la salmonicultura?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_01.jpg');
  texto.innerHTML = "Cuando se concentra una gran cantidad de salmones en espacios reducidos se generan problemas ambientales y sanitarios que afectan tanto a los salmones como al ecosistema en el que habitan. Por ejemplo, las mortalidades producidas por infecciones virales (como virus ISA) y enfermedades bacterianas (como la producida por la bacteria Piscirickettsia salmonis). Para tratar las infecciones que se producen producto del hacinamiento, se añaden antibióticos y otros compuesto químicos, que pueden afectar a otros organismos que habitan cerca de las jaulas de cultivo. Además, la excreción de los salmones y la comida que comen, no solo se acumula en el fondo y lo hacen casi inhabitable, si no que entrega una gran cantidad de nutrientes que no existirían en condiciones naturales. El escape de salmones de sus jaulas también es muy problemático ya que todas las especies salmonideas en nuestro país han sido introducidas desde otros países y pueden competir o depredar especies nativas chilenas, poniéndolas en peligro.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cuál es el impacto de la salmonicultura?";
			imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_01.jpg');
  		texto.innerHTML = "Cuando se concentra una gran cantidad de salmones en espacios reducidos se generan problemas ambientales y sanitarios que afectan tanto a los salmones como al ecosistema en el que habitan. Por ejemplo, las mortalidades producidas por infecciones virales (como virus ISA) y enfermedades bacterianas (como la producida por la bacteria Piscirickettsia salmonis). Para tratar las infecciones que se producen producto del hacinamiento, se añaden antibióticos y otros compuesto químicos, que pueden afectar a otros organismos que habitan cerca de las jaulas de cultivo. Además, la excreción de los salmones y la comida que comen, no solo se acumula en el fondo y lo hacen casi inhabitable, si no que entrega una gran cantidad de nutrientes que no existirían en condiciones naturales. El escape de salmones de sus jaulas también es muy problemático ya que todas las especies salmonideas en nuestro país han sido introducidas desde otros países y pueden competir o depredar especies nativas chilenas, poniéndolas en peligro.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué es una floración algal nociva o marea roja?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_02.jpg');
  		texto.innerHTML = "La mayor parte de los organismos fitoplanctónicos son inofensivos. No obstante, existen algunas especies que producen toxinas o tienen estructuras que pueden causar importantes problemas en la salud de la población humana. Estos impactos ocurren cuando estas especies aumentan en cantidad drásticamente y por un corto tiempo en el agua. A este fenómeno se le conoce como “marea roja”, pero su nombre correcto es <b>floración algal nociva</b> (FAN). En los fiordos del sur de Chile es común encontrarse con FAN. Es posible que por el constante ingreso de nutrientes desde el cultivo de salmones u otras fuentes como emisarios submarinos que arrojan residuos líquidos, se genere un desequilibrio de nutrientes y favorezca el crecimiento y reproducción de especies nocivas. Además algunas de estas tienen la capacidad de quedar enquistadas en el fondo (formar un quiste y permanecer largo tiempo enterradas ene el sedimento, esperando que las condiciones sean adecuadas para salir del estado de latencia y reproducirse).";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cuáles son los efectos de las FAN?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_03.jpg');
    	texto.innerHTML = "Esto depende de la especie que esté floreciendo. El mayor efecto tiene relación con la producción de toxinas peligrosas. Los bivalvos que filtran agua para alimentarse de las microalgas, incorporan estas toxinas en sus cuerpos y, aunque a ellos no les afecta, sí pueden ser muy dañinas, incluso mortales, al ser adquiridas por el ser humano a través del consumo del bivalvo contaminado. Por ejemplo, el dinofalgelado <i>Alexandrium catenella</i> produce una peligrosa toxina paralítica llamada saxitoxina (cuyos síntomas en humanos van desde mareos, naúseas, vómitos, hasta, en los casos más graves, ausencia de coordinación muscular de extremidades y parálisis respiratoria). También existen diatomeas como <i>Chaetoceros convolutus</i> que posee en su frústulo (caparazón de sílice), verdaderas espinas que, al producirse floraciones, pueden desgarrar tejidos y/u obstruir las branquias de algunos peces. Finalmente, el exceso de fitplancton también genera un exceso de materia orgánica que llevará a un consumo muy rápido de oxígeno, lo que puede afectar a los organismos aeróbicos. ";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo se intenta mitigar los efectos negativos de estos fenómenos e intervenciones?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_04.jpg');
    	texto.innerHTML = "La primera forma de mitigar los efectos de las FAN es el monitoreo constante de toxinas en los moluscos que se extraen para consumo humano y así evitar que se comercialicen los que estén contaminados. Prevenir las FAN es particularmente complejo, debido a que tienen diversas causas y aún no existe suficiente información como para predecir su aparición. Es por esto, que la investigación sobre la ecología, fisiología y oceanografía de las FANs es fundamental para intentar prevenirlos. Sí se ha demostrado que la disminución del ingreso externo de nutrientes al sistema tiene el potencial de prevenir ciertos tipos de FANs. Finalmente el control de estos fenómenos (intervenir cuando ya están ocurriendo para intentar suprimir o destruir las FANs) es el más controversial y desafiante. Se han considerado estrategias mecánicas, biológicas y químicas de control, pero aún no se conocen los efectos secundarios de estas formas de control. ";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cómo protege el ser humano estos ecosistemas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/04_05.jpg');
    	texto.innerHTML = "A través de áreas marinas protegidas, que son áreas definidas geográficamente a fin de alcanzar objetivos específicos de conservación de la biodiversidad y ser puntos de control. En la zona de canales y fiordos de Chile existen tres Áreas Marinas Costeras Protegidas:<br><br>1. San Ignacio de Huinay: de 4,15 km<sup>2</sup>, su fin es conservar la biodiversidad del lugar para facilitar la investigación.<br>2. Pitipalena-Añihue: de 238,62 km<sup>2</sup>, su objetivo es la conservación de comunidades de aves marinas, corales de aguas frías, esponjas, mamíferos marinos y especies de importancia comercial, entre otras.<br>3. Parque marino Francisco Coloane: de 653,49 km<sup>2</sup>, su objetivo es proteger la existencia, alimentación y reproducción de especies como la ballena jorobada, el pingüino de Magallanes y el lobo marino común.<br><br>Para que exista un efecto positivo real en estas áreas, es importante contar con planes de manejo y una fiscalización y administración eficientes.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Investigación";