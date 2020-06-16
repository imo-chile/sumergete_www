// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");


// 4 niveles solamente.
document.getElementById("numero-1").style.left = "13%";
document.getElementById("numero-2").style.left = "26%";
document.getElementById("numero-3").style.left = "39%";
document.getElementById("numero-4").style.left = "52%";

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

/*
* Sección para interacción con diagrama de esquema.
*/

// Parámetros (posición, tamaño, titulo y texto) de cada div que contiene los iconos encima del diagrama del esquema.
var parametrosRecursos = [
  {top:"55%", left:"10%", width:"15%", height:"28%", titulo:"Roseta", texto:"Es uno de los principales instrumentos utilizados en investigación oceanográfica, con la cual se colectan muestras de agua de mar a distintas profundidades; Este equipo consiste en una estructura circular que contiene entre 10 a 20 botellas Niskin (botella cilíndrica especializada para almacenar agua de mar de manera hermética). La roseta, implementada con las botellas Niskin abiertas por ambos extremos, es bajada a la profundidad máxima deseada, para posteriormente en el ascenso, ir cerrando herméticamente estas botellas a distintas profundidades (previamente decididas). De esta forma, en un solo lance, podemos obtener muestras de agua de distintas profundidades y realizar distintos análisis para entender, por ejemplo, los componentes químicos de estas aguas."},
  {top:"26%", left:"27%", width:"60%", height:"14%", titulo:"Redes", texto:"También son de uso habitual. Existen distintos tipos de redes (modelos y tamaños) que permiten la colecta de peces y/o organismos planctónicos, estas pueden lanzarse desde un costado de la embarcación de manera vertical o desde popa y arrastrarse por un periodo de tiempo. Al igual que la roseta, algunas redes pueden programar su cierre, de este modo se sumergen y, en el ascenso, se cierran a una profundidad determinada anteriormente, para así colectar organismos, por ejemplo, solo de una profundidad. Existen también redes capaces de tomar muestras a cinco profundidades distintas y llegar muy profundo (5.000 metros)."},
  {top:"64%", left:"75%", width:"21%", height:"18%", titulo:"Gliders", texto:"También llamado planeador marino, que pueden navegar de manera autónoma subiendo y bajando por la columna de agua y recorriendo grandes distancias. El glider en su recorrido, va recolectando datos físicos y químicos del agua, como temperatura, oxígeno disuelto, clorofila, etc."},
  {top:"56%", left:"30%", width:"17%", height:"34%", titulo:"Lander", texto:"Muy útiles para el estudio del océano profundo. Es un equipo autónomo y de caída libre, que se posa en el fondo marino para obtener muestras, datos físico-químicos  y videos de estos hábitats. El Lander baja gracias a un lastre (peso), que luego debe liberar a través de una señal acústica o por programación previa, para volver a subir, esto gracias a que estos equipos tienen flotabilidad positiva (flotan sin el peso)."},
  {top:"76%", left:"48%", width:"25%", height:"23%", titulo:"ROV", texto:"También es un equipo muy utilizado para la exploración del océano profundo, pero a diferencia del Lander, un ROV (Remote Remote Operated Vehicle: Vehículo operado remotamente) va conectado a través de un cable con la embarcación, es motorizado y controlado por un operador que va a bordo (es decir, el ROV no es tripulado). Un ROV puede desplazarse tanto horizontal como verticalmente. También posee distintos sensores, cámaras, trampas, brazos mecánicos u otros, según la información que se quiera obtener."},
  {top:"5%", left:"78%", width:"22%", height:"30%", titulo:"Boya", texto:"Corresponde a una estructura flotante, generalmente anclada al fondo marino, que contiene una serie de instrumentos para medir y registrar de forma continua una serie de parámetros oceanográficos, oxígeno disuelto, temperatura del agua, etc, como también parámetros meteorológicos como temperatura del aire, presión atmosférica, datos de viento, etc."}
];
// Funciones para mostrar la imagen con el efecto glow y cambiar el texto de descripción.
function hoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_oceanoabierto/esquemas/recursos/glow_" + (i+1) + ".png";
}
function unhoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_oceanoabierto/esquemas/recursos/out_" + (i+1) + ".png";
}
function clickRecursos() {
  var i = this.parentElement.id.split("-").pop();
  texto.innerHTML = "<div style='font-weight:bold;text-align:center;font-family:Pacifico;'>" + parametrosRecursos[i]["titulo"] + "</div><br>" + parametrosRecursos[i]["texto"];
}

