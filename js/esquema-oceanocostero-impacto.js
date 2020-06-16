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

// parámetros de nosotros_05
var parametros = [
  {top: "2%", left:"16%", width: "30%", nombre: "pascua"},
  {top: "2%", left:"45%", width: "30%", nombre:"nazca"},
  {top: "57%", left:"47%", width: "30%", nombre:"magallanes"}
 ];

 // div de modal que aparece tras apretar ícono interactivo.
var newDiv = document.createElement("div");
newDiv.classList.add("btn-detalle");
newDiv.id = "modal";
document.body.appendChild(newDiv);
//document.getElementsByTagName("esquema-intermareal-fondo")[0].appendChild(newDiv);
var newDiv2 = document.createElement("div");
newDiv2.style.position = "absolute";
newDiv2.style.top = "10%"
newDiv2.style.left = "20%";
newDiv2.style.width = "60%";
newDiv.appendChild(newDiv2);
var newDivImg = document.createElement("img");
newDivImg.id = "modal-img";
newDiv2.appendChild(newDivImg);

var modal = document.getElementById("modal");
function clickInteractivo() {
  var modalImg = document.getElementById("modal-img");
  var nombre = this.parentElement.id.split("-").pop();
  modal.style.display = "block";
  modalImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/nosotros_05/"+nombre+"_pop.png";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

// Creación de divs que contienen img, esto dentro del div "imagen".
for(i = 0; i < parametros.length; i++) {
  var newDiv = document.createElement("div");
  newDiv.style.display = "none";
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
  newDivImg.src = "/../imagenes/sala_oceanocostero/esquemas/custom/nosotros_05/" + parametros[i]["nombre"] + ".png";
  newDivImg.onclick = clickInteractivo;
}

// Elementos iniciales, es decir de barómetro nivel 1.
titulo.innerHTML = "¿Es el cambio climático efecto de la actividad humana?";
imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros01.jpg');
texto.innerHTML = "El clima de la Tierra ha cambiado muchas veces durante su existencia, con ciclos naturales que se han llevado a cabo por millones de años. Sin embargo, los cambios que se han registrado durante los últimos 200 años están directamente relacionados con la actividad humana y la era industrial. Desde el descubrimiento del petróleo, el ser humano ha quemado toneladas de este combustible fósil, lo que ha llevado a un aumento drástico de la cantidad de dióxido de carbono (CO<sub>2</sub>) en la atmósfera. Este gas absorbe el calor del Sol y evita que salga de la atmósfera, es lo que se conoce como efecto invernadero. Por ende, la atmósfera, y también el océano, se calientan y cambian los patrones de viento y corrientes, respectivamente.";
barra.style.width = barometroVars[0]["barra"];
ola.style.left = barometroVars[0]["ola"];
elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

    	case 'numero-1':
        titulo.innerHTML = "¿Es el cambio climático efecto de la actividad humana?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros01.jpg');
        texto.innerHTML = "El clima de la Tierra ha cambiado muchas veces durante su existencia, con ciclos naturales que se han llevado a cabo por millones de años. Sin embargo, los cambios que se han registrado durante los últimos 200 años están directamente relacionados con la actividad humana y la era industrial. Desde el descubrimiento del petróleo, el ser humano ha quemado toneladas de este combustible fósil, lo que ha llevado a un aumento drástico de la cantidad de dióxido de carbono (CO<sub>2</sub>) en la atmósfera. Este gas absorbe el calor del Sol y evita que salga de la atmósfera, es lo que se conoce como efecto invernadero. Por ende, la atmósfera, y también el océano, se calientan y cambian los patrones de viento y corrientes, respectivamente.";
    		barra.style.width = barometroVars[0]["barra"];
        ola.style.left = barometroVars[0]["ola"];

        // hide nosotros_05
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-2':
    		titulo.innerHTML = "¿Qué es la acidificación del océano y cómo afecta a los organismos?";
    		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros02.jpg');
    		texto.innerHTML = "La acidificación de océano se refiere al proceso en el cual el océano se vuelve más ácido, disminuyendo su pH. Esto está ocurriendo actualmente por la quema de combustibles fósiles, que provoca un aumento importante de CO<sub>2</sub> en la atmósfera. Este CO<sub>2</sub> ingresa al océano, reacciona con el agua de mar y se liberan hidrógenos (H+). Mientras más H+ disueltos en el agua, menor es el pH. La acidificación es algo negativo para los organismos marinos que forman sus conchas de carbonato de calcio (CO<sub>3</sub>-), ya que este es un compuesto muy sensible al pH. Si el pH disminuye, el carbonato de calcio se disuelve, por lo que los organismos que lo utilizan se descalcifican o no logran crecer lo suficiente para sobrevivir, como los corales y caracoles.";
    		barra.style.width = barometroVars[1]["barra"];
        ola.style.left = barometroVars[1]["ola"];

        // hide nosotros_05
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-3':
	    	titulo.innerHTML = "¿Qué actividades realiza el ser humano en el océano costero?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros03.jpg');
	    	texto.innerHTML = "La principal actividad es la pesca artesanal, los métodos de pesca varían de acuerdo a la región, la especie explotada y la capacidad económica y tecnológica de los pescadores. Como uso de recreo o pasatiempo se realiza la pesca deportiva, u otras actividades como el surf y windsurf. Bajo el mar se realiza el buceo deportivo, para conocer el fondo marino, y el buceo científico, que sirve para estudiar cómo crecen, reproducen e interactúan las diferentes especies que habitan en el océano.";
    		barra.style.width = barometroVars[2]["barra"];
        ola.style.left = barometroVars[2]["ola"];

        // hide nosotros_05
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;

    	case 'numero-4':
        titulo.innerHTML = "¿Afectan las actividades terrestres en el océano costero?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros04.jpg');
	    	texto.innerHTML = "Sí, toda actividad que realiza el ser humano en el continente, impactará de alguna forma en el océano. A través de los ríos, llegan hasta la costa los desechos que producimos en el hogar, como también los desechos agrícolas e industriales. Esta gran cantidad de nutrientes y materia orgánica no alcanzan a ser asimilados por el ambiente marino, causando eutroficación. Esto implica un aumento explosivo del fitoplancton, acompañado por un aumento excesivo de la actividad bacteriana. Como resultado, animales marinos enferman y mueren, y disminuye el oxígeno disuelto en el agua, ya que esta materia orgánica requiere una alta demanda de oxígeno para su descomposición.";
    		barra.style.width = barometroVars[3]["barra"];
        ola.style.left = barometroVars[3]["ola"];

        // hide nosotros_05
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "none"
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
/*
    	case 'numero-5':
        titulo.innerHTML = "¿Cómo el ser humano protege el océano?";
	    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanocostero/esquemas/nosotros05_base.jpg');
	    	texto.innerHTML = "El gobierno chileno forma categorías para proteger áreas marinas, con diferentes objetivos. Estas categorías se dividen en parques marinos, para proteger la biodiversidad; reservas marinas, para conservar y restaurar especies y hábitats; o áreas protegidas, para mantener los ecosistemas naturales y usar los recursos naturales de forma sostenible.";
    		barra.style.width = barometroVars[4]["barra"];
        ola.style.left = barometroVars[4]["ola"];

        // hide nosotros_05
        for(i = 0; i < parametros.length; i++) {
          var newDiv = document.getElementById("fig-" + parametros[i]["nombre"]);
          newDiv.style.display = "block";
        }

        elementAnterior.style.color = "white";
        elementAnterior = element;
        element.style.color = "red";
    	break;
      */
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Nosotros en el océano";