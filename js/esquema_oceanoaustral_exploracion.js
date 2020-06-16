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
  titulo.innerHTML = "¿Cuándo comenzó la exploración antártica?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_01.jpg');
  texto.innerHTML = "Los primeros navegantes en cruzar el círculo polar antártico fueron liderados por el británico James Cook entre los años 1772 a 1775; sin embargo, no divisaron el continente. Fue en el siglo XIX en que se descubrió el continente antártico debido en parte a la presencia de navegantes cazadores de focas y ballenas, que fueron descubriendo el continente en el transcurso de los años. A mediados de ese siglo se reconoció a la Antártica como el continente más austral y desde ese momento fue el centro de una serie de esfuerzos internacionales para su exploración. Por ello, entre finales del siglo XIX y 1920 hubo una gran cantidad de expediciones de distinto tipo organizadas por países como Inglaterra, Noruega, Alemania, Chile, entre otros. Sus objetivos fueron principalmente generar conocimiento geográfico mediante la exploración tanto marítima como terrestre, junto al afán del reconocimiento internacional. Sin embargo, en diferentes ocasiones las expediciones se vieron afectadas por las extremas condiciones polares culminando incluso con la muerte.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cuándo comenzó la exploración antártica?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_01.jpg');
      texto.innerHTML = "Los primeros navegantes en cruzar el círculo polar antártico fueron liderados por el británico James Cook entre los años 1772 a 1775; sin embargo, no divisaron el continente. Fue en el siglo XIX en que se descubrió el continente antártico debido en parte a la presencia de navegantes cazadores de focas y ballenas, que fueron descubriendo el continente en el transcurso de los años. A mediados de ese siglo se reconoció a la Antártica como el continente más austral y desde ese momento fue el centro de una serie de esfuerzos internacionales para su exploración. Por ello, entre finales del siglo XIX y 1920 hubo una gran cantidad de expediciones de distinto tipo organizadas por países como Inglaterra, Noruega, Alemania, Chile, entre otros. Sus objetivos fueron principalmente generar conocimiento geográfico mediante la exploración tanto marítima como terrestre, junto al afán del reconocimiento internacional. Sin embargo, en diferentes ocasiones las expediciones se vieron afectadas por las extremas condiciones polares culminando incluso con la muerte.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Quiénes fueron los primeros exploradores?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_02.jpg');
  		texto.innerHTML = "Durante la época de la exploración antártica, se llevó a cabo una gran cantidad de expediciones por países principalmente europeos. Uno de los grandes objetivos de algunas de estas fue la búsqueda del polo sur. En dicha búsqueda, existen dos expediciones reconocidas en la historia mundial: la expedición del capitán noruego Roald Amundsen (1910-12) fue la primera en alcanzar el polo sur, descubriendo nuevos lugares y generando nuevas rutas. Así mismo, Inglaterra también pretendía llegar al polo sur y colectar variada información científica; por ello llevó a cabo la expedición Terra Nova (1910-13), liderada por el capitán Robert Scott. Si bien los exploradores llegaron al polo sur, todos murieron en el camino de regreso.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo y quiénes estudian la Antártica? ";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_03.jpg');
    	texto.innerHTML = "Actualmente y debido al Tratado Antártico de 1959, los países que forman parte de este sistema han instalado bases con fines científicos en puntos estratégicos del Continente Blanco. Estas funcionan de manera permanente o temporal y son utilizadas como laboratorios y refugios. Debido al gran interés de la comunidad científica, anualmente se invierten grandes sumas de dinero en la investigación polar. El trabajo es complejo, debe ajustarse a tiempos limitados y condiciones climáticas altamente variables y extremas que, junto al aislamiento, pueden dificultarlo. Los científicos deben cumplir ciertas reglas considerando lo anterior; conceptos claves son el respeto y trabajo en equipo. Lo que concierne al trabajo en terreno, el ambiente objetivo puede ser tanto terrestre como marino; en ambos casos la intervención al medioambiente debe ser mínima y las medidas de seguridad son las propias de un clima extremo.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué es el Sistema del Tratado Antártico?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_04.jpg');
    	texto.innerHTML = "Es un acuerdo internacional que tiene por objetivo regular todas las relaciones internacionales sobre la Antártica. El Tratado fue firmado el 1 de diciembre de 1959 en Washington, por los 12 países que participaron activamente del Año Geofísico Internacional de 1957-1958. El Tratado entró en vigor en 1961, posee vigencia indefinida y actualmente cuenta con 53 países miembros, entre consultivos y adherentes, siendo los consultivos quienes participan de la toma de decisiones respecto al continente. Chile es miembro signatario original y consultivo desde la creación del Tratado. Entre sus disposiciones, establece que en bien de la humanidad, la Antártica se utilizará exclusivamente para fines pacíficos; que habrá libertad de investigación científica y cooperación para dicho fin, disposición libre de resultados de investigación, además de la protección del medioambiente.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿Cuáles son las líneas de investigación en la Antártica?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/05_05.jpg');
    	texto.innerHTML = "El Scientific Committee on Antarctic Research (SCAR; www.scar.org) centra sus esfuerzos científicos en áreas temáticas de alta prioridad a través de sus Programas de Investigación Científica, los que son seis:<br><ul><li>Astronomía y Astrofísica de la Antártica (AAA)</li><li>Estado del Ecosistema Antártico (AntEco)</li><li>Umbrales Antárticos - Resiliencia y Adaptación de los Ecosistemas (AnT-ERA)</li><li>Cambio Climático en la Antártica en el siglo XXI (AntClim21)</li><li>La dinámica pasada de la capa de hielo antártico (PAIS)</li><li>Respuestas de la Tierra Sólida e influencias sobre la Evolución Crosférica (SERCE)</li></ul>";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Exploracion Antártica";