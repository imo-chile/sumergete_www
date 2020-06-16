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
  titulo.innerHTML = "¿Qué elementos son primordiales para la vida en el océano?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_01.jpg');
  texto.innerHTML = "Todas las formas de vida en la tierra (seres humanos, peces, ballenas, bacterias, etc.) están constituidas de moléculas orgánicas que les permiten construir todas las estructuras de su cuerpo, tener energía para moverse y reproducirse. Los 4 principales tipos de compuestos orgánicos son: las proteínas (estructura), los lípidos (energía), los glúcidos o carbohidratos (energía) y los ácidos nucleicos información genética ADN, ARN y energía, ATP). Estas moléculas están constituidas por elementos químicos, siendo los principales el carbono (C), el hidrógeno (H), el oxígeno (O), el nitrógeno (N), el fósforo (P) y el azufre (S). El carbono, el hidrogeno y el oxígeno se encuentran en todas las moléculas de un organismo. El nitrógeno es primordial para construir las proteínas y el ADN; y el fósforo es requerido por los organismos para utilizar la energía y también para formar el ADN.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	  titulo.innerHTML = "¿Qué elementos son primordiales para la vida en el océano?";
	  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_01.jpg');
	  texto.innerHTML = "Todas las formas de vida en la tierra (seres humanos, peces, ballenas, bacterias, etc.) están constituidas de moléculas orgánicas que les permiten construir todas las estructuras de su cuerpo, tener energía para moverse y reproducirse. Los 4 principales tipos de compuestos orgánicos son: las proteínas (estructura), los lípidos (energía), los glúcidos o carbohidratos (energía) y los ácidos nucleicos información genética ADN, ARN y energía, ATP). Estas moléculas están constituidas por elementos químicos, siendo los principales el carbono (C), el hidrógeno (H), el oxígeno (O), el nitrógeno (N), el fósforo (P) y el azufre (S). El carbono, el hidrogeno y el oxígeno se encuentran en todas las moléculas de un organismo. El nitrógeno es primordial para construir las proteínas y el ADN; y el fósforo es requerido por los organismos para utilizar la energía y también para formar el ADN.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Cuál es la importancia del Carbono en el océano?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_02.jpg');
  		texto.innerHTML = "El CO<sub>2</sub>(inorgánico) es un gas atmosférico de efecto invernadero que ayuda a mantener la temperatura adecuada para la vida. El CO<sub>2</sub> ingresa al  océano  y se diluye, siendo utilizado por los organismos fotosintéticos en la  producción de  oxígeno y carbohidratos. Luego, estos organismos (ej: fitoplancton) son consumidos por organismos que usan esa energía para crecimiento y reproducción. Cuando estos organismos producen fecas o mueren, el carbono (C) puede ser reciclado por bacterias y hongos, o  hundirse formando sedimentos marinos. Allí, el C es enterrado y, durante millones de años, puede participar en la formación de rocas o transformarse en combustible fósil, como el petróleo. El C en las rocas es reciclado en el magma y vuelve a la atmósfera durante erupciones volcánicas. Mientras que en  el sedimento, la materia orgánica puede ser reciclada por bacterias productoras de CO<sub>2</sub> CH<sub>4</sub>.Esos gases pueden volver a la atmósfera a través de procesos físicos como la surgencia o mantenerse enterrados como gas natural.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Cómo es el ciclo del Nitrógeno en los océanos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_03.jpg');
    	texto.innerHTML = "En el océano hay dos fuentes principales de nitrógeno. Por un lado, está el nitrógeno de la atmósfera en forma de gas, N<sub>2</sub>, que ingresa al océano por medio de la fijación que realizan bacterias marinas fotosintéticas (cianobacterias). Otra forma de obtenerlo es a través del reciclaje de materia orgánica en el océano por parte de los microorganismos. De ambas maneras el nitrógeno queda disponible, en forma de nitrato (NO<sub>3</sub><sup>-</sup>), nitrito (NO<sub>2</sub><sup>-</sup>) o amonio (NH<sub>4</sub><sup>+</sup>), para ser usado por el fitoplancton que luego es consumido por el zooplancton, peces, mamíferos marinos y otros organismos. Posteriormente, los consumidores producen fecas que, en conjunto con la materia orgánica generada por los organismos muertos, liberan compuestos nitrogenados al ambiente. Estos compuestos son reciclados por bacterias, quedando disponibles para ser utilizados nuevamente por el fitoplancton o bien, se convierte en N<sub>2</sub> gaseoso que vuelve a la atmosfera, para dar inicio a un nuevo ciclo.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Cuál es el rol del fósforo que llega a los Océanos?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_04.jpg');
    	texto.innerHTML = "El Fósforo (P) es un nutriente limitante, ya que, aunque su proporción en la materia viva es relativamente pequeña, cumple un rol fundamental al formar parte de los tejidos blandos, de los ácidos nucleicos como ADN, ARN y de muchas enzimas (ATP, ADP, AMP) que participan de procesos como fotosíntesis y respiración celular. El P no forma compuestos gaseosos que permitan un intercambio océano-atmósfera, llega al océano mediante el aporte de lluvia y ríos, y vuelve desde el océano a la tierra mediante el excremento producido por aves marinas y/o levantamiento geológico del fondo marino. Un proceso que puede tomar miles de años. Desde que entra al océano, el P es inicialmente integrado por organismos fotosintéticos como el fitoplancton (microalgas), quienes son consumidos por otros organismos (el P entra así en la red trófica). El P vuelve al agua cuando el organismo que lo ha incorporado muere o excreta, pasando por un proceso de descomposición bacteriana. Así queda disponible para ser nuevamente utilizado por el fitoplancton.";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-5':
      titulo.innerHTML = "¿A qué nos referimos con limitación por hierro en el océano?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoabierto/esquemas/05_05.jpg');
    	texto.innerHTML = "En algunas partes del océano existen suficientes nutrientes disponibles para el fitoplancton, pero aun así se encuentra en baja abundancia. Esto, dada la falta de un elemento clave: el hierro (Fe),  micronutriente esencial para la fotosíntesis  por ende para el crecimiento del fitoplancton. El Fe llega a los océanos por medio del polvo atmosférico desde zonas áridas y por surgencia, por lo que en zonas marinas alejadas de los continentes no hay contacto directo, haciendo que la producción de fitoplancton sea limitada. Actualmente hay un debate mundial sobre si es factible fertilizar con Fe zonas con limitación. Quienes defienden la idea, aseguran que podría haber mayor productividad, que se traduciría en mayor secuestro del CO<sub>2</sub> atmosférico (mitigando los efectos del calentamiento global). Sin embargo, un grupo importante de científicos cree que alterar el ecosistema puede traer consecuencias difíciles de predecir, probablemente negativas.";
  		barra.style.width = barometroVars[4]["barra"];
      ola.style.left = barometroVars[4]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Ciclos";