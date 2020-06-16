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
  titulo.innerHTML = "¿Qué son los montes submarinos?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_01.jpg');
  texto.innerHTML = "Los montes submarinos son montañas que están sumergidas. Un monte submarino es básicamente igual que una isla oceánica, pero que por procesos tectónicos aún no emerge (no sobresale de la superficie del océano),  nunca emergerá o estuvo emergido en algún momento y se hundió nuevamente. La cima de los montes submarinos varía según el monte, por ejemplo, la cima del monte Pukao cerca de Rapa Nui, se encuentra a unos 150 metros de la superficie. Las cimas de otros montes pueden ser más profundas, incluso, más de 1000 metros debajo de la superficie del mar.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  newDiv2.src = "/../audios/sala_islasoceanicas/montes/1.mp3";
  pauseAudio();
  newDiv.load();

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Qué son los montes submarinos?";
	    imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_01.jpg');
	    texto.innerHTML = "Los montes submarinos son montañas que están sumergidas. Un monte submarino es básicamente igual que una isla oceánica, pero que por procesos tectónicos aún no emerge (no sobresale de la superficie del océano),  nunca emergerá o estuvo emergido en algún momento y se hundió nuevamente. La cima de los montes submarinos varía según el monte, por ejemplo, la cima del monte Pukao cerca de Rapa Nui, se encuentra a unos 150 metros de la superficie. Las cimas de otros montes pueden ser más profundas, incluso, más de 1000 metros debajo de la superficie del mar.";
	    barra.style.width = barometroVars[0]["barra"];
	    ola.style.left = barometroVars[0]["ola"];
	    elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    newDiv2.src = "/../audios/sala_islasoceanicas/montes/1.mp3";
  		pauseAudio();
  		newDiv.load();
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Dónde se encuentran?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_02.jpg');
  		texto.innerHTML = " Se encuentran en todos los océanos del mundo, en el océano abierto y generalmente asociados a zonas geológicamente activas, como por ejemplo dorsales meso-oceánicas. El número de montes submarinos en el planeta es desconocido, pero estudios recientes, basados en tecnología satelital, han estimado que podrían existir decenas de miles.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/montes/2.mp3";
  		pauseAudio();
  		newDiv.load();
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cuál es la importancia de los montes submarinos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_03.jpg');
    	texto.innerHTML = "Los montes submarinos pueden influir sobre la circulación oceánica local generando procesos que, por ejemplo, incrementan la mezcla vertical, alteran los flujos y las corrientes de agua a su alrededor y favorecen a los animales que habitan en ellos. De esta forma se generan ecosistemas ricos en los que proliferan diversas especies. Esto convierte a los montes submarinos en un centro de biodiversidad.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/montes/3.mp3";
  		pauseAudio();
  		newDiv.load();
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo influyen los montes submarinos en la pesca?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_04.gif');
    	texto.innerHTML = "Debido a que alrededor de los montes submarinos se genera mayor productividad, se juntan allí muchas especies de peces oceánicos. Esto hace que sea una buena zona de pesca. Pero, a su vez, debido a que son sistemas con un frágil equilibrio ecológico, hay un alto riesgo de sobrepesca. Por ejemplo, el pez Orange roughy, que está sobreexplotado en el monte O’higgins (a unos 200 km al oeste de la costa frente a Valparaíso).";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      imagen.children[0].style.width = "59.5vw"; // por ser un .gif de 400x254

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/montes/4.mp3";
  		pauseAudio();
  		newDiv.load();
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cuáles son las especies más características que viven en los montes submarinos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/02_05.jpg');
    	texto.innerHTML = "En torno a los montes submarinos podemos encontrar diversas especies marinas, entre ellas peces, corales blandos y calcáreos, esponjas, erizos, langostas y muchos otros, que en algunos caso son endémicas (exclusivas) de estos lugares. Dependiendo de la profundidad incluso puede haber algas. Como son lugares de mayor productividad se pueden encontrar peces pelágicos de gran tamaño que encuentran un lugar para alimentarse.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/montes/5.mp3";
  		pauseAudio();
  		newDiv.load();
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Montes Submarinos";