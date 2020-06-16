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
  titulo.innerHTML = "¿Qué se hace con la basura que se genera en las islas?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_01.jpg');
  texto.innerHTML = "El volumen de residuos generado en las islas oceánicas habitadas supera la capacidad de carga de las mismas (volumen máximo de basura que el ambiente puede soportar). Frente a esta realidad se ha enfatizado la educación respecto al cuidado del medio ambiente, la reducción y, el manejo de los residuos. Existen puntos limpios de recepción de residuos para el reciclaje, donde se compactan en una planta de acopio, y luego son vendidos o enviados al continente. La basura que no es clasificada para el reciclaje va a un vertedero. Con los residuos orgánicos se hacen composteras, y se fomenta el uso de productos reutilizables, por ejemplo: las bolsas de tela en reemplazo de las bolsas plásticas.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/1.mp3";
  pauseAudio();
  newDiv.load();

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Qué se hace con la basura que se genera en las islas?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_01.jpg');
      texto.innerHTML = "El volumen de residuos generado en las islas oceánicas habitadas supera la capacidad de carga de las mismas (volumen máximo de basura que el ambiente puede soportar). Frente a esta realidad se ha enfatizado la educación respecto al cuidado del medio ambiente, la reducción y, el manejo de los residuos. Existen puntos limpios de recepción de residuos para el reciclaje, donde se compactan en una planta de acopio, y luego son vendidos o enviados al continente. La basura que no es clasificada para el reciclaje va a un vertedero. Con los residuos orgánicos se hacen composteras, y se fomenta el uso de productos reutilizables, por ejemplo: las bolsas de tela en reemplazo de las bolsas plásticas.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/1.mp3";
	    pauseAudio();
	    newDiv.load();
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué tipo de basura podemos encontrar en el océano?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_02.jpg');
  		texto.innerHTML = "La basura que encontramos en el mar es llamada basura marina (aquello que resulta de la acción del hombre y que llega al mar por diferentes razones y vías), está compuesta por aquella que dejan abandonada los usuarios de las playas, la que es arrastrada por los ríos o fenómenos naturales desde el interior del continente y, en gran parte, por los desechos de la acuicultura y de la pesca. Esta basura es principalmente plástico: bolsas, botellas, envoltorios, boyas, redes, líneas de pesca, entre otras.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/2.mp3";
      pauseAudio();
      newDiv.load();
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué son los microplásticos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_03.jpg');
    	texto.innerHTML = "Los microplásticos son pequeños plásticos (menores a 5mm). En el océano, muchos de los microplásticos son originados por la degradación de objetos de plástico más grandes que llegan al mar como consecuencia de las actividades humanas (basura de las ciudades, industria o pesquería) y que gradualmente se van degradando en fragmentos más pequeños por efectos combinados del Sol, la temperatura y la acción de microorganismos.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/3.mp3";
      pauseAudio();
      newDiv.load();
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo llegan los microplásticos a las islas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_04.jpg');
    	texto.innerHTML = "En el mar se han acumulado toneladas de basura arrojadas por el ser humano (kilómetros), y gran parte de esa basura es plástico. Con el tiempo se va fragmentando, formando los microplásticos que llegan a las islas oceánicas por efecto de las corrientes. La Isla de Pascua, por ejemplo, se encuentra ubicada en el centro del gran giro del Pacifico Sur, una zona de convergencia de corrientes. Por lo tanto, todo el plástico y los microplásticos convergen al centro del giro llegando finalmente a las playas de la isla.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/4.mp3";
      pauseAudio();
      newDiv.load();
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cómo afectan los microplásticos a las especies marinas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/03_05.jpg');
    	texto.innerHTML = "Los microplásticos son una amenaza para la fauna marina porque pueden ser ingeridos por los peces o las aves, al confundirlos con su alimento natural. Cuando los microplásticos son ingeridos por los peces o aves pueden causar inflamaciones y lesiones físicas en el sistema digestivo y reducir la cantidad de alimento consumido por ellos. Además, los microplásticos contienen a menudo elementos químicos peligrosos o pueden acumular en su superficie contaminantes presentes en el agua de mar. Esos contaminantes pueden ser transferidos a los tejidos de los peces y, a su vez, a las personas que consumen esos peces. En definitiva, entran en las tramas tróficas, las alteran y generan daños al ecosistema.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      newDiv2.src = "/../audios/sala_islasoceanicas/contaminacion/5.mp3";
      pauseAudio();
      newDiv.load();
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Contaminación";