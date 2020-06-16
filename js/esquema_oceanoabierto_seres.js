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

// Creación de elemento especial para esta estupidez (por la forma en que están hechas las gráficas entregadas).
var newDiv2 = document.createElement("div");
newDiv2.id = "fig-indicaciones";
newDiv2.className = "fig-indicaciones";
newDiv2.style.position = "absolute";
newDiv2.style.top = "6%";
newDiv2.style.left = "7%";
newDiv2.style.width = "90%";
imagen.appendChild(newDiv2);
var newDivImg2 = document.createElement("img");
newDiv2.appendChild(newDivImg2);
newDivImg2.src = "/../imagenes/sala_oceanoabierto/esquemas/05_texto.png";

/*
* Sección para interacción con diagrama de esquema.
*/

// Parámetros (posición, tamaño, titulo y texto) de cada div que contiene los iconos encima del diagrama del esquema.
var parametrosRecursos = [
  {top:"26%", left:"26%", width:"40%", titulo:"Biolumiscencia", texto:"La biolumiscencia les sirve para: 1. Iluminar y encontrar su presa. 2. Atraer la presa, a través de destellos, como el pez anzuelo. 3. Defenderse. Algunos organismos producen destellos de luz cuando son atacados, como una alarma contra ladrón, los destellos de la presa hacen que su depredador (el ladrón) desista de atacar, porque su posición es revelada a depredadores más grandes (la policía) y debe escapar. 4. Esconderse. Entre 200 y 1000m algo de luz solar todavía llega, y siempre hay otro animal abajo mirando hacia arriba, para identificar su presa por la sombra que genera. La única manera de esconderse es anulando su propia sombra. Así, algunos animales logran a reproducir exactamente el color de la luz solar a estas profundidades, para anular su sombra y ser invisibles. 5. Comunicarse. Atraer pareja de la misma especie. Los animales que se comunican por luz tienen que producir patrones de destellos muy específicos para que otro miembro de su especie pueda reconocer una pareja potencial."}
];

// Funciones para mostrar la imagen con el efecto glow y cambiar el texto de descripción.
function hoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_oceanoabierto/esquemas/seres/glow_" + (i+1) + ".png";
}
function unhoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_oceanoabierto/esquemas/seres/out_" + (i+1) + ".png";
}
function clickRecursos() {
  var i = this.parentElement.id.split("-").pop();
  texto.innerHTML = "<div style='font-weight:bold;text-align:center;font-family:Pacifico;'>" + parametrosRecursos[i]["titulo"] + "</div><br>" + parametrosRecursos[i]["texto"];
  //texto.innerHTML = parametrosRecursos[i]["texto"];
}

