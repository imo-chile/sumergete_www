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
titulo.innerHTML = "¿Cómo llegan a vivir estos seres vivos al intermareal rocoso?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos1.jpg');
texto.innerHTML = "El principal factor que ayuda a que los organismos lleguen a las rocas es la marea. La gran mayoría de los organismos del intermareal liberan al mar sus gametos, aprovechando cuando sube la marea y el agua cubre las rocas. Los gametos se unen y forman al nuevo individuo. Muchas especies poseen una etapa larval de desarrollo, donde las larvas pasan un tiempo flotando a la deriva en el mar, hasta que vuelven a la orilla, se adhieren a las rocas y crecen hasta alcanzar la edad necesaria para reproducirse.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Cómo llegan a vivir estos seres vivos al intermareal rocoso?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos1.jpg');
        texto.innerHTML = "El principal factor que ayuda a que los organismos lleguen a las rocas es la marea. La gran mayoría de los organismos del intermareal liberan al mar sus gametos, aprovechando cuando sube la marea y el agua cubre las rocas. Los gametos se unen y forman al nuevo individuo. Muchas especies poseen una etapa larval de desarrollo, donde las larvas pasan un tiempo flotando a la deriva en el mar, hasta que vuelven a la orilla, se adhieren a las rocas y crecen hasta alcanzar la edad necesaria para reproducirse.";
    		barra.style.width = barometroVars[0]["barra"];
				ola.style.left = barometroVars[0]["ola"];

	      elementAnterior.style.color = "white";
	      elementAnterior = element;
	      element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo es el ciclo de vida de las algas, como el cochayuyo?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos2.jpg');
    		texto.innerHTML = "El alga parda llamada cochayuyo, posee individuos masculinos y femeninos, que, liberan sus gametos al ambiente, donde se unen para que un nuevo individuo se adhiera luego a las rocas, perpetuando el ciclo de su especie. Eventualmente, el alga puede desprenderse y dejarse arrastrar por las olas hasta las playas de arena, donde se convierte en alimento de las pulgas de mar, terminando su ciclo de vida.";
    		barra.style.width = barometroVars[1]["barra"];
            ola.style.left = barometroVars[1]["ola"];

            elementAnterior.style.color = "white";
            elementAnterior = element;
            element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "Un ser vivo a lo largo de su ciclo de vida, ¿Puede ser hembra y macho?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos3.jpg');
	    	texto.innerHTML = "Dentro de los moluscos están las lapas zapatilla, una especie de caracol marino. Estos nacen como machos, y luego pueden transformarse en hembras, dependiendo de su tamaño. Estos moluscos viven fijos a un sustrato de forma apilada, en una estructura donde los ejemplares de abajo, los más grandes, son hembras, y los de arriba, más pequeños, son machos. Cuando la hembra muere, el macho más grande cambia su sexo y se convierte en la hembra del grupo.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Existen organismos con fecundación interna en el intermareal rocoso?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos4.jpg');
	    	texto.innerHTML = "La fecundación es interna cuando el espermatozoide fecunda al óvulo dentro del cuerpo de la hembra, mientras que la fecundación es externa cuando ocurre fuera del cuerpo de la hembra. La mayoría de los organismos en el intermareal se reproducen por fecundación externa, donde liberan sus gametos al ambiente. Sin embargo, existen excepciones como el loco, que posee fecundación interna.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Existe dimorfismo sexual en los organimos del intermareal?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/ciclos5.jpg');
	    	texto.innerHTML = "El dimorfismo sexual consiste en poder diferenciar el sexo de una especie mediante su aspecto externo. En la mayoría de los invertebrados del intermareal es imposible distinguir a simple vista entre machos y hembras. Sin embargo, hay casos como el de la luga cuchara, un alga que presenta pequeños lunares en las hembras, sobretodo en época de reproducción.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Ciclos de vida";