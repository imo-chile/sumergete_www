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
titulo.innerHTML = "¿Cómo influye el océano en el clima?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion01.jpg');
texto.innerHTML = "El océano puede guardar aproximadamente 100 veces más energía que la Tierra. Debido a esto, los cambios de temperatura en el litoral son menores que en aquellas zonas terrestres alejadas del mar. Por ejemplo, en nuestro país, si comparamos las temperaturas extremas de una ciudad costera con una ciudad cordillerana, nos daremos cuenta que en la ciudad costera, la diferencia de temperatura es mucho menor, gracias a que el mar actúa como regulador de esta.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Cómo influye el océano en el clima?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion01.jpg');
        texto.innerHTML = "El océano puede guardar aproximadamente 100 veces más energía que la Tierra. Debido a esto, los cambios de temperatura en el litoral son menores que en aquellas zonas terrestres alejadas del mar. Por ejemplo, en nuestro país, si comparamos las temperaturas extremas de una ciudad costera con una ciudad cordillerana, nos daremos cuenta que en la ciudad costera, la diferencia de temperatura es mucho menor, gracias a que el mar actúa como regulador de esta.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cuál es el efecto del Fenómeno de El Niño en la costa?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion02.jpg');
    		texto.innerHTML = "Cuando ocurre el fenómeno de El Niño, aguas superficiales cálidas se desplazan hacia América del sur, provocando que las aguas costeras, siempre frías, se vuelvan más cálidas. Esto causa una disminución de la presión atmosférica y así comienza a cambiar el clima local: Hay mayor evaporación, lo que a su vez genera un aumento en las lluvias y la humedad sobre el continente.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Se producen gases en el océano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion03.jpg');
	    	texto.innerHTML = "Los gases que se producen en el océano surgen del metabolismo de distintos organismos. Uno de los más importantes es el oxígeno, que es producido principalmente por el fitoplancton. Pero también existe producción de otros gases como dióxido de carbono (CO<sub>2</sub>), metano (CH<sub>4</sub>), nitrógeno molecular (N<sub>2</sub>) óxido nitroso (N<sub>2</sub>O) y dimetilsulfuro (DMS).";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Pueden los gases entrar y salir del océano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion04.jpg');
	    	texto.innerHTML = "Sí, existe un constante intercambio de gases entre el océano y la atmósfera. Este intercambio depende de la concentración de los gases tanto en el océano como en la atmósfera, de la solubilidad de cada gas, y de la turbulencia que genere el viento en la superficie del mar. Los principales gases de la atmósfera son el nitrógeno (N<sub>2</sub>), el oxígeno (O<sub>2</sub>) y el dióxido de carbono (CO<sub>2</sub>), siendo este último un gas de efecto invernadero, producto de la actividad humana.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Cuánto del oxígeno que respiramos se produce en el océano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/interaccion05.jpg');
	    	texto.innerHTML = "Siempre escuchamos que la selva amazónica es el pulmón del mundo. Sin embargo, el 50% del oxígeno que respiramos proviene del océano. El oxígeno en el mar es producido, en una pequeña proporción, por las macroalgas del intermareal, y en su gran mayoría por las pequeñas microalgas que flotan en todos los océanos del planeta (fitoplancton).";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Mar y Aire";