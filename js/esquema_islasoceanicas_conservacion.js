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
  titulo.innerHTML = "¿Por qué hay que manejar y conservar las especies en las islas oceánicas?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_01.jpg');
  texto.innerHTML = "Debido a que cada vez hay más personas, se hace cada vez mayor la demanda de recursos marinos y la tendencia es a extraer más recursos. Esto afecta negativamente a los ecosistemas, y se altera su equilibrio. Por eso se hace indispensable el manejo de las especies, para regular la extracción y asegurar la sobrevivencia de las especies que se extraen.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Por qué hay que manejar y conservar las especies en las islas oceánicas?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_01.jpg');
      texto.innerHTML = "Debido a que cada vez hay más personas, se hace cada vez mayor la demanda de recursos marinos y la tendencia es a extraer más recursos. Esto afecta negativamente a los ecosistemas, y se altera su equilibrio. Por eso se hace indispensable el manejo de las especies, para regular la extracción y asegurar la sobrevivencia de las especies que se extraen.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Cuáles son las especies que más se protegen?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_02.jpg');
  		texto.innerHTML = "En Isla de Pascua existe veda de la langosta de Isla de Pascua (<i>Panulirus pascuensis</i>), pero entre las prioridades de la población también se encuentran las siguientes especies:<br><br>- Caracol pure (<i>Cyprea caputdraconis</i>)<br><br>- Alga Auke (<i>Dictyopteris australis</i>)<br><br>- Pez Nanue (<i>Kyphosus sandwicensis</i>)<br><br>- Corales (<i>Porites lobata</i> y <i>Pocillopora spp</i>)<br><br>En el Archipiélago de Juan Fernández se protege el lobo fino de Juan Fernández (<i>Artocephalus philippi</i>), y la langosta de Juan Fernández (<i>Jasus frontalis</i>)";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo se protegen estos recursos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_03.jpg');
    	texto.innerHTML = "Generalmente es el Estado quien administra los recursos marinos y mediante sus técnicos toma las decisiones de manejo basándose en criterios biológicos. Existen diversas estrategias de protección: como la existencia de zonas donde sólo se puede hacer investigación con previa autorización de las autoridades. También existen vedas para especies explotadas, que establecen las épocas del año en que se puede extraer un recurso, el tamaño mínimo y otras reglas para que la especie pueda cumplir su ciclo de vida y asegurar su permanencia.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Existen normativas generadas por la comunidad para el manejo de los recursos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_04.jpg');
    	texto.innerHTML = "En Rapa Nui, en la antigüedad, existían los Tapu, una “restricción espiritual o sagrada”. No es una “prohibición” como la entendemos en occidente, sino una ley divina. El Tapu, relacionado con los recursos marinos, era una forma ancestral de regular la extracción de recursos, es decir, definía cuándo y cómo se realizaba la extracción. Era establecido y levantado por los Ariki o rey. Sin embargo, actualmente no existen los Ariki y no hay una institución que pueda establecer y hacer cumplir el Tapu para hacerse cargo del manejo de los recursos marinos.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Existen áreas protegidas en estas islas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/05_05.jpg');
    	texto.innerHTML = "En el archipiélago de Juan Fernández, y desde una propuesta de los pescadores artesanales, se creó un Área Marina Costera Protegida de Múltiples Usos y 5 parques marinos en el 2014. El 2015, gracias a la propuesta comunal y de pescadores artesanales se decreta el Parque Marino Nazca-Desventuradas. En la ecorregión de Isla de Pascua existe el Parque Marino Motu Motiro Hiva creado en 2010.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "El cuidado y la conservación de las especies";