// Creación de divs que contienen img, esto dentro del div "imagen".
for(i = 0; i < parametrosRecursos.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.id = "fig-" + i;
  newDiv.className = "fig-" + i;
  newDiv.style.position = "absolute";
  newDiv.style.top = parametrosRecursos[i]["top"];
  newDiv.style.left = parametrosRecursos[i]["left"];
  newDiv.style.width = parametrosRecursos[i]["width"];
  imagen.appendChild(newDiv);
  var newDivImg = document.createElement("img");
  newDiv.appendChild(newDivImg);
  newDivImg.style.cursor = "pointer";
  newDivImg.src = "/../imagenes/sala_oceanoabierto/esquemas/recursos/out_" + (i+1) + ".png";
  newDivImg.onmouseover = hoverRecursos;
  newDivImg.onmouseout = unhoverRecursos;
  newDivImg.onclick = clickRecursos;

}

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Cómo nos conecta el Océano?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/03_01.jpg');
  texto.innerHTML = "Existe evidencia que ya hace 50.000 años, humanos colonizaron Australia cruzando el océano abierto. Y hace 42.000 años se registraron las primeras pesquerías para especies del océano abierto. Recientes teorías sugieren que los primeros humanos en llegar a América de Asia hicieron por una ruta costera, siguiendo recursos marinos hasta Chile.  A su vez, los Polinésicos fueron una de las culturas navegantes más importantes de la historia, extendiéndose desde Nueva Zelandia en el oeste hasta Isla de Pascua en el este, manteniendo rutas de navegación entre Tahiti (Pacífico Sur) y Hawaii (Pacífico Norte). En términos de las culturas occidentales, los Vikingos fueron grandes navegantes, cruzando el mar abierto desde el año 800 DC, llegando a recorrer el Atlántico y contactar a América del Norte cerca del año 1000 DC. Actualmente seguimos dependiendo de la navegación, pues sigue siendo uno de los medios de transportes más importantes para el desarrollo de la sociedad y la globalización, ya que permite movilizar objetos de gran tamaño por grandes distancias.";
      barra.style.width = barometroVars[0]["barra"];
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  // hideRecursos
  for(i = 0; i < parametrosRecursos.length; i++) {
    var newDiv = document.getElementById("fig-" + i);
    newDiv.style.display = "none";
  }

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo nos conecta el Océano?";
		  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/03_01.jpg');
		  texto.innerHTML = "Existe evidencia que ya hace 50.000 años, humanos colonizaron Australia cruzando el océano abierto. Y hace 42.000 años se registraron las primeras pesquerías para especies del océano abierto. Recientes teorías sugieren que los primeros humanos en llegar a América de Asia hicieron por una ruta costera, siguiendo recursos marinos hasta Chile.  A su vez, los Polinésicos fueron una de las culturas navegantes más importantes de la historia, extendiéndose desde Nueva Zelandia en el oeste hasta Isla de Pascua en el este, manteniendo rutas de navegación entre Tahiti (Pacífico Sur) y Hawaii (Pacífico Norte). En términos de las culturas occidentales, los Vikingos fueron grandes navegantes, cruzando el mar abierto desde el año 800 DC, llegando a recorrer el Atlántico y contactar a América del Norte cerca del año 1000 DC. Actualmente seguimos dependiendo de la navegación, pues sigue siendo uno de los medios de transportes más importantes para el desarrollo de la sociedad y la globalización, ya que permite movilizar objetos de gran tamaño por grandes distancias.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    // hideRecursos
		  for(i = 0; i < parametrosRecursos.length; i++) {
		    var newDiv = document.getElementById("fig-" + i);
		    newDiv.style.display = "none";
		  }
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué especies se pescan en el océano abierto?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/03_02.jpg');
  		texto.innerHTML = "En el océano abierto habitan diversas especies de gran importancia comercial que han sido explotadas por el hombre por décadas. Esto ha llevado a que la existencia de varias de estas especies esté amenazada. Entre las especies están las que se agrupan bajo el nombre de “atún”, atún aleta azul (<i>Thunnus thynnus</i>), atún aleta amarilla (<i>Thunnus albacares</i>) y albácora (<i>Thunnus alalunga</i>). También encontramos el jurel (<i>Trachurus sp.</i>), un pez más pequeño que los atunes (15 cm de tamaño), que vive entre los 200 a 300 metros. El pez espada (<i>Xiphias gladius</i>), de casi 2 metros de largo promedio, reconocido por ser agresivo y voraz, es también una especie altamente sobreexplotada. El calamar de Humboldt o jibia (<i>Dosidicus gigas</i>) se ha convertido en un importante recurso pesquero en la última década en Chile. Se pesca y procesa, básicamente, para ser utilizado para producir harina para alimentación suplementaria en producción animal y para consumo humano.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
		  for(i = 0; i < parametrosRecursos.length; i++) {
		    var newDiv = document.getElementById("fig-" + i);
		    newDiv.style.display = "none";
		  }
  	break;
