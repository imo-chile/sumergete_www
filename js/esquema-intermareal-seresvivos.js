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

// Variables de barómetro, efectos de barra y ola.
var barometroVars = [
  {barra: "2vw", ola: "3.2%"},
  {barra: "15vw", ola: "15%"},
  {barra: "30vw", ola: "26%"},
  {barra: "41vw", ola: "38%"},
  {barra: "54vw", ola: "49%"}
 ];

// Elementos iniciales, es decir de barómetro nivel 1.
titulo.innerHTML = "¿Qué diferencia a los Vertebrados de Invertebrados?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres1.jpg');
texto.innerHTML = "La principal diferencia es que los vertebrados (aves marinas, peces, etc) poseen un endoesqueleto (es decir, esqueleto interno) constituido por huesos y/o cartílagos, del que forma parte la columna vertebral. Mientras que los invertebrados carecen de columna vertebral, aunque pueden tener un esqueleto externo, no óseo, llamado exoesqueleto. Por ejemplo, en moluscos su concha dura, constituida de carbonato de calcio.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
    		titulo.innerHTML = "¿Qué diferencia a los Vertebrados de Invertebrados?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres1.jpg');
    		texto.innerHTML = "La principal diferencia es que los vertebrados (aves marinas, peces, etc) poseen un endoesqueleto (es decir, esqueleto interno) constituido por huesos y/o cartílagos, del que forma parte la columna vertebral. Mientras que los invertebrados carecen de columna vertebral, aunque pueden tener un esqueleto externo, no óseo, llamado exoesqueleto. Por ejemplo, en moluscos su concha dura, constituida de carbonato de calcio.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Qué comparten y en qué se diferencian las algas y las plantas?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres2.jpg');
    		texto.innerHTML = "A pesar de compartir la fotosíntesis como método para generar alimento, las algas son muy diferentes de las plantas. Además de las diferencias de ambiente (aunque existen plantas acuáticas, que viven en agua dulce), las algas carecen de tallo, hojas y raíces, se encuentran divididas en diversas categorías, y pueden estar formadas de una (microalgas) o muchas células (macroalgas). Además de esto, algunas microalgas pueden moverse con libertad, cómo el género de algas Euglena.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Por qué las algas tienen diferentes colores?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres3.jpg');
	    	texto.innerHTML = "Esta característica se basa en los pigmentos que poseen las algas que les dan el color, debido a que permiten al vegetal absorber la radiación del Sol para transformarla en alimento a través a la fotosíntesis. Estos pigmentos absorben casi todos los colores que emite la luz, pero reflejan uno, que es el que vemos: la clorofila (algas verdes), la xantofila (algas amarillas o pardas), la ficofeína (algas pardas), la ficoeritrina (algas rojas) y la ficocianina (algas azules).";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
	    	titulo.innerHTML = "¿Qué organismos vertebrados podemos observar en el intermareal?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres4.jpg');
	    	texto.innerHTML = "Podemos encontrarnos con aves marinas como los pilpilenes, distribuidas a lo largo de toda la costa, donde se alimentan y viven. También podemos observar pequeños peces como el pejesapo, que habita en pozas de agua entre las rocas, y se adhiere a estas mediante ventosas en su abdomen.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
	    	titulo.innerHTML = "¿Cuál es la diferencia entre el nombre común y el nombre científico de una especie?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/seres5.jpg');
	    	texto.innerHTML = "Todos los organismos tienen nombre científico y nombre común. El nombre científico se le da a los organimos para poder identificarlos en todo el mundo, mientras que el nombre común es con el cual se identifica en diferentes lugares. Por ejemplo, el alga con nombre científico Sarcothalia crispata, tiene muchos nombres comunes dependiendo de la zona del país donde se extrae: “luga” en Valdivia, “luga luga” en la costa del Biobío, “luga negra” en Chiloé y “luga roja” en Magallanes.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Seres vivos";