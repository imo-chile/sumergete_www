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
titulo.innerHTML = "¿Qué son las playas de arena?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas1.jpg');
texto.innerHTML = "Una playa es un relieve que recorre la orilla del mar, lago o río. Está compuesta de partículas sueltas de roca, entre las que se encuentran la arena, la grava y el adoquín.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Qué son las playas de arena?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas1.jpg');
        texto.innerHTML = "Una playa es un relieve que recorre la orilla del mar, lago o río. Está compuesta de partículas sueltas de roca, entre las que se encuentran la arena, la grava y el adoquín.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo se forman las playas de arena?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas2.gif');
    		texto.innerHTML = "Son formadas principalmente por acumulación de materia de origen continental traído por los ríos que desembocan en los estuarios o por materiales que resultan de la erosión costera o por desechos de seres vivos que mueren en él.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        imagen.children[0].style.width = "59.5vw"; // por ser un .gif de 400x254 que pesa 2,5MB -_-

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Por qué hay playas de arena de colores diferentes?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas3.jpg');
	    	texto.innerHTML = "Dependiendo de los contenidos minerales en los gránulos de arena, esta puede tener distintos colores. El tipo más común de arena posee altas concentraciones de sílice, lo cual le da una tonalidad similar al cuarzo. Por otro lado, las blancas playas propias del Caribe están compuestas de piedra caliza erosionada y restos de crustáceos. Arenas más rojizas suelen poseer concentraciones más grandes de hierro, así como obsidiana en las playas más oscuras. En casos particulares, la arena puede tomar otros colores más extravagantes, como el rosa o el azul, ya que en los corales del área domina ese color.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
	    	titulo.innerHTML = "¿Existe vida en una playa de arena?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas4.jpg');
	    	texto.innerHTML = "Sí, sí existe vida. Los animales que habitan en estas playas arenosas pueden considerarse dentro de tres grupos de acuerdo con el tamaño que presenten: la microfauna (Inferiores a 0.05 mm, como los protozoos), la meiofauna (Entre 1 a 2 mm, como algunos gusanos) y la macrofauna (Mayores de 2 mm, como los moluscos). La existencia de estos organismos depende de los nutrientes que acarrean las mareas, las olas y de otros que llegan desde tierra. También se alimentan ahí aves playeras como gaviotas, playeros, zarapitos y chorlos.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
	    	titulo.innerHTML = "Las playas de arena, ¿son iguales en invierno y verano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/playas5.jpg');
	    	texto.innerHTML = "No, no son iguales. Las playas de arena están en constante cambio por el efecto de las olas. Por ejemplo, en invierno, los vientos son más potentes, lo que provoca un aumento de las olas, que mueven la arena hasta dejar descubiertas las rocas que estaban por debajo. Incluso, si se observa la misma playa de arena en 5 o 10 años más, esta se puede ver muy distinta, con más o menos pendiente, vegetación, o muchos otros cambios en su ecosistema.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Playas de Arena";