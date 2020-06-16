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

// Elementos iniciales, es decir de barómetro nivel 1.
  titulo.innerHTML = "¿Por qué en los fiordos existe una elevada biodiversidad?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_01.jpg');
  texto.innerHTML = "La compleja forma de la costa y la mezcla de distintos tipos de agua en la zona de los fiordos permite que existan hábitats muy diferentes entre sí. Además, durante la última glaciación, esta zona representó el refugio para muchas especies que habitaban más al sur y que tuvieron que subir a estas áreas porque su hábitat se congeló. La combinación de estos dos factores dan como resultado una alta riqueza de especies en  los fiordos. Sin embargo, ¡es una de las regiones marinas menos conocida del mundo!. ";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Por qué en los fiordos existe una elevada biodiversidad?";
			imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_01.jpg');
  		texto.innerHTML = "La compleja forma de la costa y la mezcla de distintos tipos de agua en la zona de los fiordos permite que existan hábitats muy diferentes entre sí. Además, durante la última glaciación, esta zona representó el refugio para muchas especies que habitaban más al sur y que tuvieron que subir a estas áreas porque su hábitat se congeló. La combinación de estos dos factores dan como resultado una alta riqueza de especies en  los fiordos. Sin embargo, ¡es una de las regiones marinas menos conocida del mundo!.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Dónde viven los organismos que habitan los fiordos?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_02.jpg');
  		texto.innerHTML = "Los organismos marinos que habitan los fiordos pueden vivir asociados a la columna de agua o asociados al fondo marino. Los que viven en la columna de agua conforman la comunidad (conjunto de poblaciones que cohabitan en un lugar y tiempo determinados) pelágica. Si es que estos organismos flotan en el agua se les llama plancton, y forman parte de la comunidad planctónica. Si se mueven en la columna de agua son parte del necton. Aquellos que viven asociados al fondo marino, ya sea sobre o bajo éste, forman parte del bentos o comunidad bentónica.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo es la distribución y abundancia de las comunidades planctónicas en los fiordos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_03.jpg');
    	texto.innerHTML = "Los organismos que habitan en la columna de agua son muy sensibles a las características de su hábitat. Si el ambiente los favorece van a reproducirse más y más rápido, y van a ser abundantes dentro de la comunidad. Si, por el contrario, el ambiente no los beneficia, van a disminuir en número. Es por eso que un ambiente altamente variable, como los fiordos, va a presentar comunidades planctónicas diferentes en distintas épocas del año y en distintas zonas. Por ejemplo, en primavera-verano, la producción primaria (crecimiento del fitoplancton) es muy alta y hay dominancia de organismos pertenecientes a las diatomeas y dinoflagelados. Mientras que en invierno disminuye la abundancia de los organismos fotosintéticos porque disminuye la radiación solar, y hay un cambio en la composición de la comunidad hacia pequeños flagelados.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cómo se compone la comunidad bentónica dentro de un fiordo?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_04.jpg');
    	texto.innerHTML = "La comunidad bentónica (organismos que habitan asociados al fondo marino) de los fiordos, se encuentra dominada por una gran diversidad de animales invertebrados. En las paredes y fondos de los canales y fiordos, adheridos al sustrato, son muy comunes las especies bioingenieras. Estas especies se caracterizan por ser capaces de crear hábitats para otras especies, incluso utilizando para ello su propia estructura morfológica. Así, ofreciendo también protección.  Entre estas, se encuentran mitílidos como Aulacomya atra y Mytilus chilensis  forman extensas bandas en la zona superior de los fiordos. También se encuentran bosques de macroalgas como Durvillaea antarctica y Lessonia nigrescens. En los sedimentos del fondo es común encontrar animales carroñeros y detritívoros, como poliquetos y pepinos de mar, que se alimentan de la materia orgánica que se deposita desde la columna de agua. También se ha encontrado una gran cobertura del coral rojo Errina antárctica.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
/*
  	case 'numero-5':
      titulo.innerHTML = "¿Cuál es el rol de la comunidad fitoplanctónica de los fiordos en el escenario de cambio global? O ¿Por qué es importante protegerla?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_canalesyfiordos/esquemas/02_05.jpg');
    	texto.innerHTML = "Los fiordos son ecosistemas muy productivos. Esto implica que la comunidad fitoplanctónica está secuestrando importantes cantidades de CO2 desde la atmósfera para realizar la fotosíntesis. El CO2 es un gas de efecto invernadero, el mismo que liberamos en grandes cantidades por la quema de combustibles fósiles, y que se está acumulando en la atmósfera y provocando el calentamiento de la tierra. Por lo tanto, la comunidad fitoplanctónica de los fiordos podría estar ayudando a palear los efecto del cambio climático.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;
*/
	}
}

document.getElementById("etiqueta-texto").innerHTML = "Seres Vivos";