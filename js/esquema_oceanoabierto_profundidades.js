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

/*
* Sección para interacción con diagrama de esquema.
*/

// Parámetros (posición, tamaño, titulo y texto) de cada div que contiene los iconos encima del diagrama del esquema.
var parametrosRecursos = [
  {top:"5%", left:"0%", width:"88%", height:"6%", titulo:"Zona Epipelágica", texto:"La zona epipelágica, también conocida como zona fótica, es la capa superior del océano hasta donde penetra la luz del Sol. Se extiende desde la superficie hasta alrededor de los 200 metros, en aguas tropicales, muy claras y con bajo contenido de materia orgánica (por ejemplo, cerca de Isla de Pascua). En otras zonas del océano, dependiendo de factores como productividad, estación del año, latitud, se extiende hasta aproximadamente los 100 m. Es en esta delgada capa de agua donde se lleva a cabo la fotosíntesis. La zona epipelágica sólo representa el 2-3% de todo el océano, más allá de esto, la luz es demasiado tenue para la fotosíntesis; dependiendo de la zona, entre los 100 y los 200 metros de profundidad la intensidad de la luz solar es sólo del 1% de la que se encuentra en superficie, siendo estas condiciones insuficientes para la fotosíntesis."},
  {top:"12%", left:"0%", width:"88%", height:"7%", titulo:"Zona Mesopelágica", texto:"La zona mesopelágica corresponde a las profundidades entre los 200 y 1000 metros de profundidad. Esta zona presenta características particulares que establecen un ambiente inhóspito para las especies fotosintéticas debido a su baja, casi nula, iluminación. Además, la temperatura se vuelve más fría; a 200 m es menor a 12°C, pero en el límite inferior la zona mesopelágica es cercana a los 4°C. Sin embargo, en esta zona se encuentra una gran abundancia y diversidad de especies. Muchas de las cuales, además, se esconden en esta zona durante el día y migran verticalmente hacia la zona fótica durante la noche para alimentarse. Recorriendo así entre 400 y 800 m en un día, lo que equivale a soportar cambios de presión de hasta 40 u 80 atmósferas. Otras especies se alimentan de la materia orgánica que cae de superficie, por lo que es aquí donde se consume la mayoría de la materia orgánica que se hunde. Es característico en esta zona que el 90% de los organismos presenten bioluminiscencia."},
  {top:"20%", left:"0%", width:"88%", height:"24%", titulo:"Zona Batipelágica", texto:"Comprende a las aguas y fondos marinos situados entre 1000 y 4000 m de profundidad, por debajo de la zona mesopelágica. Aquí, la única luz que podría existir proviene de los organismos bioluminiscentes y gran parte del alimento disponible es lo que se escurre hacia abajo desde las capas superiores, u otros animales que allí habiten. A pesar de la alta presión del agua a esa profundidad, hay importantes representantes de peces, moluscos y crustáceos. Incluso los cachalotes pueden bucear hasta esta zona en la caza del llamado calamar gigante."},
  {top:"46%", left:"0%", width:"88%", height:"15%", titulo:"Zona Abisopelágica", texto:"La zona abisal o abisopelágica se extiende desde los 4000 a 6000 m de profundidad. La palabra abisal procede de abismo, lugar profundo y oscuro. Esta zona se caracteriza por una presión extremadamente elevada, escasez de nutrientes y por supuesto, ausencia total de luz solar. La temperatura del agua fluctúa entre 2 a 3°C. Sin embargo, la temperatura del agua puede alcanzar hasta 464 °C dentro de las chimeneas hidrotermales. Es común aquí el fenómeno de gigantismo abisal, organismos que alcanzan tamaños considerables, como los picnogónidos (arañas de mar) de más de 1,50 m, hidrozoarios de más de 50 cm de altura, y también isópodos de más de 10 cm de largo, así como especies muy diferentes a las presentes en la superficie. Hay varias explicaciones al respecto para esto, como los metabolismos lentos y ciclos de vida muy largos, en estas condiciones que son bastante estables."},
  {top:"63%", left:"0%", width:"88%", height:"36%", titulo:"Zona Hadopelágica", texto:"La zona hadal identifica a las aguas y fondos marinos por debajo de la zona abisal, que comprende las fosas oceánicas y representa el hábitat marino más profundo (6000 a 11000 m). Hadal es una palabra francesa que significa “lugar de la muerte”, referido a su vez al dios griego de la muerte, Hades, y sus dominios. La temperatura es constante, por encima del punto de congelación. La zona hadal de los océanos sólo representa el 1.9% de la superficie de los mares, pero es muy interesante de conocer, ya que es uno de los ambientes más extremos; donde la presión es hasta 1.000 veces mayor que en superficie y el único alimento que sustenta la vida es el que cae desde las capas superficiales. A pesar de los inhóspito que es este ambiente, lo habita una gran diversidad de organismos, principalmente crustáceos, esponjas, moluscos. Peces existen sólo hasta alrededor de los 8.000 metros (pez babosa), bajo esta profundidad no pueden sobrevivir. "}
];
// Funciones para mostrar la imagen con el efecto glow y cambiar el texto de descripción.
function hoverRecursos() {
  this.style.opacity = "0.2";
}
function unhoverRecursos() {
  this.style.opacity = "0";

}
function clickRecursos() {
  var i = this.id.split("-").pop();
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
  newDiv.style.height = parametrosRecursos[i]["height"];

  newDiv.style.cursor = "pointer";
  newDiv.onclick = clickRecursos;

  newDiv.style.backgroundColor = 'yellow';
  newDiv.style.opacity = "0";
  newDiv.onmouseover = hoverRecursos;
  newDiv.onmouseout = unhoverRecursos;
  
  imagen.appendChild(newDiv);

}

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Cómo se dividen las zonas del océano según su profundidad?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_01.jpg');
  texto.innerHTML = "El océano está dividido, desde la superficie al fondo, en zonas en función de la luz solar que entra al agua e ilumina bajo de la superficie.<br><br><i>Haz click en cada zona para conocer un poco más de ellas.</i>";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

  // showRecusos
  for(i = 0; i < parametrosRecursos.length; i++) {
    var newDiv = document.getElementById("fig-" + i);
    newDiv.style.display = "block";
  }

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Cómo se dividen las zonas del océano según su profundidad?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_01.jpg');
  		texto.innerHTML = "El océano está dividido, desde la superficie al fondo, en zonas en función de la luz solar que entra al agua e ilumina bajo de la superficie.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";

	    // showRecusos
      for(i = 0; i < parametrosRecursos.length; i++) {
        var newDiv = document.getElementById("fig-" + i);
        newDiv.style.display = "block";
      }
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Qué son y cómo se forman las cordilleras meso-oceánicas?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_02.gif');
  		texto.innerHTML = "Las cordilleras o dorsales oceánicas corresponden a amplias cordilleras sumergidas constituidas por apilamiento de rocas volcánicas basálticas. A partir de las dorsales o cordilleras oceánicas se forma nueva corteza oceánica (o suelo marino) a ambos lados del eje principal de la dorsal, lo que da lugar a la expansión del fondo marino. Esto ocurre ya que estos son bordes constructivos o divergentes, donde dos placas tectónicas divergen, desplazándose en sentidos contrarios. Las dorsales se extienden a través de todos los océanos con un largo total de 80.000 km y a una profundidad promedio de 2.500 m.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      imagen.children[0].style.width = "59.5vw";  // por gif de menor tamaño.

      // hideRecursos
		  for(i = 0; i < parametrosRecursos.length; i++) {
		    var newDiv = document.getElementById("fig-" + i);
		    newDiv.style.display = "none";
		  }
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué son y quiénes habitan las chimeneas hidrotermales?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_03.jpg');
    	texto.innerHTML = "A más de 2.000 metros de profundidad,asociadas a las dorsales oceánicas existen grietas en la superficie del suelo oceánico por donde emana agua muy caliente y rica en minerales: fuentes hidrotermales. Debido a la alta presión a esa profundidad, el agua no hierve, pero el calor que genera disuelve los minerales de las rocas. El agua caliente, emergente desde las chimeneas, se enfría rápidamente al entrar en contacto con el agua circundante fría y los metales disueltos contenidos se precipitan, formando nubes de humo. Por ello, comúnmente se denominan chimeneas. En este ambiente tan extremo los son microrganismos son la base de la trama trofica,utilizan las sustancias inorgánicas del agua, altamente tóxicas para otros organismos, para producir su propia materia orgánica a través de quimiosíntesis. Son organismos extremófilos, pueden vivir a temperaturas superiores a los 110 °C, la temperatura más alta conocida en donde se puede desarrollar la vida. Existen aquí organismos como los gusanos tubícolas gigantes (<i>Riftia pachyptila</i>), que viven simbiosis con estas bacterias quimiosintéticas.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";

      // hideRecursos
		  for(i = 0; i < parametrosRecursos.length; i++) {
		    var newDiv = document.getElementById("fig-" + i);
		    newDiv.style.display = "none";
		  }
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué son y cómo se forman las fosas marinas? ";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_04.jpg');
    	texto.innerHTML = "Las fosas oceánicas o trincheras corresponden a largas y estrechas depresiones del fondo oceánico que constituyen las zonas más profundas del océano. Estas se forman en las zonas de subducción, lugares de la corteza terrestre donde dos placas tectónicas convergen, colisionan, y una de ellas se introduce bajo la otra. Como resultado produce una gran depresión en el suelo submarino; un buen ejemplo de ello es el de la fosa de Atacama que es el resultado del choque entre la placa Sudamericana y la placa oceánica de Nazca.";
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

  	case 'numero-5':
      titulo.innerHTML = "¿Qué son y cómo se forman los cañones submarinos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/04_05.jpg');
    	texto.innerHTML = "Los cañones submarinos son grietas profundas de la plataforma continental, ubicadas generalmente bajo las desembocaduras de ríos, que se han formado por la erosión producto de la descarga de grandes ríos. Se abren paso desde la plataforma, continuando por el talud, hasta llegar a los fondos abisales. Los cañones parecieran ser prolongaciones de los ríos, a través de los cuales pasa gran cantidad de material particulado y materia orgánica que se irá depositando la final del cañón, en el fondo abisal.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

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

document.getElementById("etiqueta-texto").innerHTML = "Profundidades";