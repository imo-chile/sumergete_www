// Vemos los elementos a modificar, dependiendo del nivel del barómetro.

var titulo = document.getElementById("titulo");
var imagen = document.getElementById("imagen");
var texto = document.getElementById("texto");
var barra = document.getElementById("barra");
var ola = document.getElementById("ola");
var elementAnterior = document.getElementById("numero-1");

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
  {top:"46%", left:"56%", width:"8%", titulo:"Estrella de mar", texto:"La estrella es un depredador carnívoro que se alimenta de erizos, piures, choritos y picorocos. Los humanos no la comemos, si no que la extraemos para decoración. Este organismo es capaz de regenerar sus extremidades en caso de perderlos, y en algunos casos pueden generarse estrellas nuevas de brazos perdidos."},
  {top:"52%", left:"42%", width:"8%", titulo:"Erizo", texto:"Comestible. Lo que se come del erizo en realidad son las gónadas. Posee varias tonalidades de color siendo los más comunes verde y rojo. Dentro de su aparato digestivo vive un cangrejo de unos 3 cm., que llega ahí cuando el erizo se encuentra en crecimiento y pasa toda su vida en su interior."},
  {top:"61%", left:"43%", width:"8%", titulo:"Loco", texto:"Es un gran depredador y se alimenta de picorocos, piures y choritos maicos. Actualmente su captura sólo está permitida en áreas de manejo y sólo ejemplares mayores de 10 cm de longitud, los cuales son muy costosos. En general, se pueden demorar entre 5 a 7 años en alcanzar ese tamaño."},
  {top:"55%", left:"72%", width:"8%", titulo:"Lapa", texto:"Posee una concha muy gruesa con un orificio apical ovalado, el cual permite la salida directa de sus desechos y de las corrientes de agua que inhala. Se conoce como lapa huiro ya que se ubica en cercanía a esta alga. Es ampliamente consumida en mariscales y empanadas de marisco."},
  {top:"79%", left:"89%", width:"8%", titulo:"Macha", texto:"Los adultos se encuentran bajo las arenas pedregosas en la zona intermareal y hasta aproximadamente los 5 m de profundidad, mientras que las más jóvenes habitan arenas fangosas, hasta los 6 m. Su consumo es muy alto en Chile."},
  {top:"85%", left:"87%", width:"8%", titulo:"Almeja o taca", texto:"Poseen una concha gruesa, con una coloración gris ceniza/rojiza en los adultos. Esta especie vive semienterrada en fondos areno-fangosos, normalmente entre el intermareal arenoso bajo y los 5 m de profundidad. Se consume ampliamente en mariscales."},
  {top:"47%", left:"70%", width:"8%", titulo:"Choro maico", texto:"De tamaño pequeño, la talla máxima controlada es de 31 mm. Se utiliza para conservas y viven adheridos a rocas por medio de filamentos (con aspecto de hilos) que salen de la base de sus valvas."},
  {top:"44%", left:"63%", width:"8%", titulo:"Luche", texto:"Alga roja conocida vulgarmente como “luche”. Se utiliza como alimento, como panes de alga deshidratada, guisos, sopas o acompañamiento de otras preparaciones. Pueden soportar más de seis horas fuera del agua. Es bastante similar al “nori”, el alga que se utiliza en la preparación del sushi."},
  {top:"37%", left:"60%", width:"8%", titulo:"Lechuga de mar", texto:"Crece en la zona intermareal de la mayoría de los océanos del mundo. Sus largas hojas le dan un aspecto similar al de la lechuga. Se utiliza tanto como alimento como en la elaboración de productos cosméticos y hasta de fertilizante."},
  {top:"64%", left:"68%", width:"8%", titulo:"Gelidium sp.", texto:"Alga de color rojo, que puede llegar a medir entre 2 a 40 cm. Muchas de las algas de este género se utilizan para obtener agar, el cual es una materia prima usada como espesante en muchos alimentos, como la leche, helado, yogures, dulces de goma, jaleas, bebidas y masas."},
  {top:"79%", left:"77%", width:"8%", titulo:"Huiro", texto:"Es un alga parda gigante (Huiro-Macrocystis pyrifera) que es usada como fuente de alginatos para preparados farmacológicos y para recetas de obesidad. Posee unas estructuras llamadas aerocistos, que están llenos de aire y le permite flotar a sus láminas. Así puede captar mejor la luz solar para realizar fotosíntesis."},
  {top:"75%", left:"73%", width:"8%", titulo:"Cochayuyo", texto:"Es un alga comestible de gran tamaño, y ha sido usado durante siglos como sustento alimenticio de muchas comunidades costeras indígenas, como los mapuches, que hoy en día la han hecho llegar a la cocina tradicional de la población chilena. De la base se obtiene el ulte, y es un alimento rico en yodo y fibra, y pobre en grasas. Por estas razones es recomendado en dietas para el control del peso."},
  {top:"68%", left:"44%", width:"8%", titulo:"Picoroco", texto:"Vive adherido a las rocas y no puede desplazarse. Científicamente se denominan Cirripedios, pero se conocen como picorocos. Son muy consumidos por los humanos, y es muy valorizado. En la antigüedad se le confundía con aves marinas por su forma similar al pico del ave. Debido a esto, no se solían consumir en semana santa, al confundirlos con aves muertas en el mar."},
  {top:"62%", left:"77%", width:"8%", titulo:"Piure", texto:"Se trata de un organismo de color rojo, el cual es ampliamente explotado como recurso comestible en cocinerías de todo Chile. Su aspecto externo es similar a una roca marina, de la que sólo sobresalen un par de sifones (“boca”). Si aprietas una roca y de esta salta agua, se trata de un piure camuflado."}
];

