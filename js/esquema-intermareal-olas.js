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
titulo.innerHTML = "¿Qué son las Olas?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas1.jpg');
texto.innerHTML = "Las olas son movimientos constantes que realiza el mar, generadas principalmente por el viento. ¿Sabes cómo se mueve el sonido? Pues las olas, al igual que el sonido, se transmiten como ondas de movimiento repetitivo a través del mar.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Qué son las Olas?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas1.jpg');
        texto.innerHTML = "Las olas son movimientos constantes que realiza el mar, generadas principalmente por el viento. ¿Sabes cómo se mueve el sonido? Pues las olas, al igual que el sonido, se transmiten como ondas de movimiento repetitivo a través del mar.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo y dónde se forman las olas en el mar?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas2.jpg');
    		texto.innerHTML = "Las olas se forman cuando una gran cantidad de viento toca el mar y lo empuja generando el movimiento continuo sobre él. Para que esto ocurra en cualquier lugar del mar, debe existir una fuerza generada por el viento igual o superior a 3 km/h. Lo que nosotros vemos usualmente en las costas es el final de su ciclo, cuando las olas rompen sobre la arena o los roqueríos.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Por qué existen olas más grandes solo en algunas playas?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas3.jpg');
	    	texto.innerHTML = "Esto depende de la forma que tiene el fondo marino y qué tan expuesta está la playa. Si una playa está protegida dentro de una bahía, las olas que allí lleguen serán más pequeñas, mientras que si la playa está expuesta al océano abierto, sus olas serán más grandes y llegarán con más fuerza.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Cómo se adaptan los seres vivos que habitan los intermareales al efecto de las olas?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas4.jpg');
	    	texto.innerHTML = "El permanente vaivén de las olas genera profundos cambios en playas rocosas y de arena, por lo que los seres vivos que habitan en estas deben buscar formas de adaptarse. Algunas algas como el cochayuyo y el huiro poseen bases que se adhieren firmemente a las rocas, así como también algunos moluscos cómo el chorito y las lapas. Por otro lado, en playas de arena, la navajuela y las almejas evitan las olas viviendo enterradas bajo la arena y filtrando plancton para alimentarse.";        
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Por qué cuando se queda una pelota de playa en el mar, esta no regresa a la orilla?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/olas5.gif');
	    	texto.innerHTML = "Pensemos que la pelota es una partícula pequeña en este gran universo que es el mar. Como la pelota flota, esta se encuentra sobre el agua y va al ritmo de las olas. Al contrario de lo que se pueda pensar, las olas no transportan agua, si no energía, por lo que lo que producen a su paso es un movimiento circular en las partículas de agua. Cuando la ola termina su paso, las partículas vuelven al mismo lugar donde se encontraban originalmente.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        imagen.children[0].style.width = "59.5vw"; // .gif pequeño...

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Olas";