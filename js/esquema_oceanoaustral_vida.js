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
  titulo.innerHTML = "¿Qué es el krill?";
  imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/03_01.jpg');
  texto.innerHTML = "El krill es un grupo de invertebrados marinos, pertenecientes a los crustáceos eufáusidos. Existen más de 90 especies en el mundo. En el Océano Austral se encuentra la especie Euphausia superba, más conocido como el “krill antártico”. Esta especie puede alcanzar hasta 7 cm de longitud, se alimenta principalmente de fitoplancton en las aguas del Océano Austral y vive formando grandes agregaciones que pueden abarcar kilómetros. El krill, es un organismo clave en la cadena trófica antártica, es el principal alimento para algunas especies de mamíferos marinos, como por ejemplo la ballena jorobada, ballena azul y ballena minke, algunas especies de pingüinos y otros animales del continente antártico, de esta forma une los distintos niveles tróficos de este ecosistema. Debido a su alto valor nutricional, es considerado un recurso hidrobiológico y es extraído industrialmente de aguas antárticas por países como Noruega, Chile y China.";
  barra.style.width = barometroVars[0]["barra"];
  ola.style.left = barometroVars[0]["ola"];
  elementAnterior.style.color = "red";

function nivelBarometro(element) {

	switch(element.getAttribute('id').valueOf()) {

		case 'numero-1':
	    titulo.innerHTML = "¿Qué es el krill?";
      imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/03_01.jpg');
      texto.innerHTML = "El krill es un grupo de invertebrados marinos, pertenecientes a los crustáceos eufáusidos. Existen más de 90 especies en el mundo. En el Océano Austral se encuentra la especie Euphausia superba, más conocido como el “krill antártico”. Esta especie puede alcanzar hasta 7 cm de longitud, se alimenta principalmente de fitoplancton en las aguas del Océano Austral y vive formando grandes agregaciones que pueden abarcar kilómetros. El krill, es un organismo clave en la cadena trófica antártica, es el principal alimento para algunas especies de mamíferos marinos, como por ejemplo la ballena jorobada, ballena azul y ballena minke, algunas especies de pingüinos y otros animales del continente antártico, de esta forma une los distintos niveles tróficos de este ecosistema. Debido a su alto valor nutricional, es considerado un recurso hidrobiológico y es extraído industrialmente de aguas antárticas por países como Noruega, Chile y China.";
      barra.style.width = barometroVars[0]["barra"];
      ola.style.left = barometroVars[0]["ola"];
      elementAnterior.style.color = "red";

	    elementAnterior.style.color = "white";
	    elementAnterior = element;
	    element.style.color = "red";
    break;

  	case 'numero-2':
  		titulo.innerHTML = "¿Hay algas en un océano tan frío?";
  		imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/03_02.jpg');
  		texto.innerHTML = "El continente antártico registra las temperaturas más bajas del planeta y durante el invierno la duración del día es muy breve. Como la vida de las macroalgas depende del Sol, se podría pensar que en el Océano Austral no hay algas que puedan sobrevivir. Sin embargo, sí hay y de muchas especies diferentes, tanto en la Península Antártica e islas adyacentes, como en el resto del continente. Las algas que se pueden encontrar, son tanto del grupo de algas pardas, rojas y verdes, y dependiendo de sus características fisiológicas y morfológicas pueden distribuirse en la zona intermareal o submareal. Existen incluso algas endémicas, o exclusivas de la Antártica, por ejemplo las algas pardas Himantothallus grandifolius y Ascoseira mirabilis, las cuales llegan a formar verdaderos bosques submarinos que sirven de hábitat para una gran variedad de organismos que encuentran en ellas refugio y alimento.";
  		barra.style.width = barometroVars[1]["barra"];
      ola.style.left = barometroVars[1]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-3':
    	titulo.innerHTML = "¿Qué son los peces de hielo?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/03_03.jpg');
    	texto.innerHTML = "Se llama así a un grupo de peces pertenecientes a la familia Channichthyidae, habitan el Océano Austral y algunas especies también habitan aguas del sudeste sudamericano. Son peces que miden cerca de 70 cm de longitud, tienen la cabeza grande, semejante a la de los lagartos y habitan hasta los 700 metros. La característica más interesante es que no poseen eritrocitos o hemoglobina en su sistema circulatorio, por lo que el oxígeno es transportado en bajas cantidades directamente diluido en el plasma (transparente), lo que es compensando con un mayor volumen de plasma y con un corazón más grande que el de otros peces que sí poseen hemoglobina. Los peces de hielo al no tener sangre roja, sino que transparente, su cuerpo completo tiene un grado de transparencia. Actualmente se han descubierto más de 15 especies y su conocimiento aún es limitado.";
  		barra.style.width = barometroVars[2]["barra"];
      ola.style.left = barometroVars[2]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

  	case 'numero-4':
      titulo.innerHTML = "¿Qué relación existe entre la temperatura del agua y el tamaño de las especies?";
    	imagen.children[0].setAttribute('src', '/../imagenes/sala_oceanoaustral/esquemas/03_04.jpg');
    	texto.innerHTML = "Los representantes de ciertas especies que habitan el Océano Austral tienen un tamaño diferente a especies similares en otras latitudes; en aguas antárticas pueden desarrollar gigantismo o enanismo. Por ejemplo, especies de copépodos, anfípodos, isópodos y pignogónidos han desarrollado gigantismo. Es decir, son mucho más grandes que los que habitan en otros sitios. Por el contrario, especies de bivalvos, peces y gastrópodos desarrollan enanismo, es decir, tienen tamaños menores comparativamente a otras latitudes. Actualmente no existe una comprensión total acerca de este fenómeno, pero se han propuesto hipótesis para ambos casos: se propone que la gran disponibilidad de oxígeno disuelto en el agua, sumado a las bajas temperaturas, podrían influir en el gigantismo. Por otra parte, que las bajas temperaturas podrían limitar la capacidad de los moluscos para acumular carbonato de calcio y generar conchas de mayor tamaño. Este aspecto de la biología antártica continúa en estudio. ";
  		barra.style.width = barometroVars[3]["barra"];
      ola.style.left = barometroVars[3]["ola"];

      elementAnterior.style.color = "white";
      elementAnterior = element;
      element.style.color = "red";
  	break;

	}
}

document.getElementById("etiqueta-texto").innerHTML = "Vida Bajo el Hielo";