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

/*
	Sección audio para esquema.
*/
// Creamos elemento de audio.
var newDiv = document.createElement("audio");
newDiv.id = "myAudio";
imagen.appendChild(newDiv);

var newDiv2 = document.createElement("source");
newDiv.appendChild(newDiv2);
newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/1.mp3";

var marcoText = document.getElementById('marco-text');
var buttonAudio = document.createElement("img");
marcoText.appendChild(buttonAudio);
buttonAudio.id = "buttonAudio";
buttonAudio.src = "/../imagenes/boton_audio.png";
buttonAudio.style.position = "absolute";
buttonAudio.style.cursor = "pointer";
buttonAudio.style.top = "5%";
buttonAudio.style.left = "-9%";
buttonAudio.style.width = "18%";
//buttonAudio.style.height = "8%";
//buttonAudio.style.backgroundColor = "red";
buttonAudio.onclick = playAudio;

// Vemos su función de play.
var x = document.getElementById("myAudio"); 
function playAudio() { 
    x.play();
    buttonAudio.src = "/../imagenes/boton_audio_escuchar.png";
    buttonAudio.style.width = "27%";
    buttonAudio.style.top = "4%";
    buttonAudio.onclick = pauseAudio;
}
function pauseAudio() { 
    x.pause();
    buttonAudio.src = "/../imagenes/boton_audio.png";
    buttonAudio.style.width = "18%";
    buttonAudio.style.top = "5%";
    buttonAudio.onclick = playAudio;
} 
x.onended = function() {
    buttonAudio.src = "/../imagenes/boton_audio.png";
    buttonAudio.style.width = "18%";
    buttonAudio.style.top = "5%";
    buttonAudio.onclick = playAudio;
};

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Cómo se forma una isla oceánica?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_01.jpg');
  texto.innerHTML = "Las islas oceánicas, como la Isla de Pascua, se formaron producto de la actividad volcánica. A partir del movimiento de placas tectónicas, se unieron conos volcánicos submarinos y formaron una montaña de cerca de 3.000 metros de altura. Una parte quedó sobre la superficie del mar, dando a la Isla de Pascua forma de un triángulo de 166 km<sup>2</sup>.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  newDiv2.src = "/../audios/sala_islasoceanicas/origen/1.mp3";
	pauseAudio();
	newDiv.load();

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo se forma una isla oceánica?";
	    imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_01.jpg');
	    texto.innerHTML = "Las islas oceánicas, como la Isla de Pascua, se formaron producto de la actividad volcánica. A partir del movimiento de placas tectónicas, se unieron conos volcánicos submarinos y formaron una montaña de cerca de 3.000 metros de altura. Una parte quedó sobre la superficie del mar, dando a la Isla de Pascua forma de un triángulo de 166 km<sup>2</sup>.";
	    barra.style.width = barometroVars[0]["barra"];
	    ola.style.left = barometroVars[0]["ola"];
	    elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    newDiv2.src = "/../audios/sala_islasoceanicas/origen/1.mp3";
			pauseAudio();
			newDiv.load();
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué islas oceánicas existen en nuestro territorio marítimo?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_02.jpg');
  		texto.innerHTML = "Se pueden distinguir tres grupos: <br><br>1. Ecorregión de Isla de Pascua, en ella encontramos: Rapa Nui (Isla de Pascua) y Motu Motiro Hiva (Salas y Gómez)<br><br>2. Archipiélago de Juan Fernández formado por las islas: Más a Tierra (Robinson Crusoe), Más Afuera (Alejandro Selkirk), Islote Santa Clara e islotes menores.<br><br>3. Islas Desventuradas: Isla San Ambrosio e Isla San Félix, Islote González y la Roca Catedral.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/origen/2.mp3";
			pauseAudio();
			newDiv.load();
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Por qué la Isla de Chiloé no es una isla oceánica?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_03.jpg');
    	texto.innerHTML = "Porque es un isla continental. Las islas continentales son pedazos de tierra conectadas a un continente, es decir, forman parte del continente. Esto, ya que están localizadas en la plataforma continental. Las islas oceánicas están fuera de la plataforma continental, directamente sobre la corteza oceánica. Tienen un origen volcánico, y geográficamente son parte de una cadena montañosa que es mayoritariamente submarina, pero cuyas cimas han emergido.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/origen/3.mp3";
			pauseAudio();
			newDiv.load();
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo influyen las islas oceánicas en las corrientes marinas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_04.jpg');
    	texto.innerHTML = "Las islas oceánicas imponen una restricción topográfica a las corrientes, es decir, son una barrera natural. Debido a esto, las corrientes marinas deben rodear o bordear  las islas y, dependiendo de su tamaño, pueden generar, por ejemplo, remolinos oceánicos de distintas escalas espaciales, desde unos pocos kilómetros  a cientos de kilómetros de longitud (mesoescala). Estos se forman al lado opuesto de donde provienen las corrientes. Aunque el agua gira lentamente en estos remolinos, ellos favorecen la mezcla vertical y el transporte de nutrientes hacia la capa superficial del mar (surgencia), promoviendo así la productividad biológica.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/origen/4.mp3";
			pauseAudio();
			newDiv.load();
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Qué relación tienen los remolinos oceánicos con las islas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/01_05.jpg');
    	texto.innerHTML = "El océano está completamente poblado de remolinos de mesoescala. Las islas oceánicas, no solo participan en su generación, sino también pueden modificar y dispersar (de acuerdo a la forma, ubicación y dimensiones de la isla), remolinos que llegan desde otras regiones. Por ejemplo, la Isla de Pascua puede estar afectada por remolinos de mesoescala  generados a más de 3500 km de distancia, cerca de la costa de Chile. Debido a la baja velocidad con que viajan los remolinos (cercana a 2.5 cm/s) estos pueden tardar varios años en llegar a la isla. El impacto oceanográfico de los remolinos sobre las islas oceánicas es poco conocido y actualmente constituye un tema importante de investigación.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/origen/5.mp3";
			pauseAudio();
			newDiv.load();
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Origen";