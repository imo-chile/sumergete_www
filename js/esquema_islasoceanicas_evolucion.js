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
  titulo.innerHTML = "¿Qué importancia tuvieron las islas oceánicas en la teoría de la evolución de Darwin?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_01.jpg');
  texto.innerHTML = "Por medio de estudios y observaciones realizados en islas oceánicas, Darwin pudo demostrar varias hipótesis relacionadas con la diversificación y adaptación de las especies. Sus principales contribuciones las hizo en base al estudio de aves en las islas oceánicas Galápagos. En estas islas, Darwin demostró cómo las poblaciones aisladas de pinzones se adaptaron y diversificaron frente a diferentes condiciones de hábitat y/o alimentación. Los diferentes tipos de semillas presentes en la isla promovieron diferentes hábitos alimenticios que se evidencian en distintas formas y tamaños del pico de las aves. En honor a Darwin y sus descubrimientos este grupo de aves fueron llamados los “pinzones de Darwin”.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Qué importancia tuvieron las islas oceánicas en la teoría de la evolución de Darwin?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_01.jpg');
      texto.innerHTML = "Por medio de estudios y observaciones realizados en islas oceánicas, Darwin pudo demostrar varias hipótesis relacionadas con la diversificación y adaptación de las especies. Sus principales contribuciones las hizo en base al estudio de aves en las islas oceánicas Galápagos. En estas islas, Darwin demostró cómo las poblaciones aisladas de pinzones se adaptaron y diversificaron frente a diferentes condiciones de hábitat y/o alimentación. Los diferentes tipos de semillas presentes en la isla promovieron diferentes hábitos alimenticios que se evidencian en distintas formas y tamaños del pico de las aves. En honor a Darwin y sus descubrimientos este grupo de aves fueron llamados los “pinzones de Darwin”.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué especies existen en las islas oceánicas de nuestro país?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_02.jpg');
  		texto.innerHTML = "Las islas oceánicas de Chile son las zonas con mayor endemismo del mundo (especies que sólo se encuentran allí). Son ecosistemas frágiles y con poca abundancia de especies; sin embargo podemos encontrar sorprendentes arrecifes de coral, que conforman en sí ecosistemas con muchos organismos asociados, entre ellos peces de hermosos colores (propios de climas tropicales y subtropicales), cangrejos, caracoles, erizos, estrellas de mar, entre otros.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo se han adaptado las especies que aquí habitan?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_03.jpg');
    	texto.innerHTML = "El grado de adaptación que uno puede encontrar entre las especies en las islas oceánicas depende de la edad de la isla, de la distancia del continente, del tamaño y de la diversidad de hábitats que esta dispone. Una isla muy distante del continente y muy antigua recibe pocos inmigrantes, y los pocos que llegan tienen baja probabilidad de volver a juntarse con los individuos de la población original en el continente. Por lo tanto, con el paso del tiempo, pueden adaptarse de manera exitosa a las condiciones en la isla. Hay varios estudios que muestran cómo el aislamiento geográfico y las nuevas condiciones del hábitat permiten la diversificación de nuevas especies, proceso denominado “efecto fundador”, mediante el cual surgen poblaciones diferentes a las colonizadoras y a las del continente. En Isla de Pascua se reconoce por ejemplo, el pez Tipi tipi’uri (Chaetodon litus) que no ha sido reportado en ninguna otra parte del mundo. En Juan Fernández se puede observar el picaflor de JF que es diferente a las especies del mismo género en el continente.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué rol cumplen las aves marinas en las islas oceánicas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_04.jpg');
    	texto.innerHTML = "Las aves marinas siempre han tenido relevancia en la cosmovisión y cultura Rapanui; a través de la ceremonia del Tangata Manu las tribus competían por obtener el primer huevo que el Manutara (gaviotín pascuense) ponía en primavera. La presencia de aves marinas volando sobre el mar es una buena señal para los pescadores, pues indican abundancia de peces. Se estima que en los últimos años el número total de especies de aves marinas registradas en Isla de Pascua es cercano a 20. Por ejemplo, se pueden ver ejemplares de la fardela de pascua, del Tavake (ave del trópico de cola roja) y del piquero blanco.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cómo colonizó el hombre las islas oceánicas?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_islasoceanicas/esquemas/04_05.jpg');
    	texto.innerHTML = "Hasta ahora sólo existen teorías sobre cómo fueron colonizadas, que sostienen que la población de las islas polinésicas habría ocurrido hace 3.000 años atrás por navegantes provenientes de China; posteriormente, hace 1.500 años aproximadamente, navegantes polinesios, de las Islas Marquesas, habrían llegado a Rapa Nui, guiados por las estrellas y las corrientes marinas, luego de haber perfeccionado sus embarcaciones para realizar travesías de miles de kilómetros. Aún no existe consenso de si se trató de varias oleadas migratorias o bien de una migración con distintas etapas. Según la tradición oral, la destrucción y el hundimiento de Hiva, la mítica tierra ancestral de los Rapanui, llevó a una migración encabezada por el rey (Ariki henua o Ariki mau) Hotu Matu’a, quien habría desembarcado en Anakena.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Ecología y evolución en las islas oceánicas";