// Funciones para mostrar la imagen con el efecto glow y cambiar el texto de descripción.
function hoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_intermareal/esquemas/recursos/glow_recursos" + (i+1) + ".png";
}
function unhoverRecursos() {
  var i = parseInt(this.parentElement.id.split("-").pop());
  this.src = "/../imagenes/sala_intermareal/esquemas/recursos/out_recursos" + (i+1) + ".png";
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
  newDivImg.src = "/../imagenes/sala_intermareal/esquemas/recursos/out_recursos" + (i+1) + ".png";
  newDivImg.onmouseover = hoverRecursos;
  newDivImg.onmouseout = unhoverRecursos;
  newDivImg.onclick = clickRecursos;
}

// Elementos iniciales, es decir de barómetro nivel 1.
titulo.innerHTML = "¿Qué tipos de recursos relevantes existe en el intermareal de Chile?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/recursos1.jpg');
texto.innerHTML = "La estrella es un depredador carnívoro que se alimenta de erizos, piures, choritos y picorocos. Los humanos no la comemos, si no que la extraemos para decoración. Este organismo es capaz de regenerar sus extremidades en caso de perderlos, y en algunos casos pueden generarse estrellas nuevas de brazos perdidos.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

// showRecusos
for(i = 0; i < parametrosRecursos.length; i++) {
  var newDiv = document.getElementById("fig-" + i);
  newDiv.style.display = "block";
}


function nivelBarometro(element) {

	switch(element.getAttribute('id')) {

    	case 'numero-1':
        titulo.innerHTML = "¿Qué tipos de recursos relevantes existe en el intermareal de Chile?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/recursos1.jpg');
        texto.innerHTML = "La estrella es un depredador carnívoro que se alimenta de erizos, piures, choritos y picorocos. Los humanos no la comemos, si no que la extraemos para decoración. Este organismo es capaz de regenerar sus extremidades en caso de perderlos, y en algunos casos pueden generarse estrellas nuevas de brazos perdidos.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        // showRecusos
        for(i = 0; i < parametrosRecursos.length; i++) {
          var newDiv = document.getElementById("fig-" + i);
          newDiv.style.display = "block";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Qué beneficios tiene la veda para los recursos del intermareal?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/recursos2.jpg');
    		texto.innerHTML = "La veda es un acto determinado por SERNAPESCA en Chile, la cual se inicia a través de observaciones científicas o de personas que trabajan en la extracción de recursos costeros, quienes se percatan que ya no existe gran abundancia de algún recurso, sea por fenómenos naturales o causa humana. Por esto, se prohíbe la captura o extracción de ese recurso en lugares específicos o toda la costa, con el fin de proteger a la especie. Cuando la especie vuelve a aumentar, las vedas se retiran y se permite nuevamente su extracción.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        // hideRecursos
        for(i = 0; i < 14; i++) {
          var newDiv = document.getElementById("fig-" + i);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Qué recursos relevantes se cultivan en Chile?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/recursos3.jpg');
	    	texto.innerHTML = "En general, se cultivan recursos para vender, como los locos, que se cultivan en las llamadas cuelgas que flotan en el mar por boyas, y se tardan cerca de 5 años en crecer lo suficiente para ser extraídos. También hay organismos que se pueden cultivar en tierra, en pequeñas piscinas que simulan el ambiente marino, como las navajuelas y los erizos. Un caso especial es el cochayuyo, que se puede plantar en estas piscinas, pero luego puede sembrarse en el mar.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        // hideRecursos
        for(i = 0; i < 14; i++) {
          var newDiv = document.getElementById("fig-" + i);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
	    	titulo.innerHTML = "¿Qué son las áreas de manejo y para qué sirven?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_intermareal/esquemas/recursos4.jpg');
	    	texto.innerHTML = "Las áreas de manejo fueron creadas para administrar y permitir que los pescadores artesanales extraigan y manejen los recursos del mar en forma ordenada y sustentable, con la asesoría técnica de una institución calificada para esto. Así se les permite exclusividad para la explotación de estos recursos en un sector determinado por las áreas de manejo.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        // hideRecursos
        for(i = 0; i < 14; i++) {
          var newDiv = document.getElementById("fig-" + i);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Recursos Relevantes";