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
titulo.innerHTML = "¿Qué recursos se pescan desde la plataforma continental?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/riquezas01.jpg');
texto.innerHTML = "La primera área dispone de una estrecha plataforma continental, desde Antofagasta hasta el cabo de Hornos. En esta, se extrae camarón nailon, langostino amarillo, langostino colorado, gamba y camarón navaja. Entre los peces, las redes de arrastre se emplean para la captura de merluza común, besugo, pejegallo, raya volantín, alfonsino, orange roughy, entre muchos otros.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

/*
* riquezas_03
*/
// parámetros de riquezas_03
var parametros = [
  {top: "2%", left:"10%", width: "9%", nombre: "01ostiondelnorte"},
  {top: "2%", left:"22%", width: "7%", nombre:"02chorito"},
  {top: "3.5%", left:"32%", width: "12%", nombre:"03truchadelnorte"},
  {top: "3.5%", left:"45%", width: "12%", nombre:"04salmonsalar"},
  {top: "3.5%", left:"58%", width: "12%", nombre:"05salmoncoho"},
  {top: "2%", left:"70%", width: "10%", nombre:"06ostradelpacifico"},
  {top: "2%", left:"82%", width: "10%", nombre:"07ostrachilena"}
 ];

// div de imagen que aparece tras apretar ícono interactivo.
var newDiv = document.createElement("div");
newDiv.id = "sombras";
newDiv.className = "sombras";
newDiv.style.position = "absolute";
newDiv.style.top = "29%";
newDiv.style.left = "39%";
newDiv.style.width = "50%";
imagen.appendChild(newDiv);
var newDivImg = document.createElement("img");
newDivImg.id = "sombras-img";
newDiv.appendChild(newDivImg);

function clickInteractivo() {
  var sombrasImg = document.getElementById("sombras-img");
  var nombre = this.parentElement.id.split("-").pop();
  sombrasImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/riquezas_03/lupas/"+nombre+".png";
}

// Creación de divs que contienen img, esto dentro del div "imagen".
for(i = 0; i < parametros.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.id = "fig-" + parametros[i]["nombre"];
  newDiv.className = "fig-" + parametros[i]["nombre"];
  newDiv.style.position = "absolute";
  newDiv.style.top = parametros[i]["top"];
  newDiv.style.left = parametros[i]["left"];
  newDiv.style.width = parametros[i]["width"];
  imagen.appendChild(newDiv);
  var newDivImg = document.createElement("img");
  newDivImg.style.cursor = "pointer";
  newDiv.appendChild(newDivImg);
  newDivImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/riquezas_03/menu/" + parametros[i]["nombre"] + ".png";
  newDivImg.onclick = clickInteractivo;
}

// show riquezas_03
for(i = 0; i < parametros.length; i++) {
  var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
  newDiv.style.display = "none";
}
var sombras = document.getElementById("sombras");
sombras.style.display = "none";

/*
* riquezas_05
*/
var parametros05 = [
  {top: "50%", left:"5%", width: "35%", nombre: "glow_ballena", texto: "Ballena: El auge de la caza de ballenas estuvo en dos zonas de Chile, una planta en Quintay al sur de Valparaíso, que ahora corresponde a un centro de investigación marina, y la caleta Chome en la región del Biobío, la cual se encuentra abandonada, pero cuidada por los lugareños. La suma de matanzas en estos dos lugares llegó a las 44 mil ballenas, algo de 10 a 12 ballenas por día. Ya se han cumplido 32 años desde que Chile como país decidió dejar de capturar ballenas."},
  {top: "5%", left:"40%", width: "20%", nombre: "glow_farfala", texto: "Fardela blanca (<i>Puffinus creatopus</i>): El 70% de la población mundial de esta especie anida en la Isla Mocha, región del Biobío. Era una costumbre de los isleños alimentarse del pollo de la fardela, ya que contenía gran cantidad de grasa y podía llegar a pesar hasta 8 kilos. Hoy en día se trabaja con la comunidad a través de CONAF y ministerio de medio ambiente, para erradicar esta costumbre."},
  {top: "45%", left:"75%", width: "25%", nombre: "glow_lobo", texto: "Lobo marino: Antiguamente se capturaba para extraerle el aceite del cuerpo. Este aceite servía para tratar la gripe, resfriados y cicatrización de heridas en la piel. En Chile se protege desde el año 1983."}
 ];
