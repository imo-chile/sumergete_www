// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

/*
// 4 niveles solamente.
document.getElementById("numero-1").style.left = "13%";
document.getElementById("numero-2").style.left = "26%";
document.getElementById("numero-3").style.left = "39%";
document.getElementById("numero-4").style.left = "52%";
*/
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
  titulo.innerHTML = "¿Quiénes fueron los primeros habitantes de los canales y fiordos del sur de Chile?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_01.jpg');
  texto.innerHTML = "Los primeros habitantes conocidos de la región de los fiordos patagónicos fueron los pueblos originarios caoneros: Chonos, Kawesqar y yaganes. Se les dice caoneros por su habilidad y uso de las canoas. Los Chonos se movían entre Chiloé y la Península Taitao (Fiordo Elefantes), también eran cazadores-recolectores de mariscos y animales. Desde finales del siglo XVIII la población de Chonos se da por desaparecida, producto de la mezcla con otras etnias y la llegada de enfermedades europeas. Sin embargo, junto con los Huilliches, se consideran los ancestros de los pobladores originales de Chiloé.<br> Los Kawesqar navegaban entre la zona centro del sistema de fiordos (Golfo de Penas - Fiordo Elefantes) y el Estrecho de Magallanes. Eran recolectores de mariscos y cazadores de mamíferos marinos, peces y aves. Vivían semi-desnudos, tolerando el frío extremo, la nieve y la lluvia. Hoy todavía viven algunos Kawesqar en la zona. Los Yaganes habitaban originalmente en el sector de los canales y costas sudoccidentales de Tierra del Fuego, entre el canal Beagle y el Cabo de Hornos.  Antes de la llegada de los europeos se calculaba en unos 3.000 indígenas.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Quiénes fueron los primeros habitantes de los canales y fiordos del sur de Chile?";
			imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_01.jpg');
  		texto.innerHTML = "Los pueblos originarios de los fiordos patagónicos fueron los: Chonos, Kawesqar y yaganes. Se les dice caoneros por su habilidad y uso de las canoas. Los Chonos se movían entre Chiloé y la Península Taitao (Fiordo Elefantes), también eran cazadores-recolectores de mariscos y animales. Desde finales del siglo XVIII la población de Chonos se da por desaparecida, producto de la mezcla con otras etnias y la llegada de enfermedades europeas. Sin embargo, junto con los Huilliches, se consideran los ancestros de los pobladores originales de Chiloé. Los Kawesqar navegaban entre la zona centro del sistema de fiordos (Golfo de Penas - Fiordo Elefantes) y el Estrecho de Magallanes. Eran recolectores de mariscos y cazadores de mamíferos marinos, peces y aves. Vivían semi-desnudos, tolerando el frío extremo, la nieve y la lluvia. Hoy todavía viven algunos Kawesqar en la zona. Los Yaganes habitaban originalmente en el sector de los canales y costas sudoccidentales de Tierra del Fuego, entre el canal Beagle y el Cabo de Hornos. Antes de la llegada de los europeos se calculaba en unos 3.000 indígenas";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Quiénes fueron los primeros científicos en estudiar los fiordos?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_02.jpg');
  		texto.innerHTML = "A partir del siglo XVI, los fiordos y canales del sur de Chile, fueron explorados por numerosas expediciones a pesar de su alta complejidad geográfica y ubicación de difícil acceso. Sin embargo, la más importante y que logró un levantamiento de información más completo y detallado de las costas de la zona, fue la llevada a cabo a bordo del buque HMS Beagle. Esta embarcación realizó dos viajes a nuestras costas. En la segunda, bajo el mando de Robert Fitz-Roy, llevaba a bordo a Charles Darwin, naturalista inglés autor de la teoría de la evolución por medio de la selección natural. Durante el viaje llegó a muchas de las conclusiones que lo llevaron a plantear su teoría.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué estudios se realizan actualmente en los fiordos del sur de nuestro país?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_03.jpg');
    	texto.innerHTML = "El Comité Oceanográfico Nacional (CONA) creó el año 1995 un programa de investigación llamado CIMAR (Cruceros de Investigación en Áreas Remotas), el cual corresponde a una serie de investigaciones oceanográficas en zonas remotas, como Isla de Pascua, Salas y Gómez, el archipiélago de Juan Fernández, incluyendo el Sistema de canales y fiordos patagónicos -desde el Seno de Reloncaví hasta el Cabo de Hornos-Once de los trece cruceros CIMAR, han tenido como objetivo estudiar (entre 1995 y 2003) las aguas interiores entre Puerto Montt y el Cabo de Hornos y, gracias a ellos, se ha obtenido importante información sobre las condiciones del agua, del fondo marino y de la, anteriormente desconocida y subestimada, biodiversidad de la zona. A estos cruceros se les denominó CIMAR-FIORDO. Este programa busca que la investigación científica se traduzca en beneficios para Chile mediante la cooperación entre las instituciones de investigación marina del país.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Quiénes se dedican a estudiar los fiordos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_04.jpg');
    	texto.innerHTML = "El ambiente marino patagónico permanece muy inexplorado debido a lo difícil que es acceder a él. En los últimos años se han descubierto muchas nuevas especies y aún quedan otras por descubrir. Esto sumado al aumento del impacto generado por el ser humano en la zona (como por ejemplo la creciente industria salmonera) genera la necesidad urgente de comprender el funcionamiento del ecosistema y a los organismos que ahí habitan. Hoy existen instituciones dedicadas a la investigación de los canales y fiordos patagónicos. Uno de ellos es el Centro de Investigación en Ecosistemas de la Patagonia (CIEP), dedicado al desarrollo sustentable de la Región de Aysén a través de investigación científica de excelencia y pertinente a los intereses de la comunidad y sectores productivos. Instalada en el Fiordo Comau encontramos también a la Fundación San Ignacio del Huinay, institución privada, sin fines de lucro creada con el objeto de defender y promover el valor del patrimonio biológico de la localidad de Huinay, en la Región de Los Lagos .";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Qué información importante podemos obtener al estudiar la fauna de fiordos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/05_05.jpg');
    	texto.innerHTML = "En los canales y fiordos de la Patagonia ocurre un curioso fenómeno llamado “emergencia de aguas profundas”, que se refiere a la presencia en aguas superficiales, de organismos que generalmente habitan en aguas muy profundas. Por lo tanto, investigar en esta zona permite estudiar organismos profundos, pero sin las complicaciones que conlleva efectivamente descender a grandes profundidades (como los efectos de la presión).";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Nosotros";