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
  titulo.innerHTML = "¿Dónde se ubica el Océano Austral?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/01_01.jpg');
  texto.innerHTML = "El Océano Austral, también conocido como Océano Antártico, se ubica rodeando al Continente Antártico, en la región polar del hemisferio sur del planeta. Su área se define generalmente desde el borde del continente y sus plataformas de hielo, hasta la posición de la Corriente Circumpolar Antártica (CCA). <br>Es probablemente el mayor ecosistema marino del planeta, abarcando un área de 31,8 millones de km<sup>2</sup>, que constituyen casi el 9% del área total de los océanos de la Tierra. Fue oficialmente nombrado Océano Austral en el año 2000 por la Organización Hidrográfica Internacional, ocasión en la que se definió su ubicación al sur de los 60º S (sesenta grados de latitud sur), coincidiendo con los límites latitudinales establecidos para la Antártica en el Sistema del Tratado Antártico.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
			imagen.top = "18%";
			if (document.getElementById("video")) document.getElementById("video").remove();

	    titulo.innerHTML = "¿Dónde se ubica el Océano Austral?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/01_01.jpg');
      texto.innerHTML = "El Océano Austral, también conocido como Océano Antártico, se ubica rodeando al Continente Antártico, en la región polar del hemisferio sur del planeta. Su área se define generalmente desde el borde del continente y sus plataformas de hielo, hasta la posición de la Corriente Circumpolar Antártica (CCA). <br>Es probablemente el mayor ecosistema marino del planeta, abarcando un área de 31,8 millones de km<sup>2</sup>, que constituyen casi el 9% del área total de los océanos de la Tierra. Fue oficialmente nombrado Océano Austral en el año 2000 por la Organización Hidrográfica Internacional, ocasión en la que se definió su ubicación al sur de los 60º S (sesenta grados de latitud sur), coincidiendo con los límites latitudinales establecidos para la Antártica en el Sistema del Tratado Antártico.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  	if (document.getElementById("video")) document.getElementById("video").remove();
  		titulo.innerHTML = "¿Cuáles son las características principales del Océano Austral?";
  		imagen.children[0].setAttribute('src', '');
  		// Creamos iframe para video en vez de imagen.
  		var newDiv = document.createElement("object");
  		newDiv.id = "video";
  		newDiv.data = "https://www.youtube.com/embed/sohMjBVWXyA";
  		newDiv.height = '100%';
  		newDiv.width = '100%';
  		newDiv.style = "height:33vw";
  		imagen.appendChild(newDiv);
  		imagen.top = "22%";

  		texto.innerHTML = "El Océano Austral, es un sistema con una larga historia evolutiva, ya que hace aproximadamente 25 millones de años se establecieron los principales patrones de circulación y distribución de masas de agua. Al estar relativamente aislado del resto de los océanos, se considera un sistema semi-cerrado, especialmente por la presencia del Frente Polar Antártico.<br>El agua del Océano Austral es significativamente más fría que las aguas de los océanos circundantes, van desde los -1,8 °C cerca de la Antártida a aproximadamente 3,5 °C en el Frente Polar.<br>Existe una zona llamada Convergencia Antártica, donde convergen aguas subantárticas cálidas y aguas antárticas frías. Las aguas antárticas llegan a la convergencia, se hunden y se mezclan parcialmente con las aguas subantárticas, formando así la masa de Agua Intermedia Antártica.<br>En contraste, al sur del Frente Polar Antártico existe una zona de Divergencia Antártica, donde las agua antárticas aún más frías producto del deshielo, se hunden formando las aguas del fondo antártico.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
			imagen.top = "18%";
			if (document.getElementById("video")) document.getElementById("video").remove();

    	titulo.innerHTML = "¿Qué es la Corriente Circumpolar Antártica?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/01_03.jpg');
    	texto.innerHTML = "Producto del encuentro de las distintas masas de aguas en la Convergencia Antártica, de la rotación de la Tierra, y principalmente de los fuertes vientos, existe una corriente que circula de Oeste a Este en torno a la Antártica: la Corriente Circumpolar Antártica (CCA). Esta corriente es regular, rápida y ocupa prácticamente toda la columna de agua, desde la superficie hasta el fondo oceánico. Es la corriente oceánica más poderosa en todo el planeta, ya que prácticamente no tiene obstáculos terrestres para su circulación (excepto por el extremo sur de América del Sur en el Paso Drake).<br>Esta corriente tiene un flujo de 160 millones de metros cúbicos por segundo (10<sup>6</sup>m<sup>3</sup>s<sup>-1</sup>), esto es equivalente a 160 veces el flujo de todos los ríos de la Tierra combinados.<br>Sin embargo, cerca de la costa antártica se forma una contracorriente, es decir, que circula en dirección contraria, esta es la Divergencia Antártica.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
  		imagen.top = "18%";
  		if (document.getElementById("video")) document.getElementById("video").remove();

      titulo.innerHTML = "¿Cómo se formó la Antártica?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/01_04.gif');
    	texto.innerHTML = "Hace unos 200 millones de años, la corteza continental de la Antártica estaba unida a América del Sur, África, India y Australia, constituyendo una gran masa de tierra conocida como Gondwana (correspondiente a la porción sur del supercontinente llamado Pangea). Sin embargo, en el proceso de deriva continental que tardó millones de años, esta masa terrestre se dividió poco a poco. El último evento de distanciamiento terrestre ocurrió entre América del Sur y la Antártica, hace unos de 30 a 34 millones de años atrás, en el período conocido como Eoceno-Oligoceno.<br>La Antártica se ha movido poco a poco hacia su posición polar actual. Esta separación y distanciamiento, posibilitó la formación de la Corriente Circumpolar Antártica (CCA), que una vez que comenzó a fluir alrededor de la Antártica, la aisló de contacto con aguas más cálidas y se congeló.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

			imagen.children[0].style.width = "59.5vw"; // por ser un .gif de 400x254

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
  		imagen.top = "18%";
  		if (document.getElementById("video")) document.getElementById("video").remove();

      titulo.innerHTML = "¿Cuáles son las características de las aguas que forman esta corriente?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/01_05.jpg');
    	texto.innerHTML = "La presencia del Frente Polar Antártico, hace que el agua cálida que viene de latitudes medias no llegue hasta el continente antártico, ayudando así a conservar su congelamiento.<br>A pesar de que las reacciones químicas y las tasas metabólicas son más lentas en aguas frías, el océano Austral es altamente productivo, cuyo principal factor limitante para la productividad marina no es la temperatura, sino que la disponibilidad de nutrientes, que se encuentran en aguas profundas. Estos nutrientes quedan disponibles a los productores primarios cerca de la superficie, cuando se producen afloramientos o surgencia de masas de aguas profundas. Este afloramiento o surgencia se produce por la formación y derretimiento estacional del hielo marino.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Gigante Blanco";