// Creación de divs que contienen img, esto dentro del div "imagen".
for(i = 0; i < parametros05.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.id = "fig-" + parametros05[i]["nombre"];
  newDiv.className = "fig-" + parametros05[i]["nombre"];
  newDiv.style.position = "absolute";
  newDiv.style.top = parametros05[i]["top"];
  newDiv.style.left = parametros05[i]["left"];
  newDiv.style.width = parametros05[i]["width"];
  imagen.appendChild(newDiv);
  var newDivImg = document.createElement("img");
  newDivImg.style.cursor = "pointer";
  newDiv.appendChild(newDivImg);
  newDivImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/riquezas_05/menu/" + parametros05[i]["nombre"] + ".png";
  newDivImg.onclick = clickInteractivo05;
}
function clickInteractivo05() {
  var nombre = this.parentElement.id.split("-").pop();
  for(i = 0; i < parametros05.length; i++) {
    if(nombre == parametros05[i]["nombre"]) {
      texto.innerHTML = parametros05[i]["texto"];
    }
  }
}
// show riquezas_05
for(i = 0; i < parametros05.length; i++) {
  var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
  newDiv.style.display = "none";
}

function nivelBarometro(element) {

	switch(element.getAttribute('id')) {

    	case 'numero-1':
        titulo.innerHTML = "¿Qué recursos se pescan desde la plataforma continental?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/riquezas01.jpg');
        texto.innerHTML = "La primera área dispone de una estrecha plataforma continental, desde Antofagasta hasta el cabo de Hornos. En esta, se extrae camarón nailon, langostino amarillo, langostino colorado, gamba y camarón navaja. Entre los peces, las redes de arrastre se emplean para la captura de merluza común, besugo, pejegallo, raya volantín, alfonsino, orange roughy, entre muchos otros.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        // show riquezas_03
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";
        
        // show riquezas_05
        for(i = 0; i < parametros05.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Qué recursos se pescan en el sur-austral de Chile?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/riquezas02.jpg');
    		texto.innerHTML = "La segunda área es el sur-austral de Chile, desde el Canal de Chacao, zona de canales y fiordos. Extraen la merluza de tres aletas, la merluza de cola y numerosas otras especies que se capturan en carácter de fauna acompañante, como el chancharro, cabrilla española, brótula, cojinoba austral y cojinoba moteada, todas ellas igualmente de gran valor y aceptación en los mercados internacionales.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        // show riquezas_03
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        // show riquezas_05
        for(i = 0; i < parametros05.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Dónde podemos encontrar cultivos en el océano costero?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/custom/riquezas_03/bg.jpg');
	    	texto.innerHTML = "El cultivo es una actividad para producir y engordar organismos animales o vegetales, simulando su hábitat o en su hábitat natural. En el mundo marino, estos organismos comúnmente son de importancia comercial, como peces, moluscos y crustáceos. En Chile se cultivan especies introducidas, es decir, traídas de otros países, como también especies endémicas, propias de Chile.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        // show riquezas_03
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "block";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "block";

        // show riquezas_05
        for(i = 0; i < parametros05.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Cuáles son las zonas más productivas de Chile?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/riquezas04.jpg');
	    	texto.innerHTML = "En el mar, se denominan zonas productivas a aquellas donde se encuentra gran cantidad de fitoplancton. Dado que el fitoplancton es el alimento de muchas especies marinas, su gran abundancia permite que se desarrolle gran diversidad de especies, incluidos por ejemplo, organismos de importancia pesquera. En la figura, el color rojo es señal de mayor productividad (mayor abundancia de fitoplancton). El color azul indica menor productividad. En Chile destacan dos zonas principales con alta productividad costera: Antofagasta y Concepción. Esto está asociado a la surgencia costera.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        // show riquezas_03
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        // show riquezas_05
        for(i = 0; i < parametros05.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Qué especies marinas son protegidas por el ser humano en Chile?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas//custom/riquezas_05/bg.jpg');
	    	texto.innerHTML = "Muchas de las especies que hoy protegemos en Chile, y denominamos especies en peligro de extinción, tiempo atrás eran explotadas para obtener materias primas. En estas, destacan el Lobo Marino Común (Valorado por su aceite corporal), la Fardela Blanca (Ave cuya carne era muy consumida por su alto contenido graso) y las Ballenas.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        // show riquezas_03
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        // show riquezas_05
        for(i = 0; i < parametros05.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros05[i]["nombre"]);
          newDiv.style.display = "block";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Riquezas del mar";