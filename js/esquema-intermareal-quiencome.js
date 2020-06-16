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
titulo.innerHTML = "¿Qué es una trama trófica?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome1.jpg');
texto.innerHTML = "Es el proceso de transferencia de energía alimenticia a través de una serie de organismos, en el que cada uno se alimenta de uno y es comido por otro. Esto no es una transferencia lineal, sino una red, un organismo puede ser comido por más de un consumidor, y un consumidor puede comer más de una presa diferente.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Qué es una trama trófica?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome1.jpg');
        texto.innerHTML = "Es el proceso de transferencia de energía alimenticia a través de una serie de organismos, en el que cada uno se alimenta de uno y es comido por otro. Esto no es una transferencia lineal, sino una red, un organismo puede ser comido por más de un consumidor, y un consumidor puede comer más de una presa diferente.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo comienza una trama trófica?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome2.jpg');
    		texto.innerHTML = "Cada cadena se inicia con un vegetal, un organismo capaz de fabricar su propio alimento, produciendo sustancias orgánicas a partir de sustancias inorgánicas que toma del aire, del suelo y del agua. Para esto, obtienen la energía necesaria del Sol mediante fotosíntesis (Como las algas) o de reacciones químicas (quimiosíntesis).";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿De qué está compuesta una trama trófica?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome3.jpg');
	    	texto.innerHTML = "La base de una trama trófica son los productores, que en el caso del mar son las algas grandes (macroalgas) y el fitoplancton (microalgas)., Luego vienen los consumidores primarios, como el zooplancton e invertebrados herbívoros quienes se comen a los productores. A los consumidores primarios se los comen peces pequeños, moluscos, jaibas, quienes son llamados consumidores secundarios. Los consumidores terciarios son los peces grandes, moluscos como el calamar o pulpo y aves marinas. Finalmente, están los descomponedores o carroñeros, que pueden ser las bacterias, algunos crustáceos, y en el caso de las aves, los jotes.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Cómo es la trama trófica en el intermareal?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome4.jpg');
	    	texto.innerHTML = "Dependiendo del lugar donde se encuentre, las tramas tróficas pueden mostrar muchas variaciones. Por ejemplo, en las playas de arena, los jotes actúan como carroñeros de muchas especies, mientras que otras aves se alimentan principalmente de consumidores primarios, como las pulgas y chanchitos marinos. De igual forma, las playas rocosas cuentan con más variedad de consumidores primarios como las lapas, erizos, choritos y cirrípedos. Así, estrellas de mar, locos y gaviotas se convierten en los principales depredadores en este ambiente.";        
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Qué daño se produce en una trama trofica cuando se extraen las estrellas de mar?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/quiencome5.gif');
	    	texto.innerHTML = "Si el ser humano extrae estrellas de mar, desequilibramos lo natural; aumentando la población de otras especies como los erizos, ya que no tendrían mayores depredadores. De esta manera, se vería muy afectada la población de algas, ya que al haber mayor sobrevivencia de erizos, estos eventualmente disminuirían la población de algas de las cuales se alimentan. Las tramas tróficas son muy frágiles. Basta con una pequeña intervención del ser humano para generar un gran cambio, cuyas consecuencias no siempre podemos dimensionar.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        imagen.children[0].style.width = "59.5vw"; // por ser un .gif de 400x254 que pesa 2,5MB -_-

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Quién come a quién";