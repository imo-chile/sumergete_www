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
titulo.innerHTML = "¿Qué son las mareas?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas1.jpg');
texto.innerHTML = "Son movimientos de subida y bajada de las aguas. Estos movimientos son alternados, ya que luego de una marea baja viene una marea alta, y así sucesivamente. Además son periódicos, ya que están ocurriendo siempre, durante día y noche, con una duración y periocidad que permite calcular las horas de las mareas con días y hasta meses de antelación.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
    		titulo.innerHTML = "¿Qué son las mareas?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas1.jpg');
    		texto.innerHTML = "Son movimientos de subida y bajada de las aguas. Estos movimientos son alternados, ya que luego de una marea baja viene una marea alta, y así sucesivamente. Además son periódicos, ya que están ocurriendo siempre, durante día y noche, con una duración y periocidad que permite calcular las horas de las mareas con días y hasta meses de antelación.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Por qué se producen?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas2.jpg');
    		texto.innerHTML = "Estos movimientos se deben a la atracción gravitatoria de la Luna y el Sol. Estos ejercen una atracción gravitatoria sobre los grandes volúmenes de agua de la Tierra, como lagos y océanos extensos.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Qué tipos de marea existen?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas3.jpg');
	    	texto.innerHTML = "Cuando el Sol y la Luna están alineados con la Tierra (En Luna Nueva o Luna Llena), estos atraen como imanes al agua en la Tierra para ambos lados al mismo tiempo, haciendo que las mareas altas sean las más altas del mes y las mareas bajas, sean las más bajas. Estas mareas se llaman mareas vivas. Por otro lado, cuando la Luna está en los cuartos (Creciente o menguante), el Sol y la Luna atraen con menos fuerza al agua, contrarrestándose mutuamente. Estas mareas son llamadas mareas muertas, y son las mareas más bajas de las altas, y las más altas de las bajas.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
	    	titulo.innerHTML = "¿Dónde se encuentran las mareas más altas y bajas en Chile?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas4.jpg');
	    	texto.innerHTML = "En Chile, las mareas con mayor diferencia entre altas y bajas se encuentran en Puerto Montt y sus alrededores. En la caleta de Angelmó resulta pintoresco ver a los pescadores descargando sus mariscos unas veces en botes y otras en carretones. De forma similar, en algunas zonas de Chiloé, sus habitantes construyen sus casas sobre pilares apoyados en la orilla del mar, conocidos como palafitos, lo que les permite utilizar la marea alta como vía de comunicación.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
	    	titulo.innerHTML = "¿De qué nos sirve saber a qué hora sube o baja la marea?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/mareas5.jpg');
	    	texto.innerHTML = "En muchas partes en el mundo se aprovecha el desnivel de las aguas ocasionadas por las mareas para recolectar algas y mariscos que quedan al descubierto en las costas. Tanto navegantes como deportistas consideran muy importantes las condiciones de las mareas para así coordinar sus tiempos de viaje y fondeo, así como los científicos con sus muestreos y observaciones. En el caso de los buzos, el reflujo puede arrastrarlos hacia el mar sin posibilidad de volver a la costa, por ello conviene bucear durante marea baja, justo antes de la subida de la marea, que los acercaría a la costa al final de la inmersión.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}


document.getElementById("etiqueta-texto").innerHTML = "Mareas";