// Creación de divs que contienen img, esto dentro del div "imagen".
for(i = 0; i < parametrosRecursos.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.id = "fig-" + i;
  newDiv.className = "fig-" + i;
  newDiv.style.position = "absolute";
  newDiv.style.top = parametrosRecursos[i]["top"];
  newDiv.style.left = parametrosRecursos[i]["left"];
  newDiv.style.width = parametrosRecursos[i]["width"];
  imagen.appendChild(newDiv);
  var newDivImg = document.createElement("img");
  newDiv.appendChild(newDivImg);
  newDivImg.style.cursor = "pointer";
  newDivImg.src = "/../imagenes/sala_oceanoabierto/esquemas/seres/out_" + (i+1) + ".png";
  newDivImg.onmouseover = hoverRecursos;
  newDivImg.onmouseout = unhoverRecursos;
  newDivImg.onclick = clickRecursos;
}

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Cómo es la trama trófica en el océano abierto?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_01.jpg');
  texto.innerHTML = "Los productores primarios son organismos fotosintéticos pequeños, (< 0,005 mm; aproximadamente 10 veces más pequeñas que un cabello) como: los picoeucariontes, las cianobacterias y los cocolitofóridos  son capaces de generar su propia energía y alimento, gracias a la luz solar presente en los primeros metros de profundidad. Luego, esa materia y energía es traspasada a niveles superiores al ser consumida. En el océano abierto, los consumidores cubren un espectro de tamaño muy grande, que va desde el zooplancton (productores secundarios y/o consumidor primario), pasando por peces, aves marinas y grandes mamíferos marinos. Los microorganismos también consumen materia organiza liberada al ambiente en distintas interacciones. Todos estos procesos ocurren de manera interconectada, formando así las llamadas tramas tróficas, encargadas de sustentar el ecosistema marino.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  // hideRecursos
  for(i = 0; i < parametrosRecursos.length; i++) {
    var newDiv = document.getElementById("fig-" + i);
    newDiv.style.display = "none";
    newDiv2.style.display = "none";
  }

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo es la trama trófica en el océano abierto?";
		  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_01.jpg');
		  texto.innerHTML = "En el océano abierto existe una baja cantidad de nutrientes. Por esto, los productores primarios son organismos fotosintéticos muy pequeños, menores a 0,005 mm (aproximadamente 10 veces más pequeñas que el pelo más fino), como los picoeucariontes, las cianobacterias y los cocolitofóridos. Hasta donde llega la luz solar, estos organismos llevan a cabo el proceso de fotosíntesis, que les permite generar su propia materia. Luego, esa materia y energía es traspasada a los consumidores. En el océano abierto, los consumidores cubren un espectro de tamaño muy grande, que va desde el zooplancton (consumidor primario), pasando por peces, aves marinas y grandes mamíferos marinos. Toda la materia orgánica que se libera al ambiente es consumida por una alta abundancia de microorganismos como las bacterias, algunas de las cuales pueden ser también consumidas por otros microorganismos unicelulares llamados protozoos. Así, las tramas tróficas son sustentadas por pequeños organismos que generan y descomponen la materia orgánica para proporcionar energía a los consumidores de mayor tamaño.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

    	// hideRecursos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "none";
        newDiv2.style.display = "none";
      }
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué organismos son más característicos en el océano abierto?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_02.jpg');
  		texto.innerHTML = "En el océano abierto podemos encontrar gran cantidad de organismos, desde los más pequeños a los más grandes mamíferos. Los que dominan este ambiente son los más pequeños como: bacterias y cianobacterias (bacterias fotosintéticas) y los cocolitofóridos (fitoplancton). De los mamíferos, destacan las ballenas (azules, jorobadas, grises, etc) que llevan a cabo extensas migraciones desde las áreas de alimentación en altas latitudes (cerca de los polos), hacia las bajas latitudes (cerca del Ecuador) donde se reproducen. También se puede encontrar al cachalote, que puede descender hasta los 2.000 m de profundidad para cazar. Otros animales característicos son peces de gran importancia comercial como: atún, anchoveta, sardina, jurel y pez espada; los mictófidos, peces muy abundantes entre los 200 y 1000 metros de profundidad. También se encuentran organismos gelatinosos, como las salpas y los sifonóforos. Existen también aves marinas oceánicas que gastan más del 90% de sus vidas en el océano abierto, como la fardela negra y el albatros.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "none";
        newDiv2.style.display = "none";
      }
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Hasta qué profundidad se pueden encontrar seres vivos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_03.jpg');
    	texto.innerHTML = "La mayor parte del océano abierto y profundo ha sido poco explorado. Sin embargo, lejos de carecer de vida, desde hace décadas se ha demostrado que existe una alta variedad de organismos a lo largo de la columna de agua. Incluso se conocen más de 400 especies que viven en las 21 fosas de todo el mundo, los puntos más profundos del planeta (6.000 a 11.000 metros). Se pueden encontrar gusanos excavadores, peces como el pez babosa, que vive a más de 8.000 m de profundidad (<i>Careproctus longifilis</i>) y también crustáceos como anfípodos gigantes. En este ambiente extremo los animales sobreviven gracias a pequeñas partículas de materia orgánica que caen al fondo desde niveles superiores o gracias a reacciones químicas que rodean las chimeneas hidrotermales.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "none";
        newDiv2.style.display = "none";
      }
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué diferencias tienen los organismos del océano profundo con los de la superficie?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_04.jpg');
    	texto.innerHTML = "Las diferencias están dadas por las adaptaciones al ambiente. Hasta los primeros 200 m de profundidad, encontramos la zona del océano iluminada por la luz solar. Allí, los productores primarios son el fitoplancton y los consumidores como los peces encuentran fácilmente su alimento, por lo que tienen bocas pequeñas y cuerpos preparados para la natación; son hidrodinámicos. Bajo los 200 m el océano se torna oscuro, y los organismos adquieren otras características, como cambios en la pigmentación (son de color rojo, negro y la mayoría son biolumniscentes). Además, hay escasez de alimento, ya que la materia orgánica es producida por quimiosíntesis en lugares muy específicos (como las chimeneas hidrotermales), y en gran parte del océano el alimento que llega al fondo corresponde a materia orgánica que fue producida en superficie. Por lo tanto, los organismos adquieren adaptaciones para facilitar la alimentación.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "none";
        newDiv2.style.display = "none";
      }
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Qué adaptaciones tienen los organismos de profundidad?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/01_05.png');
    	texto.innerHTML = "Los organismos de profundidad han evolucionado de forma muy particular. Al no llegar luz solar, algunos de ellos no tienen ojos; ya no sirve esos órganos costosos y delicados. Tienen grandes bocas y dientes para aprovechar cualquier oportunidad de alimentarse, depredando a otros o esperando que caigan restos de organismos de capas superiores. Además, para soportar la presión, tienen cuerpos blandos con un alto porcentaje de agua en su interior, ya que los líquidos son casi incompresibles. A nivel bioquímico, los peces poseen el compuesto óxido de trimetilamina, que protege a las proteínas del daño que genera la presión. Una curiosa adaptación es la del pez anzuelo, donde el macho es pequeño y vive como parásito adherido a la hembra para asegurar la reproducción. También es común el gigantismo en invertebrados, es decir, organismos que tienen tamaños mucho mayores que especies cercanas de la superficie. La más interesante adaptación es que la mayoría de los animales son bioluminiscentes. haz click en el anzuelo del pez para descubrirlo.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // showRecusos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "block";
        newDiv2.style.display = "block";
      }
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Seres Vivos";