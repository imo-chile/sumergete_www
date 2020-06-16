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
titulo.innerHTML = "¿Quiénes son los seres vivos mas pequeños que habitan en el océano?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida01.jpg');
texto.innerHTML = "El grupo de organismos más pequeño en el océano es el llamado plancton, que son en su mayoría microscópicos y se caracterizan porque son arrastrados por las corrientes, sin poder nadar en contra de ellas. Se pueden encontrar desde la superficie del mar hasta algunos cientos de metros de profundidad. También se incluye dentro del plancton a organismos fácilmente visibles, como las medusas. El plancton se divide en: fitoplancton o plancton vegetal, zooplancton o plancton animal y bacterioplancton, bacterias y arqueas.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

// Parámetros para riquezas_03
var topAll = "2%";
var widthAll = "7%";
var parametros = [
  {top: topAll, left:"1%", width: "6%", nombre: "lobofino"},
  {top: topAll, left:"11%", width: "6%", nombre:"lobocomun"},
  {top: topAll, left:"21%", width: "6%", nombre:"chungungo"},
  {top: topAll, left:"31%", width: "9%", nombre:"orca"},
  {top: topAll, left:"41%", width: "9%", nombre:"franca"},
  {top: topAll, left:"51%", width: "9%", nombre:"sei"},
  {top: topAll, left:"61%", width: "9%", nombre:"cachalote"},
  {top: topAll, left:"71%", width: "9%", nombre:"jorobada"},
  {top: topAll, left:"81%", width: "9%", nombre:"azul"},
  {top: topAll, left:"91%", width: "9%", nombre:"delfin"}
 ];

// Creación de div que contiene imagen interactiva que aparece tras apretar un ícono.
var newDiv = document.createElement("div");
newDiv.id = "sombras";
newDiv.className = "sombras";
newDiv.style.position = "absolute";
newDiv.style.top = "3%";
newDiv.style.left = "16%";
newDiv.style.width = "70%";
imagen.appendChild(newDiv);
var newDivImg = document.createElement("img");
newDivImg.id = "sombras-img";
newDiv.appendChild(newDivImg);

function clickInteractivo() {
  var sombrasImg = document.getElementById("sombras-img");
  var sombraFrame = document.getElementById('sombras');
  var nombre = this.parentElement.id.split("-").pop();
  if(nombre == "jorobada" || nombre == "sei" || nombre == "cachalote" || nombre == "orca" || nombre == "delfin") {
    sombrasImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/vida_bajo_03/sombras/jorobada-sei-cachalote-orca-delfin.png";
  	sombraFrame.style.top = "3%";
		sombraFrame.style.left = "16%";
  }
  else {
    sombrasImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/vida_bajo_03/sombras/"+nombre+".png";
    if (nombre == 'azul') {
    	sombraFrame.style.top = "32%";
			sombraFrame.style.left = "6%";
    }
    else if (nombre == 'franca') {
    	sombraFrame.style.top = "75%";
			sombraFrame.style.left = "13%";
    }
    else {
    	sombraFrame.style.top = "3%";
			sombraFrame.style.left = "16%";
    }
    
  }
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
  newDivImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/vida_bajo_03/menu/" + parametros[i]["nombre"] + ".png";
  newDivImg.onclick = clickInteractivo;
}

// showVidabajo
for(i = 0; i < parametros.length; i++) {
  var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
  newDiv.style.display = "none";
}

var sombras = document.getElementById("sombras");
sombras.style.display = "none";


function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Quiénes son los seres vivos mas pequeños que habitan en el océano?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida01.jpg');
        texto.innerHTML = "El grupo que reúne a los organismos más pequeños en el océano es el llamado plancton, que son en su mayoría microscópicos y se caracterizan porque son arrastrados por las corrientes, sin poder nadar en contra de ellas. Se pueden encontrar desde la superficie del mar hasta cientos de metros de profundidad. También se incluye dentro del plancton a organismos fácilmente visibles, como las medusas. El plancton se divide en: fitoplancton o plancton vegetal, zooplancton o plancton animal y bacterioplancton, bacterias y arqueas.";
    		barra.style.width = barometroVars[0]["barra"];
    		ola.style.left = barometroVars[0]["ola"];

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Cómo viven los organismos bajo el mar?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida02.jpg');
    		texto.innerHTML = "Los organismos pueden vivir suspendidos en el agua (Pelágicos) o en relación al fondo del mar, con una escasa o ninguna capacidad de natación (Bentónicos). Por ejemplo, la mayoría de los peces pasan su vida suspendidos en el mar, o nadando libremente en este, mientras que otros, como el lenguado, no pueden alejarse del fondo marino, junto con las jaibas, esponjas y mantarrayas.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Existen mamíferos en el mar?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida03.jpg');
	    	texto.innerHTML = "Sí, dentro de los 5000 mamíferos del mundo, alrededor de 120 corresponden a mamíferos marinos, como especies que obtienen toda o al menos parte de su alimentación en el mar. Como mamíferos, tienen pulmones y necesitan oxígeno de la atmósfera, y aunque vivan todo el tiempo en el agua, necesitan asomarse a la superficie a respirar cada cierto rato. En Chile, se encuentran representantes en tres grupos: cetáceos, nutrias y pinnípedos.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "block";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "block";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Por qué los peces forman cardúmenes?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida04.jpg');
	    	texto.innerHTML = "Los peces se agrupan en bancos o cardúmenes por dos motivos principales: para protegerse y para migrar, minimizando las posibilidades de que los encuentre un depredador en la inmensidad del océano. Los cardúmenes son la formación más eficaz para viajar largas distancias. Como las aves en sus migraciones, los peces se mueven de manera sincronizada para viajar más rápido y gastar menos energía. Al ahorrar esfuerzo, los peces necesitan menos alimento y esto favorece su supervivencia.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-5':
        titulo.innerHTML = "¿Cuál es la relación trófica entre los organismos del océano costero?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/vida05.jpg');
	    	texto.innerHTML = "La base de la trama trófica en los océanos es el fitoplancton (microalgas), quien realiza fotosíntesis para crecer y reproducirse. Luego viene el zooplancton, de quien se alimenta la mayoría de los peces, incluso algunas ballenas. Existen peces más grandes que se alimentan de peces más pequeños, y grandes depredadores en el océano, como tiburones, y también representantes de los cefalópodos (pulpos, jibias y calamares), quienes se alimentan de peces. Finalmente, existen muchas bacterias en el océano, quienes consumen desechos orgánicos y liberan nutrientes para perpetuar el ciclo.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        // hideVidabajo
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }
        var sombras = document.getElementById("sombras");
        sombras.style.display = "none";

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Vida bajo el mar";