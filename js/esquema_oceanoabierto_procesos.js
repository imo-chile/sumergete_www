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
  titulo.innerHTML = "¿Cómo son los vientos y las corrientes en el océano abierto?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_01.jpg');
  texto.innerHTML = "El océano es un fluido que está en constante movimiento, debido a fuerzas externas como la gravedad de la luna, el viento y la rotación de la Tierra. Los vientos en el océano abierto son permanentes e interactúan con la superficie del mar entregándole energía a una capa de agua que comienza a moverse en una dirección, formando una corriente marina. Los vientos Alisios en el ecuador y los vientos del Oeste cerca de los polos son los principales vientos que impulsan a las corrientes marinas, las que pueden tener distinta velocidad, ancho y dirección. Además, las corrientes marinas juegan un rol fundamental en la distribución de calor en el planeta, dado que algunas de estas transportan aguas cálidas desde el ecuador hacia los polos y otras transportan aguas frías desde los polos hacia el ecuador.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo son los vientos y las corrientes en el océano abierto?";
		  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_01.jpg');
		  texto.innerHTML = "El océano es un fluido que está en constante movimiento, debido a fuerzas externas como la gravedad de la luna, el viento y la rotación de la Tierra. Los vientos en el océano abierto son permanentes e interactúan con la superficie del mar entregándole energía a una capa de agua que comienza a moverse en una dirección, formando una corriente marina. Los vientos Alisios en el ecuador y los vientos del Oeste cerca de los polos son los principales vientos que impulsan a las corrientes marinas, las que pueden tener distinta velocidad, ancho y dirección. Además, las corrientes marinas juegan un rol fundamental en la distribución de calor en el planeta, dado que algunas de estas transportan aguas cálidas desde el ecuador hacia los polos y otras transportan aguas frías desde los polos hacia el ecuador.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué son y cómo se forman los giros centrales de los océanos?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_02.jpg');
  		texto.innerHTML = "Los giros oceánicos son corrientes circulares que se forman en el centro de los océanos producto de la interacción de los vientos, la fricción y la fuerza de Coriolis (producida por la rotación de la Tierra, corresponde a una fuerza aparente que desvía la trayectoria de un objeto en movimiento, sobre un cuerpo en rotación. Existen cinco giros oceánicos centrales, dos de ellos localizados en el hemisferio norte (Atlántico y Pacífico) que rotan en sentido de la agujas del reloj. Otros tres, se encuentran en el hemisferio sur (Pacifico, Atlántico e Índico) con un giro contrario a las agujas del reloj. Estos giros determinan el patrón general de las corrientes del océano global y además se asocian a zonas de convergencia; es decir, el agua converge al centro de ellos y, por el principio de conservación de masa, el agua comienza a hundirse.  En el océano Pacífico Sur frente a Chile, el giro está formado por la Corriente Perú-Chile (Humboldt), la Corriente Ecuatorial del Sur, la Corriente Australiana del Este y la Corriente Circumpolar Antártica.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué es y cómo se inicia la circulación termohalina?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_03.gif');
    	texto.innerHTML = "La circulación termohalina conecta los océanos regulando el clima a nivel global, es el movimiento de aguas tanto someras como profundas, como un gran cinturón que recorre todos los océanos. Su nombre viene por temperatura (termo) y salinidad (halina), entre los dos determinan la  densidad del agua. El agua más densa (más fría y más salina) se hunde y recorre el océano profundo, acumulando nutrientes, hasta que vuelve a ascender por procesos físicos como la surgencia, enriqueciendo de oxígeno y nutrientes el océano somero. El agua menos densa (más cálida y menos salina), se transporta a través de profundidades intermedias. De esta forma el agua recorre todo el planeta, en un ciclo que dura alrededor de 1.000 años. La circulación termohalina se da inicio con la formación de aguas profundas. Esto ocurre en el Atlántico Norte, cerca de Groenlandia y en el Océano Austral (agua antártica de fondo), donde al formarse hielo, las sales disueltas se concentran, el agua se vuelve más densa y por ende, se hunde.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      imagen.children[0].style.width = "59.5vw";  // por gif de menor tamaño.
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué pasa si se interrumpe la circulación termohalina?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_04.jpg');
    	texto.innerHTML = "La circulación termohalina permite el intercambio y la redistribución de calor a través del océano global, regulando así el clima del planeta. El calentamiento global, consecuencia del aumento de CO<sub>2</sub> atmosférico producto de la actividad antropogénica, acelera el deshielo del Ártico, lo que genera que las sales se diluyan en el agua y se vuelva menos densa. Con el tiempo, si la densidad disminuye de manera considerable, podría frenarse el hundimiento de esas aguas, por tanto, cortar la formación de aguas profundas, e interrumpir la circulación termohalina actual. ¿Qué podría ocurrir posterior a esto? Por ejemplo, Europa dejaría de recibir el calor que lleva la corriente cálida desde el ecuador, lo que generaría un enfriamiento brusco de esta parte del hemisferio norte, con consecuencias difíciles de predecir.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cómo se produce el fenómeno de El Niño?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/02_05.gif');
    	texto.innerHTML = "El Niño, es un fenómeno del clima relacionado con el calentamiento del océano en el Pacífico Oriental Ecuatorial. Normalmente, los vientos alisios soplan sobre el Pacífico ecuatorial desde el este, por lo que hacen que se acumule agua cálida hacia el oeste (Indonesia), generando allí mayor evaporación y lluvias. Sin embargo, cada cierto tiempo los vientos alisios se debilitan, provocando que el agua cálida se desplace hacia el este (América del Sur). Esto genera un aumento en la evaporación y la lluvia sobre este continente localizado en la zona ecuatorial. A este fenómeno se le denomina fenómeno de El Niño.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      imagen.children[0].style.width = "59.5vw";  // por gif de menor tamaño.
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Procesos Físicos";