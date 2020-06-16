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
titulo.innerHTML = "¿Cómo utilizamos nuestras playas?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros1.jpg');
texto.innerHTML = "Como seres humanos realizamos múltiples actividades en nuestras playas, algunas recreativas ( como hacer diversos deportes, descansar, y viajar a ellas en vacaciones, u organizar turismo), algunas relacionadas a su estudio o extracción de diversos productos del mar, o actividades industriales.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Cómo utilizamos nuestras playas?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros1.jpg');
        texto.innerHTML = "Como seres humanos realizamos múltiples actividades en nuestras playas, algunas recreativas ( como hacer diversos deportes, descansar, y viajar a ellas en vacaciones, u organizar turismo), algunas relacionadas a su estudio o extracción de diversos productos del mar, o actividades industriales.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿De dónde proviene la basura que está en nuestras playas?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros2.jpg');
    		texto.innerHTML = "En general, existen dos fuentes de basura que llegan a las zonas costeras: Las terrestres, como vertederos de basura cercanos a zonas costeras, ríos que desembocan en el mar, descargas industriales, sistemas de alcantarillado y actividades turísticas; y las marinas, como el transporte marítimo, la pesca y la minería.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Qué daño causa la basura que botamos en nuestras playas?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros3.jpg');
	    	texto.innerHTML = "Al botar basura a nuestras playas, o peor aún, al omitir y no ayudar a limpiar recogiendo la basura que nos rodea, ponemos en peligro a la fauna marina y a nosotros mismos. Se han reportado muchas especies afectadas, como peces y larvas, aves, tortugas y mamíferos marinos, los cuales sufren graves daños a la salud, como por ejemplo obstrucciones en sus sistemas digestivos, úlceras e incluso muerte por inanición.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
	    	titulo.innerHTML = "¿Existen agrupaciones que se preocupan de este problema de la basura?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros4.jpg');
	    	texto.innerHTML = "Sí, existen agrupaciones como los Científicos de la Basura (<a href='http://www.cientificosdelabasura.cl'>www.cientificosdelabasura.cl</a>), formados por un grupo de profesionales del área de las ciencias que, a través del método científico, proponen soluciones para revertir el problema de la basura. Otras actividades son realizadas por el Ministerio del Medio Ambiente a través de DIRECTEMAR, realizadas el día Internacional de Limpiezas de Playas. Las actividades voluntarias invitan a la comunidad o agrupaciones a lo largo de Chile a adoptar una playa para limpiarla, registrando el tipo y cantidad de residuos que recolectan. A estas agrupaciones se suma la organización Sea Shepherd Conservation Society (SSCS), ocupada del cuidado de la vida salvaje marina, y Liftun Chile.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
	    	titulo.innerHTML = "Como seres humanos ¿De qué otra forma podemos disminuir nuestro impacto en el medio ambiente?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/nosotros5.jpg');
	    	texto.innerHTML = "El impacto más directo y visual sobre nuestro medio ambiente, es la basura que nosotros mismos generamos en nuestros hogares. Pero todos hemos escuchado más de alguna vez las famosas 3R: Reducir, Reutilizar y Reciclar. Si eres principiante, puedes empezar por separar la basura en grupos reciclables (Papeles y cartones, plásticos, vidrios, latas de aluminio y envases Tetrapack), y llevarla a “puntos limpios” para ser reciclada. Además, cada uno de nosotros, como individuos, podemos ayudar cuidando el agua y la luz que utilizamos, promoviendo el uso de energías alternativas y ayudando a generar conciencia medioambiental en quienes nos rodean.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Nosotros en la Playa";