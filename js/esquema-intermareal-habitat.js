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
titulo.innerHTML = "¿Cómo se divide el intermareal rocoso?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat1.jpg');
texto.innerHTML = "El intermareal suele dividirse en tres franjas paralelas al mar: •Zona Alta (Supralitoral): Es la zona más expuesta a la desecación, más lejana al agua y la cercana a la línea de pleamar. Por eso, es la zona más crítica en condiciones de humedad, salinidad y fuerza del oleaje. •Zona Media (Mesolitoral): Pasa menos tiempo descubierta que el Supralitoral, y suele tener algunas grietas o pozones que retienen agua (llamados pozas de marea). •Zona Baja (Infralitoral): La más cercana a la línea de bajamar, pasa más tiempo bajo el agua, y está más expuesta al oleaje";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Cómo se divide el intermareal rocoso?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat1.jpg');
        texto.innerHTML = " El intermareal suele dividirse en tres franjas paralelas al mar: •Zona Alta (Supralitoral): Es la zona más expuesta a la desecación, más lejana al agua y la cercana a la línea de pleamar. Por eso, es la zona más crítica en condiciones de humedad, salinidad y fuerza del oleaje. •Zona Media (Mesolitoral): Pasa menos tiempo descubierta que el Supralitoral, y suele tener algunas grietas o pozones que retienen agua (llamados pozas de marea). •Zona Baja (Infralitoral): La más cercana a la línea de bajamar, pasa más tiempo bajo el agua, y está más expuesta al oleaje";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Qué factores afectan el patrón de distribución de los seres vivos en el intermareal rocoso?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat2.jpg');
    		texto.innerHTML = "Los factores que influyen en la distribución de los seres vivos en el intermareal rocoso son la humedad, la luz, la desecación, la exposición al oleaje y los depredadores, entre otros. Los organismos que habitan en la zona alta resisten mejor el sol todo el día, es decir temperaturas más altas y mayor desecación, ya que es difícil que la ola los cubra, en cambio los organismos de abajo necesitan mayor humedad y resisten mejor las bajas temperaturas y el impacto de las olas. Los organismos de la zona media resisten medianas temperaturas pero necesitan mas recambio de agua que las especies de arriba.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Qué organismos podemos encontrar en el intermareal rocoso?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat3.jpg');
	    	texto.innerHTML = "Cuando vayas a la playa busca rocas, y podrás observar que abajo o sobre ellas existen seres vivos. En la zona alta podrás encontrar cirripedios, que son pequeños y están pegados a las rocas. En la zona media, encuentras pequeños bivalvos parecidos a las cholgas pero de diferente color, como el chorito maico (Perumytilus purpuratus) y una alga, el famoso luche (Porphyra columbina). En la zona baja algunos de estos organismos son: las estrellas de mar, algunas algas como Lessonia sp. y Macrosystis sp. y moluscos como la Tegula sp. Y bajo las rocas podrás observar  jaibas juveniles.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿En todos los países se puede observar este mismo patrón?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat4.jpg');
	    	texto.innerHTML = "Si, en todas las costas del mundo se puede observar un patrón ordenado de las especies que habitan el intermareal rocoso, aunque no necesariamente son las mismas especies en todos los países, pero sí son similares y se ordenan de acuerdo a variación de factores ambientales.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Tiene algún efecto un terremoto en la zonación de los organismos en le intermareal rocoso?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/habitat5.jpg');
	    	texto.innerHTML = "Si, el suceso de un terremoto tiene un gran impacto en la zonación de los organismos que habitan el intermareal rocoso. Ya que al existir un movimiento de placas tectónicas, una empuja a la otra y la que está en la superficie aumenta su altura. Por lo tanto la zona baja queda descubierta ya que al subir el nivel de la tierra todo lo que está sobre ella también sube. Para que la zonación de los organismos que habitan el intermareal rocoso vuelva al estado anterior al suceso del terremoto, puede pasar hasta 2 años.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Hábitat";