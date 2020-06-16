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
titulo.innerHTML = "¿Es el océano estático?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso01.jpg');
texto.innerHTML = "No, es dinámico y está en constante movimiento. Los movimientos continuos y permanentes de las masas de agua se denominan “corrientes marinas”, y son impulsadas por el viento que sopla sobre el mar, por efecto de la rotación de la Tierra y por diferencias de densidad. Por ejemplo, en la costa de Chile, la corriente más importante es llamada “Corriente de Humboldt”. Esta es una corriente de agua fría, a nivel de superficial, que viaja de sur a norte.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Es el océano estático?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso01.jpg');
        texto.innerHTML = "No, es dinámico y está en constante movimiento. Los movimientos continuos y permanentes de las masas de agua se denominan “corrientes marinas”, y son impulsadas por el viento que sopla sobre el mar, por efecto de la rotación de la Tierra y por diferencias de densidad. Por ejemplo, en la costa de Chile, la corriente más importante es llamada “Corriente de Humboldt”. Esta es una corriente de agua fría, a nivel de superficial, que viaja de sur a norte.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Es el océano una única y gran masa de agua?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso02.jpg');
    		texto.innerHTML = "Aunque pareciera que el océano es un solo cuerpo de agua, en realidad está dividido y formado por distintas masas de agua, desde la superficie al fondo. Cada masa de agua tiene un origen y características específicas, lo que permite nombrarlas y reconocerlas en cualquier parte del mundo. Las características que definen una masa de agua son su temperatura y salinidad (que determinan su densidad). Además, estas se mueven, por lo que podemos seguir su trayectoria.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Varía el contenido de oxígeno en el océano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso03.jpg');
	    	texto.innerHTML = "El 99% de los océanos está altamente oxigenado. Sin embargo, el 1% restante corresponde a zonas con muy bajo contenido de oxígeno, incluso nada en absoluto. Estas zonas son muy importantes ya que en ellas habitan comunidades únicas de bacterias, adaptadas a vivir en lugares pobres en oxígeno. Otros organismos de mayor tamaño, como peces, suelen morir al atravesar aguas como éstas. Las zonas con poco oxígeno se forman por distintos fenómenos naturales: como la surgencia y la alta productividad de fitoplancton.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Cómo ascienden aguas profundas a la superficie?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso04.gif');
	    	texto.innerHTML = "El ascenso de aguas profundas a la superficie del mar se denomina “surgencia”. Estas aguas se caracterizan por ser frías, con bajo contenido de oxígeno y gran cantidad de nutrientes. En la zona costera, estos nutrientes generan en la superficie un gran crecimiento de fitoplancton. Los factores que permiten que exista este afloramiento de aguas profundas en la zona costera son: el viento paralelo a la costa, la rotación de la Tierra, que desvía el movimiento del agua hacia la izquierda en el hemisferio sur, y hacia la derecha en el hemisferio norte (fuerza de Coriolis) y la topografía del fondo marino.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        imagen.children[0].style.width = "59.5vw"; // .gif pequeño...

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Hasta dónde ingresa la luz solar en el océano costero?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/proceso05.jpg');
	    	texto.innerHTML = "En el océano, la luz solar ingresa hasta cierta profundidad, a la cual se le denomina zona fótica. Asimismo, la zona donde ya no llega la luz solar se llama zona afótica. La profundidad de cada una depende de la cantidad de material que esté suspendido en el agua, como el plancton. Si hay muchas partículas en suspensión, el agua está más turbia y la luz no llega muy profundo. Por otro lado, en el océano abierto, las aguas son más limpias y transparentes, lo cual permite que la luz llegue bastante más profundo.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Cómo se mueve el mar";