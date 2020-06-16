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
  titulo.innerHTML = "¿Cuáles son las especies antárticas explotadas comercialmente?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_01.jpg');
  texto.innerHTML = "Actualmente, la principal especie considerada como recurso es el krill antártico (Euphausia superba). Este recurso representa la principal pesquería antártica desde finales de los años 70. Otra pesquería de menor envergadura es la el draco rayado o pez de hielo (Champsocephalus gunnari), cuya explotación ha disminuido debido a medidas de conservación, siendo en su momento muy fuerte en algunas áreas. Ambos recursos son capturados mediante pesca de arrastre pelágico o de fondo (en el caso del draco rayado). También está el bacalao antártico o de profundidad (Dissostichus mawsoni) como especie de importancia comercial. Las extracciones de otras especies de peces o calamares han caído en desuso o han sido cerradas con objetivos de conservación del ecosistema antártico por la Convención para la Conservación de los Recursos Vivos Marinos Antárticos (CCAMLR).";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cuáles son las especies antárticas explotadas comercialmente?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_01.jpg');
      texto.innerHTML = "Actualmente, la principal especie considerada como recurso es el krill antártico (Euphausia superba). Este recurso representa la principal pesquería antártica desde finales de los años 70. Otra pesquería de menor envergadura es la el draco rayado o pez de hielo (Champsocephalus gunnari), cuya explotación ha disminuido debido a medidas de conservación, siendo en su momento muy fuerte en algunas áreas. Ambos recursos son capturados mediante pesca de arrastre pelágico o de fondo (en el caso del draco rayado). También está el bacalao antártico o de profundidad (Dissostichus mawsoni) como especie de importancia comercial. Las extracciones de otras especies de peces o calamares han caído en desuso o han sido cerradas con objetivos de conservación del ecosistema antártico por la Convención para la Conservación de los Recursos Vivos Marinos Antárticos (CCAMLR).";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué especies antárticas se explotaban en el pasado?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_02.jpg');
  		texto.innerHTML = "La explotación de especies antárticas comenzó en 1790 con la caza del lobo fino antártico (Arctocephalus gazella) debido a la alta demanda de su piel. Hacia principios de 1800 la especie estaba casi extinta y se comenzaron a cazar otras especies como elefantes marinos (Mirounga leonina) y otras focas como la foca cangrejera (Lobodon carcinophagus), la foca leopardo (Hydrurga leptonyx) y la foca de Weddell (Leptonychotes weddellii), además de pingüinos para obtención de aceite. Ya en 1900 comenzó la caza de ballenas, explotando intensamente algunas de las especies que habitan las aguas del océano Austral:ballena azul (Balaenoptera musculus), ballena fin (Balaenoptera physalus), ballena jorobada (Megaptera novaeangliae) y ballena minke (Balaenoptera bonaerensis), llevando las poblaciones a niveles críticos. Desde los años 60 comenzó la explotación de otros grupos animales como el calamar y el krill.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo protege el ser humano el continente antártico?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_03.jpg');
    	texto.innerHTML = "Debido a los riesgos ambientales que implica cualquier actividad en el continente, es que se elaboraron medidas de protección por medio de las Partes Consultivas del Tratado Antártico (1959). Dentro de las disposiciones del Tratado, cabe destacar que el continente solo puede ser utilizado para fines pacíficos, prohibiendo el asentamiento de bases y prácticas militares. Se fomenta la investigación científica y cooperación internacional con el fin de realizar avances en el conocimiento antártico. Además, se prohíben las pruebas nucleares y eliminación de desechos radiactivos. Sumado a lo anterior y complementarios al Tratado, se han realizado diferentes acuerdos, uno de ellos el Protocolo de Madrid (1991), estableciendo los principios, procedimientos y obligaciones ambientales de cada miembro, con miras a la protección del medioambiente antártico y sus ecosistemas.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Hay especies en peligro de extinción en el océano Austral?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_04.jpg');
    	texto.innerHTML = "Debido al grado de adaptación de los organismos antárticos y al aislamiento del continente durante millones de años, cualquier cambio en el clima podría significar incluso la extinción de especies no preparadas para la variabilidad climática. De esta forma, el cambio climático representa un grave problema para el océano Austral y todos sus habitantes. Según la IUCN (Unión Internacional para la Conservación de la Naturaleza) algunas aves pelágicas, como el albatros real del norte (Diomedea sanfordi) y el petrel del Atlántico (Pterodroma incerta), junto con la ballena fin (Balaenoptera physalus) y la ballena azul (Balaenoptera musculus), se encuentran en peligro de extinción, mientras que un elevado número de especies se encuentra de momento en estado vulnerable como el pingüino macaroni (Eudyptes chrysolophus) y otras especies de albatros. Conforme se han visto algunos efectos del cambio climático en la Antártica, se estima que este podría afectar a corto y mediano plazo a las especies que allí habitan.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cuál es el estado de conservación actual de las especies explotadas en el pasado?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/06_05.jpg');
    	texto.innerHTML = "En la actualidad, de las especies de pinnípedos explotados intensamente en el pasado (focas y lobo de mar), la mayoría se encuentran clasificadas por la IUCN (Unión Internacional para la Conservación de la Naturaleza) como fuera de preocupación, debido a los esfuerzos de protección llevados a cabo por la Convención para la Conservación de los Recursos Vivos Marinos Antárticos (CCAMLR). Sin embargo, la ballena fin (Balaenoptera physalus) y la ballena azul (Balaenoptera musculus) aún se encuentran en peligro de extinción. Debido a la dificultad que supone su estudio, ya que son animales que no se observan con frecuencia ni en grandes grupos, es difícil estimar la población actual.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Protegiendo Especies";