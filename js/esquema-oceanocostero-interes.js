// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

// 4 niveles solamente.
document.getElementById("numero-1").style.left = "13%";
document.getElementById("numero-2").style.left = "26%";
document.getElementById("numero-3").style.left = "39%";
document.getElementById("numero-4").style.left = "52%";

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
titulo.innerHTML = "¿Dónde no hay luz ni oxígeno, también existe la vida?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/importancia01.jpg');
texto.innerHTML = "La vida en la Tierra suele ocurrir en presencia de oxígeno y luz, y en el océano existen zonas donde no están presentes, pero aun así hay vida. Es por esto que muchos científicos estudian, con gran interés, a pequeños microorganismos, como bacterias, capaces de sobrevivir en zonas marinas sin oxígeno. Estas obtienen la energía que necesitan de compuestos nocivos para otros organismos. Por ejemplo, bacterias que utilizan compuestos de azufre o metano. Ayudándonos a comprender y acercarnos al origen de la vida, podemos predecir los cambios que vivirá nuestro planeta debido al calentamiento global.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Dónde no hay luz ni oxígeno, también existe la vida?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/importancia01.jpg');
        texto.innerHTML = "La vida en la Tierra suele ocurrir en presencia de oxígeno y luz, y en el océano existen zonas donde no están presentes, pero aun así hay vida. Es por esto que muchos científicos estudian, con gran interés, a pequeños microorganismos, como bacterias, capaces de sobrevivir en zonas marinas sin oxígeno. Estas obtienen la energía que necesitan de compuestos nocivos para otros organismos. Por ejemplo, bacterias que utilizan compuestos de azufre o metano. Ayudándonos a comprender y acercarnos al origen de la vida, podemos predecir los cambios que vivirá nuestro planeta debido al calentamiento global.";
        barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo determinar la edad de un pez?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/importancia02.jpg');
    		texto.innerHTML = "Existen métodos para estimar la edad de los peces y así saber si la población está en la edad apta para ser capturada. Uno de estos es el uso de una estructura formada de calcio, que se encuentra en el oído interno de la cabeza, llamada otolito. Esta estructura es extraída por científicos para observarla y estimar su edad. Cada anillo representa un año de vida.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Cómo nos pueden ayudar las bacterias marinas?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/importancia03.jpg');
	    	texto.innerHTML = "Cuando ocurren derrames de petróleo o aceites en el mar, se utilizan bacterias marinas que degradan hidrocarburos, que disuelven estas sustancias, y ayudan para que no causen tanto daño en los ambientes marinos. Algunas de estas bacterias son la <i>Halomonas pantelleriensis</i>, la <i>Rhodoferax fermentans</i>, y la <i>Sphingomonas subartica</i>.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Cómo saber si el océano está cambiando?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/importancia04.jpg');
	    	texto.innerHTML = "Así como los seres humanos y los mamíferos, en general, tenemos microorganismos en nuestro intestino que nos ayudan a digerir los alimentos, a mantenernos sanos y a regular, incluso, nuestro estado de ánimo, otros organismos más pequeños también tienen su propia microbiota intestinal. Los copépodos, pertenecientes al zooplancton, son uno de los grupos de seres vivos más abundantes del planeta. Estos se encuentran en todos los océanos y son sensibles a los cambios ambientales. Por lo que al estudiar las bacterias que viven en su intestino, podemos comprender muchos cambios que ocurren en el océano en cuanto a cantidad y calidad de nutrientes esenciales para la vida.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Importancia Científica";