/*
  	case 'numero-3':
    	titulo.innerHTML = "";
    	imagen.children[0].setAttribute('src', '');
    	texto.innerHTML = "";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
*/
  	case 'numero-3':
      titulo.innerHTML = "¿Cómo se realizan los estudios oceanográficos en el océano abierto?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/03_04.jpg');
    	texto.innerHTML = "Los estudios se realizan con distintos instrumentos y equipos para la obtención de información y muestras. Estos instrumentos pueden desplegarse desde la embarcación o bien instalarse boyas fijas en un punto del océano, cuando se requiere información in situ por un periodo de tiempo mayor (meses, años). Existen equipos que permiten medir velocidad y dirección de las corrientes oceánicas (ej: Correntómetro), evaluar abundancia de peces mediante ondas de sonido (Ecosondas), obtener muestras del fondo marino (ej: Dragas), equipos que entregan datos químicos de la columna de agua (ej: CTD). Otro instrumento que permite obtener datos son los satélites (ej: Datos de clorofila, para estimar abundancia de fitoplancton). Todas estas muestras e información colectada es convertida en datos, los cuales son analizados para dar potenciales respuestas a interrogantes planteadas en cada investigación. Para conocer más de otros equipos oceanográficos, haz click en ellos.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // showRecusos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "block";
      }
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cuáles son los desafíos de la exploración del océano profundo?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/03_05.jpg');
    	texto.innerHTML = "Conocemos menos del 5% de nuestros océanos y gran parte de nuestro conocimiento se limita a la zona costera y profundidades más bien someras (~200 m). La máxima profundidad del océano registrada hasta hoy se encuentra en el abismo Challenger (Pacífico Norte), en la Fosa de Las Marianas (~ 11.000 m). Existen decenas de fosas, principalmente asociadas al cinturón de fuego del Pacífico. Frente a Chile, se extiende parte de la Fosa de Atacama, la décima más profunda y la más extensa del planeta (más de 5.000 km de largo) a la cual recientemente, científicos chilenos exploraron mediante un equipo Lander, frente al norte de Chile, alcanzando los 8.081 metros de profundidad. La principal limitación para estudiar estas profundidades es la presión (la presión a nivel del mar es de 1 atmósfera; a medida que descendemos, la presión aumenta en 1 atm cada 10 metros. Por lo tanto, a 10.000 m hay 1.000 atm). Es tan alta que se requiere de tecnología avanzada para poder alcanzar esas profundidades.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
		  for(i = 0; i < parametrosRecursos.length; i++) {
		    var newDiv = document.getElementById("fig-" + i);
		    newDiv.style.display = "none";
		  }
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Nosotros";